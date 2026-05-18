import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { StoreStatusBadge } from "@/components/ui/StoreStatusBadge";
import { businessAddress, directionsUrl, navItems, primaryLocation, siteConfig } from "@/config/site";

const footerLinks = [
  ...navItems,
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" }
];

export function Footer() {
  return (
    <footer className="bg-charcoal px-4 pb-28 pt-14 text-white sm:px-6 sm:pb-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src={siteConfig.logo}
            alt="Golden Bagel Cafe logo"
            width={154}
            height={54}
            className="h-14 w-auto rounded-xl bg-white px-3 py-2"
          />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">{siteConfig.description}</p>
        </div>

        <div className="space-y-4 text-sm text-white/78">
          <a href={directionsUrl} className="flex gap-3 transition hover:text-white">
            <MapPin aria-hidden="true" className="mt-1 shrink-0" size={18} />
            <span>
              <span className="block font-black text-white">Easy directions to {primaryLocation.name}</span>
              <span className="block">{businessAddress}</span>
            </span>
          </a>
          <a href={siteConfig.phoneHref} className="flex gap-3 transition hover:text-white">
            <Phone aria-hidden="true" className="mt-1 shrink-0" size={18} />
            <span>{siteConfig.phone}</span>
          </a>
          <div className="flex gap-3">
            <Clock aria-hidden="true" className="mt-1 shrink-0" size={18} />
            <StoreStatusBadge compact />
          </div>
        </div>

        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-bold text-white/78">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
