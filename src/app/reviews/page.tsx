import { Star } from "lucide-react";
import type { Metadata } from "next";
import { reviews } from "@/data/reviews";
import { primaryLocation, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Reviews",
  siteConfig.locations.length > 1
    ? "Read review highlights for Golden Bagel Cafe."
    : `Read review highlights for Golden Bagel Cafe in ${primaryLocation.name}.`,
  "/reviews/"
);

export default function ReviewsPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Reviews</p>
          <h1 className="mt-4 font-serif text-5xl font-black tracking-tight text-charcoal sm:text-7xl">Fresh bagels, friendly mornings.</h1>
          <p className="mt-5 text-lg leading-8 text-espresso/74">
            A few short highlights from public review references for Golden Bagel Cafe.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <article key={review.id} className="rounded-[2rem] bg-white p-6 shadow-soft">
              <div className="flex gap-1 text-honey" aria-label={`${review.rating} star review`}>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} aria-hidden="true" fill="currentColor" size={20} />
                ))}
              </div>
              <blockquote className="mt-5 text-xl font-black leading-8 text-charcoal">&quot;{review.quote}&quot;</blockquote>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-espresso/58">{review.author}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
