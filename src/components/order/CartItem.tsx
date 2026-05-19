"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { CartItem as CartItemType } from "@/lib/cart";
import { useCart } from "@/lib/cart";

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const lineTotal =
    item.priceCents !== undefined
      ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format((item.priceCents * item.quantity) / 100)
      : item.priceLabel;

  return (
    <div className="rounded-2xl border border-charcoal/10 bg-cream/45 p-3 sm:p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <h3 className="font-black leading-6 text-charcoal">{item.name}</h3>
          {item.priceLabel && <p className="mt-1 text-sm font-black text-toast">{item.priceLabel}</p>}
          {item.modifiers.length > 0 && (
            <p className="mt-2 text-xs font-semibold leading-5 text-espresso/64">
              {item.modifiers.map((modifier) => `${modifier.name}: ${modifier.option}`).join(", ")}
            </p>
          )}
        </div>
        {lineTotal && <p className="shrink-0 text-base font-black text-charcoal sm:text-right">{lineTotal}</p>}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center rounded-full bg-white p-1 shadow-sm ring-1 ring-charcoal/10">
          <button
            type="button"
            aria-label={`Decrease ${item.name} quantity`}
            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal transition hover:bg-cream"
          >
            <Minus aria-hidden="true" size={16} />
          </button>
          <span className="w-10 text-center text-sm font-black">{item.quantity}</span>
          <button
            type="button"
            aria-label={`Increase ${item.name} quantity`}
            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal transition hover:bg-cream"
          >
            <Plus aria-hidden="true" size={16} />
          </button>
        </div>
        <Button type="button" variant="ghost" size="sm" onClick={() => removeItem(item.cartId)} aria-label={`Remove ${item.name}`}>
          <Trash2 aria-hidden="true" size={17} />
        </Button>
      </div>
    </div>
  );
}
