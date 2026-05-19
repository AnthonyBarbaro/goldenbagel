"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, type CSSProperties } from "react";
import { homeGalleryImages } from "@/data/homeGallery";
import { classNames } from "@/lib/format";

export function HomeGallery() {
  const railRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<number | null>(null);

  function scrollGallery(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    pauseThenResume();

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.86,
      behavior: "smooth"
    });
  }

  function pauseThenResume() {
    pausedRef.current = true;

    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      pausedRef.current = false;
      resumeTimeoutRef.current = null;
    }, 2400);
  }

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const interval = window.setInterval(() => {
      const currentRail = railRef.current;

      if (currentRail && !pausedRef.current) {
        if (currentRail.scrollLeft >= currentRail.scrollWidth - currentRail.clientWidth - 4) {
          currentRail.scrollLeft = 0;
          return;
        }

        currentRail.scrollBy({
          left: Math.min(currentRail.clientWidth * 0.72, 420),
          behavior: "smooth"
        });
      }
    }, 2600);

    return () => {
      window.clearInterval(interval);
      if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-8 text-white sm:py-12 lg:py-14" aria-label="Golden Bagel photo gallery">
      <button
        type="button"
        aria-label="Previous gallery photos"
        onClick={() => scrollGallery(-1)}
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-charcoal/72 text-white shadow-soft backdrop-blur transition hover:bg-charcoal/88 sm:left-6 sm:h-12 sm:w-12 lg:left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        <ArrowLeft aria-hidden="true" size={19} />
      </button>
      <button
        type="button"
        aria-label="Next gallery photos"
        onClick={() => scrollGallery(1)}
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-honey text-charcoal shadow-soft transition hover:bg-[#ffc85c] sm:right-6 sm:h-12 sm:w-12 lg:right-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        <ArrowRight aria-hidden="true" size={19} />
      </button>
      <div
        ref={railRef}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onTouchStart={pauseThenResume}
        onFocus={pauseThenResume}
        className="home-gallery-rail flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto px-4 py-2 sm:gap-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        <div className="w-0 shrink-0 sm:w-4" aria-hidden="true" />
        {homeGalleryImages.map((image, index) => {
          const isLead = index === 0;
          const isFeatured = image.featured && !isLead;
          const isOffset = index % 5 === 2 || index % 5 === 4;

          return (
            <figure
              key={image.src}
              style={{ "--gallery-index": index } as CSSProperties}
              className={classNames(
                "home-gallery-card group relative h-[20rem] min-w-0 shrink-0 snap-center overflow-hidden rounded-[1.45rem] bg-white/8 shadow-soft ring-1 ring-white/10 sm:h-[25rem]",
                isLead || isFeatured ? "w-[84vw] sm:w-[34rem] lg:w-[38rem]" : "w-[72vw] sm:w-[20rem] lg:w-[22rem]",
                isOffset && "sm:mt-8"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index < 2}
                sizes={isLead || isFeatured ? "(min-width: 1024px) 38rem, (min-width: 640px) 34rem, 84vw" : "(min-width: 1024px) 22rem, (min-width: 640px) 20rem, 72vw"}
                className="object-cover transition duration-700 group-hover:scale-105"
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
