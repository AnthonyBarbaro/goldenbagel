import { randomUUID } from "node:crypto";
import crypto from "node:crypto";
import { getEnv, redactConfig, requireServerSecret } from "./secrets.js";
import { safeLog } from "./security.js";
import { isOnlineModifierGroup, isQuantityModifierGroup, MAX_MODIFIER_QUANTITY } from "./menuOptions.js";

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
    !process.env.CLOVER_ECOMMERCE_PRIVATE_KEY
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

  if (process.env.MOCK_CLOVER !== "false" || !config.merchantId || !config.accessToken) {
    throw new Error("Clover live fetch attempted while MOCK_CLOVER is enabled or credentials are missing.");
  }

  const response = await fetch(`${config.apiBaseUrl}${path}`, {
    ...init,
    signal: init.signal || AbortSignal.timeout(8_000),
    headers: {
      Authorization: `Bearer ${requireServerSecret("CLOVER_ACCESS_TOKEN")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "GoldenBagelWebsite/1.0",
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

  if (process.env.MOCK_CLOVER !== "false" || !config.merchantId || !config.accessToken) {
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
  id: string;
  cloverItemId?: string;
  name: string;
  quantity: number;
  priceCents?: number;
  modifiers?: Array<{
    id?: string;
    groupId?: string;
    name: string;
    option: string;
    priceCents?: number;
    quantity?: number;
  }>;
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

type CloverCollection<T> = {
  elements?: T[];
};

type CloverModifierGroupReference = {
  id: string;
  name?: string;
  minRequired?: number;
  maxAllowed?: number;
};

type CloverInventoryItem = {
  id: string;
  name?: string;
  price?: number;
  available?: boolean;
  hidden?: boolean;
  deleted?: boolean;
  modifierGroups?: CloverCollection<CloverModifierGroupReference>;
};

type CloverInventoryModifier = {
  id: string;
  name?: string;
  price?: number;
  available?: boolean;
  modifierGroup?: CloverModifierGroupReference;
};

type CloverCheckoutInventory = {
  itemsById: Map<string, CloverInventoryItem>;
  modifiersById: Map<string, CloverInventoryModifier>;
  modifiersByGroupId: Map<string, CloverInventoryModifier[]>;
};

export class CloverCheckoutValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CloverCheckoutValidationError";
  }
}

const checkoutInventoryCacheMilliseconds = 30_000;
let checkoutInventoryCache: { expiresAt: number; inventory: CloverCheckoutInventory } | null = null;
let checkoutInventoryRequest: Promise<CloverCheckoutInventory> | null = null;

function isCheckoutInput(payload: unknown): payload is HostedCheckoutInput {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const candidate = payload as Partial<HostedCheckoutInput>;
  const customer = candidate.customer as Partial<HostedCheckoutInput["customer"]> | undefined;

  return (
    Array.isArray(candidate.cartItems) &&
    candidate.cartItems.length > 0 &&
    candidate.cartItems.every(
      (item) =>
        Boolean(item) &&
        typeof item === "object" &&
        typeof item.id === "string" &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0 &&
        item.quantity <= 20 &&
        (!item.modifiers || Array.isArray(item.modifiers))
    ) &&
    Boolean(customer) &&
    typeof customer?.name === "string" &&
    typeof customer.phone === "string" &&
    typeof customer.email === "string"
  );
}

function normalizeInventoryText(value: string | undefined) {
  return (value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function inventoryPath(path: string, query: Record<string, string | number>) {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    searchParams.set(key, String(value));
  }

  return `${path}?${searchParams.toString()}`;
}

async function fetchAllCloverElements<T>(path: string, query: Record<string, string> = {}) {
  const elements: T[] = [];
  const limit = 1000;
  let offset = 0;

  while (offset < 10_000) {
    const page = await cloverFetch<CloverCollection<T>>(inventoryPath(path, { ...query, limit, offset }));
    const pageElements = Array.isArray(page.elements) ? page.elements : [];

    elements.push(...pageElements);

    if (pageElements.length < limit) {
      return elements;
    }

    offset += pageElements.length;
  }

  throw new Error("Clover inventory pagination exceeded the safety limit.");
}

async function fetchCloverCheckoutInventory() {
  const config = getCloverConfig();

  if (!config.merchantId || !config.accessToken) {
    throw new CloverCheckoutValidationError("Live menu pricing is unavailable. Please call the cafe to place this order.");
  }

  const merchantPath = `/v3/merchants/${encodeURIComponent(config.merchantId)}`;
  const [items, modifiers] = await Promise.all([
    fetchAllCloverElements<CloverInventoryItem>(`${merchantPath}/items`, { expand: "modifierGroups" }),
    fetchAllCloverElements<CloverInventoryModifier>(`${merchantPath}/modifiers`, { expand: "modifierGroup" })
  ]);
  const modifiersByGroupId = new Map<string, CloverInventoryModifier[]>();

  for (const modifier of modifiers) {
    const groupId = modifier.modifierGroup?.id;

    if (!groupId) {
      continue;
    }

    const groupModifiers = modifiersByGroupId.get(groupId) || [];
    groupModifiers.push(modifier);
    modifiersByGroupId.set(groupId, groupModifiers);
  }

  return {
    itemsById: new Map(items.map((item) => [item.id, item])),
    modifiersById: new Map(modifiers.map((modifier) => [modifier.id, modifier])),
    modifiersByGroupId
  } satisfies CloverCheckoutInventory;
}

async function getCloverCheckoutInventory() {
  if (checkoutInventoryCache && checkoutInventoryCache.expiresAt > Date.now()) {
    return checkoutInventoryCache.inventory;
  }

  if (checkoutInventoryRequest) {
    return checkoutInventoryRequest;
  }

  checkoutInventoryRequest = fetchCloverCheckoutInventory()
    .then((inventory) => {
      checkoutInventoryCache = {
        expiresAt: Date.now() + checkoutInventoryCacheMilliseconds,
        inventory
      };
      return inventory;
    })
    .finally(() => {
      checkoutInventoryRequest = null;
    });

  return checkoutInventoryRequest;
}

function cloverItemIdForCartItem(item: HostedCheckoutCartItem) {
  const inferredItemId = item.id.startsWith("online-") ? item.id.slice("online-".length) : "";

  if (item.cloverItemId && inferredItemId && item.cloverItemId !== inferredItemId) {
    throw new CloverCheckoutValidationError("This cart is out of date. Return to the menu and add the item again.");
  }

  return item.cloverItemId || inferredItemId;
}

function configuredMaximumAllowed(group: CloverModifierGroupReference) {
  if (!Number.isInteger(group.maxAllowed) || Number(group.maxAllowed) <= 0 || Number(group.maxAllowed) >= 10_000) {
    return undefined;
  }

  return Number(group.maxAllowed);
}

function isSingleChoiceGroup(group: CloverModifierGroupReference) {
  const groupName = (group.name || "").toLowerCase();
  const maxAllowed = configuredMaximumAllowed(group);

  if (maxAllowed) {
    return maxAllowed === 1;
  }

  return groupName.startsWith("choose ") || groupName.startsWith("size ") || groupName.startsWith("style ");
}

function minimumRequired(group: CloverModifierGroupReference) {
  const groupName = (group.name || "").toLowerCase();

  if (Number.isInteger(group.minRequired) && Number(group.minRequired) > 0) {
    return Number(group.minRequired);
  }

  if (group.minRequired === 0 && groupName.startsWith("add ")) {
    return 0;
  }

  if (isSingleChoiceGroup(group)) {
    return 1;
  }

  return 0;
}

function maximumAllowed(group: CloverModifierGroupReference) {
  return configuredMaximumAllowed(group) ?? (isSingleChoiceGroup(group) ? 1 : undefined);
}

function resolveSelectedModifier(
  selected: NonNullable<HostedCheckoutCartItem["modifiers"]>[number],
  itemGroupsById: Map<string, CloverModifierGroupReference>,
  inventory: CloverCheckoutInventory
) {
  if (selected.id) {
    const modifier = inventory.modifiersById.get(selected.id);
    const groupId = modifier?.modifierGroup?.id;

    if (!modifier || modifier.available === false || !groupId || !itemGroupsById.has(groupId)) {
      throw new CloverCheckoutValidationError("An option in your cart is no longer available. Return to the menu and add the item again.");
    }

    if (selected.groupId && selected.groupId !== groupId) {
      throw new CloverCheckoutValidationError("An option in your cart has changed. Return to the menu and add the item again.");
    }

    return modifier;
  }

  const matchingGroups = selected.groupId
    ? itemGroupsById.has(selected.groupId)
      ? [itemGroupsById.get(selected.groupId)!]
      : []
    : [...itemGroupsById.values()].filter((group) => normalizeInventoryText(group.name) === normalizeInventoryText(selected.name));
  const candidates = matchingGroups.flatMap((group) => inventory.modifiersByGroupId.get(group.id) || []);
  const matchingModifiers = candidates.filter(
    (modifier) => modifier.available !== false && normalizeInventoryText(modifier.name) === normalizeInventoryText(selected.option)
  );

  if (matchingModifiers.length !== 1) {
    throw new CloverCheckoutValidationError("An option in your saved cart could not be verified. Return to the menu and add the item again.");
  }

  return matchingModifiers[0];
}

function isAbsolutePriceGroup(
  basePriceCents: number,
  group: CloverModifierGroupReference,
  availableModifiers: CloverInventoryModifier[]
) {
  return (
    basePriceCents > 0 &&
    (group.name || "").toLowerCase().startsWith("size ") &&
    minimumRequired(group) > 0 &&
    availableModifiers.length > 0 &&
    availableModifiers.every((modifier) => {
      const priceCents = Number.isInteger(modifier.price) ? Number(modifier.price) : 0;
      return priceCents >= basePriceCents;
    })
  );
}

async function reconcileCheckoutInput(payload: unknown): Promise<HostedCheckoutInput> {
  if (!isCheckoutInput(payload)) {
    throw new CloverCheckoutValidationError("Invalid checkout payload.");
  }

  const inventory = await getCloverCheckoutInventory();
  let orderSubtotalCents = 0;
  const cartItems = payload.cartItems.map((cartItem) => {
    const cloverItemId = cloverItemIdForCartItem(cartItem);
    const liveItem = inventory.itemsById.get(cloverItemId);

    if (!cloverItemId || !liveItem || liveItem.available === false || liveItem.hidden || liveItem.deleted || !liveItem.name?.trim()) {
      throw new CloverCheckoutValidationError("An item in your cart is no longer available. Return to the menu and choose another item.");
    }

    const itemGroups = (liveItem.modifierGroups?.elements || [])
      .filter((group) => Boolean(group.id))
      .map((group) => ({
        ...group,
        name:
          group.name?.trim() ||
          inventory.modifiersByGroupId.get(group.id)?.find((modifier) => modifier.modifierGroup?.name?.trim())?.modifierGroup?.name
      }))
      .filter((group) => isOnlineModifierGroup(group.name));
    const itemGroupsById = new Map(itemGroups.map((group) => [group.id, group]));
    const selectedModifiers = (cartItem.modifiers || []).map((selected) => {
      const quantity = selected.quantity ?? 1;

      if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_MODIFIER_QUANTITY) {
        throw new CloverCheckoutValidationError("An item option has an invalid quantity. Return to the menu and customize it again.");
      }

      const modifier = resolveSelectedModifier(selected, itemGroupsById, inventory);
      const group = itemGroupsById.get(modifier.modifierGroup!.id);

      if (quantity > 1 && !isQuantityModifierGroup(group)) {
        throw new CloverCheckoutValidationError("This item option cannot be repeated. Return to the menu and customize it again.");
      }

      return { ...modifier, quantity };
    });
    const selectedModifierIds = new Set(selectedModifiers.map((modifier) => modifier.id));

    if (selectedModifierIds.size !== selectedModifiers.length) {
      throw new CloverCheckoutValidationError("A cart option was selected more than once. Return to the menu and add the item again.");
    }

    const selectedCountByGroup = new Map<string, number>();

    for (const modifier of selectedModifiers) {
      const groupId = modifier.modifierGroup?.id;

      if (!groupId) {
        throw new CloverCheckoutValidationError("A cart option could not be verified. Return to the menu and add the item again.");
      }

      selectedCountByGroup.set(groupId, (selectedCountByGroup.get(groupId) || 0) + modifier.quantity);
    }

    for (const group of itemGroups) {
      const availableModifiers = (inventory.modifiersByGroupId.get(group.id) || []).filter((modifier) => modifier.available !== false);
      const requiredCount = minimumRequired(group);

      if (availableModifiers.length === 0) {
        if (requiredCount > 0) {
          throw new CloverCheckoutValidationError("A required item option is no longer available. Return to the menu and choose another item.");
        }

        continue;
      }

      const selectedCount = selectedCountByGroup.get(group.id) || 0;
      const allowedCount = maximumAllowed(group);

      if (selectedCount < requiredCount || (allowedCount !== undefined && selectedCount > allowedCount)) {
        throw new CloverCheckoutValidationError("Required item options have changed. Return to the menu and customize the item again.");
      }
    }

    const basePriceCents = Number.isInteger(liveItem.price) && Number(liveItem.price) >= 0 ? Number(liveItem.price) : 0;
    const hasAbsolutePriceSelection = itemGroups.some((group) => {
      if (!selectedCountByGroup.get(group.id)) {
        return false;
      }

      const availableModifiers = (inventory.modifiersByGroupId.get(group.id) || []).filter((modifier) => modifier.available !== false);
      return isAbsolutePriceGroup(basePriceCents, group, availableModifiers);
    });
    const modifierPriceCents = selectedModifiers.reduce(
      (total, modifier) => total + (Number.isInteger(modifier.price) && Number(modifier.price) >= 0 ? Number(modifier.price) : 0) * modifier.quantity,
      0
    );
    const priceCents = (hasAbsolutePriceSelection ? 0 : basePriceCents) + modifierPriceCents;

    if (!Number.isInteger(priceCents) || priceCents <= 0 || priceCents > 1_000_000) {
      throw new CloverCheckoutValidationError("Current pricing is unavailable for an item in your cart. Please call the cafe to order.");
    }

    orderSubtotalCents += priceCents * cartItem.quantity;

    return {
      id: cartItem.id,
      cloverItemId,
      name: liveItem.name.trim(),
      quantity: cartItem.quantity,
      priceCents,
      modifiers: selectedModifiers.map((modifier) => {
        const groupId = modifier.modifierGroup!.id;
        const group = itemGroupsById.get(groupId);

        return {
          id: modifier.id,
          groupId,
          name: group?.name?.trim() || modifier.modifierGroup?.name?.trim() || "Option",
          option: modifier.name?.trim() || "Selection",
          ...(modifier.quantity > 1 ? { quantity: modifier.quantity } : {}),
          ...(Number.isInteger(modifier.price) && Number(modifier.price) > 0 ? { priceCents: Number(modifier.price) } : {})
        };
      }),
      notes: cartItem.notes
    };
  });

  if (orderSubtotalCents <= 0 || orderSubtotalCents > 500_000) {
    throw new CloverCheckoutValidationError("Online pickup orders are limited to $5,000. Please call the cafe for a larger order.");
  }

  return {
    cartItems,
    customer: payload.customer,
    pickupTime: payload.pickupTime,
    notes: payload.notes
  };
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
  const modifierGroups = new Map<string, string[]>();

  for (const modifier of item.modifiers || []) {
    const options = modifierGroups.get(modifier.name) || [];
    options.push(`${(modifier.quantity || 1) > 1 ? `${modifier.quantity}× ` : ""}${modifier.option}`);
    modifierGroups.set(modifier.name, options);
  }

  const notes = [
    [...modifierGroups].map(([name, options]) => `${name}: ${options.join(", ")}`).join("; "),
    item.notes,
    payload.pickupTime ? `Pickup: ${payload.pickupTime}` : "",
    payload.notes ? `Order notes: ${payload.notes}` : ""
  ].filter(Boolean);

  return notes.join(" | ").slice(0, 500);
}

function getSiteUrl() {
  return getEnv("NEXT_PUBLIC_SITE_URL", "https://goldenbagelcafe.com").replace(/\/$/, "");
}

function getCheckoutRedirectUrls() {
  const siteUrl = getSiteUrl();

  return {
    success: getEnv("CLOVER_CHECKOUT_SUCCESS_URL") || `${siteUrl}/order?checkout=success&clearCart=1`,
    failure: getEnv("CLOVER_CHECKOUT_FAILURE_URL") || `${siteUrl}/order?checkout=failure`
  };
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
    redirectUrls: getCheckoutRedirectUrls(),
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

  const reconciledPayload = await reconcileCheckoutInput(payload);
  const checkoutPayload = buildHostedCheckoutPayload(reconciledPayload);
  const ecommerceToken = config.ecommercePrivateKey;

  if (!ecommerceToken) {
    throw new Error("Missing Clover Ecommerce private token.");
  }

  const response = await fetch(`${config.apiBaseUrl}/invoicingcheckoutservice/v1/checkouts`, {
    method: "POST",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${ecommerceToken}`,
      "content-type": "application/json",
      "User-Agent": "GoldenBagelWebsite/1.0",
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
