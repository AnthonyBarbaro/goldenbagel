"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { onlineOrderUrl, siteConfig } from "@/config/site";
import { useCart } from "@/lib/cart";

export function CartButton() {
  const { quantity } = useCart();

  if (siteConfig.cloverOnlineOrderingUrl) {
    return (
      <Button href={onlineOrderUrl} variant="dark" size="sm">
        <ShoppingBag aria-hidden="true" size={18} />
        <span>Order Online</span>
      </Button>
    );
  }

  return (
    <Button href="/order" variant="dark" size="sm" className="relative">
      <ShoppingBag aria-hidden="true" size={18} />
      <span>Cart</span>
      {quantity > 0 && (
        <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-honey px-1 text-xs font-black text-charcoal">
          {quantity}
        </span>
      )}
    </Button>
  );
}
