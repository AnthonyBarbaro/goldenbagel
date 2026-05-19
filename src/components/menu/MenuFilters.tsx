"use client";

import type { MenuCategory } from "@/data/liveMenu";
import { menuCategories } from "@/data/liveMenu";
import { CategoryChips } from "@/components/menu/CategoryChips";
import { MenuSearch } from "@/components/menu/MenuSearch";

type MenuFiltersProps = {
  categories?: MenuCategory[];
  search: string;
  onSearch: (value: string) => void;
  activeCategory: MenuCategory | "All";
  onCategory: (category: MenuCategory | "All") => void;
};

export function MenuFilters({ categories = menuCategories, search, onSearch, activeCategory, onCategory }: MenuFiltersProps) {
  return (
    <div className="space-y-3">
      <MenuSearch value={search} onChange={onSearch} />
      <CategoryChips categories={categories} active={activeCategory} onChange={onCategory} />
    </div>
  );
}
