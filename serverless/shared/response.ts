import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { getCorsHeaders } from "./cors.js";

export function jsonResponse(event: APIGatewayProxyEventV2, statusCode: number, body: Record<string, unknown>): APIGatewayProxyResultV2 {
  return {
    statusCode,
    headers: {
      ...getCorsHeaders(event),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
}

export function success(event: APIGatewayProxyEventV2, body: Record<string, unknown> = {}) {
  return jsonResponse(event, 200, {
    ok: true,
    ...body
  });
}

export function badRequest(event: APIGatewayProxyEventV2, message: string, details?: unknown) {
  return jsonResponse(event, 400, {
    ok: false,
    message,
    details
  });
}

export function serverError(event: APIGatewayProxyEventV2) {
  return jsonResponse(event, 500, {
    ok: false,
    message: "Something went wrong. Please try again or call the cafe."
  });
}
