import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("Privacy Policy", "Privacy policy for Golden Bagel Cafe website forms and ordering.", "/privacy/");

export default function PrivacyPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 leading-8 text-espresso/78 shadow-soft sm:p-10">
        <h1 className="font-serif text-4xl font-black text-charcoal">Privacy Policy</h1>
        <p className="mt-5">
          {siteConfig.name} uses this website to share menu, location, ordering, catering, party, job, contact, and newsletter
          information. Form submissions may include your name, email, phone number, order details, event details, and message.
        </p>
        <p className="mt-4">
          We use submitted information to respond to requests, prepare mock or live orders, and contact you about the request you
          made. We do not collect raw card numbers on this site.
        </p>
        <p className="mt-4">
          Server-side integrations should store secrets in AWS environment variables, GitHub Actions secrets, or AWS Secrets Manager.
          Do not submit sensitive payment details through general contact forms.
        </p>
      </article>
    </main>
  );
}
