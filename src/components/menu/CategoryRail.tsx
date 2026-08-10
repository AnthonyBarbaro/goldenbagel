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
    <div className="max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[1.5rem] border border-charcoal/10 bg-white p-3 shadow-soft">
      <div className="mb-3 border-b border-charcoal/10 px-2 pb-3">
        <h2 className="font-serif text-xl font-black tracking-tight text-charcoal">Browse the menu</h2>
        <p className="mt-1 text-sm font-bold text-espresso/75">
          {totalCount} {totalCount === 1 ? "item" : "items"} available
        </p>
      </div>

      <div className="space-y-1" role="group" aria-label="Filter menu by category">
        {categoryOptions.map(({ category, count }) => {
          const selected = activeCategory === category;
          const label = getCategoryLabel(category);

          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              aria-label={`${label === category ? label : `${label} (${category})`}, ${count} ${count === 1 ? "item" : "items"}`}
              onClick={() => onCategory(category)}
              className={classNames(
                "flex min-h-11 w-full items-center justify-between gap-3 rounded-2xl border px-3 py-2 text-left text-sm font-black transition",
                selected
                  ? "border-charcoal bg-charcoal text-white"
                  : "border-transparent text-charcoal hover:border-charcoal/10 hover:bg-cream focus-visible:bg-cream"
              )}
            >
              <span className="min-w-0 truncate">{label}</span>
              <span
                className={classNames(
                  "shrink-0 rounded-full px-2 py-0.5 text-xs font-black",
                  selected ? "bg-honey text-charcoal" : "bg-cream text-espresso/70"
                )}
                aria-hidden="true"
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
