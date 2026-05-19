import Link from "next/link";
import { ArrowRight, MapPin, Phone, ShoppingBag } from "lucide-react";
import { directionsUrl, onlineOrderUrl, primaryLocation } from "@/config/site";

const actions = [
  {
    title: "Order Online",
    text: "Menu, pickup time, payment.",
    href: onlineOrderUrl,
    icon: ShoppingBag,
    label: "Open online ordering"
  },
  {
    title: "Call",
    text: primaryLocation.phone,
    href: primaryLocation.phoneHref,
    icon: Phone,
    label: "Call Golden Bagel Cafe"
  },
  {
    title: "Directions",
    text: primaryLocation.shortName,
    href: directionsUrl,
    icon: MapPin,
    label: "Open directions to Golden Bagel Cafe"
  }
];

export function QuickActions() {
  return (
    <section className="bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl min-w-0 gap-3 sm:grid-cols-3">
        {actions.map(({ title, text, href, icon: Icon, label }) => (
          <Link
            key={title}
            href={href}
            aria-label={label}
            className="group flex min-h-20 min-w-0 items-center justify-between gap-3 overflow-hidden rounded-2xl border border-charcoal/10 bg-cream/60 px-4 py-3 shadow-sm transition hover:border-honey/70 hover:bg-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-honey sm:gap-4"
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-honey text-charcoal">
                <Icon aria-hidden="true" size={22} />
              </span>
              <span className="min-w-0">
                <span className="block text-base font-black text-charcoal">{title}</span>
                <span className="mt-1 block truncate text-sm font-bold text-espresso/68">{text}</span>
              </span>
            </span>
            <ArrowRight aria-hidden="true" className="shrink-0 text-toast transition group-hover:translate-x-1" size={20} />
          </Link>
        ))}
      </div>
    </section>
  );
}
