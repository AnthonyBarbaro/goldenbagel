import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, MapPin, MonitorUp } from "lucide-react";
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

  let decodedCategory: string;

  try {
    decodedCategory = decodeURIComponent(category);
  } catch {
    return "All";
  }

  return categories.includes(decodedCategory as MenuCategory) ? (decodedCategory as MenuCategory) : "All";
}

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const resolvedSearchParams = await searchParams;
  const menu = await getCloverLiveMenu();
  const initialCategory = getInitialCategory(resolvedSearchParams?.category, menu.categories);

  return (
    <main className="min-h-screen bg-cream px-4 pb-24 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-20">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Menu", path: "/menu/" }])} />
      <JsonLd data={menuSchema()} />
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-charcoal text-white shadow-soft">
          <div className="flex flex-col gap-6 px-5 py-7 sm:px-8 sm:py-9 lg:flex-row lg:items-end lg:justify-between lg:px-10">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-black tracking-[-0.025em] text-white sm:text-5xl">Order Online</h1>
              <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-white/75 sm:text-lg">
                Find a favorite, make it yours, and choose a pickup time at checkout.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-extrabold text-white/85">
                <span className="inline-flex items-center gap-2">
                  <Clock3 aria-hidden="true" className="text-honey" size={18} />
                  Open daily, 6:30 AM–3 PM
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin aria-hidden="true" className="text-honey" size={18} />
                  Pickup in El Cajon
                </span>
              </div>
            </div>
            <Link
              href="/menu-tv"
              className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-charcoal shadow-soft transition hover:bg-sesame"
            >
              <MonitorUp aria-hidden="true" size={18} />
              Cafe menu board
            </Link>
          </div>
        </section>

        <div className="mt-6 sm:mt-8">
          <MenuGrid initialCategory={initialCategory} items={menu.items} categories={menu.categories} />
        </div>
      </div>
    </main>
  );
}
