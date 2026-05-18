"use client";

import { ShoppingBag, Utensils } from "lucide-react";
import { useState } from "react";
import { CartItem } from "@/components/order/CartItem";
import { CheckoutForm } from "@/components/order/CheckoutForm";
import { OrderConfirmation } from "@/components/order/OrderConfirmation";
import { Button } from "@/components/ui/Button";
import type { OrderResponse } from "@/lib/api";
import { useCart } from "@/lib/cart";

function formatCurrency(cents: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}

export function CartPage() {
  const { items, subtotalCents, clearCart } = useCart();
  const [completedOrder, setCompletedOrder] = useState<OrderResponse | null>(null);

  function handleComplete(order: OrderResponse) {
    if (order.checkoutUrl && /^https?:\/\//.test(order.checkoutUrl)) {
      window.location.assign(order.checkoutUrl);
      return;
    }

    clearCart();
    setCompletedOrder(order);
  }

  if (completedOrder) {
    return <OrderConfirmation order={completedOrder} />;
  }

  if (items.length === 0) {
    return (
      <div className="rounded-[2rem] bg-white p-8 text-center shadow-soft">
        <ShoppingBag aria-hidden="true" className="mx-auto text-toast" size={44} />
        <h2 className="mt-5 text-3xl font-black text-charcoal">Your cart is empty</h2>
        <p className="mx-auto mt-3 max-w-xl text-base font-bold leading-7 text-espresso/72">
          Add bagels, sandwiches, wraps, drinks, or cafe favorites from the menu, then continue to secure payment.
        </p>
        <div className="mt-7">
          <Button href="/menu" className="w-full sm:w-auto">
            <Utensils aria-hidden="true" size={18} />
            Browse Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
      <section className="space-y-4" aria-label="Cart items">
        <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-toast">Your Cart</p>
              <h2 className="mt-2 text-2xl font-black text-charcoal">
                {items.length} item{items.length === 1 ? "" : "s"}
              </h2>
            </div>
            <Button type="button" variant="ghost" size="sm" onClick={clearCart}>
              Clear
            </Button>
          </div>
          <div className="mt-5 space-y-3">
            {items.map((item) => (
              <CartItem key={item.cartId} item={item} />
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-charcoal p-5 text-white shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-black uppercase tracking-[0.16em] text-honey">Estimated subtotal</span>
            <span className="text-2xl font-black">{formatCurrency(subtotalCents)}</span>
          </div>
          <p className="mt-2 text-sm font-bold leading-6 text-white/70">
            Taxes, tips, and any final adjustments appear on the secure payment page.
          </p>
        </div>
      </section>

      <CheckoutForm items={items} onComplete={handleComplete} />
    </div>
  );
}
