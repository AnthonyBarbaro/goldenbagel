import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StoreStatusBadge } from "@/components/ui/StoreStatusBadge";
import { businessAddress, directionsUrl, navItems, onlineOrderUrl, primaryLocation, siteConfig } from "@/config/site";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" }
];

export function Footer() {
  return (
    <footer className="bg-charcoal px-4 pb-28 pt-10 text-white sm:px-6 sm:pb-8 sm:pt-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 border-b border-white/15 pb-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-black tracking-tight sm:text-4xl">Your order, made your way.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Browse the full menu, choose every option, and set a pickup time that works for you.
            </p>
          </div>
          <Button href={onlineOrderUrl} size="lg" className="w-full md:w-auto">
            <ShoppingBag aria-hidden="true" size={19} />
            Build Your Order
          </Button>
        </div>

        <div className="grid min-w-0 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.6fr] lg:gap-10">
          <div className="min-w-0">
            <Link href="/" aria-label="Golden Bagel Cafe home" className="inline-flex rounded-xl bg-white px-3 py-2">
              <Image
                src={siteConfig.logo}
                alt="Golden Bagel Cafe logo"
                width={154}
                height={54}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">{siteConfig.description}</p>
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-black text-white">Visit the El Cajon counter</h2>
            <div className="mt-3 space-y-2 text-sm text-white/75">
              <a href={directionsUrl} className="flex min-h-11 gap-3 py-1 transition hover:text-white">
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-honey" size={18} />
                <span className="min-w-0">
                  <span className="block break-words font-bold text-white">{businessAddress}</span>
                  <span className="mt-1 block">Get turn-by-turn directions</span>
                </span>
              </a>
              <a href={siteConfig.phoneHref} className="flex min-h-11 items-center gap-3 transition hover:text-white">
                <Phone aria-hidden="true" className="shrink-0 text-honey" size={18} />
                <span>{siteConfig.phone}</span>
              </a>
              <div className="flex min-w-0 items-start gap-3">
                <Clock aria-hidden="true" className="mt-1 shrink-0 text-honey" size={18} />
                <StoreStatusBadge location={primaryLocation} className="[&>span:last-child]:whitespace-normal" />
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-black text-white">Keep exploring</h2>
            <nav aria-label="Footer navigation" className="mt-3 grid min-w-0 grid-cols-2 gap-x-6 text-sm font-bold text-white/75 sm:grid-cols-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="flex min-h-11 w-fit items-center transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-xs text-white/70 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
          <nav aria-label="Legal information" className="flex flex-wrap gap-x-5">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://www.barbaro.tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit www.barbaro.tech (opens in a new tab)"
            className="inline-flex min-h-11 w-fit items-center gap-1.5 transition hover:text-white"
          >
            www.barbaro.tech
            <ArrowUpRight aria-hidden="true" size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
