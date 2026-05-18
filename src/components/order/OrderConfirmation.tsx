"use client";

import { CheckCircle2 } from "lucide-react";
import type { OrderResponse } from "@/lib/api";

type OrderConfirmationProps = {
  order: OrderResponse;
};

export function OrderConfirmation({ order }: OrderConfirmationProps) {
  return (
    <div className="rounded-[2rem] bg-white p-8 text-center shadow-soft">
      <CheckCircle2 aria-hidden="true" className="mx-auto text-sage" size={52} />
      <h2 className="mt-5 font-serif text-3xl font-black text-charcoal">Order routed</h2>
      <p className="mt-3 text-espresso/72">
        Your Golden Bagel order reference is <strong className="text-charcoal">{order.orderReference}</strong>.
      </p>
      <p className="mt-2 text-sm text-espresso/60">
        {order.mock ? "Mock mode is active, so no payment was collected." : "Payment is being handled by the secure checkout page."}
      </p>
    </div>
  );
}
