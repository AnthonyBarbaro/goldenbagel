import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

const defaultAllowedOrigins = ["https://goldenbagelcafe.com", "http://localhost:3000"];

function allowedOrigins() {
  return (process.env.ALLOWED_ORIGIN || defaultAllowedOrigins.join(","))
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

export function getCorsHeaders(event?: APIGatewayProxyEventV2) {
  const requestOrigin = event?.headers?.origin || event?.headers?.Origin;
  const origin = requestOrigin && allowedOrigins().includes(requestOrigin) ? requestOrigin : allowedOrigins()[0];

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "content-type,authorization,x-requested-with",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin"
  };
}

export function optionsResponse(event: APIGatewayProxyEventV2): APIGatewayProxyResultV2 {
  return {
    statusCode: 204,
    headers: getCorsHeaders(event),
    body: ""
  };
}
