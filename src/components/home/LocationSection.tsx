import { Clock, MapPin, Phone } from "lucide-react";
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
  const primaryTodayHours = formatTodayHours(primaryLocation.hours, primaryLocation.timezone);

  return (
    <Section id="visit" title={sectionTitle} intro={sectionIntro} className="bg-cream">
      <div className="grid min-w-0 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0 space-y-4">
          {siteConfig.locations.map((location) => {
            const directionsHref = getLocationDirectionsUrl(location);
            const todayHours = formatTodayHours(location.hours, location.timezone);

            return (
              <article key={location.id} className="min-w-0 rounded-[1.75rem] border border-charcoal/10 bg-white p-5 shadow-soft sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl font-black tracking-tight text-charcoal sm:text-3xl">Golden Bagel {location.name}</h3>
                    <a href={directionsHref} className="mt-3 flex min-w-0 items-start gap-3 text-espresso/76 transition hover:text-toast">
                      <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-toast" size={20} />
                      <span className="min-w-0">
                        <span className="block break-words font-black text-charcoal">{location.address.street}</span>
                        <span className="mt-0.5 block text-sm font-bold">{formatLocationCityLine(location)}</span>
                      </span>
                    </a>
                  </div>
                  <StoreStatusBadge location={location} compact className="self-start" />
                </div>

                <div className="mt-6 divide-y divide-charcoal/10 border-y border-charcoal/10 text-espresso/78">
                  <div className="flex items-center gap-3 py-4">
                    <Clock aria-hidden="true" className="shrink-0 text-toast" size={20} />
                    <div>
                      <p className="text-sm font-black text-charcoal">Today&apos;s hours</p>
                      <p className="mt-0.5 text-sm">{todayHours}</p>
                    </div>
                  </div>
                  <a href={location.phoneHref} className="flex items-center gap-3 py-4 transition hover:text-charcoal">
                    <Phone aria-hidden="true" className="shrink-0 text-toast" size={20} />
                    <span>
                      <span className="block text-sm font-black text-charcoal">Call the cafe</span>
                      <span className="mt-0.5 block text-sm">{location.phone}</span>
                    </span>
                  </a>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={directionsHref} className="w-full sm:w-auto">
                    Get Directions
                  </Button>
                  <Button href={location.phoneHref} variant="secondary" className="w-full sm:w-auto">
                    Call the Cafe
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="min-h-[320px] min-w-0 overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-white shadow-soft sm:min-h-[380px]">
          {mapUrl ? (
            <iframe
              title={`Map to ${siteConfig.name} ${primaryLocation.name}`}
              src={mapUrl}
              loading="lazy"
              className="h-full min-h-[320px] w-full border-0 sm:min-h-[380px]"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full min-h-[380px] flex-col items-center justify-center bg-sesame/45 p-6 text-center sm:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-toast ring-1 ring-charcoal/10">
                <MapPin aria-hidden="true" size={28} />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-black text-charcoal sm:text-3xl">Map preview unavailable.</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-espresso/76 sm:text-base">
                You can still open turn-by-turn directions to {formatLocationAddress(primaryLocation)}.
              </p>
              <p className="mt-2 text-sm font-bold text-espresso/70">Today: {primaryTodayHours}</p>
              <div className="mt-6 flex w-full max-w-sm flex-col justify-center gap-3 sm:flex-row">
                <Button href={getLocationDirectionsUrl(primaryLocation)} className="w-full sm:w-auto">
                  Open Directions
                </Button>
                <Button href={primaryLocation.phoneHref} variant="secondary" className="w-full sm:w-auto">
                  Call the Cafe
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
