"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CategoryRail } from "@/components/menu/CategoryRail";
import { MenuCard } from "@/components/menu/MenuCard";
import { MenuFilters } from "@/components/menu/MenuFilters";
import type { MenuCategory, MenuItem } from "@/data/liveMenu";
import { menuCategories, menuItems } from "@/data/liveMenu";
import { getCategoryLabel } from "@/lib/menuCategories";

type MenuGridProps = {
  initialCategory?: MenuCategory | "All";
};

const hiddenMenuCategories = new Set<MenuCategory>(["Other items", "Secret Menu", "Off Menu"]);

const customerMenuItems = menuItems.filter(
  (item) =>
    item.available &&
    item.category !== "Flavors & Toppings" &&
    !hiddenMenuCategories.has(item.category) &&
    ((item.priceCents || 0) > 0 || item.modifiers.length > 0)
);

const customerMenuCategories = menuCategories.filter((category) => customerMenuItems.some((item) => item.category === category));

function normalizeInitialCategory(category?: MenuCategory | "All") {
  return category && (category === "All" || customerMenuCategories.includes(category)) ? category : "All";
}

function itemMatchesSearch(item: MenuItem, query: string) {
  return (
    !query ||
    item.name.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query) ||
    item.modifiers.some(
      (modifier) =>
        modifier.name.toLowerCase().includes(query) ||
        modifier.options.some((option) => (typeof option === "string" ? option : option.name).toLowerCase().includes(query))
    )
  );
}

type DesktopMenuSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

function DesktopMenuSearch({ value, onChange }: DesktopMenuSearchProps) {
  return (
    <div className="relative">
      <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso/45" size={20} />
      <label htmlFor="menu-search-desktop" className="sr-only">
        Search menu
      </label>
      <input
        id="menu-search-desktop"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search menu"
        className="min-h-14 w-full rounded-full border border-charcoal/10 bg-white py-3 pl-12 pr-5 text-charcoal shadow-soft outline-none transition focus:border-honey"
      />
    </div>
  );
}

export function MenuGrid({ initialCategory = "All" }: MenuGridProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "All">(() => normalizeInitialCategory(initialCategory));

  const searchMatchedItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return customerMenuItems.filter((item) => itemMatchesSearch(item, query));
  }, [search]);

  const visibleItems = useMemo(
    () => searchMatchedItems.filter((item) => activeCategory === "All" || item.category === activeCategory),
    [activeCategory, searchMatchedItems]
  );

  const categoryRailItems = useMemo(
    () =>
      customerMenuCategories.map((category) => ({
        category,
        count: searchMatchedItems.filter((item) => item.category === category).length
      })),
    [searchMatchedItems]
  );

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

  const menuContent =
    visibleItems.length > 0 ? (
      showGroupedMenu ? (
        <div className="space-y-8">
          {groupedItems.map((group) => (
            <section key={group.category} className="scroll-mt-40">
              <h2 className="mb-3 border-b border-charcoal/10 pb-2 text-2xl font-black text-charcoal">
                {getCategoryLabel(group.category)}
              </h2>
              <div className="grid gap-3 xl:grid-cols-2">
                {group.items.map((item) => (
                  <MenuCard key={item.id} item={item} showCategory={false} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="grid gap-3 xl:grid-cols-2">
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
    );

  return (
    <div className="space-y-5 lg:space-y-0">
      <div className="lg:hidden">
        <MenuFilters
          categories={customerMenuCategories}
          search={search}
          onSearch={setSearch}
          activeCategory={activeCategory}
          onCategory={setActiveCategory}
        />
      </div>

      <div className="lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start lg:gap-6">
        <aside className="hidden lg:sticky lg:top-24 lg:block">
          <CategoryRail
            categories={categoryRailItems}
            activeCategory={activeCategory}
            totalCount={searchMatchedItems.length}
            onCategory={setActiveCategory}
          />
        </aside>

        <div className="min-w-0">
          <div className="hidden lg:mb-5 lg:block">
            <DesktopMenuSearch value={search} onChange={setSearch} />
          </div>
          {menuContent}
        </div>
      </div>
    </div>
  );
}
