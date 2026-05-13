import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Large Party Orders",
  "Use the Golden Bagel Cafe catering order flow for parties, office functions, and large bagel orders in El Cajon.",
  "/parties/"
);

export default function PartiesPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Large party orders</p>
          <h1 className="mt-4 font-serif text-5xl font-black tracking-tight text-charcoal sm:text-7xl">Use Catering for parties and big orders.</h1>
          <p className="mt-5 text-lg leading-8 text-espresso/74">
            Birthday parties, baby showers, office functions, and weekend brunches all start in the Catering flow. Pick your
            date, bagels, cream cheese, and add-ons so the request can be formatted for Clover API order notes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/catering">Open Catering</Button>
            <Button href={siteConfig.phoneHref} variant="secondary">
              Call the Cafe
            </Button>
          </div>
        </div>
        <Image
          src="/goldenbagels/gallery/catering.png"
          alt="Golden Bagel Cafe catering trays"
          width={900}
          height={600}
          className="rounded-[2rem] shadow-soft"
        />
      </div>
    </main>
  );
}
