import type { Metadata } from "next";
import Image from "next/image";
import { CateringForm } from "@/components/forms/CateringForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Catering",
  "Request Golden Bagel Cafe catering for bagel trays, sandwiches, salads, meetings, and events in El Cajon.",
  "/catering/"
);

export default function CateringPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Catering</p>
          <h1 className="mt-4 font-serif text-5xl font-black tracking-tight text-charcoal sm:text-7xl">Build a catering ticket for Clover.</h1>
          <p className="mt-5 text-lg leading-8 text-espresso/74">
            Pick a date, tray size, bagel flavors, cream cheese, prep style, and add-ons. The request is formatted like a
            Clover kitchen ticket so the cafe can review and print the details cleanly.
          </p>
          <Image
            src="/goldenbagels/gallery/catering.png"
            alt="Golden Bagel Cafe catering"
            width={900}
            height={520}
            className="mt-8 rounded-[2rem] shadow-soft"
          />
        </div>
        <CateringForm />
      </div>
    </main>
  );
}
