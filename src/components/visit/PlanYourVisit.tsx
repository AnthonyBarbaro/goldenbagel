import { Clock3, HelpCircle, MapPinned, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { onlineOrderUrl, siteConfig } from "@/config/site";
import { getGoogleMapsDirectionsUrl } from "@/lib/maps";

const planCards = [
  {
    title: "Order ahead",
    text: "Place a pickup order and grab your food fresh.",
    icon: ShoppingBag
  },
  {
    title: "Stop by early",
    text: "Fresh bagels and breakfast favorites are served daily from 6:30 AM.",
    icon: Clock3
  },
  {
    title: "Easy pickup",
    text: "Use the map above to get directions to Fletcher Parkway.",
    icon: MapPinned
  },
  {
    title: "Need help?",
    text: "Call the cafe before heading over.",
    icon: HelpCircle
  }
];

export function PlanYourVisit() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-toast">Plan your visit</p>
          <h2 className="mt-3 font-serif text-3xl font-black text-charcoal sm:text-5xl">Make the stop easy.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {planCards.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-[1.5rem] bg-cream p-5 shadow-soft ring-1 ring-charcoal/8">
              <Icon aria-hidden="true" className="text-toast" size={28} />
              <h3 className="mt-4 text-xl font-black text-charcoal">{title}</h3>
              <p className="mt-2 text-sm font-bold leading-6 text-espresso/70">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={onlineOrderUrl} className="w-full sm:w-auto">Order Pickup</Button>
          <Button href="/menu" variant="secondary" className="w-full sm:w-auto">View Menu</Button>
          <Button href={siteConfig.phoneHref} variant="secondary" className="w-full sm:w-auto">Call Now</Button>
          <Button href={getGoogleMapsDirectionsUrl()} variant="secondary" className="w-full sm:w-auto">Directions</Button>
        </div>
      </div>
    </section>
  );
}
