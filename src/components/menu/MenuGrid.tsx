"use client";

import { useMemo, useState } from "react";
import { MenuCard } from "@/components/menu/MenuCard";
import { MenuFilters } from "@/components/menu/MenuFilters";
import type { MenuCategory } from "@/data/liveMenu";
import { menuCategories, menuItems } from "@/data/liveMenu";
import { getCategoryLabel } from "@/lib/menuCategories";

type MenuGridProps = {
  initialCategory?: MenuCategory | "All";
};

const customerMenuItems = menuItems.filter(
  (item) => item.available && item.category !== "Flavors & Toppings" && ((item.priceCents || 0) > 0 || item.modifiers.length > 0)
);

const customerMenuCategories = menuCategories.filter((category) => customerMenuItems.some((item) => item.category === category));

function normalizeInitialCategory(category?: MenuCategory | "All") {
  return category && (category === "All" || customerMenuCategories.includes(category)) ? category : "All";
}

export function MenuGrid({ initialCategory = "All" }: MenuGridProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "All">(() => normalizeInitialCategory(initialCategory));

  const visibleItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return customerMenuItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const groupedItems = useMemo(
    () =>
      customerMenuCategories
        .map((category) => ({
          category,
          items: visibleItems.filter((item) => item.category === category)
        }))
        .filter((group) => group.items.length > 0),
    [visibleItems]
  );

  const showGroupedMenu = activeCategory === "All" && search.trim().length === 0;

  return (
    <div className="space-y-5">
      <MenuFilters
        categories={customerMenuCategories}
        search={search}
        onSearch={setSearch}
        activeCategory={activeCategory}
        onCategory={setActiveCategory}
      />

      {visibleItems.length > 0 ? (
        showGroupedMenu ? (
          <div className="space-y-8">
            {groupedItems.map((group) => (
              <section key={group.category} className="scroll-mt-40">
                <h2 className="mb-3 border-b border-charcoal/10 pb-2 text-2xl font-black text-charcoal">
                  {getCategoryLabel(group.category)}
                </h2>
                <div className="grid gap-3 lg:grid-cols-2">
                  {group.items.map((item) => (
                    <MenuCard key={item.id} item={item} showCategory={false} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="grid gap-3 lg:grid-cols-2">
            {visibleItems.map((item) => (
              <MenuCard key={item.id} item={item} showCategory={activeCategory === "All"} />
            ))}
          </div>
        )
      ) : (
        <div className="rounded-[1.5rem] bg-white p-8 text-center shadow-soft">
          <h2 className="text-2xl font-black text-charcoal">No menu items found</h2>
          <p className="mt-2 text-espresso/72">Try a different search term or category.</p>
        </div>
      )}
    </div>
  );
}
