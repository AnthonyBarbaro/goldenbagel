import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { reviews, type Review } from "@/data/reviews";

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex min-h-52 flex-col justify-between border-t border-charcoal/12 py-5 sm:min-h-56 sm:py-6">
      <div>
        <div className="flex gap-1 text-honey" role="img" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star key={index} aria-hidden="true" fill="currentColor" size={17} />
          ))}
        </div>
        <blockquote className="mt-5 text-lg font-black leading-8 text-espresso sm:text-xl">
          &ldquo;{review.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-5 text-sm font-bold text-espresso/70">{review.author}</figcaption>
    </figure>
  );
}

export function ReviewsSection() {
  return (
    <Section className="bg-white" title="What customers have shared.">
      <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </Section>
  );
}
