import type { ReactElement } from "react";
import { MapPin } from "lucide-react";
import { CartButton } from "@/components/layout/CartButton";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { Section } from "@/components/ui/Section";
import { primaryLocation } from "@/config/site";
import { getCloverLiveMenu } from "@/lib/cloverLiveMenu";

export async function PopularMenu(): Promise<ReactElement> {
  const menu = await getCloverLiveMenu();

  return (
    <Section
      title="Our full menu, ready to order."
      intro="Find your favorite, choose your options, and add it to your cart. Choose your pickup time at checkout."
      className="bg-cream"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-charcoal/10 bg-white p-4 sm:mb-8 sm:px-5">
        <p className="inline-flex items-center gap-2 text-sm font-bold text-espresso/75">
          <MapPin aria-hidden="true" className="shrink-0 text-toast" size={18} />
          Pickup at {primaryLocation.shortName}
        </p>
        <CartButton />
      </div>
      <MenuGrid items={menu.items} categories={menu.categories} />
    </Section>
  );
}
