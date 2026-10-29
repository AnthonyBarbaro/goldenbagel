"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactElement } from "react";
import { getMenuHref, navItems, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { CartButton } from "@/components/layout/CartButton";

const mobileMenuLinks = [
  ...navItems,
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" }
];

export function Header(): ReactElement {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key !== "Escape") return;

      setIsOpen(false);
      menuButtonRef.current?.focus();
    }

    function handleLinkNavigation(event: MouseEvent): void {
      if (event.target instanceof Element && event.target.closest("a[href]")) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleLinkNavigation);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleLinkNavigation);
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-cream/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Golden Bagel Cafe home" onClick={() => setIsOpen(false)}>
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
            {navItems.map((item) => {
              const isMenuAnchor = item.href === "/menu" && getMenuHref(pathname) === "#menu";
              const NavigationLink = isMenuAnchor ? "a" : Link;

              return (
                <NavigationLink
                  key={item.href}
                  href={isMenuAnchor ? "#menu" : item.href}
                  aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                  className="rounded-full px-4 py-2 text-sm font-bold text-charcoal/80 transition hover:bg-white hover:text-charcoal"
                >
                  {item.label}
                </NavigationLink>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Button href={siteConfig.phoneHref} variant="secondary" size="sm" onClick={() => setIsOpen(false)}>
              <Phone aria-hidden="true" size={17} />
              <span>Call</span>
            </Button>
            <CartButton onNavigate={() => setIsOpen(false)} />
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="site-menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-charcoal shadow-sm ring-1 ring-charcoal/10 lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
          </button>
        </div>

        {isOpen ? (
          <div id="site-menu" className="border-t border-charcoal/10 bg-charcoal text-white shadow-[0_18px_45px_rgba(32,24,20,0.22)] lg:hidden">
            <nav aria-label="Menu navigation" className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-3 sm:grid-cols-3 sm:px-6">
              {mobileMenuLinks.map((item) => {
                const isMenuAnchor = item.href === "/menu" && getMenuHref(pathname) === "#menu";
                const NavigationLink = isMenuAnchor ? "a" : Link;

                return (
                  <NavigationLink
                    key={item.href}
                    href={isMenuAnchor ? "#menu" : item.href}
                    aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                    className="flex min-h-12 items-center rounded-2xl px-3 py-3 text-sm font-black text-white transition hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavigationLink>
                );
              })}
            </nav>
          </div>
        ) : null}
      </header>
      <div className="h-[69px]" aria-hidden="true" />
    </>
  );
}
