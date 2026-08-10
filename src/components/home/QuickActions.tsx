import Link from "next/link";
import { ArrowRight, MapPin, Phone, ShoppingBag } from "lucide-react";
import { directionsUrl, onlineOrderUrl, primaryLocation } from "@/config/site";
import { classNames } from "@/lib/format";

const actions = [
  {
    title: "Order Online",
    text: "Menu, pickup time, payment.",
    href: onlineOrderUrl,
    icon: ShoppingBag,
    label: "Open online ordering",
    primary: true
  },
  {
    title: "Call",
    text: primaryLocation.phone,
    href: primaryLocation.phoneHref,
    icon: Phone,
    label: "Call Golden Bagel Cafe",
    primary: false
  },
  {
    title: "Directions",
    text: primaryLocation.shortName,
    href: directionsUrl,
    icon: MapPin,
    label: "Open directions to Golden Bagel Cafe",
    primary: false
  }
];

export function QuickActions() {
  return (
    <section className="bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl min-w-0 grid-cols-2 gap-1.5 rounded-[1.75rem] border border-charcoal/10 bg-cream/70 p-1.5 sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
        {actions.map(({ title, text, href, icon: Icon, label, primary }) => (
          <Link
            key={title}
            href={href}
            aria-label={label}
            className={classNames(
              "group flex min-h-20 min-w-0 items-center justify-between gap-3 overflow-hidden rounded-[1.35rem] px-3 py-3 transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-honey sm:px-4",
              primary
                ? "col-span-2 bg-charcoal text-white shadow-soft hover:bg-espresso sm:col-span-1"
                : "text-charcoal hover:bg-white"
            )}
          >
            <span className="flex min-w-0 items-center gap-3">
              <span
                className={classNames(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                  primary ? "bg-honey text-charcoal" : "bg-white text-toast ring-1 ring-charcoal/10"
                )}
              >
                <Icon aria-hidden="true" size={22} />
              </span>
              <span className="min-w-0">
                <span className="block text-base font-black">{title}</span>
                <span className={classNames("mt-1 block truncate text-sm font-bold", primary ? "text-white/68" : "text-espresso/72")}>{text}</span>
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              className={classNames("shrink-0 transition group-hover:translate-x-1", primary ? "text-honey" : "text-toast")}
              size={20}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
