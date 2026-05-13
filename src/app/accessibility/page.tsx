import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Accessibility Statement",
  "Accessibility statement for Golden Bagel Cafe website.",
  "/accessibility/"
);

export default function AccessibilityPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 leading-8 text-espresso/78 shadow-soft sm:p-10">
        <h1 className="font-serif text-4xl font-black text-charcoal">Accessibility Statement</h1>
        <p className="mt-5">
          {siteConfig.name} aims to provide a website that is easy to use with keyboard navigation, screen readers, visible focus
          states, readable contrast, labels for form fields, and reduced-motion support.
        </p>
        <p className="mt-4">
          If you have trouble using the site or need help placing a request, please call {siteConfig.phone}. Accessibility feedback
          can be sent through the contact form on the Visit Us page.
        </p>
      </article>
    </main>
  );
}
