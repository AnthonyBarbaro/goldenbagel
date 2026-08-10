import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { CloverCheckoutValidationError, createCloverOrder } from "../shared/clover.js";
import { optionsResponse } from "../shared/cors.js";
import { sendOwnerNotification } from "../shared/email.js";
import { rateLimit } from "../shared/rateLimit.js";
import { badRequest, serverError, success } from "../shared/response.js";
import { safeLog } from "../shared/security.js";
import { getNextPickupOpenMessage, isValidPickupTime } from "../shared/storeHours.js";
import { createOrderSchema, validateBody } from "../shared/validate.js";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.requestContext.http.method === "OPTIONS") {
    return optionsResponse(event);
  }

  try {
    const limited = rateLimit(event);
    if (limited.limited) {
      return badRequest(event, `Too many requests. Try again in ${limited.retryAfter} seconds.`);
    }

    const result = validateBody(event, createOrderSchema);
    if (!result.ok) {
      return badRequest(event, result.honeypot ? "Invalid submission." : "Invalid order request.", "error" in result ? result.error : undefined);
    }

    if (!isValidPickupTime(result.data.pickupTime)) {
      return badRequest(event, `${getNextPickupOpenMessage()}. Choose one of the currently available pickup times.`);
    }

    const order = await createCloverOrder(result.data);

    try {
      await sendOwnerNotification({
        subject: `Golden Bagel checkout started ${order.orderReference}`,
        text: `Payment must be confirmed in Clover before preparation.\n\n${JSON.stringify(result.data, null, 2)}`,
        replyTo: result.data.customer.email
      });
    } catch (notificationError) {
      safeLog("order:create:notification-error", {
        message: notificationError instanceof Error ? notificationError.message : "unknown",
        orderReference: order.orderReference
      });
    }

    safeLog("order:create", { orderReference: order.orderReference, mock: order.mock });
    return success(event, order);
  } catch (error) {
    safeLog("order:create:error", { message: error instanceof Error ? error.message : "unknown" });

    if (error instanceof CloverCheckoutValidationError) {
      return badRequest(event, error.message);
    }

    return serverError(event);
  }
};
