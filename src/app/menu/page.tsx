import type { Metadata } from "next";
import { CartDrawer } from "@/components/order/CartDrawer";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, createPageMetadata, menuSchema } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Menu",
  "Browse Golden Bagel Cafe bagels, breakfast sandwiches, wraps, salads, smoothies, and cafe favorites.",
  "/menu/"
);

export default function MenuPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Menu", path: "/menu/" }])} />
      <JsonLd data={menuSchema()} />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Menu</p>
          <h1 className="mt-4 font-serif text-5xl font-black tracking-tight text-charcoal sm:text-7xl">Bagels, sandwiches, wraps and smoothies.</h1>
          <p className="mt-5 text-lg leading-8 text-espresso/74">
            Search, filter, customize, and add cafe favorites to your pickup cart. Menu data is local and ready for future Clover item IDs.
          </p>
        </div>

        <div className="mt-10">
          <MenuGrid />
        </div>
      </div>
      <CartDrawer />
    </main>
  );
}
