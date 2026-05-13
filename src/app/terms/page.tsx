import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("Terms of Use", "Terms of use for Golden Bagel Cafe website and mock ordering.", "/terms/");

export default function TermsPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 leading-8 text-espresso/78 shadow-soft sm:p-10">
        <h1 className="font-serif text-4xl font-black text-charcoal">Terms of Use</h1>
        <p className="mt-5">
          This website is provided for menu browsing, contact, catering, event requests, job applications, newsletter signup, and
          mock ordering for {siteConfig.name}.
        </p>
        <p className="mt-4">
          Prices, availability, hours, and menu details may change. Mock ordering mode does not collect payment or guarantee order
          preparation until the serverless and Clover live checkout flow is configured.
        </p>
        <p className="mt-4">For urgent questions, call the cafe directly at {siteConfig.phone}.</p>
      </article>
    </main>
  );
}
