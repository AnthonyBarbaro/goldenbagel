import { MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StoreStatusBadge } from "@/components/ui/StoreStatusBadge";
import { businessAddress, directionsUrl, onlineOrderUrl, primaryLocation } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-charcoal px-4 pb-7 pt-12 text-white sm:min-h-[720px] sm:px-6 sm:py-16 lg:px-8">
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

      <div className="relative mx-auto flex min-h-[calc(100svh-8rem)] w-full max-w-7xl min-w-0 items-center pb-2 sm:min-h-[590px] sm:pb-0">
        <div className="w-full min-w-0 max-w-3xl">
          <StoreStatusBadge className="w-full justify-start px-2.5 text-[0.58rem] tracking-[0.08em] sm:w-auto sm:px-3 sm:text-[0.66rem] sm:tracking-[0.13em]" />
          <h1 className="mt-4 break-words font-serif text-[2rem] font-black leading-[0.96] tracking-tight min-[420px]:text-[2.25rem] sm:mt-6 sm:text-6xl lg:text-7xl">
            Fresh Bagels, Breakfast Sandwiches & Cafe Favorites
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/84 sm:mt-6 sm:text-lg sm:leading-8">
            Golden Bagel Cafe serves fresh bagels, breakfast sandwiches, wraps, salads, smoothies, and cafe favorites in {primaryLocation.name}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Button href={onlineOrderUrl} size="lg" className="min-h-12 w-full px-5 text-sm sm:min-h-14 sm:w-auto sm:px-7 sm:text-base">
              <ShoppingBag aria-hidden="true" size={18} />
              Order Online
            </Button>
          </div>
          <a
            href={directionsUrl}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/14 px-3 py-2.5 text-xs font-black text-white ring-1 ring-white/18 backdrop-blur transition hover:bg-white/22 sm:mt-4 sm:w-auto sm:px-4 sm:py-3 sm:text-sm"
          >
            <MapPin aria-hidden="true" className="shrink-0" size={16} />
            <span className="min-w-0 text-center leading-5">{businessAddress}</span>
          </a>
          <div className="mt-5 grid max-w-xl grid-cols-3 gap-1.5 text-center sm:mt-8 sm:gap-3">
            {[
              ["Best Bagels", `${primaryLocation.name} favorite`],
              ["Fresh Daily", "bagels & coffee"],
              [primaryLocation.shortName, "easy directions"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl bg-white/14 p-2.5 shadow-soft ring-1 ring-white/16 backdrop-blur sm:rounded-2xl sm:p-4">
                <div className="break-words text-base font-black leading-5 min-[420px]:text-lg sm:text-2xl sm:leading-tight">{value}</div>
                <div className="mt-1 text-[0.5rem] font-bold uppercase leading-3 tracking-[0.09em] text-white/68 sm:text-xs sm:tracking-[0.15em]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
