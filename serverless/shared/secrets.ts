const secretKeys = new Set([
  "CLOVER_ACCESS_TOKEN",
  "CLOVER_ECOMMERCE_PRIVATE_KEY",
  "CLOVER_WEBHOOK_SECRET",
  "SMTP_PASS"
]);

export function getEnv(name: string, fallback = "") {
  return process.env[name] || fallback;
}

export function requireServerSecret(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
}

export function redactConfig(config: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(config).map(([key, value]) => [key, secretKeys.has(key) ? "[redacted]" : value]));
}
