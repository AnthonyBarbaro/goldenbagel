"use client";

import Link from "next/link";
import { MapPin, Menu, Phone, ShoppingBag } from "lucide-react";
import { directionsUrl, siteConfig } from "@/config/site";
import { useCart } from "@/lib/cart";

const actions = [
  { href: "/order", label: "Cart", icon: ShoppingBag },
  { href: siteConfig.phoneHref, label: "Call", icon: Phone },
  { href: directionsUrl, label: "Directions", icon: MapPin },
  { href: "/menu", label: "Menu", icon: Menu }
];

export function MobileBottomBar() {
  const { quantity } = useCart();
  const cartQuantityLabel = quantity > 99 ? "99+" : String(quantity);

  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/10 bg-white/95 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-16px_40px_rgba(32,24,20,0.12)] backdrop-blur-xl sm:hidden"
    >
      <div className="grid grid-cols-4">
        {actions.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            aria-label={label === "Cart" && quantity > 0 ? `Cart with ${quantity} items` : label}
            className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[0.62rem] font-black text-charcoal transition hover:bg-cream"
          >
            <span className="relative">
              <Icon aria-hidden="true" size={19} />
              {label === "Cart" && quantity > 0 && (
                <span className="absolute -right-3 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-honey px-1 text-[0.65rem] font-black leading-none text-charcoal ring-2 ring-white">
                  {cartQuantityLabel}
                </span>
              )}
            </span>
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
