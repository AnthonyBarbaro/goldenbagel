import type { Metadata } from "next";
import Image from "next/image";
import { PartyRequestForm } from "@/components/forms/PartyRequestForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Parties",
  "Request group reservations and private parties at Golden Bagel Cafe in El Cajon.",
  "/parties/"
);

export default function PartiesPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Parties</p>
          <h1 className="mt-4 font-serif text-5xl font-black tracking-tight text-charcoal sm:text-7xl">Gather, eat and celebrate together.</h1>
          <p className="mt-5 text-lg leading-8 text-espresso/74">
            Whether it&apos;s a birthday party, baby shower, office function, or any other special event, fill out the form and
            we&apos;ll do our best to accommodate your desired date and requests.
          </p>
          <Image
            src="/goldenbagels/gallery/party.jpg"
            alt="Golden Bagel Cafe private event"
            width={900}
            height={600}
            className="mt-8 rounded-[2rem] shadow-soft"
          />
        </div>
        <PartyRequestForm />
      </div>
    </main>
  );
}
