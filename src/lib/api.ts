import type { CartItem } from "@/lib/cart";

export type FulfillmentType = "pickup" | "delivery";

export type CheckoutCustomer = {
  name: string;
  phone: string;
  email: string;
};

export type CreateOrderInput = {
  cartItems: CartItem[];
  fulfillmentType: FulfillmentType;
  customer: CheckoutCustomer;
  pickupTime: string;
  notes?: string;
};

export type OrderResponse = {
  orderId: string;
  orderReference: string;
  status: string;
  checkoutUrl?: string;
  mock: boolean;
};

export type FormResponse = {
  ok: boolean;
  message: string;
  mock?: boolean;
};

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/$/, "") || "/api";
}

function shouldUseMock() {
  return process.env.NEXT_PUBLIC_MOCK_ORDERING !== "false";
}

function mockReference() {
  return `GB-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}

function apiUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const pathWithSlash = normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`;
  return `${getApiBaseUrl()}${pathWithSlash}`;
}

export async function createOrder(input: CreateOrderInput): Promise<OrderResponse> {
  if (shouldUseMock()) {
    await new Promise((resolve) => setTimeout(resolve, 550));
    const reference = mockReference();

    return {
      orderId: `mock_${Date.now()}`,
      orderReference: reference,
      status: "mock-confirmed",
      checkoutUrl: `/order?confirmation=${reference}`,
      mock: true
    };
  }

  const response = await fetch(apiUrl("/orders/create"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(input)
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => ({}))) as Partial<{ message: string }>;
    throw new Error(data.message || "Unable to create order. Please call the cafe.");
  }

  return response.json() as Promise<OrderResponse>;
}

export async function submitPublicForm(endpoint: string, payload: Record<string, unknown>): Promise<FormResponse> {
  const apiBase = getApiBaseUrl();

  if (!apiBase) {
    await new Promise((resolve) => setTimeout(resolve, 450));
    return {
      ok: true,
      message: "Thanks. This mock submission was received locally.",
      mock: true
    };
  }

  const response = await fetch(`${apiBase}${endpoint.endsWith("/") ? endpoint : `${endpoint}/`}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = (await response.json().catch(() => ({}))) as Partial<FormResponse>;

  if (!response.ok) {
    throw new Error(data.message || "Unable to submit this form right now.");
  }

  return {
    ok: true,
    message: data.message || "Thanks. We received your request.",
    mock: data.mock
  };
}
