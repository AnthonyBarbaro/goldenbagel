import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Terms of Use",
  "Terms for using the Golden Bagel Cafe website, menu, online ordering, and forms.",
  "/terms/"
);

const lastUpdated = "May 19, 2026";

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 border-t border-charcoal/10 pt-6">
      <h2 className="text-xl font-black text-charcoal">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 leading-8 text-espresso/78 shadow-soft sm:p-10">
        <h1 className="font-serif text-4xl font-black text-charcoal">Terms of Use</h1>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-toast">Last updated {lastUpdated}</p>
        <p className="mt-5">
          These terms apply when you use the {siteConfig.name} website to browse the menu, place an online order, request
          information, apply for a job, or contact the cafe.
        </p>

        <TermsSection title="Menu, Prices, and Availability">
          <p>
            Menu items, prices, sizes, ingredients, modifiers, taxes, fees, pickup times, and availability may change without
            notice. We do our best to keep the website accurate, but in-store availability and final checkout details control.
          </p>
        </TermsSection>

        <TermsSection title="Online Orders">
          <p>
            Online orders are for pickup at the selected cafe. An order is not final until the checkout process is completed and the
            order is accepted. If the cafe is closed, the site may offer future pickup windows instead of ASAP ordering.
          </p>
          <p>
            Please review your order carefully before payment. For urgent changes or questions after ordering, call{" "}
            <a href={siteConfig.phoneHref} className="font-black text-charcoal underline">{siteConfig.phone}</a>.
          </p>
        </TermsSection>

        <TermsSection title="Payments and Refunds">
          <p>
            Payment is handled through a secure checkout. Refunds, cancellations, substitutions, and order adjustments are handled by
            the cafe based on the order status and the situation.
          </p>
        </TermsSection>

        <TermsSection title="Allergens and Dietary Information">
          <p>
            Our food may contain or come into contact with common allergens, including wheat, dairy, eggs, soy, fish, tree nuts,
            peanuts, and sesame. If you have an allergy or dietary concern, call the cafe before ordering.
          </p>
        </TermsSection>

        <TermsSection title="Job Applications and Messages">
          <p>
            Submitting a job application or message does not guarantee an interview, employment, order, event booking, or response by
            a specific time. Please do not submit sensitive payment information through general forms.
          </p>
        </TermsSection>

        <TermsSection title="Website Use">
          <p>
            Do not misuse the website, interfere with ordering, attempt to access private systems, or submit false, harmful, or
            unlawful content. We may update, pause, or remove parts of the website at any time.
          </p>
        </TermsSection>
      </article>
    </main>
  );
}
