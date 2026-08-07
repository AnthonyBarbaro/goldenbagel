"use client";

import type { MenuCategory } from "@/data/liveMenu";
import { classNames } from "@/lib/format";
import { getCategoryLabel } from "@/lib/menuCategories";

type CategoryRailItem = {
  category: MenuCategory;
  count: number;
};

type CategoryRailProps = {
  categories: CategoryRailItem[];
  activeCategory: MenuCategory | "All";
  totalCount: number;
  onCategory: (category: MenuCategory | "All") => void;
};

export function CategoryRail({ categories, activeCategory, totalCount, onCategory }: CategoryRailProps) {
  const categoryOptions: Array<CategoryRailItem | { category: "All"; count: number }> = [
    { category: "All", count: totalCount },
    ...categories
  ];

  return (
    <nav
      aria-label="Menu categories"
      className="max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[1.25rem] border border-charcoal/10 bg-white p-3 shadow-soft"
    >
      <div className="mb-2 px-2">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-toast">Categories</p>
        <p className="mt-1 text-sm font-bold text-espresso/65">{totalCount} items</p>
      </div>

      <div className="space-y-1">
        {categoryOptions.map(({ category, count }) => {
          const selected = activeCategory === category;
          const label = getCategoryLabel(category);

          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              aria-label={label === category ? undefined : category}
              onClick={() => onCategory(category)}
              className={classNames(
                "flex min-h-11 w-full items-center justify-between gap-3 rounded-2xl px-3 py-2 text-left text-sm font-black transition",
                selected
                  ? "bg-charcoal text-white shadow-sm"
                  : "text-charcoal hover:bg-cream focus-visible:bg-cream"
              )}
            >
              <span className="min-w-0 truncate">{label}</span>
              <span
                className={classNames(
                  "shrink-0 rounded-full px-2 py-0.5 text-xs font-black",
                  selected ? "bg-white/20 text-white" : "bg-honey/30 text-toast"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
