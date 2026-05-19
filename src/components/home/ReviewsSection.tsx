import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { primaryLocation, siteConfig } from "@/config/site";
import { reviews, type Review } from "@/data/reviews";

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="min-h-[10.75rem] w-[18rem] shrink-0 rounded-[1.4rem] border border-charcoal/10 bg-white p-5 shadow-sm sm:w-[20rem]">
      <div className="mb-3 flex gap-1 text-honey" aria-label="5 star review">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} aria-hidden="true" fill="currentColor" size={16} />
        ))}
      </div>
      <blockquote className="text-base font-black leading-7 text-espresso">&quot;{review.quote}&quot;</blockquote>
      <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-espresso/56">{review.author}</p>
    </article>
  );
}

function ReviewRail({ items, reverse = false }: { items: Review[]; reverse?: boolean }) {
  return (
    <div className="review-marquee overflow-hidden py-1">
      <div className={reverse ? "review-marquee-track review-marquee-track-reverse" : "review-marquee-track"}>
        <div className="flex gap-3 pr-3 sm:gap-4 sm:pr-4">
          {items.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="flex gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden="true">
          {items.map((review) => (
            <ReviewCard key={`${review.id}-loop`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const title = siteConfig.locations.length > 1 ? "Fresh, local, and easy." : `${primaryLocation.name} regulars know.`;
  const secondRowReviews = [...reviews].reverse();

  return (
    <Section className="overflow-hidden bg-cream" eyebrow="Local favorite" title={title}>
      <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
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
        <div className="relative -mx-4 space-y-3 sm:-mx-6 lg:-mr-8 lg:ml-0">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cream to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent sm:w-16" />
          <ReviewRail items={reviews} />
          <div className="hidden sm:block">
            <ReviewRail items={secondRowReviews} reverse />
          </div>
        </div>
      </div>
    </Section>
  );
}
