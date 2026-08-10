"use client";

import type { MenuCategory } from "@/data/liveMenu";
import { classNames } from "@/lib/format";
import { getCategoryLabel } from "@/lib/menuCategories";

type CategoryChipsProps = {
  categories: MenuCategory[];
  active: MenuCategory | "All";
  onChange: (category: MenuCategory | "All") => void;
};

export function CategoryChips({ categories, active, onChange }: CategoryChipsProps) {
  return (
    <div className="sticky top-[69px] z-30 -mx-4 border-y border-charcoal/10 bg-cream/95 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:hidden">
      <div className="relative">
        <div className="overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-2 pr-4" role="group" aria-label="Filter menu by category">
            {(["All", ...categories] as Array<MenuCategory | "All">).map((category) => {
              const selected = active === category;
              const label = getCategoryLabel(category);

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selected}
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
                    "min-h-11 shrink-0 rounded-full border px-4 text-sm font-black transition",
                    selected
                      ? "border-charcoal bg-charcoal text-white"
                      : "border-charcoal/10 bg-white text-charcoal hover:border-honey hover:bg-sesame/45"
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
