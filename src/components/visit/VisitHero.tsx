"use client";

import { MapPin, Phone, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { businessAddress, onlineOrderUrl, primaryLocation, siteConfig } from "@/config/site";
import { getGoogleMapsDirectionsUrl } from "@/lib/maps";

const storefrontSources = ["/goldenbagels/visit/storefront.jpg", "/goldenbagels/gallery/storefront.jpg", "/goldenbagels/hero/storefront.jpg"] as const;

export function VisitHero() {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = storefrontSources[imageIndex];

  function handleImageError() {
    const nextIndex = imageIndex + 1;

    if (nextIndex < storefrontSources.length) {
      setImageIndex(nextIndex);
      return;
    }

    setImageFailed(true);
  }

  return (
    <section className="bg-cream px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-toast">Visit us</p>
          <h1 className="mt-4 font-serif text-5xl font-black leading-[0.98] tracking-tight text-charcoal sm:text-6xl">
            Fresh bagels on {primaryLocation.shortName}.
          </h1>
          <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-espresso/74 sm:text-lg sm:leading-8">
            Stop by for fresh bagels, breakfast sandwiches, coffee, smoothies, and pickup in {primaryLocation.name}.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={getGoogleMapsDirectionsUrl(primaryLocation)} className="w-full sm:w-auto">
              <MapPin aria-hidden="true" size={18} />
              Get Directions
            </Button>
            <Button href={siteConfig.phoneHref} variant="secondary" className="w-full sm:w-auto">
              <Phone aria-hidden="true" size={18} />
              Call Now
            </Button>
            <Button href={onlineOrderUrl} variant="dark" className="w-full sm:w-auto">
              <ShoppingBag aria-hidden="true" size={18} />
              Order Pickup
            </Button>
          </div>
          <a
            href={getGoogleMapsDirectionsUrl(primaryLocation)}
            className="mt-6 inline-flex items-start gap-3 rounded-[1.5rem] bg-white p-4 font-bold text-charcoal shadow-soft ring-1 ring-charcoal/8 transition hover:-translate-y-0.5 hover:text-toast"
          >
            <MapPin aria-hidden="true" className="mt-1 shrink-0 text-toast" size={21} />
            <span>
              <span className="block text-lg font-black">{businessAddress}</span>
              <span className="mt-1 block text-sm text-espresso/68">Tap for turn-by-turn directions.</span>
            </span>
          </a>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-6 h-full w-full rounded-[2rem] bg-honey/35" aria-hidden="true" />
          <div className="group relative overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-charcoal/8 transition duration-300 lg:hover:-translate-y-1 lg:hover:rotate-[-0.6deg] lg:hover:shadow-lift">
            {!imageFailed ? (
              <img
                src={imageSrc}
                alt={`Golden Bagel Cafe storefront on ${primaryLocation.shortName}`}
                className="h-[320px] w-full object-cover sm:h-[420px]"
                onError={handleImageError}
              />
            ) : (
              <div className="flex h-[320px] flex-col items-center justify-center bg-[linear-gradient(135deg,#fff8ec,#f8df9f)] p-8 text-center sm:h-[420px]">
                <img src={siteConfig.logo} alt="" className="h-16 w-auto rounded-xl bg-white px-4 py-2 shadow-soft" />
                <p className="mt-5 text-2xl font-black text-charcoal">Store photo coming soon.</p>
                <p className="mt-2 max-w-sm text-sm font-bold leading-6 text-espresso/70">{businessAddress}</p>
              </div>
            )}
            {!imageFailed ? (
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] bg-black p-4 text-white shadow-soft ring-1 ring-white/10">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white">Voted #1 Bagel & Cafe in El Cajon</p>
                <p className="mt-1 text-sm font-bold text-white/82">
                  Find us on {primaryLocation.shortName} in {primaryLocation.name}.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
