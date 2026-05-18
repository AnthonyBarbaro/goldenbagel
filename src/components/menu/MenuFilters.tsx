"use client";

import type { MenuCategory, MenuTag } from "@/data/liveMenu";
import { menuCategories } from "@/data/liveMenu";
import { CategoryChips } from "@/components/menu/CategoryChips";
import { MenuSearch } from "@/components/menu/MenuSearch";
import { classNames } from "@/lib/format";

type MenuFiltersProps = {
  search: string;
  onSearch: (value: string) => void;
  activeCategory: MenuCategory | "All";
  onCategory: (category: MenuCategory | "All") => void;
  activeTags: MenuTag[];
  onTags: (tags: MenuTag[]) => void;
  tagOptions: MenuTag[];
};

export function MenuFilters({ search, onSearch, activeCategory, onCategory, activeTags, onTags, tagOptions }: MenuFiltersProps) {
  function toggleTag(tag: MenuTag) {
    onTags(activeTags.includes(tag) ? activeTags.filter((item) => item !== tag) : [...activeTags, tag]);
  }

  return (
    <div className="space-y-4">
      <MenuSearch value={search} onChange={onSearch} />
      <CategoryChips categories={menuCategories} active={activeCategory} onChange={onCategory} />
      {tagOptions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tagOptions.map((tag) => {
            const selected = activeTags.includes(tag);

            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={classNames(
                  "min-h-10 rounded-full px-4 text-xs font-black uppercase tracking-[0.14em] transition",
                  selected ? "bg-honey text-charcoal" : "bg-white text-espresso/72 ring-1 ring-charcoal/10 hover:bg-cream"
                )}
              >
                {tag}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
