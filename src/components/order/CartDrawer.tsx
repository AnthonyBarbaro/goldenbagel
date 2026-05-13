"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { quantity } = useCart();

  if (siteConfig.cloverOnlineOrderingUrl || quantity === 0) {
    return null;
  }

  return (
    <Link
      href="/order"
      className="fixed bottom-20 left-4 right-4 z-40 flex min-h-14 items-center justify-between rounded-full bg-charcoal px-5 text-white shadow-lift sm:hidden"
      aria-label={`View cart with ${quantity} items`}
    >
      <span className="flex items-center gap-2 font-black">
        <ShoppingBag aria-hidden="true" size={18} />
        {quantity} item{quantity === 1 ? "" : "s"}
      </span>
      <span className="font-black">View cart</span>
    </Link>
  );
}
