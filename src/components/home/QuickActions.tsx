import Link from "next/link";
import { CalendarHeart, MapPin, ShoppingBag, Utensils } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ThreeDCard } from "@/components/ui/ThreeDCard";
import { directionsUrl, onlineOrderUrl } from "@/config/site";

const actions = [
  {
    title: "Order Online",
    text: "Open the hosted Clover online ordering page for pickup, payment, and order details.",
    href: onlineOrderUrl,
    icon: ShoppingBag,
    label: "Open online ordering"
  },
  {
    title: "Menu",
    text: "Browse bagels, sandwiches, wraps, salads, smoothies, and cafe favorites.",
    href: "/menu",
    icon: Utensils,
    label: "Open menu"
  },
  {
    title: "Catering",
    text: "Build a big-party catering ticket with date, guest count, bagels, spreads, and add-ons.",
    href: "/catering",
    icon: CalendarHeart,
    label: "Open catering ordering"
  },
  {
    title: "Directions",
    text: "Open maps to 2744 Fletcher Parkway for quick pickup or a cafe stop.",
    href: directionsUrl,
    icon: MapPin,
    label: "Open directions to Golden Bagel Cafe"
  }
];

export function QuickActions() {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {actions.map(({ title, text, href, icon: Icon, label }) => (
          <Link
            key={title}
            href={href}
            aria-label={label}
            className="group block rounded-[1.5rem] focus-visible:outline focus-visible:outline-4 focus-visible:outline-honey"
          >
            <ThreeDCard className="h-full p-4 sm:p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-honey text-charcoal sm:h-12 sm:w-12">
                <Icon aria-hidden="true" size={22} />
              </div>
              <h2 className="mt-4 text-lg font-black text-charcoal sm:mt-5 sm:text-xl">{title}</h2>
              <p className="mt-2 text-[0.82rem] font-bold leading-5 text-espresso/72 sm:mt-3 sm:text-sm sm:leading-6">{text}</p>
            </ThreeDCard>
          </Link>
        ))}
      </div>
    </Section>
  );
}
