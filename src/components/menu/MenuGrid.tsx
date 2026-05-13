"use client";

import { useMemo, useState } from "react";
import { MenuCard } from "@/components/menu/MenuCard";
import { MenuFilters } from "@/components/menu/MenuFilters";
import type { MenuCategory, MenuTag } from "@/data/menu";
import { menuItems } from "@/data/menu";

export function MenuGrid() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "All">("All");
  const [activeTags, setActiveTags] = useState<MenuTag[]>([]);

  const visibleItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      const matchesTags = activeTags.length === 0 || activeTags.every((tag) => item.tags.includes(tag));

      return matchesCategory && matchesSearch && matchesTags;
    });
  }, [activeCategory, activeTags, search]);

  return (
    <div className="space-y-8">
      <MenuFilters
        search={search}
        onSearch={setSearch}
        activeCategory={activeCategory}
        onCategory={setActiveCategory}
        activeTags={activeTags}
        onTags={setActiveTags}
      />

      <div aria-live="polite" className="text-sm font-bold text-espresso/70">
        {visibleItems.length} item{visibleItems.length === 1 ? "" : "s"} shown
      </div>

      {visibleItems.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="rounded-[1.5rem] bg-white p-8 text-center shadow-soft">
          <h2 className="text-2xl font-black text-charcoal">No menu items found</h2>
          <p className="mt-2 text-espresso/72">Try a different search term or category.</p>
        </div>
      )}
    </div>
  );
}
