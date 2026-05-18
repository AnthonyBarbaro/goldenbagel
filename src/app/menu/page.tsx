import type { Metadata } from "next";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { isLiveMenu, menuCategories, menuItems } from "@/data/liveMenu";
import { breadcrumbSchema, createPageMetadata, menuSchema } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Menu & Ordering",
  "Order Golden Bagel Cafe bagels, breakfast sandwiches, wraps, salads, smoothies, and cafe favorites from the menu.",
  "/menu/"
);

export default function MenuPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Menu", path: "/menu/" }])} />
      <JsonLd data={menuSchema()} />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Menu & ordering</p>
          <h1 className="mt-4 font-serif text-5xl font-black tracking-tight text-charcoal sm:text-7xl">Browse the menu. Order online.</h1>
          <p className="mt-5 text-lg leading-8 text-espresso/74">
            Search the items currently published for Golden Bagel online ordering. Items with sizes, flavors, or add-ons may show final pricing at checkout.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-black text-charcoal">
            <span className="rounded-full bg-white px-4 py-2 shadow-soft ring-1 ring-charcoal/10">{menuItems.length} items</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-soft ring-1 ring-charcoal/10">{menuCategories.length} categories</span>
            {isLiveMenu && <span className="rounded-full bg-honey px-4 py-2 shadow-soft">Synced with online ordering</span>}
          </div>
        </div>

        <div className="mt-10">
          <MenuGrid />
        </div>
      </div>
    </main>
  );
}
