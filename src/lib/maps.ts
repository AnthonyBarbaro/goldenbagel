import { formatLocationAddress, getLocationDirectionsUrl, primaryLocation, siteConfig, type StoreLocation } from "@/config/site";

export function getMapQuery(location: StoreLocation = primaryLocation) {
  return `${siteConfig.name} ${formatLocationAddress(location)}`;
}

export function getGoogleMapsDirectionsUrl(location: StoreLocation = primaryLocation) {
  return getLocationDirectionsUrl(location);
}

export function getAppleMapsDirectionsUrl(location: StoreLocation = primaryLocation) {
  return `https://maps.apple.com/?q=${encodeURIComponent(getMapQuery(location))}`;
}

export function getGoogleMapsEmbedUrl(location: StoreLocation = primaryLocation) {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

  if (!key) {
    return "";
  }

  const query = encodeURIComponent(`${siteConfig.name}, ${formatLocationAddress(location)}`);
  return `https://www.google.com/maps/embed/v1/place?key=${key}&q=${query}`;
}
