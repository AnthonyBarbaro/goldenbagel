import { businessAddress, siteConfig } from "@/config/site";

export function getGoogleMapsEmbedUrl() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

  if (!key) {
    return "";
  }

  const query = encodeURIComponent(`${siteConfig.name}, ${businessAddress}`);
  return `https://www.google.com/maps/embed/v1/place?key=${key}&q=${query}`;
}
