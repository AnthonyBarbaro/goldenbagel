import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function CateringPartySection() {
  return (
    <Section className="bg-white">
      <Link
        href="/catering"
        className="group grid overflow-hidden rounded-[2rem] bg-cream shadow-soft transition hover:-translate-y-1 hover:shadow-lift focus-visible:outline focus-visible:outline-4 focus-visible:outline-honey lg:grid-cols-[0.9fr_1.1fr]"
        aria-label="Open catering and big party ordering"
      >
        <Image
          src="/goldenbagels/gallery/catering.png"
          alt="Golden Bagel Cafe catering trays"
          width={900}
          height={600}
          className="h-56 w-full object-cover sm:h-72 lg:h-full"
        />
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-toast">Catering order</p>
          <h2 className="mt-3 font-serif text-3xl font-black text-charcoal sm:text-5xl">Big-party bagels, built like a Clover ticket.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-espresso/74">
            Pick the date, guest count, bagel tray, cream cheese style, and add-ons. The catering survey turns your details into clear kitchen notes for review and printing.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em] text-espresso/70">
            <span className="rounded-full bg-white px-3 py-2">Bagel trays</span>
            <span className="rounded-full bg-white px-3 py-2">Cream cheese</span>
            <span className="rounded-full bg-white px-3 py-2">Event notes</span>
            <span className="rounded-full bg-white px-3 py-2">Kitchen ready</span>
          </div>
        </div>
      </Link>
    </Section>
  );
}
