import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { primaryLocation, siteConfig } from "@/config/site";
import { absoluteUrl, restaurantSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const defaultTitle =
  siteConfig.locations.length > 1
    ? "Golden Bagel Cafe | Bagels & Breakfast"
    : `Golden Bagel Cafe | Bagels & Breakfast in ${primaryLocation.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Golden Bagel Cafe"
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.siteUrl
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/goldenbagels/gallery/storefront.jpg"),
        width: 1200,
        height: 630,
        alt: "Golden Bagel Cafe storefront"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
    images: [absoluteUrl("/goldenbagels/gallery/storefront.jpg")]
  },
  icons: {
    icon: siteConfig.logo,
    apple: siteConfig.logo
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={restaurantSchema()} />
        <JsonLd data={websiteSchema()} />
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-honey px-4 py-2 font-black text-charcoal focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
