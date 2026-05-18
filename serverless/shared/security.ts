export function sanitizeString(value: unknown, maxLength = 1000) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/[<>]/g, "").trim().slice(0, maxLength);
}

export function sanitizeRecord<T extends Record<string, unknown>>(input: T): T {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [key, typeof value === "string" ? sanitizeString(value) : value])
  ) as T;
}

export function hasHoneypot(payload: Record<string, unknown>) {
  return typeof payload.honeypot === "string" && payload.honeypot.trim().length > 0;
}

export function safeLog(label: string, payload: Record<string, unknown>) {
  const redactedKeys = new Set([
    "password",
    "token",
    "secret",
    "accessToken",
    "authorization",
    "ecommercePrivateKey",
    "webhookSecret",
    "CLOVER_ACCESS_TOKEN",
    "CLOVER_ECOMMERCE_PRIVATE_KEY",
    "CLOVER_WEBHOOK_SECRET"
  ]);
  const redacted = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, redactedKeys.has(key) ? "[redacted]" : value])
  );
  console.info(label, redacted);
}
