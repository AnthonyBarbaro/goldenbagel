import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { optionsResponse } from "../shared/cors.js";
import { rateLimit } from "../shared/rateLimit.js";
import { badRequest, serverError, success } from "../shared/response.js";
import { safeLog } from "../shared/security.js";
import { newsletterSchema, validateBody } from "../shared/validate.js";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.requestContext.http.method === "OPTIONS") {
    return optionsResponse(event);
  }

  try {
    const limited = rateLimit(event, 20);
    if (limited.limited) {
      return badRequest(event, `Too many requests. Try again in ${limited.retryAfter} seconds.`);
    }

    const result = validateBody(event, newsletterSchema);
    if (!result.ok) {
      return badRequest(event, result.honeypot ? "Invalid submission." : "Invalid newsletter request.", "error" in result ? result.error : undefined);
    }

    safeLog("newsletter:signup", { email: result.data.email, source: result.data.source || "website" });
    return success(event, { message: "Thanks. You are on the list." });
  } catch (error) {
    safeLog("newsletter:error", { message: error instanceof Error ? error.message : "unknown" });
    return serverError(event);
  }
};
