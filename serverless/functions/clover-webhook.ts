import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { handleCloverWebhook } from "../shared/clover.js";
import { optionsResponse } from "../shared/cors.js";
import { badRequest, serverError, success } from "../shared/response.js";
import { safeLog } from "../shared/security.js";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.requestContext.http.method === "OPTIONS") {
    return optionsResponse(event);
  }

  try {
    const rawBody = event.isBase64Encoded && event.body ? Buffer.from(event.body, "base64").toString("utf8") : event.body || "";
    const signature = event.headers["clover-signature"] || event.headers["x-clover-signature"];
    const result = await handleCloverWebhook(rawBody, signature);

    if (!result.ok) {
      return badRequest(event, "Invalid webhook signature.");
    }

    return success(event, {
      status: result.status,
      mock: result.mock
    });
  } catch (error) {
    safeLog("clover:webhook:error", { message: error instanceof Error ? error.message : "unknown" });
    return serverError(event);
  }
};
