"use client";

import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { CartItem } from "@/components/order/CartItem";
import { CheckoutForm } from "@/components/order/CheckoutForm";
import { OrderConfirmation } from "@/components/order/OrderConfirmation";
import { Button } from "@/components/ui/Button";
import type { OrderResponse } from "@/lib/api";
import { useCart } from "@/lib/cart";

export function CartPage() {
  const { items, clearCart } = useCart();
  const [confirmation, setConfirmation] = useState<OrderResponse | null>(null);

  function handleComplete(order: OrderResponse) {
    setConfirmation(order);
    clearCart();
  }

  if (confirmation) {
    return <OrderConfirmation order={confirmation} />;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr]">
      <div className="space-y-4">
        {items.length > 0 ? (
          items.map((item) => <CartItem key={item.cartId} item={item} />)
        ) : (
          <div className="rounded-[2rem] bg-white p-8 text-center shadow-soft">
            <ShoppingBag aria-hidden="true" className="mx-auto text-toast" size={44} />
            <h2 className="mt-4 text-2xl font-black text-charcoal">Your cart is empty</h2>
            <p className="mt-2 text-espresso/72">Add a bagel, wrap, salad, or smoothie to start a pickup order.</p>
            <Button href="/menu" className="mt-6">
              Browse Menu
            </Button>
          </div>
        )}

        {items.length > 0 && (
          <div className="rounded-[1.5rem] bg-charcoal p-5 text-white shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/62">Ready for pickup details</p>
            <p className="mt-2 text-sm text-white/72">
              The current order flow is a mock checkout. The cafe can confirm current menu details when Clover live checkout is connected.
            </p>
          </div>
        )}
      </div>

      <CheckoutForm items={items} onComplete={handleComplete} />
    </div>
  );
}
