import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
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

const visibleCategories = menuCategories.filter((category) => customerMenuItems.some((item) => item.category === category));

function categoryHref(category: MenuCategory) {
  return `/menu?category=${encodeURIComponent(category)}`;
}

export function PopularMenu() {
  const previewItems = popularItems.length >= 8 ? popularItems : customerMenuItems.slice(0, 8);

  return (
    <Section
      eyebrow="Fresh favorites"
      title="Start with a favorite, then pick a category."
      intro="Eight quick picks from the online menu, plus every category when you want to browse."
      className="bg-cream"
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_0.86fr] lg:items-start">
        <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-3 shadow-soft sm:p-4">
          <div className="grid gap-2 sm:grid-cols-2">
            {previewItems.map((item, index) => (
              <Link
                key={item.id}
                href={categoryHref(item.category)}
                className={classNames(
                  "group flex min-h-24 min-w-0 items-start justify-between gap-4 rounded-2xl border border-charcoal/8 bg-cream/55 p-4 transition hover:border-honey hover:bg-white",
                  index === 0 && "sm:col-span-2 sm:min-h-28"
                )}
              >
                <span className="min-w-0">
                  <span className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-toast">{getCategoryLabel(item.category)}</span>
                  <span className="mt-1 block text-lg font-black leading-6 text-charcoal">{item.name}</span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="block text-sm font-black text-charcoal">{item.priceLabel || "Options vary"}</span>
                  <ArrowRight aria-hidden="true" className="ml-auto mt-5 text-toast transition group-hover:translate-x-1" size={18} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-4">
            <Button href={onlineOrderUrl} className="w-full sm:w-auto">
              See Full Menu
            </Button>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-4 shadow-soft sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-xl font-black text-charcoal">Browse Categories</h3>
            <span className="shrink-0 rounded-full bg-cream px-3 py-1 text-xs font-black text-toast">{visibleCategories.length}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {visibleCategories.map((category) => (
              <Link
                key={category}
                href={categoryHref(category)}
                className="rounded-full bg-cream px-4 py-2 text-sm font-black text-charcoal transition hover:bg-honey"
                aria-label={`Open ${category} menu category`}
              >
                {getCategoryLabel(category)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
