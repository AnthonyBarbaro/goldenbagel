import { randomUUID } from "node:crypto";

export function isMockClover() {
  return process.env.MOCK_CLOVER !== "false" || !process.env.CLOVER_MERCHANT_ID || !process.env.CLOVER_ACCESS_TOKEN;
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
