import type { Metadata } from "next";
import { CartPage } from "@/components/order/CartPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Cart & Checkout",
  "Build a Golden Bagel Cafe pickup order and continue to secure online payment.",
  "/order/"
);

export default function OrderPage() {
  return (
    <main className="bg-cream px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 max-w-3xl sm:mb-7">
          <h1 className="font-serif text-3xl font-black tracking-tight text-charcoal sm:text-5xl">Checkout</h1>
          <p className="mt-1 text-sm font-bold leading-6 text-espresso/70 sm:mt-2 sm:text-base sm:leading-7">
            Review your favorites, choose a pickup time, then pay securely on Clover.
          </p>
          <ol aria-label="Order progress" className="mt-4 flex max-w-xl items-center gap-2 text-xs font-black text-espresso/70">
            <li className="rounded-full bg-charcoal px-3 py-2 text-white">1. Cart</li>
            <li aria-hidden="true" className="h-px flex-1 bg-charcoal/15" />
            <li className="rounded-full bg-white px-3 py-2 ring-1 ring-charcoal/10">2. Pickup</li>
            <li aria-hidden="true" className="h-px flex-1 bg-charcoal/15" />
            <li className="rounded-full bg-white px-3 py-2 ring-1 ring-charcoal/10">3. Clover</li>
          </ol>
        </div>
        <CartPage />
      </div>
    </main>
  );
}
