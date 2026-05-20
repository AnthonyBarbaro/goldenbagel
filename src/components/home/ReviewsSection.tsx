"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { primaryLocation, siteConfig } from "@/config/site";
import { reviews, type Review } from "@/data/reviews";

function rotateReviews(items: Review[], offset: number) {
  if (items.length === 0) {
    return items;
  }

  const normalizedOffset = offset % items.length;
  return [...items.slice(normalizedOffset), ...items.slice(0, normalizedOffset)];
}

function getNextReviewSet() {
  const storageKey = "goldenbagel-review-offset";

  try {
    const previousOffset = Number(window.localStorage.getItem(storageKey) || "0");
    const nextOffset = Number.isFinite(previousOffset) ? previousOffset + 1 : 1;

    window.localStorage.setItem(storageKey, String(nextOffset));
    return rotateReviews(reviews, nextOffset);
  } catch {
    return rotateReviews(reviews, Date.now());
  }
}

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

function ReviewRail({ items }: { items: Review[] }) {
  return (
    <div className="review-marquee overflow-hidden py-1">
      <div className="review-marquee-track">
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
  const [visibleReviews, setVisibleReviews] = useState(reviews);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setVisibleReviews(getNextReviewSet());
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <Section className="overflow-hidden bg-cream" eyebrow="Local favorite" title={title}>
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cream to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent sm:w-16" />
        <ReviewRail items={visibleReviews} />
      </div>
    </Section>
  );
}
