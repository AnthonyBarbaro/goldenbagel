import type { Metadata } from "next";
import { CartPage } from "@/components/order/CartPage";

export const metadata: Metadata = {
  title: "Order Pickup",
  description: "Build a mock pickup order for Golden Bagel Cafe before Clover live checkout is connected."
};

export default function OrderPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Order</p>
          <h1 className="mt-4 font-serif text-5xl font-black tracking-tight text-charcoal sm:text-7xl">Order ahead. Pick up fresh.</h1>
          <p className="mt-5 text-lg leading-8 text-espresso/74">
            This is mock ordering mode: no payment is collected, and the checkout flow is ready to connect to API Gateway, Lambda, and Clover.
          </p>
        </div>
        <CartPage />
      </div>
    </main>
  );
}
