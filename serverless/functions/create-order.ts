import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { createCloverOrder } from "../shared/clover.js";
import { optionsResponse } from "../shared/cors.js";
import { sendOwnerNotification } from "../shared/email.js";
import { rateLimit } from "../shared/rateLimit.js";
import { badRequest, serverError, success } from "../shared/response.js";
import { safeLog } from "../shared/security.js";
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

    const order = await createCloverOrder(result.data);
    await sendOwnerNotification({
      subject: `New mock order ${order.orderReference}`,
      text: JSON.stringify(result.data, null, 2),
      replyTo: result.data.customer.email
    });

    safeLog("order:create", { orderReference: order.orderReference, mock: order.mock });
    return success(event, order);
  } catch (error) {
    safeLog("order:create:error", { message: error instanceof Error ? error.message : "unknown" });
    return serverError(event);
  }
};
