import type { APIGatewayProxyEventV2 } from "aws-lambda";
import { z } from "zod";
import { hasHoneypot, sanitizeRecord } from "./security.js";

export const customerSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email()
});

const cartItemSchema = z.object({
  cartId: z.string().min(1),
  id: z.string().min(1),
  name: z.string().min(1),
  price: z.number().nonnegative().optional(),
  quantity: z.number().int().positive(),
  modifiers: z.array(z.object({ name: z.string(), option: z.string() })).default([]),
  notes: z.string().optional()
});

export const createOrderSchema = z.object({
  cartItems: z.array(cartItemSchema).min(1),
  fulfillmentType: z.enum(["pickup", "delivery"]),
  customer: customerSchema,
  pickupTime: z.string().min(1),
  notes: z.string().max(500).optional()
});

export const checkoutSchema = z.object({
  orderId: z.string().min(1),
  cartItems: z.array(cartItemSchema).min(1),
  customer: customerSchema
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10),
  honeypot: z.string().optional()
});

export const cateringSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  eventType: z.string().min(2),
  eventDate: z.string().min(1),
  eventTime: z.string().min(1),
  guestCount: z.number().or(z.string()).transform(Number),
  fulfillment: z.enum(["pickup", "delivery-inquiry"]),
  bagelTraySize: z.string().min(2),
  bagelFlavors: z.array(z.string()).min(1),
  bagelStyle: z.string().min(2),
  creamCheeseFlavors: z.array(z.string()).min(1),
  creamCheeseStyle: z.string().min(2),
  extras: z.array(z.string()).default([]),
  dietaryNotes: z.string().optional(),
  message: z.string().optional(),
  cloverTicketSummary: z.string().optional(),
  honeypot: z.string().optional()
});

export const partyRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  eventType: z.string().min(2),
  eventDate: z.string().min(1),
  eventTime: z.string().min(1),
  guestCount: z.number().or(z.string()).transform(Number),
  requests: z.string().min(10),
  honeypot: z.string().optional()
});

export const jobApplicationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  position: z.string().min(2),
  availability: z.string().min(2),
  experience: z.string().min(2),
  message: z.string().optional(),
  honeypot: z.string().optional()
});

export const newsletterSchema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
  honeypot: z.string().optional()
});

export function parseJson(event: APIGatewayProxyEventV2) {
  if (!event.body) {
    return {};
  }

  return JSON.parse(event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body) as Record<string, unknown>;
}

export function validateBody<T extends z.ZodTypeAny>(event: APIGatewayProxyEventV2, schema: T) {
  const payload = sanitizeRecord(parseJson(event));

  if (hasHoneypot(payload)) {
    return { ok: false as const, honeypot: true as const };
  }

  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.flatten() };
  }

  return { ok: true as const, data: parsed.data as z.infer<T> };
}
