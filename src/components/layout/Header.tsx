"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { CartButton } from "@/components/layout/CartButton";

const mobileMenuLinks = [
  ...navItems,
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-cream/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Golden Bagel Cafe home">
            <Image
              src={siteConfig.logo}
              alt="Golden Bagel Cafe logo"
              width={132}
              height={46}
              className="h-11 w-auto"
              priority
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-charcoal/80 transition hover:bg-white hover:text-charcoal"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Button href={siteConfig.phoneHref} variant="secondary" size="sm">
              <Phone aria-hidden="true" size={17} />
              <span>Call</span>
            </Button>
            <CartButton />
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-charcoal shadow-sm ring-1 ring-charcoal/10 sm:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
          </button>
        </div>

        <div
          className={`border-t border-charcoal/10 bg-charcoal text-white shadow-[0_18px_45px_rgba(32,24,20,0.22)] transition sm:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="px-4 py-3">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-honey">Golden Bagel</p>
            <nav aria-label="Mobile menu" className="grid grid-cols-2 gap-1">
              {mobileMenuLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-3 text-sm font-black text-white transition hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <div className="h-[69px]" aria-hidden="true" />
    </>
  );
}
