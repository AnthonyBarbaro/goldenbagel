import { safeLog } from "./security.js";

type EmailMessage = {
  subject: string;
  text: string;
  replyTo?: string;
};

function emailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_FROM && process.env.NOTIFY_TO);
}

export async function sendOwnerNotification(message: EmailMessage) {
  if (!emailConfigured()) {
    safeLog("email:log-only", {
      subject: message.subject,
      to: process.env.NOTIFY_TO || "not-configured",
      replyTo: message.replyTo || ""
    });
    return { sent: false, mode: "log-only" };
  }

  // Plug SMTP or SES transport here. The helper intentionally avoids logging secrets.
  safeLog("email:configured-placeholder", {
    subject: message.subject,
    to: process.env.NOTIFY_TO,
    replyTo: message.replyTo || ""
  });
  return { sent: false, mode: "configured-placeholder" };
}

export function formatSubmission(title: string, payload: Record<string, unknown>) {
  const lines = Object.entries(payload)
    .filter(([key]) => key !== "honeypot")
    .map(([key, value]) => `${key}: ${String(value)}`);

  return `${title}\n\n${lines.join("\n")}`;
}
