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
  return process.env.MOCK_CLOVER !== "false" || !process.env.CLOVER_MERCHANT_ID || !process.env.CLOVER_ACCESS_TOKEN;
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

export async function createCloverOrder(payload: unknown) {
  const config = getCloverConfig();

  if (config.mock) {
    return createMockOrder();
  }

  // The live implementation should map cart item IDs/modifiers to Clover item IDs and create an order server-side.
  return {
    orderId: `clover_placeholder_${Date.now()}`,
    orderReference: `GB-${Date.now().toString().slice(-6)}`,
    status: "live-placeholder",
    checkoutUrl: "",
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

  // Use Clover Ecommerce hosted checkout/payment-link flow here. Never collect raw card data on this site.
  return {
    checkoutUrl: "",
    orderReference: `GB-${Date.now().toString().slice(-6)}`,
    mock: false,
    payloadReceived: Boolean(payload),
    status: "live-checkout-placeholder"
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
