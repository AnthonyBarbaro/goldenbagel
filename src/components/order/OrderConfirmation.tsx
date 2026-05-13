"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { OrderResponse } from "@/lib/api";

type OrderConfirmationProps = {
  order: OrderResponse;
};

export function OrderConfirmation({ order }: OrderConfirmationProps) {
  return (
    <div className="rounded-[2rem] bg-white p-8 text-center shadow-soft">
      <CheckCircle2 aria-hidden="true" className="mx-auto text-sage" size={52} />
      <h2 className="mt-5 font-serif text-3xl font-black text-charcoal">Order received</h2>
      <p className="mt-3 text-espresso/72">
        Your mock order reference is <strong className="text-charcoal">{order.orderReference}</strong>.
      </p>
      <p className="mt-2 text-sm text-espresso/60">
        Clover live checkout is not connected yet, so no payment was collected.
      </p>
      <Button href="/menu" className="mt-6">
        Add More Favorites
      </Button>
    </div>
  );
}
