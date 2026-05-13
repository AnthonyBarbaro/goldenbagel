import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { navItems, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { CartButton } from "@/components/layout/CartButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/92 backdrop-blur-xl">
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
      </div>
    </header>
  );
}
