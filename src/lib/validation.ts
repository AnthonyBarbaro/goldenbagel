import { z } from "zod";

const honeypot = z.string().max(0, "Invalid submission.").optional();

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
  guestCount: z.coerce.number().min(1, "Enter a guest count."),
  cateringType: z.string().min(2, "Tell us what you need."),
  message: z.string().min(10, "Share a few details."),
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
  position: z.string().min(2, "Choose a position."),
  availability: z.string().min(2, "Tell us your availability."),
  experience: z.string().min(2, "Tell us about your experience."),
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
