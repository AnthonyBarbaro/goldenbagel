import { createCheckoutSession } from "../shared/clover.js";
import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { optionsResponse } from "../shared/cors.js";
import { rateLimit } from "../shared/rateLimit.js";
import { badRequest, serverError, success } from "../shared/response.js";
import { safeLog } from "../shared/security.js";
import { checkoutSchema, validateBody } from "../shared/validate.js";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.requestContext.http.method === "OPTIONS") {
    return optionsResponse(event);
  }

  try {
    const limited = rateLimit(event);
    if (limited.limited) {
      return badRequest(event, `Too many requests. Try again in ${limited.retryAfter} seconds.`);
    }

    const result = validateBody(event, checkoutSchema);
    if (!result.ok) {
      return badRequest(event, "Invalid checkout request.", "error" in result ? result.error : undefined);
    }

    const checkout = await createCheckoutSession(result.data);
    return success(event, checkout);
  } catch (error) {
    safeLog("order:checkout:error", { message: error instanceof Error ? error.message : "unknown" });
    return serverError(event);
  }
};
