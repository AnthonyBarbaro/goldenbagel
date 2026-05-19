import type { Metadata } from "next";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { menuCategories, type MenuCategory } from "@/data/liveMenu";
import { breadcrumbSchema, createPageMetadata, menuSchema } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Menu & Ordering",
  "Order Golden Bagel Cafe bagels, breakfast sandwiches, wraps, salads, smoothies, and cafe favorites from the menu.",
  "/menu/"
);

type MenuPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

function getInitialCategory(category?: string): MenuCategory | "All" {
  if (!category) return "All";

  const decodedCategory = decodeURIComponent(category);
  return menuCategories.includes(decodedCategory as MenuCategory) ? (decodedCategory as MenuCategory) : "All";
}

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialCategory = getInitialCategory(resolvedSearchParams?.category);

  return (
    <main className="bg-cream px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Menu", path: "/menu/" }])} />
      <JsonLd data={menuSchema()} />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-black tracking-tight text-charcoal sm:text-5xl">Order Online</h1>
          <p className="mt-2 text-base font-bold leading-7 text-espresso/70">Search, choose, customize, add to cart.</p>
        </div>

        <div className="mt-6">
          <MenuGrid initialCategory={initialCategory} />
        </div>
      </div>
    </main>
  );
}
