import type { Metadata } from "next";
import { CartPage } from "@/components/order/CartPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Clover Order",
  "Build a Clover-ready pickup order for Golden Bagel Cafe.",
  "/order/"
);

export default function OrderPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Clover-ready order</p>
          <h1 className="mt-4 font-serif text-5xl font-black tracking-tight text-charcoal sm:text-7xl">Order ahead. Pick up fresh.</h1>
          <p className="mt-5 text-lg leading-8 text-espresso/74">
            This flow is structured for Clover hosted checkout. Mock mode is active until live Clover credentials are added server-side.
          </p>
        </div>
        <CartPage />
      </div>
    </main>
  );
}
