"use client";

import type { MenuCategory } from "@/data/menu";
import { classNames } from "@/lib/format";

type CategoryChipsProps = {
  categories: MenuCategory[];
  active: MenuCategory | "All";
  onChange: (category: MenuCategory | "All") => void;
};

export function CategoryChips({ categories, active, onChange }: CategoryChipsProps) {
  return (
    <div className="sticky top-[73px] z-30 -mx-4 overflow-x-auto border-y border-charcoal/10 bg-cream/92 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:top-[77px] lg:-mx-8 lg:px-8">
      <div className="flex min-w-max gap-2">
        {(["All", ...categories] as Array<MenuCategory | "All">).map((category) => {
          const selected = active === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={classNames(
                "min-h-10 rounded-full px-4 text-sm font-black transition",
                selected ? "bg-charcoal text-white shadow-soft" : "bg-white text-charcoal hover:bg-sesame"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
