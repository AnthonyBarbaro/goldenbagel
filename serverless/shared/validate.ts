import type { APIGatewayProxyEventV2 } from "aws-lambda";
import { z } from "zod";
import { hasHoneypot, sanitizeRecord } from "./security.js";

const MAX_CART_ITEM_QUANTITY = 20;
const MAX_CART_LINES = 40;
const MAX_TOTAL_ITEM_QUANTITY = 100;

function phoneDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
}

const phoneSchema = z
  .string()
  .trim()
  .refine((value) => phoneDigits(value).length === 10, "Enter a 10-digit phone number.")
  .transform((value) => `+1${phoneDigits(value)}`);

export const customerSchema = z.object({
  name: z.string().trim().min(2).max(160),
  phone: phoneSchema,
  email: z.string().trim().email().max(254).transform((value) => value.toLowerCase())
});

const cartItemSchema = z.object({
  cartId: z.string().trim().min(1).max(500),
  id: z.string().trim().min(1).max(120),
  cloverItemId: z.string().trim().min(1).max(80).regex(/^[A-Za-z0-9_-]+$/).optional(),
  name: z.string().trim().min(1).max(160),
  priceCents: z.number().int().positive().max(1_000_000).optional(),
  priceLabel: z.string().trim().max(80).optional(),
  category: z.string().trim().max(120).optional(),
  image: z.string().trim().max(500).optional(),
  quantity: z.number().int().positive().max(MAX_CART_ITEM_QUANTITY),
  modifiers: z
    .array(
      z.object({
        id: z.string().trim().min(1).max(80).regex(/^[A-Za-z0-9_-]+$/).optional(),
        groupId: z.string().trim().min(1).max(80).regex(/^[A-Za-z0-9_-]+$/).optional(),
        name: z.string().trim().min(1).max(120),
        option: z.string().trim().min(1).max(120),
        priceCents: z.number().int().nonnegative().max(1_000_000).optional()
      })
    )
    .max(30)
    .default([]),
  notes: z.string().trim().max(500).optional()
});

const cartSchema = z
  .array(cartItemSchema)
  .min(1)
  .max(MAX_CART_LINES)
  .superRefine((items, context) => {
    const quantity = items.reduce((total, item) => total + item.quantity, 0);

    if (quantity > MAX_TOTAL_ITEM_QUANTITY) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Cart quantity cannot exceed ${MAX_TOTAL_ITEM_QUANTITY} items.`
      });
    }
  });

export const createOrderSchema = z.object({
  cartItems: cartSchema,
  fulfillmentType: z.literal("pickup"),
  customer: customerSchema,
  pickupTime: z.string().trim().min(1).max(80),
  notes: z.string().trim().max(500).optional()
});

export const checkoutSchema = z.object({
  orderId: z.string().trim().min(1).max(120),
  cartItems: cartSchema,
  customer: customerSchema,
  pickupTime: z.string().trim().min(1).max(80)
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
  eventDate: z.string().min(1),
  eventTime: z.string().min(1),
  guestCount: z.string().min(2),
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

const resumeSchema = z
  .object({
    fileName: z.string().min(1).max(200),
    contentType: z.string().max(100),
    size: z.number().max(2_000_000),
    dataUrl: z.string().max(3_000_000)
  })
  .optional();

export const jobApplicationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  availability: z.array(z.string()).min(1),
  resume: resumeSchema,
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
