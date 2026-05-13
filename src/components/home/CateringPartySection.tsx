import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

const cards = [
  {
    title: "Catering",
    text: "Fresh bagel trays, sandwiches, salads, and cafe favorites for meetings, celebrations, and weekend brunches.",
    image: "/goldenbagels/gallery/catering.png",
    href: "/catering",
    cta: "Request Catering"
  },
  {
    title: "Parties",
    text: "Tell us about your date, guest count, and special requests. We'll do our best to help make the gathering easy and memorable.",
    image: "/goldenbagels/gallery/party.jpg",
    href: "/parties",
    cta: "Plan an Event"
  }
];

export function CateringPartySection() {
  return (
    <Section className="bg-white">
      <div className="grid gap-5 lg:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group overflow-hidden rounded-[2rem] bg-cream shadow-soft transition hover:-translate-y-1 hover:shadow-lift focus-visible:outline focus-visible:outline-4 focus-visible:outline-honey"
          >
            <Image src={card.image} alt={`${card.title} at Golden Bagel Cafe`} width={900} height={600} className="h-64 w-full object-cover" />
            <div className="p-6 sm:p-8">
              <h2 className="font-serif text-3xl font-black text-charcoal">{card.title}</h2>
              <p className="mt-4 text-base leading-7 text-espresso/74">{card.text}</p>
              <span className="mt-6 inline-flex text-sm font-black text-toast transition group-hover:text-charcoal">{card.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
