import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { createCateringCloverTicket } from "../shared/clover.js";
import { optionsResponse } from "../shared/cors.js";
import { formatSubmission, sendOwnerNotification } from "../shared/email.js";
import { rateLimit } from "../shared/rateLimit.js";
import { badRequest, serverError, success } from "../shared/response.js";
import { safeLog } from "../shared/security.js";
import { cateringSchema, validateBody } from "../shared/validate.js";

function joinList(value: string[] | undefined) {
  return value && value.length > 0 ? value.join(", ") : "None selected";
}

function formatCloverCateringTicket(payload: {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
  guestCount: number;
  fulfillment: string;
  bagelTraySize: string;
  bagelFlavors: string[];
  bagelStyle: string;
  creamCheeseFlavors: string[];
  creamCheeseStyle: string;
  extras?: string[];
  dietaryNotes?: string;
  message?: string;
}) {
  return [
    "CLOVER CATERING TICKET",
    "----------------------",
    `Customer: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Event: ${payload.eventType}`,
    `Date/time: ${payload.eventDate} at ${payload.eventTime}`,
    `Guests: ${payload.guestCount}`,
    `Fulfillment: ${payload.fulfillment}`,
    "",
    "BAGELS",
    `Tray size: ${payload.bagelTraySize}`,
    `Flavors: ${joinList(payload.bagelFlavors)}`,
    `Style: ${payload.bagelStyle}`,
    "",
    "CREAM CHEESE",
    `Flavors: ${joinList(payload.creamCheeseFlavors)}`,
    `Style: ${payload.creamCheeseStyle}`,
    "",
    "EXTRAS",
    joinList(payload.extras),
    "",
    "NOTES",
    payload.dietaryNotes ? `Dietary: ${payload.dietaryNotes}` : "Dietary: none",
    payload.message ? `Customer notes: ${payload.message}` : "Customer notes: none"
  ].join("\n");
}

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

    const cloverTicketSummary = formatCloverCateringTicket(result.data);
    const cloverTicket = await createCateringCloverTicket({
      ...result.data,
      cloverTicketSummary
    });

    await sendOwnerNotification({
      subject: `Golden Bagel catering ticket ${cloverTicket.orderReference}`,
      text: `${cloverTicketSummary}\n\nCLOVER API STATUS\n-----------------\n${JSON.stringify(cloverTicket, null, 2)}\n\nRAW REQUEST\n-----------\n${formatSubmission("Catering request", result.data)}`,
      replyTo: result.data.email
    });

    safeLog("catering:ticket", { orderReference: cloverTicket.orderReference, mock: cloverTicket.mock });
    return success(event, {
      message: `Thanks. We received your catering ticket ${cloverTicket.orderReference}.`,
      cloverTicket
    });
  } catch (error) {
    safeLog("catering:error", { message: error instanceof Error ? error.message : "unknown" });
    return serverError(event);
  }
};
