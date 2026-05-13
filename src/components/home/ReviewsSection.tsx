import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";

const reviews = [
  "The bagels are super fresh and perfectly chewy.",
  "Great food, great vibes, and amazing customer service.",
  "Freshly made bagels and a breakfast sandwich worth coming back for."
];

export function ReviewsSection() {
  return (
    <Section className="bg-white" eyebrow="Local favorite" title="El Cajon bagel energy.">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="rounded-[2rem] bg-charcoal p-7 text-white shadow-soft">
          <div className="flex gap-1 text-honey" aria-label="Local favorite highlights">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} aria-hidden="true" fill="currentColor" size={24} />
            ))}
          </div>
          <p className="mt-5 text-5xl font-black">Best Bagel Energy</p>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-white/62">Fresh daily, friendly, and local</p>
          <p className="mt-5 text-sm leading-6 text-white/72">Built for quick mornings, easy pickup, and bagel trays people remember.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review} className="rounded-[1.5rem] bg-cream p-5 text-base font-bold leading-7 text-espresso shadow-soft">
              &quot;{review}&quot;
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
