import { Apple, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatLocationAddress, formatLocationCityLine, primaryLocation, siteConfig } from "@/config/site";
import { getAppleMapsDirectionsUrl, getGoogleMapsDirectionsUrl, getGoogleMapsEmbedUrl } from "@/lib/maps";

export function MapDirections() {
  const mapUrl = getGoogleMapsEmbedUrl(primaryLocation);
  const hasMultipleLocations = siteConfig.locations.length > 1;

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-toast">Map & directions</p>
          <h2 className="mt-3 font-serif text-3xl font-black text-charcoal sm:text-5xl">
            {hasMultipleLocations ? "Choose your Golden Bagel stop." : `Head straight to ${primaryLocation.shortName}.`}
          </h2>
          <p className="mt-4 text-base font-bold leading-7 text-espresso/72">Use your favorite maps app for quick directions to Golden Bagel Cafe.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-h-[340px] overflow-hidden rounded-[2rem] bg-cream shadow-soft ring-1 ring-charcoal/8">
            {mapUrl ? (
              <iframe
                title={`Map to Golden Bagel Cafe ${primaryLocation.name}`}
                src={mapUrl}
                loading="lazy"
                className="h-full min-h-[340px] w-full border-0 lg:min-h-[460px]"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full min-h-[340px] flex-col items-center justify-center bg-[linear-gradient(135deg,#fff8ec,#f8df9f)] p-8 text-center lg:min-h-[460px]">
                <MapPin aria-hidden="true" className="text-toast" size={46} />
                <h3 className="mt-5 text-2xl font-black text-charcoal">Golden Bagel Cafe</h3>
                <p className="mt-2 max-w-sm font-bold leading-6 text-espresso/75">{formatLocationAddress(primaryLocation)}</p>
                <Button href={getGoogleMapsDirectionsUrl(primaryLocation)} className="mt-6">
                  Get Directions
                </Button>
              </div>
            )}
          </div>

          <div className="rounded-[2rem] bg-charcoal p-6 text-white shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-honey">Open maps</p>
            <h3 className="mt-3 text-3xl font-black">{hasMultipleLocations ? "Locations" : primaryLocation.address.street}</h3>
            <p className="mt-3 font-bold leading-7 text-white/72">
              {hasMultipleLocations
                ? "Pick the cafe that works best for breakfast, lunch, coffee, smoothies, and pickup."
                : `${formatLocationCityLine(primaryLocation)}. Open daily for breakfast, lunch, coffee, smoothies, and pickup.`}
            </p>
            <div className="mt-6 grid gap-5">
              {siteConfig.locations.map((location) => (
                <div key={location.id} className="border-t border-white/12 pt-5 first:border-t-0 first:pt-0">
                  <h4 className="text-lg font-black">{location.name}</h4>
                  <p className="mt-1 text-sm font-bold leading-6 text-white/70">{formatLocationAddress(location)}</p>
                  <div className="mt-4 grid gap-3">
                    <Button href={getGoogleMapsDirectionsUrl(location)} className="w-full">
                      <MapPin aria-hidden="true" size={18} />
                      Google Maps
                    </Button>
                    <Button href={getAppleMapsDirectionsUrl(location)} variant="secondary" className="w-full">
                      <Apple aria-hidden="true" size={18} />
                      Apple Maps
                    </Button>
                    <Button href={location.phoneHref} variant="secondary" className="w-full">
                      <Phone aria-hidden="true" size={18} />
                      Call {location.phone}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
