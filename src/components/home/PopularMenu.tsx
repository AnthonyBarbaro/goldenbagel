import { Suspense, type ReactElement } from "react";
import { MapPin } from "lucide-react";
import { CartButton } from "@/components/layout/CartButton";
import { LiveMenu } from "@/components/menu/LiveMenu";
import { MenuLoading } from "@/components/menu/MenuLoading";
import { Section } from "@/components/ui/Section";
import { primaryLocation } from "@/config/site";

export function PopularMenu(): ReactElement {
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
      <Suspense fallback={<MenuLoading />}>
        <LiveMenu deferUntilVisible />
      </Suspense>
    </Section>
  );
}
