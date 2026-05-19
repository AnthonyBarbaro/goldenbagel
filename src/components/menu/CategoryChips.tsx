"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MenuCategory } from "@/data/liveMenu";
import { classNames } from "@/lib/format";
import { getCategoryLabel } from "@/lib/menuCategories";

type CategoryChipsProps = {
  categories: MenuCategory[];
  active: MenuCategory | "All";
  onChange: (category: MenuCategory | "All") => void;
};

export function CategoryChips({ categories, active, onChange }: CategoryChipsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateScrollState() {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    setCanScrollLeft(scroller.scrollLeft > 4);
    setCanScrollRight(scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 4);
  }

  function slide(direction: "left" | "right") {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return undefined;
    }

    updateScrollState();
    scroller.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [categories]);

  return (
    <div className="sticky top-[69px] z-30 -mx-4 border-y border-charcoal/10 bg-cream/92 px-4 py-3 backdrop-blur-xl sm:top-[73px] sm:-mx-6 sm:px-6 lg:top-[77px] lg:-mx-8 lg:px-8">
      <div className="relative">
        <button
          type="button"
          onClick={() => slide("left")}
          disabled={!canScrollLeft}
          aria-label="Show previous menu categories"
          className={classNames(
            "absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal shadow-soft ring-1 ring-charcoal/10 transition lg:flex",
            canScrollLeft ? "hover:bg-sesame" : "pointer-events-none opacity-0"
          )}
        >
          <ChevronLeft aria-hidden="true" size={20} />
        </button>

        <div
          ref={scrollerRef}
          className="overflow-x-auto scroll-smooth px-0 [scrollbar-width:none] lg:px-12 [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max gap-2 pr-8">
            {(["All", ...categories] as Array<MenuCategory | "All">).map((category) => {
              const selected = active === category;
              const label = getCategoryLabel(category);

              return (
                <button
                  key={category}
                  type="button"
                  aria-label={label === category ? undefined : category}
                  onClick={(event) => {
                    onChange(category);
                    event.currentTarget.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "center"
                    });
                  }}
                  className={classNames(
                    "min-h-10 shrink-0 rounded-full px-4 text-sm font-black transition",
                    selected ? "bg-charcoal text-white shadow-soft" : "bg-white text-charcoal hover:bg-sesame"
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          aria-hidden="true"
          className={classNames(
            "pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-cream via-cream/90 to-transparent transition-opacity lg:block",
            canScrollLeft ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          aria-hidden="true"
          className={classNames(
            "pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-cream via-cream/90 to-transparent transition-opacity lg:block",
            canScrollRight ? "opacity-100" : "opacity-0"
          )}
        />

        <button
          type="button"
          onClick={() => slide("right")}
          disabled={!canScrollRight}
          aria-label="Show more menu categories"
          className={classNames(
            "absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal shadow-soft ring-1 ring-charcoal/10 transition lg:flex",
            canScrollRight ? "hover:bg-sesame" : "pointer-events-none opacity-0"
          )}
        >
          <ChevronRight aria-hidden="true" size={20} />
        </button>
      </div>
    </div>
  );
}
