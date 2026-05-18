import { randomUUID } from "node:crypto";
import crypto from "node:crypto";
import { getEnv, redactConfig, requireServerSecret } from "./secrets.js";
import { safeLog } from "./security.js";

export type CloverEnv = "sandbox" | "production";

export type CloverConfig = {
  env: CloverEnv;
  merchantId: string;
  accessToken: string;
  ecommercePublicKey: string;
  ecommercePrivateKey: string;
  apiBaseUrl: string;
  ecommerceApiBaseUrl: string;
  webhookSecret: string;
  mock: boolean;
};

export function isMockClover() {
  return (
    process.env.MOCK_CLOVER !== "false" ||
    !process.env.CLOVER_MERCHANT_ID ||
    (!process.env.CLOVER_ACCESS_TOKEN && !process.env.CLOVER_ECOMMERCE_PRIVATE_KEY)
  );
}

export function getCloverConfig(): CloverConfig {
  const env: CloverEnv = getEnv("CLOVER_ENV", "sandbox") === "production" ? "production" : "sandbox";
  const apiBaseUrl =
    getEnv("CLOVER_API_BASE_URL") || (env === "production" ? "https://api.clover.com" : "https://apisandbox.dev.clover.com");
  const ecommerceApiBaseUrl =
    getEnv("CLOVER_ECOMMERCE_API_BASE_URL") ||
    (env === "production" ? "https://scl.clover.com" : "https://scl-sandbox.dev.clover.com");

  const config = {
    env,
    merchantId: getEnv("CLOVER_MERCHANT_ID"),
    accessToken: getEnv("CLOVER_ACCESS_TOKEN"),
    ecommercePublicKey: getEnv("CLOVER_ECOMMERCE_PUBLIC_KEY"),
    ecommercePrivateKey: getEnv("CLOVER_ECOMMERCE_PRIVATE_KEY"),
    apiBaseUrl,
    ecommerceApiBaseUrl,
    webhookSecret: getEnv("CLOVER_WEBHOOK_SECRET"),
    mock: isMockClover()
  };

  safeLog("clover:config", redactConfig({ ...config, CLOVER_ACCESS_TOKEN: config.accessToken, CLOVER_ECOMMERCE_PRIVATE_KEY: config.ecommercePrivateKey }));
  return config;
}

