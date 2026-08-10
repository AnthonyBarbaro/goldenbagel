"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart";

export function CartButton({ onNavigate }: { onNavigate?: () => void }) {
  const { quantity } = useCart();

  return (
    <Button href="/order" variant="dark" size="sm" onClick={onNavigate}>
      <ShoppingBag aria-hidden="true" size={18} />
      <span>{quantity > 0 ? `Cart (${quantity})` : "Cart"}</span>
    </Button>
  );
}
