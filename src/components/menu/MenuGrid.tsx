"use client";

import { RotateCcw, SearchX } from "lucide-react";
import { useDeferredValue, useId, useMemo, useRef, useState } from "react";
import { CategoryRail } from "@/components/menu/CategoryRail";
import { MenuCard } from "@/components/menu/MenuCard";
import { MenuFilters } from "@/components/menu/MenuFilters";
import { MenuRefresh } from "@/components/menu/MenuRefresh";
import { MenuSearch } from "@/components/menu/MenuSearch";
import type { MenuCategory, MenuItem } from "@/data/liveMenu";
import { getCategoryLabel } from "@/lib/menuCategories";

type MenuGridProps = {
  initialCategory?: MenuCategory | "All";
  items: MenuItem[];
  categories: MenuCategory[];
};

const hiddenMenuCategories = new Set<MenuCategory>(["Other items", "Secret Menu", "Off Menu"]);

function normalizeInitialCategory(category: MenuCategory | "All" | undefined, categories: MenuCategory[]) {
  return category && (category === "All" || categories.includes(category)) ? category : "All";
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

export function MenuGrid({ initialCategory = "All", items, categories }: MenuGridProps) {
  const resultsId = useId();
  const resultsRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const customerMenuItems = useMemo(
    () =>
      items.filter(
        (item) =>
          item.available &&
          item.category !== "Flavors & Toppings" &&
          !hiddenMenuCategories.has(item.category) &&
          ((item.priceCents || 0) > 0 || item.modifiers.length > 0)
      ),
    [items]
  );
  const customerMenuCategories = useMemo(
    () => categories.filter((category) => customerMenuItems.some((item) => item.category === category)),
    [categories, customerMenuItems]
  );
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "All">(() =>
    normalizeInitialCategory(initialCategory, customerMenuCategories)
  );
  const displayCategory = normalizeInitialCategory(activeCategory, customerMenuCategories);

  const searchMatchedItems = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase();

    return customerMenuItems.filter((item) => itemMatchesSearch(item, query));
  }, [customerMenuItems, deferredSearch]);

  const visibleItems = useMemo(
    () => searchMatchedItems.filter((item) => displayCategory === "All" || item.category === displayCategory),
    [displayCategory, searchMatchedItems]
  );

  const categoryRailItems = useMemo(
    () =>
      customerMenuCategories.map((category) => ({
        category,
        count: searchMatchedItems.filter((item) => item.category === category).length
      })),
    [customerMenuCategories, searchMatchedItems]
  );

  const groupedItems = useMemo(
    () =>
      customerMenuCategories
        .map((category) => ({
          category,
          items: visibleItems.filter((item) => item.category === category)
        }))
        .filter((group) => group.items.length > 0),
    [customerMenuCategories, visibleItems]
  );

  const showGroupedMenu = displayCategory === "All" && deferredSearch.trim().length === 0;
  const hasActiveFilters = displayCategory !== "All" || deferredSearch.trim().length > 0;
  const visibleResultLabel = `${visibleItems.length} ${visibleItems.length === 1 ? "item" : "items"}`;
  const resultsTitle = deferredSearch.trim()
    ? displayCategory === "All"
      ? `Results for “${deferredSearch.trim()}”`
      : `${getCategoryLabel(displayCategory)} matching “${deferredSearch.trim()}”`
    : getCategoryLabel(displayCategory);

  function clearFilters() {
    setSearch("");
    setActiveCategory("All");
  }

  function selectCategory(category: MenuCategory | "All") {
    setActiveCategory(category);
    window.requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ block: "start" }));
  }

  const menuContent =
    visibleItems.length > 0 ? (
      showGroupedMenu ? (
        <div className="space-y-10">
          {groupedItems.map((group) => (
            <section key={group.category} className="scroll-mt-40">
              <div className="mb-4 flex items-end justify-between gap-4 border-b border-charcoal/15 pb-3">
                <h2 className="font-serif text-2xl font-black tracking-tight text-charcoal sm:text-3xl">
                  {getCategoryLabel(group.category)}
                </h2>
                <p className="shrink-0 pb-0.5 text-sm font-black text-espresso/75">
                  {group.items.length} {group.items.length === 1 ? "item" : "items"}
                </p>
              </div>
              <div className="grid gap-4 xl:grid-cols-2">
                {group.items.map((item) => (
                  <MenuCard key={item.id} item={item} showCategory={false} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div>
          <div className="mb-4 flex flex-col gap-2 border-b border-charcoal/15 pb-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="break-words font-serif text-2xl font-black tracking-tight text-charcoal sm:text-3xl">{resultsTitle}</h2>
              <p className="mt-1 text-sm font-bold text-espresso/75">{visibleResultLabel}</p>
            </div>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full px-3 text-sm font-black text-toast transition hover:bg-white"
              >
                <RotateCcw aria-hidden="true" size={16} />
                Show full menu
              </button>
            )}
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            {visibleItems.map((item) => (
              <MenuCard key={item.id} item={item} showCategory={displayCategory === "All"} />
            ))}
          </div>
        </div>
      )
    ) : (
      <div className="rounded-[1.5rem] border border-charcoal/10 bg-white px-5 py-12 text-center shadow-soft sm:px-8">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream text-toast" aria-hidden="true">
          <SearchX size={25} />
        </span>
        <h2 className="mt-5 font-serif text-2xl font-black tracking-tight text-charcoal">Nothing matched that order</h2>
        <p className="mx-auto mt-2 max-w-md font-semibold leading-7 text-espresso/70">
          Try a shorter search, choose another category, or return to the full menu.
        </p>
        <button
          type="button"
          onClick={clearFilters}
          className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-5 text-sm font-black text-white shadow-soft transition hover:bg-espresso"
        >
          <RotateCcw aria-hidden="true" size={17} />
          Clear filters
        </button>
      </div>
    );

  return (
    <div className="space-y-5 lg:space-y-0">
      <MenuRefresh />
      <div className="lg:hidden">
        <MenuFilters
          categories={customerMenuCategories}
          search={search}
          onSearch={setSearch}
          activeCategory={displayCategory}
          onCategory={selectCategory}
          resultsId={resultsId}
        />
      </div>

      <div className="lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start lg:gap-6">
        <aside className="hidden lg:sticky lg:top-24 lg:block">
          <CategoryRail
            categories={categoryRailItems}
            activeCategory={displayCategory}
            totalCount={searchMatchedItems.length}
            onCategory={selectCategory}
          />
        </aside>

        <div className="min-w-0">
          <div className="hidden lg:mb-5 lg:block">
            <MenuSearch id="menu-search-desktop" value={search} onChange={setSearch} resultsId={resultsId} />
          </div>
          <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
            {visibleItems.length === 0
              ? "No menu items match the current search and category."
              : `${visibleResultLabel} shown${displayCategory === "All" ? "" : ` in ${getCategoryLabel(displayCategory)}`}.`}
          </p>
          <div ref={resultsRef} id={resultsId} className="scroll-mt-28" aria-busy={search !== deferredSearch}>
            {menuContent}
          </div>
        </div>
      </div>
    </div>
  );
}
