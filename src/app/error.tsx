"use client";

import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps): ReactElement {
  return (
    <main className="min-h-[60svh] bg-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-3xl border border-charcoal/10 bg-white p-6 sm:p-10">
        <h1 className="font-serif text-3xl font-black tracking-tight text-charcoal">We couldn’t load this page.</h1>
        <p className="mt-4 leading-7 text-espresso/75">Please try again. You can also call the cafe for help with your order.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button type="button" onClick={reset}>Try again</Button>
          <a href={siteConfig.phoneHref} className="inline-flex min-h-12 items-center rounded-full border border-charcoal/10 px-5 text-sm font-bold text-charcoal">Call {siteConfig.phone}</a>
        </div>
      </div>
    </main>
  );
}
