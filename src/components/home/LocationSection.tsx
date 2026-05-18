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
  const sectionTitle = hasMultipleLocations ? "Find a Golden Bagel near you." : `Find us fast at ${primaryLocation.address.street}.`;
  const sectionIntro = hasMultipleLocations
    ? "Pick a location for directions, call ahead, or swing by for pickup."
    : `Tap for Google Maps directions, call ahead, or swing by for pickup in ${primaryLocation.address.city}.`;

  return (
    <Section id="visit" eyebrow="Easy directions" title={sectionTitle} intro={sectionIntro} className="bg-cream">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-4">
          {siteConfig.locations.map((location) => {
            const directionsHref = getLocationDirectionsUrl(location);
            const todayHours = formatTodayHours(location.hours, location.timezone);

            return (
              <div key={location.id} className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
                <div className="mb-5 rounded-[1.5rem] bg-honey/22 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-toast">Pickup address</p>
                  <a href={directionsHref} className="mt-2 flex items-start gap-3 text-charcoal transition hover:text-toast">
                    <Compass aria-hidden="true" className="mt-1 shrink-0" size={22} />
                    <span>
                      <span className="block text-2xl font-black">{location.address.street}</span>
                      <span className="mt-1 block text-sm font-bold text-espresso/72">
                        {formatLocationCityLine(location)} - tap for turn-by-turn directions
                      </span>
                    </span>
                  </a>
                </div>

                <div className="space-y-5 text-espresso/78">
                  <div className="flex gap-4">
                    <MapPin aria-hidden="true" className="mt-1 text-toast" />
                    <div>
                      <h3 className="font-black text-charcoal">{location.name}</h3>
                      <p>{formatLocationAddress(location)}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock aria-hidden="true" className="mt-1 text-toast" />
                    <div>
                      <h3 className="font-black text-charcoal">Hours today</h3>
                      <p>{todayHours}</p>
                      <StoreStatusBadge location={location} compact className="mt-2" />
                    </div>
                  </div>
                  <a href={location.phoneHref} className="flex gap-4 transition hover:text-charcoal">
                    <Phone aria-hidden="true" className="mt-1 text-toast" />
                    <div>
                      <h3 className="font-black text-charcoal">Phone</h3>
                      <p>{location.phone}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

        <div className="min-h-[300px] overflow-hidden rounded-[2rem] bg-white shadow-soft sm:min-h-[360px]">
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
