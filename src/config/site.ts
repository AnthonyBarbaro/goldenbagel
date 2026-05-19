export type StoreHour = {
  day: string;
  open: string;
  close: string;
};

export type StoreAddress = {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export type StoreLocation = {
  id: string;
  name: string;
  shortName: string;
  address: StoreAddress;
  geo: {
    latitude: number | null;
    longitude: number | null;
  };
  timezone: string;
  phone: string;
  phoneHref: string;
  hours: readonly StoreHour[];
  visitInfo: {
    parking: string;
    pickup: string;
    dineIn: string;
    nearby: string;
    accessibility: string;
  };
};

const dailyHours: readonly StoreHour[] = [
  { day: "Monday", open: "06:30", close: "15:00" },
  { day: "Tuesday", open: "06:30", close: "15:00" },
  { day: "Wednesday", open: "06:30", close: "15:00" },
  { day: "Thursday", open: "06:30", close: "15:00" },
  { day: "Friday", open: "06:30", close: "15:00" },
  { day: "Saturday", open: "06:30", close: "15:00" },
  { day: "Sunday", open: "06:30", close: "15:00" }
] as const;

const locations: readonly StoreLocation[] = [
  {
    id: "el-cajon",
    name: "El Cajon",
    shortName: "Fletcher Parkway",
    address: {
      street: "2744 Fletcher Pkwy",
      city: "El Cajon",
      state: "CA",
      zip: "92020",
      country: "US"
    },
    geo: {
      latitude: null,
      longitude: null
    },
    timezone: "America/Los_Angeles",
    phone: "(619) 464-2243",
    phoneHref: "tel:+16194642243",
    hours: dailyHours,
    visitInfo: {
      parking: "Parking information coming soon.",
      pickup: "Order ahead and pick up at the cafe.",
      dineIn: "Dine-in information coming soon.",
      nearby: "Located on Fletcher Parkway in El Cajon.",
      accessibility: "Accessibility information coming soon."
    }
  }
] as const;

export const siteConfig = {
  name: "Golden Bagel Cafe",
  description:
    locations.length > 1
      ? "Fresh bagels, breakfast sandwiches, wraps, salads, smoothies, and cafe favorites across our local cafes."
      : `Fresh bagels, breakfast sandwiches, wraps, salads, smoothies, and cafe favorites in ${locations[0].name}.`,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://goldenbagelcafe.com",
  locations,
  primaryLocationId: "el-cajon",
  phone: locations[0].phone,
  phoneHref: locations[0].phoneHref,
  email: "",
  address: locations[0].address,
  geo: locations[0].geo,
  timezone: locations[0].timezone,
  hours: locations[0].hours,
  logo: "/goldenbagels/logo.png",
  fallbackLogo: "/logo.png",
  visitInfo: locations[0].visitInfo,
  orderEnabled: process.env.NEXT_PUBLIC_ENABLE_ORDERING !== "false",
  mockOrdering: process.env.NEXT_PUBLIC_MOCK_ORDERING !== "false"
} as const;

export const primaryLocation = siteConfig.locations.find((location) => location.id === siteConfig.primaryLocationId) || siteConfig.locations[0];

export function formatLocationAddress(location: StoreLocation = primaryLocation) {
  return `${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zip}`;
}

export function formatLocationCityLine(location: StoreLocation = primaryLocation) {
  return `${location.address.city}, ${location.address.state} ${location.address.zip}`;
}

export function getLocationDirectionsUrl(location: StoreLocation = primaryLocation) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${siteConfig.name}, ${formatLocationAddress(location)}`)}`;
}

export const businessAddress = formatLocationAddress(primaryLocation);

export const directionsUrl = getLocationDirectionsUrl(primaryLocation);

export const onlineOrderUrl = "/menu";

export const navItems = [
  { href: "/menu", label: "Menu" },
  { href: "/visit", label: "Visit Us" },
  { href: "/jobs", label: "Jobs" }
] as const;
