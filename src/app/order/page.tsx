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
        <div className="mb-4 max-w-2xl sm:mb-6">
          <h1 className="font-serif text-3xl font-black tracking-tight text-charcoal sm:text-5xl">Checkout</h1>
          <p className="mt-1 text-sm font-bold leading-6 text-espresso/70 sm:mt-2 sm:text-base sm:leading-7">
            Review your cart, add pickup info, then pay securely.
          </p>
        </div>
        <CartPage />
      </div>
    </main>
  );
}
