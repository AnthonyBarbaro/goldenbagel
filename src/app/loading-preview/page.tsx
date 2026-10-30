import type { Metadata } from "next";
import Link from "next/link";
import { BagelLoading } from "@/components/ui/BagelLoading";

export const metadata: Metadata = {
  title: "Loading animation preview",
  robots: { index: false, follow: false }
};

export default function LoadingPreviewPage() {
  return (
    <main className="bg-cream">
      <BagelLoading fullScreen message="Loading the menu and current prices…" />
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-5 pb-10 text-sm font-bold text-espresso/70">
        <span>Loading animation preview</span>
        <Link href="/menu" className="text-toast underline underline-offset-4">Continue to the menu</Link>
      </div>
    </main>
  );
}
