import type { ReactElement } from "react";

export function MenuLoading(): ReactElement {
  return (
    <div role="status" aria-busy="true" className="bg-cream px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-3xl font-black tracking-tight text-charcoal sm:text-5xl">Menu &amp; ordering</h2>
        <p className="mt-4 text-sm font-semibold text-espresso/75">Loading the menu and current prices…</p>
        <div aria-hidden="true" className="mt-8 grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="rounded-2xl border border-charcoal/10 bg-white p-5">
              <div className="h-5 w-2/3 rounded bg-cream motion-safe:animate-pulse" />
              <div className="mt-3 h-4 w-4/5 rounded bg-cream motion-safe:animate-pulse" />
              <div className="mt-6 h-11 w-28 rounded-full bg-cream motion-safe:animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
