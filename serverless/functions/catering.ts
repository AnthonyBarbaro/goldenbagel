import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { optionsResponse } from "../shared/cors.js";
import { formatSubmission, sendOwnerNotification } from "../shared/email.js";
import { rateLimit } from "../shared/rateLimit.js";
import { badRequest, serverError, success } from "../shared/response.js";
import { safeLog } from "../shared/security.js";
import { cateringSchema, validateBody } from "../shared/validate.js";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.requestContext.http.method === "OPTIONS") {
    return optionsResponse(event);
  }

  try {
    const limited = rateLimit(event);
    if (limited.limited) {
      return badRequest(event, `Too many requests. Try again in ${limited.retryAfter} seconds.`);
    }

    const result = validateBody(event, cateringSchema);
    if (!result.ok) {
      return badRequest(event, result.honeypot ? "Invalid submission." : "Invalid catering request.", "error" in result ? result.error : undefined);
    }

    await sendOwnerNotification({
      subject: "Golden Bagel catering request",
      text: formatSubmission("Catering request", result.data),
      replyTo: result.data.email
    });

    return success(event, { message: "Thanks. We received your catering request." });
  } catch (error) {
    safeLog("catering:error", { message: error instanceof Error ? error.message : "unknown" });
    return serverError(event);
  }
};
