import Link from "next/link";
import { CalendarHeart, MapPin, Menu, Phone, ShoppingBag } from "lucide-react";
import { onlineOrderUrl, siteConfig } from "@/config/site";

const actions = [
  { href: "/menu", label: "Menu", icon: Menu },
  { href: onlineOrderUrl, label: "Order", icon: ShoppingBag },
  { href: "/catering", label: "Catering", icon: CalendarHeart },
  { href: siteConfig.phoneHref, label: "Call", icon: Phone },
  { href: "/visit", label: "Visit", icon: MapPin }
];

export function MobileBottomBar() {
  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/10 bg-white/95 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-16px_40px_rgba(32,24,20,0.12)] backdrop-blur-xl sm:hidden"
    >
      <div className="grid grid-cols-5">
        {actions.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[0.62rem] font-black text-charcoal transition hover:bg-cream"
          >
            <Icon aria-hidden="true" size={19} />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
