import Link from "next/link";
import { onlineOrderUrl, primaryLocation, siteConfig } from "@/config/site";

const links = [
  { href: "/menu", label: "Menu" },
  { href: onlineOrderUrl, label: "Order" },
  { href: "/parties", label: "Parties" }
];

export function VisitSeoSection() {
  const hasMultipleLocations = siteConfig.locations.length > 1;

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-cream p-6 shadow-soft sm:p-8">
        <div className="max-w-4xl">
          <h2 className="font-serif text-3xl font-black text-charcoal sm:text-5xl">
            {hasMultipleLocations ? "Bagels, breakfast, and cafe favorites nearby" : `Bagels, breakfast, and cafe favorites in ${primaryLocation.name}`}
          </h2>
          <p className="mt-4 text-base font-bold leading-7 text-espresso/72">
            Golden Bagel Cafe serves fresh bagels, breakfast sandwiches, wraps, salads, smoothies, and cafe favorites
            {hasMultipleLocations ? " from our local cafes." : ` from our ${primaryLocation.shortName} location in ${primaryLocation.name}.`}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {links.map((link) => {
              const isExternal = /^https?:\/\//.test(link.href);
              const className = "rounded-full bg-white px-4 py-2 text-sm font-black text-charcoal shadow-soft transition hover:bg-honey";

              return isExternal ? (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={className}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
