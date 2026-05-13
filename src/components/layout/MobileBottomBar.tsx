import Link from "next/link";
import { MapPin, Menu, Phone, ShoppingBag } from "lucide-react";
import { directionsUrl, siteConfig } from "@/config/site";

const actions = [
  { href: "/menu", label: "Menu", icon: Menu },
  { href: siteConfig.phoneHref, label: "Call", icon: Phone },
  { href: directionsUrl, label: "Directions", icon: MapPin },
  { href: "/order", label: "Cart", icon: ShoppingBag }
];

export function MobileBottomBar() {
  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/10 bg-white/95 px-2 py-2 shadow-[0_-16px_40px_rgba(32,24,20,0.12)] backdrop-blur-xl sm:hidden"
    >
      <div className="grid grid-cols-4">
        {actions.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[0.7rem] font-black text-charcoal transition hover:bg-cream"
          >
            <Icon aria-hidden="true" size={19} />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
