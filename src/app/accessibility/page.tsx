import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Accessibility Statement",
  "Accessibility statement and feedback contact information for the Golden Bagel Cafe website.",
  "/accessibility/"
);

const lastUpdated = "May 19, 2026";

function AccessibilitySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 border-t border-charcoal/10 pt-6">
      <h2 className="text-xl font-black text-charcoal">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default function AccessibilityPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 leading-8 text-espresso/78 shadow-soft sm:p-10">
        <h1 className="font-serif text-4xl font-black text-charcoal">Accessibility Statement</h1>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-toast">Last updated {lastUpdated}</p>
        <p className="mt-5">
          {siteConfig.name} wants the website to be usable by as many people as possible, including people using keyboards, screen
          readers, magnification, voice control, or reduced-motion settings.
        </p>

        <AccessibilitySection title="Our Goal">
          <p>
            We aim to follow practical accessibility practices based on WCAG guidance, including readable contrast, clear headings,
            keyboard-friendly navigation, visible focus states, labeled form fields, text alternatives for meaningful images, and
            layouts that work on mobile and desktop screens.
          </p>
        </AccessibilitySection>

        <AccessibilitySection title="Ordering and Forms">
          <p>
            We try to keep ordering, job applications, and contact forms simple and usable with assistive technology. If a form or
            checkout step is not working for you, call the cafe and we will help with the request directly.
          </p>
        </AccessibilitySection>

        <AccessibilitySection title="Third-Party Tools">
          <p>
            Some features, such as maps, checkout, embedded media, or browser-level tools, may be provided by third parties. We do
            not fully control those experiences, but we still want to help if you run into a barrier.
          </p>
        </AccessibilitySection>

        <AccessibilitySection title="Feedback">
          <p>
            If you have trouble using the site, need information in another format, or want to report an accessibility issue, call{" "}
            <a href={siteConfig.phoneHref} className="font-black text-charcoal underline">{siteConfig.phone}</a>. Please include
            the page, device, browser, and a short description of what happened if you can.
          </p>
        </AccessibilitySection>
      </article>
    </main>
  );
}
