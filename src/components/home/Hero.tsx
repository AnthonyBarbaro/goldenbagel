import { MapPin, ShoppingBag, Utensils } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StoreStatusBadge } from "@/components/ui/StoreStatusBadge";
import { businessAddress, directionsUrl, hasHostedOnlineOrdering, onlineOrderUrl, primaryLocation } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-charcoal px-4 pb-10 pt-20 text-white sm:min-h-[720px] sm:px-6 sm:py-16 lg:px-8">
      <video
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] motion-reduce:hidden sm:object-center"
        autoPlay
        muted
        loop
        playsInline
        poster="/goldenbagels/hero/header-video-poster.jpg"
        aria-hidden="true"
      >
        <source src="/goldenbagels/hero/header-video.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,24,20,0.08)_0%,rgba(32,24,20,0.18)_35%,rgba(32,24,20,0.70)_76%,rgba(32,24,20,0.88)_100%)] sm:bg-[linear-gradient(90deg,rgba(32,24,20,0.70)_0%,rgba(32,24,20,0.44)_48%,rgba(32,24,20,0.08)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-charcoal/70 to-transparent sm:hidden" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(100svh-10rem)] max-w-7xl items-end pb-8 sm:min-h-[590px] sm:items-center sm:pb-0">
        <div className="max-w-3xl">
          <StoreStatusBadge />
          <h1 className="mt-5 font-serif text-4xl font-black leading-[0.98] tracking-tight sm:mt-6 sm:text-6xl lg:text-7xl">
            Fresh Bagels, Breakfast Sandwiches & Cafe Favorites
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/84 sm:mt-6 sm:text-lg sm:leading-8">
            Golden Bagel Cafe serves fresh bagels, breakfast sandwiches, wraps, salads, smoothies, and cafe favorites in {primaryLocation.name}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={onlineOrderUrl} size="lg" className="w-full sm:w-auto">
              <ShoppingBag aria-hidden="true" size={20} />
              Order Online
            </Button>
            {hasHostedOnlineOrdering && (
              <Button href="/menu" size="lg" variant="secondary" className="w-full sm:w-auto">
                <Utensils aria-hidden="true" size={20} />
                View Menu
              </Button>
            )}
          </div>
          <a
            href={directionsUrl}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/14 px-4 py-3 text-sm font-black text-white ring-1 ring-white/18 backdrop-blur transition hover:bg-white/22 sm:w-auto"
          >
            <MapPin aria-hidden="true" size={18} />
            <span className="min-w-0 text-center leading-5">{businessAddress}</span>
          </a>
          <div className="mt-6 grid max-w-xl grid-cols-3 gap-2 text-center sm:mt-8 sm:gap-3">
            {[
              ["Best Bagels", `${primaryLocation.name} favorite`],
              ["Fresh Daily", "bagels & coffee"],
              [primaryLocation.shortName, "easy directions"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/14 p-3 shadow-soft ring-1 ring-white/16 backdrop-blur sm:p-4">
                <div className="text-xl font-black sm:text-2xl">{value}</div>
                <div className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/68 sm:text-xs sm:tracking-[0.15em]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
