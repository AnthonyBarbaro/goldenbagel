import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StoreStatusBadge } from "@/components/ui/StoreStatusBadge";
import { businessAddress, directionsUrl, navItems, onlineOrderUrl, primaryLocation, siteConfig } from "@/config/site";

const footerLinks = [
  ...navItems,
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" }
];

export function Footer() {
  return (
    <footer className="bg-charcoal px-4 pb-28 pt-12 text-white sm:px-6 sm:pb-10 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 border-b border-white/12 pb-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end lg:pb-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-black tracking-tight sm:text-5xl">Your order, made your way.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
              Browse the full menu, choose every option, and set a pickup time that works for you.
            </p>
          </div>
          <Button href={onlineOrderUrl} size="lg" className="w-full md:w-auto">
            <ShoppingBag aria-hidden="true" size={19} />
            Build Your Order
          </Button>
        </div>

        <div className="grid min-w-0 gap-10 py-10 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:gap-12 lg:py-12">
          <div className="min-w-0">
            <Image
              src={siteConfig.logo}
              alt="Golden Bagel Cafe logo"
              width={154}
              height={54}
              className="h-14 w-auto rounded-xl bg-white px-3 py-2"
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/68">{siteConfig.description}</p>
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-black text-white">Visit the El Cajon counter</h2>
            <div className="mt-5 space-y-4 text-sm text-white/72">
              <a href={directionsUrl} className="flex gap-3 transition hover:text-white">
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-honey" size={18} />
                <span className="min-w-0">
                  <span className="block break-words font-bold text-white">{businessAddress}</span>
                  <span className="mt-1 block">Get turn-by-turn directions</span>
                </span>
              </a>
              <a href={siteConfig.phoneHref} className="flex items-center gap-3 transition hover:text-white">
                <Phone aria-hidden="true" className="shrink-0 text-honey" size={18} />
                <span>{siteConfig.phone}</span>
              </a>
              <div className="flex min-w-0 items-start gap-3">
                <Clock aria-hidden="true" className="mt-1 shrink-0 text-honey" size={18} />
                <StoreStatusBadge location={primaryLocation} compact className="border-white/12 bg-white/8 text-white" />
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-black text-white">Keep exploring</h2>
            <nav aria-label="Footer navigation" className="mt-5 grid min-w-0 grid-cols-2 gap-x-6 gap-y-3 text-sm font-bold text-white/72 lg:grid-cols-1">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="w-fit transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/12 pt-5 text-xs text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
          <a
            href="https://www.barbaro.tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit www.barbaro.tech (opens in a new tab)"
            className="inline-flex w-fit items-center gap-1.5 transition hover:text-white"
          >
            www.barbaro.tech
            <ArrowUpRight aria-hidden="true" size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
