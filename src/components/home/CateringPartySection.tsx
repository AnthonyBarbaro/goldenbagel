import Image from "next/image";
import { Button } from "@/components/ui/Button";
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
          <article key={card.title} className="overflow-hidden rounded-[2rem] bg-cream shadow-soft">
            <Image src={card.image} alt={`${card.title} at Golden Bagel Cafe`} width={900} height={600} className="h-64 w-full object-cover" />
            <div className="p-6 sm:p-8">
              <h2 className="font-serif text-3xl font-black text-charcoal">{card.title}</h2>
              <p className="mt-4 text-base leading-7 text-espresso/74">{card.text}</p>
              <Button href={card.href} className="mt-6">
                {card.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
