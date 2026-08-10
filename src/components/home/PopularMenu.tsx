import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { featuredMenuItemIds, menuCategories, menuItems, type MenuCategory, type MenuItem } from "@/data/liveMenu";
import { onlineOrderUrl } from "@/config/site";
import { classNames } from "@/lib/format";
import { getCategoryLabel } from "@/lib/menuCategories";

const popularItems = featuredMenuItemIds
  .map((id) => menuItems.find((item) => item.id === id))
  .filter((item): item is MenuItem => Boolean(item))
  .slice(0, 8);

const customerMenuItems = menuItems.filter(
  (item) => item.available && item.category !== "Flavors & Toppings" && ((item.priceCents || 0) > 0 || item.modifiers.length > 0)
);

const hiddenHomeCategories = new Set<MenuCategory>(["Other items", "Secret Menu", "Off Menu", "Beverages", "Donuts"]);
const visibleCategories = menuCategories.filter(
  (category) => !hiddenHomeCategories.has(category) && customerMenuItems.some((item) => item.category === category)
);

function categoryHref(category: MenuCategory) {
  return `/menu?category=${encodeURIComponent(category)}`;
}

export function PopularMenu() {
  const previewItems = popularItems.length >= 8 ? popularItems : customerMenuItems.slice(0, 8);

  return (
    <Section
      title="Start with a quick pick or browse the counter."
      intro="Jump into a category, then customize every item exactly how you want it."
      className="bg-cream"
    >
      <div className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-[minmax(0,1fr)_8rem] gap-3 sm:grid-cols-[minmax(0,1fr)_12rem] lg:grid-cols-[minmax(0,1fr)_14rem]">
          <div className="min-w-0 rounded-[1.25rem] border border-charcoal/10 bg-white p-3 shadow-soft sm:rounded-[1.5rem] sm:p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-lg font-black text-charcoal sm:text-xl">
                <span className="sm:hidden">Categories</span>
                <span className="hidden sm:inline">Browse Categories</span>
              </h3>
            </div>
            <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:gap-2 sm:overflow-visible">
              {visibleCategories.map((category) => (
                <Link
                  key={category}
                  href={categoryHref(category)}
                  className="shrink-0 rounded-full bg-cream px-3 py-2 text-xs font-black text-charcoal transition hover:bg-honey sm:px-3.5 lg:px-4 lg:text-sm"
                  aria-label={`Open ${category} menu category`}
                >
                  {getCategoryLabel(category)}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href={onlineOrderUrl}
            className="group flex min-w-0 flex-col justify-between rounded-[1.25rem] bg-charcoal p-3 text-white shadow-soft transition hover:bg-espresso sm:rounded-[1.5rem] sm:p-4"
          >
            <span className="text-sm font-black leading-5 sm:text-lg sm:leading-6">See the full menu</span>
            <span className="mt-4 flex h-9 w-9 items-center justify-center self-end rounded-full bg-honey text-charcoal sm:h-11 sm:w-11">
              <ArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" size={18} />
            </span>
            <span className="mt-3 text-xs font-bold leading-4 text-white/68">Every item and option</span>
          </Link>
        </div>

        <div className="rounded-[1.25rem] border border-charcoal/10 bg-white p-3 shadow-soft sm:rounded-[1.5rem] sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-lg font-black text-charcoal sm:text-xl">Quick Picks</h3>
            <span className="text-xs font-black text-toast">{previewItems.length} picks</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {previewItems.map((item) => (
              <Link
                key={item.id}
                href={categoryHref(item.category)}
                className={classNames(
                  "group flex min-h-20 min-w-0 items-start justify-between gap-3 rounded-2xl border border-charcoal/8 bg-cream/55 p-3 transition hover:border-honey hover:bg-white sm:min-h-24 sm:p-4"
                )}
              >
                <span className="min-w-0">
                  <span className="text-xs font-black uppercase tracking-[0.1em] text-toast">{getCategoryLabel(item.category)}</span>
                  <span className="mt-1 block text-base font-black leading-5 text-charcoal sm:text-lg sm:leading-6">{item.name}</span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="block text-xs font-black text-charcoal sm:text-sm">{item.priceLabel || "Options vary"}</span>
                  <ArrowRight aria-hidden="true" className="ml-auto mt-4 text-toast transition group-hover:translate-x-1" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
