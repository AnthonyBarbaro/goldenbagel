import type { APIGatewayProxyEventV2 } from "aws-lambda";

const buckets = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(event: APIGatewayProxyEventV2, limit = 12, windowMs = 60_000) {
  const ip = event.requestContext.http.sourceIp || "unknown";
  const key = `${event.requestContext.http.path}:${ip}`;
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { limited: false };
  }

  bucket.count += 1;
  return { limited: bucket.count > limit, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
}
