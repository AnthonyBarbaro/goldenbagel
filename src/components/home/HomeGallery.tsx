"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { homeGalleryImages } from "@/data/homeGallery";
import { classNames } from "@/lib/format";

const homeGalleryPreview = homeGalleryImages.slice(0, 12);

export function HomeGallery() {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollGallery(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.86,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    });
  }

  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-12 text-white sm:py-16 lg:py-20" aria-labelledby="gallery-title">
      <div className="mx-auto mb-7 flex max-w-7xl items-end justify-between gap-5 px-4 sm:mb-9 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="gallery-title" className="font-serif text-3xl font-black tracking-tight sm:text-5xl">
            A look inside Golden Bagel.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
            Fresh bagels, made-to-order favorites, and the neighborhood counter on Fletcher Parkway.
          </p>
        </div>
        <div className="flex shrink-0 gap-2" role="group" aria-label="Gallery controls">
          <button
            type="button"
            aria-label="Previous gallery photos"
            onClick={() => scrollGallery(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white transition hover:bg-white/16 sm:h-12 sm:w-12"
          >
            <ArrowLeft aria-hidden="true" size={19} />
          </button>
          <button
            type="button"
            aria-label="Next gallery photos"
            onClick={() => scrollGallery(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-honey text-charcoal shadow-lift transition hover:bg-[#ffc85c] sm:h-12 sm:w-12"
          >
            <ArrowRight aria-hidden="true" size={19} />
          </button>
        </div>
      </div>
      <div
        ref={railRef}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          scrollGallery(event.key === "ArrowLeft" ? -1 : 1);
        }}
        role="region"
        aria-label="Cafe photo gallery. Use the arrow keys or gallery controls to browse."
        className="home-gallery-rail flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto px-4 py-2 sm:gap-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        <div className="w-0 shrink-0 sm:w-4" aria-hidden="true" />
        {homeGalleryPreview.map((image, index) => {
          const isLead = index === 0;
          const isFeatured = image.featured && !isLead;
          const isOffset = index % 5 === 2 || index % 5 === 4;

          return (
            <figure
              key={image.src}
              className={classNames(
                "group relative h-[20rem] min-w-0 shrink-0 snap-center overflow-hidden rounded-[1.45rem] bg-white/8 shadow-soft ring-1 ring-white/10 sm:h-[25rem]",
                isLead || isFeatured ? "w-[84vw] sm:w-[34rem] lg:w-[38rem]" : "w-[72vw] sm:w-[20rem] lg:w-[22rem]",
                isOffset && "sm:mt-8"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes={isLead || isFeatured ? "(min-width: 1024px) 38rem, (min-width: 640px) 34rem, 84vw" : "(min-width: 1024px) 22rem, (min-width: 640px) 20rem, 72vw"}
                className="object-cover transition duration-500 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/22 via-transparent to-transparent opacity-80 transition group-hover:opacity-35" aria-hidden="true" />
            </figure>
          );
        })}
        <div className="w-0 shrink-0 sm:w-4" aria-hidden="true" />
      </div>
    </section>
  );
}
