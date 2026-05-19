import { Clock, Compass, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { StoreStatusBadge } from "@/components/ui/StoreStatusBadge";
import { formatLocationAddress, formatLocationCityLine, getLocationDirectionsUrl, primaryLocation, siteConfig } from "@/config/site";
import { formatTodayHours } from "@/lib/hours";
import { getGoogleMapsEmbedUrl } from "@/lib/maps";

export function LocationSection() {
  const mapUrl = getGoogleMapsEmbedUrl(primaryLocation);
  const hasMultipleLocations = siteConfig.locations.length > 1;
  const sectionTitle = hasMultipleLocations ? "Find a Golden Bagel near you." : "Easy pickup on Fletcher Parkway.";
  const sectionIntro = hasMultipleLocations
    ? "Pick a location for directions, call ahead, or swing by for pickup."
    : `Open daily in ${primaryLocation.address.city} for bagels, breakfast, lunch, coffee, and smoothies.`;

  return (
    <Section id="visit" eyebrow="Visit us" title={sectionTitle} intro={sectionIntro} className="bg-white">
      <div className="grid min-w-0 gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="min-w-0 space-y-4">
          {siteConfig.locations.map((location) => {
            const directionsHref = getLocationDirectionsUrl(location);
            const todayHours = formatTodayHours(location.hours, location.timezone);

            return (
              <div key={location.id} className="min-w-0 rounded-[1.5rem] border border-charcoal/10 bg-cream/55 p-4 shadow-sm sm:p-5">
                <div className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-toast">Pickup address</p>
                  <a href={directionsHref} className="mt-2 flex min-w-0 items-start gap-3 text-charcoal transition hover:text-toast">
                    <Compass aria-hidden="true" className="mt-1 shrink-0" size={22} />
                    <span className="min-w-0">
                      <span className="block break-words text-xl font-black sm:text-2xl">{location.address.street}</span>
                      <span className="mt-1 block text-sm font-bold text-espresso/72">
                        {formatLocationCityLine(location)} - tap for turn-by-turn directions
                      </span>
                    </span>
                  </a>
                </div>

                <div className="space-y-5 text-espresso/78">
                  <div className="flex gap-4">
                    <MapPin aria-hidden="true" className="mt-1 text-toast" />
                    <div className="min-w-0">
                      <h3 className="font-black text-charcoal">{location.name}</h3>
                      <p className="break-words">{formatLocationAddress(location)}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock aria-hidden="true" className="mt-1 text-toast" />
                    <div className="min-w-0">
                      <h3 className="font-black text-charcoal">Hours today</h3>
                      <p>{todayHours}</p>
                      <StoreStatusBadge location={location} compact className="mt-2" />
                    </div>
                  </div>
                  <a href={location.phoneHref} className="flex gap-4 transition hover:text-charcoal">
                    <Phone aria-hidden="true" className="mt-1 text-toast" />
                    <div className="min-w-0">
                      <h3 className="font-black text-charcoal">Phone</h3>
                      <p>{location.phone}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={directionsHref} className="w-full sm:w-auto">
                    Open Directions
                  </Button>
                  <Button href={location.phoneHref} variant="secondary" className="w-full sm:w-auto">
                    Call Before You Go
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="min-h-[300px] min-w-0 overflow-hidden rounded-[1.5rem] border border-charcoal/10 bg-cream/55 shadow-sm sm:min-h-[360px]">
          {mapUrl ? (
            <iframe
              title={`Map to ${siteConfig.name} ${primaryLocation.name}`}
              src={mapUrl}
              loading="lazy"
              className="h-full min-h-[300px] w-full border-0 sm:min-h-[360px]"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center bg-[linear-gradient(135deg,#fff8ec,#f8df9f)] p-8 text-center">
              <MapPin aria-hidden="true" className="text-toast" size={42} />
              <h3 className="mt-5 text-2xl font-black text-charcoal">{siteConfig.name}</h3>
              <p className="mt-2 text-espresso/75">{formatLocationAddress(primaryLocation)}</p>
              <Button href={getLocationDirectionsUrl(primaryLocation)} className="mt-6">
                Open in Google Maps
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
