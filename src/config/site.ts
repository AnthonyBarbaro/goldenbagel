export const siteConfig = {
  name: "Golden Bagel Cafe",
  description:
    "Fresh bagels, breakfast sandwiches, wraps, salads, smoothies, catering, and cafe favorites in El Cajon.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://goldenbagelcafe.com",
  phone: "(619) 464-2243",
  phoneHref: "tel:+16194642243",
  email: "",
  address: {
    street: "2744 Fletcher Pkwy",
    city: "El Cajon",
    state: "CA",
    zip: "92020",
    country: "US"
  },
  geo: {
    latitude: 32.8016,
    longitude: -116.9939
  },
  hours: [
    { day: "Monday", open: "06:30", close: "15:00" },
    { day: "Tuesday", open: "06:30", close: "15:00" },
    { day: "Wednesday", open: "06:30", close: "15:00" },
    { day: "Thursday", open: "06:30", close: "15:00" },
    { day: "Friday", open: "06:30", close: "15:00" },
    { day: "Saturday", open: "06:30", close: "15:00" },
    { day: "Sunday", open: "06:30", close: "15:00" }
  ],
  logo: "/goldenbagels/logo.png",
  fallbackLogo: "/logo.png",
  googleRating: 4.1,
  googleReviewCount: 205,
  orderEnabled: process.env.NEXT_PUBLIC_ENABLE_ORDERING !== "false",
  mockOrdering: process.env.NEXT_PUBLIC_MOCK_ORDERING !== "false"
} as const;

export const businessAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.name}, ${businessAddress}`
)}`;

export const navItems = [
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/catering", label: "Catering" },
  { href: "/parties", label: "Parties" },
  { href: "/visit", label: "Visit Us" },
  { href: "/jobs", label: "Jobs" }
] as const;
