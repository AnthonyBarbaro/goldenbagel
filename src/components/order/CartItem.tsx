"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { CartItem as CartItemType } from "@/lib/cart";
import { useCart } from "@/lib/cart";

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="grid grid-cols-[84px_1fr] gap-4 rounded-[1.25rem] border border-charcoal/10 bg-white p-3 shadow-soft">
      <div className="relative h-24 overflow-hidden rounded-2xl bg-cream">
        <Image src={item.image} alt="" fill sizes="84px" className="object-cover" />
      </div>
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-black text-charcoal">{item.name}</h3>
            {item.modifiers.length > 0 && (
              <p className="mt-1 text-xs font-semibold text-espresso/64">
                {item.modifiers.map((modifier) => `${modifier.name}: ${modifier.option}`).join(", ")}
              </p>
            )}
          </div>
          <p className="font-black text-espresso">${(item.price * item.quantity).toFixed(2)}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center rounded-full bg-cream p-1">
            <button
              type="button"
              aria-label={`Decrease ${item.name} quantity`}
              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-charcoal shadow-sm"
            >
              <Minus aria-hidden="true" size={16} />
            </button>
            <span className="w-10 text-center text-sm font-black">{item.quantity}</span>
            <button
              type="button"
              aria-label={`Increase ${item.name} quantity`}
              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-charcoal shadow-sm"
            >
              <Plus aria-hidden="true" size={16} />
            </button>
          </div>
          <Button type="button" variant="ghost" size="sm" onClick={() => removeItem(item.cartId)} aria-label={`Remove ${item.name}`}>
            <Trash2 aria-hidden="true" size={17} />
          </Button>
        </div>
      </div>
    </div>
  );
}
