import type { Metadata } from "next";
import { businessAddress, directionsUrl, siteConfig } from "@/config/site";
import { featuredMenuItemIds, menuCategories, menuItems } from "@/data/menu";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl.replace(/\/$/, "")}${normalizedPath}`;
}

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path)
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl("/goldenbagels/gallery/storefront.jpg"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} storefront`
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [absoluteUrl("/goldenbagels/gallery/storefront.jpg")]
    }
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/menu/")}?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "Bakery", "LocalBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    image: [absoluteUrl("/goldenbagels/gallery/storefront.jpg"), absoluteUrl("/goldenbagels/hero/bagel-counter.jpg")],
    logo: absoluteUrl(siteConfig.logo),
    servesCuisine: ["Bagels", "Breakfast", "Cafe", "Sandwiches", "Smoothies"],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    openingHoursSpecification: siteConfig.hours.map((hour) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hour.day,
      opens: hour.open,
      closes: hour.close
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleRating,
      reviewCount: siteConfig.googleReviewCount
    },
    hasMap: directionsUrl,
    menu: absoluteUrl("/menu/")
  };
}

export function menuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${siteConfig.name} Menu`,
    hasMenuSection: menuCategories.map((category) => ({
      "@type": "MenuSection",
      name: category,
      hasMenuItem: menuItems
        .filter((item) => item.category === category)
        .slice(0, 12)
        .map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description
        }))
    }))
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function homepageMenuPreviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Popular Golden Bagel Cafe items",
    itemListElement: featuredMenuItemIds.map((id, index) => {
      const item = menuItems.find((menuItem) => menuItem.id === id);

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item?.name || id,
        url: absoluteUrl("/menu/")
      };
    })
  };
}
