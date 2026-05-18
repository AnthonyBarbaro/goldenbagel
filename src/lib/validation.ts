import { z } from "zod";

const honeypot = z.string().max(0, "Invalid submission.").optional();

const resumeSchema = z
  .object({
    fileName: z.string().min(1).max(200),
    contentType: z.string().max(100),
    size: z.number().max(2_000_000),
    dataUrl: z.string().max(3_000_000)
  })
  .optional();

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(7, "Enter a phone number."),
  message: z.string().min(10, "Tell us how we can help."),
  honeypot
});

export const cateringSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(7, "Enter a phone number."),
  eventDate: z.string().min(1, "Choose an event date."),
  eventTime: z.string().min(1, "Choose an event time."),
  guestCount: z.string().min(2, "Choose a guest range."),
  fulfillment: z.enum(["pickup", "delivery-inquiry"]),
  bagelTraySize: z.string().min(2, "Choose a tray size."),
  bagelFlavors: z.array(z.string()).min(1, "Choose at least one bagel flavor."),
  bagelStyle: z.string().min(2, "Choose a bagel style."),
  creamCheeseFlavors: z.array(z.string()).min(1, "Choose at least one cream cheese flavor."),
  creamCheeseStyle: z.string().min(2, "Choose a cream cheese style."),
  extras: z.array(z.string()).default([]),
  dietaryNotes: z.string().max(500).optional(),
  message: z.string().max(1000).optional(),
  cloverTicketSummary: z.string().max(2000).optional(),
  honeypot
});

export const partyRequestSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(7, "Enter a phone number."),
  eventType: z.string().min(2, "Enter an event type."),
  eventDate: z.string().min(1, "Choose a date."),
  eventTime: z.string().min(1, "Choose a time."),
  guestCount: z.coerce.number().min(1, "Enter a guest count."),
  requests: z.string().min(10, "Share a few details."),
  honeypot
});

export const jobApplicationSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(7, "Enter a phone number."),
  availability: z.array(z.string()).min(1, "Choose at least one day."),
  resume: resumeSchema,
  message: z.string().max(1000).optional(),
  honeypot
});

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email."),
  source: z.string().default("website"),
  honeypot
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type CateringFormValues = z.infer<typeof cateringSchema>;
export type PartyRequestFormValues = z.infer<typeof partyRequestSchema>;
export type JobApplicationFormValues = z.infer<typeof jobApplicationSchema>;
export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
