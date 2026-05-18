import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StoreStatusBadge } from "@/components/ui/StoreStatusBadge";
import { formatLocationAddress, getLocationDirectionsUrl, primaryLocation, siteConfig } from "@/config/site";
import { formatTodayHours } from "@/lib/hours";
import { getGoogleMapsDirectionsUrl } from "@/lib/maps";

export function VisitQuickCards() {
  const todayHours = formatTodayHours(primaryLocation.hours, primaryLocation.timezone);
  const hasMultipleLocations = siteConfig.locations.length > 1;

  return (
    <section className="bg-cream px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        <div className="rounded-[1.5rem] bg-white p-5 shadow-soft ring-1 ring-charcoal/8">
          <MapPin aria-hidden="true" className="text-toast" size={26} />
          <h2 className="mt-4 text-xl font-black text-charcoal">{hasMultipleLocations ? "Locations" : "Address"}</h2>
          <div className="mt-2 space-y-2 font-bold leading-6 text-espresso/72">
            {siteConfig.locations.map((location) => (
              <a key={location.id} href={getLocationDirectionsUrl(location)} className="block transition hover:text-toast">
                <span className="block text-charcoal">{location.name}</span>
                {formatLocationAddress(location)}
              </a>
            ))}
          </div>
          <Button href={getGoogleMapsDirectionsUrl(primaryLocation)} className="mt-5 w-full">
            Get Directions
          </Button>
        </div>

        <div className="rounded-[1.5rem] bg-charcoal p-5 text-white shadow-soft">
          <Clock aria-hidden="true" className="text-honey" size={26} />
          <h2 className="mt-4 text-xl font-black">Hours</h2>
          <p className="mt-2 font-bold text-white/74">{hasMultipleLocations ? `${primaryLocation.name} today` : "Open daily"}</p>
          <p className="mt-1 text-2xl font-black">{todayHours}</p>
          <StoreStatusBadge location={primaryLocation} compact className="mt-3" />
        </div>

        <div className="rounded-[1.5rem] bg-white p-5 shadow-soft ring-1 ring-charcoal/8">
          <Phone aria-hidden="true" className="text-toast" size={26} />
          <h2 className="mt-4 text-xl font-black text-charcoal">{hasMultipleLocations ? `Call ${primaryLocation.name}` : "Call"}</h2>
          <p className="mt-2 text-2xl font-black text-charcoal">{primaryLocation.phone}</p>
          <p className="mt-1 text-sm font-bold text-espresso/68">Questions before you head over?</p>
          <Button href={primaryLocation.phoneHref} className="mt-5 w-full">
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
