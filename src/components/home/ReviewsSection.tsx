import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { primaryLocation, siteConfig } from "@/config/site";

const reviews = [
  "The bagels are super fresh and perfectly chewy.",
  "Great food, great vibes, and amazing customer service.",
  "Freshly made bagels and a breakfast sandwich worth coming back for."
];

export function ReviewsSection() {
  const title = siteConfig.locations.length > 1 ? "Fresh, local, and easy." : `${primaryLocation.name} regulars know.`;

  return (
    <Section className="bg-cream" eyebrow="Local favorite" title={title}>
      <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="rounded-[1.5rem] bg-charcoal p-6 text-white shadow-soft sm:p-7">
          <div className="flex gap-1 text-honey" aria-label="Local favorite highlights">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} aria-hidden="true" fill="currentColor" size={24} />
            ))}
          </div>
          <p className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Fresh Bagel Energy</p>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-white/62">Fresh daily, friendly, and local</p>
          <p className="mt-5 text-sm leading-6 text-white/72">Quick mornings, easy pickup, and cafe favorites people come back for.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review} className="rounded-[1.25rem] border border-charcoal/10 bg-white p-5 text-base font-bold leading-7 text-espresso shadow-sm">
              &quot;{review}&quot;
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
