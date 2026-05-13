import type { Metadata } from "next";
import { CartPage } from "@/components/order/CartPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Clover Cart",
  "Open Golden Bagel Cafe hosted Clover online ordering or review the fallback pickup cart.",
  "/order/"
);

export default function OrderPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Online ordering</p>
          <h1 className="mt-4 font-serif text-5xl font-black tracking-tight text-charcoal sm:text-7xl">Order through Clover.</h1>
          <p className="mt-5 text-lg leading-8 text-espresso/74">
            When the hosted Clover order link is configured, this page sends customers straight to Clover. The local cart remains as a fallback for mock mode and future custom checkout work.
          </p>
        </div>
        <CartPage />
      </div>
    </main>
  );
}
