import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/home/HeroVideo";

export function Hero(): ReactElement {
  return (
    <section aria-label="Welcome to Golden Bagel Cafe" className="relative isolate h-[72svh] max-h-[680px] min-h-[430px] overflow-hidden bg-charcoal text-white">
      <Image
        src="/goldenbagels/hero/header-video-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[52%_center] sm:object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_35%,rgba(32,24,20,0.12)_55%,rgba(32,24,20,0.78)_100%)]"
        aria-hidden="true"
      />
      <HeroVideo />
      <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl items-end px-5 pb-8 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12">
        <div className="pointer-events-auto max-w-md">
          <h1 className="font-serif text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fresh bagels.
            <span className="block">Made your way.</span>
          </h1>
          <Button href="#menu" className="mt-5 px-6 sm:mt-6">
            <ShoppingBag aria-hidden="true" size={17} />
            Order Online
          </Button>
        </div>
      </div>
    </section>
  );
}
