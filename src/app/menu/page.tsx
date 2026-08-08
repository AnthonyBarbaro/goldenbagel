import type { Metadata } from "next";
import Link from "next/link";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import type { MenuCategory } from "@/data/liveMenu";
import { getCloverLiveMenu } from "@/lib/cloverLiveMenu";
import { breadcrumbSchema, createPageMetadata, menuSchema } from "@/lib/seo";

export const revalidate = 300;

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

function getInitialCategory(category: string | undefined, categories: MenuCategory[]): MenuCategory | "All" {
  if (!category) return "All";

  const decodedCategory = decodeURIComponent(category);
  return categories.includes(decodedCategory as MenuCategory) ? (decodedCategory as MenuCategory) : "All";
}

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const resolvedSearchParams = await searchParams;
  const menu = await getCloverLiveMenu();
  const initialCategory = getInitialCategory(resolvedSearchParams?.category, menu.categories);

  return (
    <main className="bg-cream px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Menu", path: "/menu/" }])} />
      <JsonLd data={menuSchema()} />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl font-black tracking-tight text-charcoal sm:text-5xl">Order Online</h1>
            <p className="mt-2 text-base font-bold leading-7 text-espresso/70">Search, choose, customize, add to cart.</p>
          </div>
          <Link
            href="/menu-tv"
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-charcoal/12 bg-white px-5 py-2.5 text-sm font-black text-charcoal shadow-sm transition hover:border-honey hover:bg-sesame/30"
          >
            View cafe menu board
          </Link>
        </div>

        <div className="mt-6">
          <MenuGrid initialCategory={initialCategory} items={menu.items} categories={menu.categories} />
        </div>
      </div>
    </main>
  );
}
