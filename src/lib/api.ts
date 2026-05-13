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

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "";
}

function shouldUseMock() {
  return process.env.NEXT_PUBLIC_MOCK_ORDERING !== "false" || !getApiBaseUrl();
}

function mockReference() {
  return `GB-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
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

  const response = await fetch(`${getApiBaseUrl()}/orders/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(input)
  });

  if (!response.ok) {
    throw new Error("Unable to create order. Please call the cafe.");
  }

  return response.json() as Promise<OrderResponse>;
}
