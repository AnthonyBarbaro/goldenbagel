"use client";

import { ShoppingBag, Utensils } from "lucide-react";
import { useEffect, useState } from "react";
import { CartItem } from "@/components/order/CartItem";
import { CheckoutForm } from "@/components/order/CheckoutForm";
import { OrderConfirmation } from "@/components/order/OrderConfirmation";
import { Button } from "@/components/ui/Button";
import type { OrderResponse } from "@/lib/api";
import { useCart } from "@/lib/cart";

function getCheckoutReturnFromUrl() {
  if (typeof window === "undefined") {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const checkoutStatus = params.get("checkout");

  if (checkoutStatus === "success" && params.get("clearCart") === "1") {
    return "success" as const;
  }

  if (checkoutStatus === "failure") {
    return "failure" as const;
  }

  return null;
}

export function CartPage() {
  const { items, subtotalCents, clearCart } = useCart();
  const [completedOrder, setCompletedOrder] = useState<OrderResponse | null>(null);
  const [checkoutReturn, setCheckoutReturn] = useState<"success" | "failure" | null>(getCheckoutReturnFromUrl);

  useEffect(() => {
    if (checkoutReturn === "success") {
      clearCart();
      window.history.replaceState(null, "", "/order");
    }

    if (checkoutReturn === "failure") {
      window.history.replaceState(null, "", "/order");
    }
  }, [checkoutReturn, clearCart]);

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

  if (checkoutReturn === "success") {
    return (
      <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-8 text-center shadow-soft">
        <ShoppingBag aria-hidden="true" className="mx-auto text-toast" size={38} />
        <h2 className="mt-4 text-3xl font-black text-charcoal">Payment received</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm font-bold leading-6 text-espresso/70">
          Thanks. Your cart has been cleared and your Golden Bagel order was sent through Clover.
        </p>
        <div className="mt-6">
          <Button href="/menu" className="w-full sm:w-auto">
            <Utensils aria-hidden="true" size={18} />
            Order Again
          </Button>
        </div>
      </div>
    );
  }

  if (checkoutReturn === "failure") {
    return (
      <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-8 text-center shadow-soft">
        <ShoppingBag aria-hidden="true" className="mx-auto text-toast" size={38} />
        <h2 className="mt-4 text-3xl font-black text-charcoal">Payment was not completed</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm font-bold leading-6 text-espresso/70">
          Your cart is still here. You can try payment again or adjust the order.
        </p>
        <div className="mt-6">
          <Button type="button" onClick={() => setCheckoutReturn(null)} className="w-full sm:w-auto">
            Back to Checkout
          </Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-8 text-center shadow-soft">
        <ShoppingBag aria-hidden="true" className="mx-auto text-toast" size={38} />
        <h2 className="mt-4 text-3xl font-black text-charcoal">Your cart is empty</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm font-bold leading-6 text-espresso/70">Add a few items from the menu to start a pickup order.</p>
        <div className="mt-6">
          <Button href="/menu" className="w-full sm:w-auto">
            <Utensils aria-hidden="true" size={18} />
            Go to Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
      <section className="rounded-[1.25rem] border border-charcoal/10 bg-white p-3 shadow-soft sm:rounded-[1.5rem] sm:p-5" aria-label="Cart items">
        <div className="flex flex-col gap-3 border-b border-charcoal/10 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-toast">Your Cart</p>
            <h2 className="mt-1 text-2xl font-black text-charcoal">
              {items.length} item{items.length === 1 ? "" : "s"}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
            <Button href="/menu" variant="secondary" size="sm" className="w-full sm:w-auto">
              Add More
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={clearCart} className="w-full sm:w-auto">
              Clear
            </Button>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <CartItem key={item.cartId} item={item} />
          ))}
        </div>
      </section>

      <CheckoutForm items={items} subtotalCents={subtotalCents} onComplete={handleComplete} />
    </div>
  );
}
