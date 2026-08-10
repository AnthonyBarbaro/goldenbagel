"use client";

import type { MenuCategory } from "@/data/liveMenu";
import { CategoryChips } from "@/components/menu/CategoryChips";
import { MenuSearch } from "@/components/menu/MenuSearch";

type MenuFiltersProps = {
  categories: MenuCategory[];
  search: string;
  onSearch: (value: string) => void;
  activeCategory: MenuCategory | "All";
  onCategory: (category: MenuCategory | "All") => void;
  resultsId: string;
};

export function MenuFilters({ categories, search, onSearch, activeCategory, onCategory, resultsId }: MenuFiltersProps) {
  return (
    <div className="space-y-3">
      <MenuSearch id="menu-search-mobile" value={search} onChange={onSearch} resultsId={resultsId} />
      <CategoryChips categories={categories} active={activeCategory} onChange={onCategory} />
    </div>
  );
}