export async function cloverFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const config = getCloverConfig();

  if (config.mock) {
    throw new Error("Clover live fetch attempted while MOCK_CLOVER is enabled or credentials are missing.");
  }

  const response = await fetch(`${config.apiBaseUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${requireServerSecret("CLOVER_ACCESS_TOKEN")}`,
      "Content-Type": "application/json",
      ...(init.headers || {})
    }
  });

  if (!response.ok) {
    throw new Error(`Clover request failed with ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function createMockOrder() {
  const orderReference = `GB-${randomUUID().slice(0, 8).toUpperCase()}`;

  return {
    orderId: `mock_${Date.now()}`,
    orderReference,
    status: "mock-confirmed",
    checkoutUrl: "",
    mock: true
  };
}

export async function getMenuItems() {
  const config = getCloverConfig();

  if (config.mock) {
    return {
      items: [],
      mock: true
    };
  }

  return cloverFetch(`/v3/merchants/${config.merchantId}/items`);
}

export async function calculateCloverOrder(payload: unknown) {
  const config = getCloverConfig();

  if (config.mock) {
    return {
      subtotal: 0,
      tax: 0,
      total: 0,
      mock: true
    };
  }

  // Add Clover order pricing and tax calculation here after menu/item IDs are mapped.
  return {
    subtotal: 0,
    tax: 0,
    total: 0,
    payload,
    mock: false,
    status: "live-placeholder"
  };
}

type HostedCheckoutCartItem = {
  name: string;
  quantity: number;
  priceCents?: number;
  modifiers?: Array<{ name: string; option: string }>;
  notes?: string;
};

type HostedCheckoutInput = {
  cartItems: HostedCheckoutCartItem[];
  customer: {
    name: string;
    phone: string;
    email: string;
  };
  pickupTime?: string;
  notes?: string;
};

function isCheckoutInput(payload: unknown): payload is HostedCheckoutInput {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const candidate = payload as Partial<HostedCheckoutInput>;
  return Array.isArray(candidate.cartItems) && typeof candidate.customer === "object" && Boolean(candidate.customer);
}

function splitCustomerName(name: string) {
  const parts = name.trim().split(/\s+/);
  const firstName = parts.shift() || name.trim();
  const lastName = parts.join(" ");

  return {
    firstName,
    lastName: lastName || firstName
  };
}

function buildLineItemNote(item: HostedCheckoutCartItem, payload: HostedCheckoutInput) {
  const notes = [
    item.modifiers?.length ? item.modifiers.map((modifier) => `${modifier.name}: ${modifier.option}`).join(", ") : "",
    item.notes,
    payload.pickupTime ? `Pickup: ${payload.pickupTime}` : "",
    payload.notes ? `Order notes: ${payload.notes}` : ""
  ].filter(Boolean);

  return notes.join(" | ").slice(0, 500);
}

function buildHostedCheckoutPayload(payload: unknown) {
  if (!isCheckoutInput(payload)) {
    throw new Error("Invalid checkout payload.");
  }

  const { firstName, lastName } = splitCustomerName(payload.customer.name);
  const taxRate = Number(getEnv("CLOVER_HOSTED_CHECKOUT_TAX_RATE"));
  const taxName = getEnv("CLOVER_HOSTED_CHECKOUT_TAX_NAME", "Sales tax");
  const lineItems = payload.cartItems.map((item) => {
    if (!item.priceCents || item.priceCents <= 0) {
      throw new Error(`Missing checkout price for ${item.name}.`);
    }

    return {
      name: item.name,
      price: item.priceCents,
      unitQty: item.quantity,
      note: buildLineItemNote(item, payload),
      ...(Number.isInteger(taxRate) && taxRate > 0
        ? {
            taxRates: [
              {
                name: taxName,
                rate: taxRate
              }
            ]
          }
        : {})
    };
  });

  const pageConfigUuid = getEnv("CLOVER_HOSTED_CHECKOUT_PAGE_CONFIG_UUID");

  return {
    ...(pageConfigUuid ? { pageConfigUuid } : {}),
    customer: {
      firstName,
      lastName,
      email: payload.customer.email,
      phoneNumber: payload.customer.phone
    },
    tips: {
      enabled: true
    },
    shoppingCart: {
      lineItems
    }
  };
}

export async function createCloverOrder(payload: unknown) {
  const config = getCloverConfig();

  if (config.mock) {
    return createMockOrder();
  }

  return createCheckoutSession(payload);
}

export async function createCateringCloverTicket(payload: unknown) {
  const config = getCloverConfig();

  if (config.mock) {
    const orderReference = `GB-CAT-${randomUUID().slice(0, 8).toUpperCase()}`;

    return {
      ticketId: `mock_catering_${Date.now()}`,
      orderReference,
      status: "mock-catering-ticket",
      mock: true
    };
  }

  // The live implementation should create a Clover order or printable kitchen ticket
  // with catering survey details stored in server-side order notes.
  return {
    ticketId: `clover_catering_placeholder_${Date.now()}`,
    orderReference: `GB-CAT-${Date.now().toString().slice(-6)}`,
    status: "live-catering-placeholder",
    mock: false,
    payloadReceived: Boolean(payload)
  };
}

export async function createCheckoutSession(payload: unknown) {
  const config = getCloverConfig();

  if (config.mock) {
    const order = await createMockOrder();
    return {
      checkoutUrl: "",
      orderReference: order.orderReference,
      mock: true
    };
  }

  const checkoutPayload = buildHostedCheckoutPayload(payload);
  const ecommerceToken = config.ecommercePrivateKey || config.accessToken;

  if (!ecommerceToken) {
    throw new Error("Missing Clover Ecommerce private token.");
  }

  const response = await fetch(`${config.apiBaseUrl}/invoicingcheckoutservice/v1/checkouts`, {
    method: "POST",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${ecommerceToken}`,
      "content-type": "application/json",
      "X-Clover-Merchant-Id": config.merchantId
    },
    body: JSON.stringify(checkoutPayload)
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    safeLog("clover:checkout:error", { status: response.status, body: body.slice(0, 400) });
    throw new Error(`Clover checkout request failed with ${response.status}`);
  }

  const checkout = (await response.json()) as {
    href?: string;
    checkoutSessionId?: string;
    id?: string;
  };
  const orderReference = `GB-${Date.now().toString().slice(-6)}`;

  return {
    orderId: checkout.checkoutSessionId || checkout.id || orderReference,
    checkoutUrl: checkout.href || "",
    orderReference,
    mock: false,
    status: "checkout-created"
  };
}

export async function createPaymentLinkOrHostedCheckout(payload: unknown) {
  return createCheckoutSession(payload);
}

export function verifyCloverWebhookSignature(rawBody: string, signature: string | undefined) {
  const config = getCloverConfig();

  if (config.mock || !config.webhookSecret) {
    return true;
  }

  const expected = crypto.createHmac("sha256", config.webhookSecret).update(rawBody).digest("hex");
  if (!signature || signature.length !== expected.length) {
    return false;
  }

  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

export async function handleCloverWebhook(rawBody: string, signature?: string) {
  if (!verifyCloverWebhookSignature(rawBody, signature)) {
    return {
      ok: false,
      status: "invalid-signature"
    };
  }

  const payload = rawBody ? (JSON.parse(rawBody) as Record<string, unknown>) : {};

  // Persist or route Clover webhook events here once a database/queue is introduced.
  safeLog("clover:webhook", {
    eventType: payload.type || payload.event || "unknown",
    mock: isMockClover()
  });

  return {
    ok: true,
    status: "received",
    mock: isMockClover()
  };
}
