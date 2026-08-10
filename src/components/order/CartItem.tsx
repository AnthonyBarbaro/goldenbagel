"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { CartItem as CartItemType } from "@/lib/cart";
import { MAX_CART_ITEM_QUANTITY, MAX_CART_TOTAL_QUANTITY, useCart } from "@/lib/cart";

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  const { quantity: cartQuantity, updateQuantity, removeItem } = useCart();
  const lineTotal =
    item.priceCents !== undefined
      ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format((item.priceCents * item.quantity) / 100)
      : item.priceLabel;

  return (
    <article className="rounded-2xl border border-charcoal/10 bg-cream/55 p-3 shadow-sm sm:p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <h3 className="font-black leading-6 text-charcoal">{item.name}</h3>
          {item.priceLabel && <p className="mt-1 text-sm font-black text-toast">{item.priceLabel} each</p>}
          {item.modifiers.length > 0 && (
            <p className="mt-2 text-xs font-semibold leading-5 text-espresso/70">
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
            aria-label={item.quantity === 1 ? `Remove ${item.name} from cart` : `Decrease ${item.name} quantity`}
            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition hover:bg-cream focus-visible:outline focus-visible:outline-4 focus-visible:outline-honey"
          >
            <Minus aria-hidden="true" size={16} />
          </button>
          <span aria-live="polite" className="w-10 text-center text-sm font-black">
            {item.quantity}
          </span>
          <button
            type="button"
            aria-label={`Increase ${item.name} quantity`}
            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
            disabled={item.quantity >= MAX_CART_ITEM_QUANTITY || cartQuantity >= MAX_CART_TOTAL_QUANTITY}
            className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition hover:bg-cream focus-visible:outline focus-visible:outline-4 focus-visible:outline-honey disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus aria-hidden="true" size={16} />
          </button>
        </div>
        <Button type="button" variant="ghost" size="sm" onClick={() => removeItem(item.cartId)} aria-label={`Remove ${item.name}`}>
          <Trash2 aria-hidden="true" size={17} />
        </Button>
      </div>
    </article>
  );
}
