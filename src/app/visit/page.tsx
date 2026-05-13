import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { LocationSection } from "@/components/home/LocationSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Visit Us",
  "Find Golden Bagel Cafe at 2744 Fletcher Pkwy in El Cajon, view hours, directions, and contact the cafe.",
  "/visit/"
);

export default function VisitPage() {
  return (
    <main className="bg-cream">
      <LocationSection />
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Contact</p>
            <h1 className="mt-4 font-serif text-4xl font-black tracking-tight text-charcoal sm:text-6xl">Questions, comments or order help?</h1>
            <p className="mt-5 text-lg leading-8 text-espresso/74">Send a note and the cafe can follow up when the serverless email helper is configured.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
