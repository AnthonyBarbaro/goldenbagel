import type { Metadata } from "next";
import Image from "next/image";
import { CateringForm } from "@/components/forms/CateringForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Catering",
  "Build a Golden Bagel Cafe catering ticket with animated selections for date, time, guest range, bagels, spreads, and add-ons.",
  "/catering/"
);

export default function CateringPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 xl:grid-cols-[0.75fr_1.25fr] xl:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Catering</p>
          <h1 className="mt-4 font-serif text-5xl font-black tracking-tight text-charcoal sm:text-7xl">Build your catering board.</h1>
          <p className="mt-5 text-lg leading-8 text-espresso/74">
            Choose a date, tap a pickup time, pick a guest range, then stack bagels, cream cheese, and add-ons. The selections
            turn into a kitchen-ready ticket for review and printing.
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
