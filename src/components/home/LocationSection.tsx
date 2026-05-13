import { Clock, Compass, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { businessAddress, directionsUrl, siteConfig } from "@/config/site";
import { formatHour } from "@/lib/format";
import { getGoogleMapsEmbedUrl } from "@/lib/maps";

export function LocationSection() {
  const mapUrl = getGoogleMapsEmbedUrl();
  const hours = `${formatHour(siteConfig.hours[0].open)} - ${formatHour(siteConfig.hours[0].close)}`;

  return (
    <Section
      id="visit"
      eyebrow="Easy directions"
      title="Find us fast at 2744 Fletcher Pkwy."
      intro="Tap for Google Maps directions, call ahead, or swing by for pickup in El Cajon."
      className="bg-cream"
    >
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
          <div className="mb-5 rounded-[1.5rem] bg-honey/22 p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-toast">Pickup address</p>
            <a href={directionsUrl} className="mt-2 flex items-start gap-3 text-charcoal transition hover:text-toast">
              <Compass aria-hidden="true" className="mt-1 shrink-0" size={22} />
              <span>
                <span className="block text-2xl font-black">2744 Fletcher Pkwy</span>
                <span className="mt-1 block text-sm font-bold text-espresso/72">El Cajon, CA 92020 - tap for turn-by-turn directions</span>
              </span>
            </a>
          </div>
          <div className="space-y-5 text-espresso/78">
            <div className="flex gap-4">
              <MapPin aria-hidden="true" className="mt-1 text-toast" />
              <div>
                <h3 className="font-black text-charcoal">Address</h3>
                <p>{businessAddress}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock aria-hidden="true" className="mt-1 text-toast" />
              <div>
                <h3 className="font-black text-charcoal">Hours</h3>
                <p>Monday - Sunday, {hours}</p>
              </div>
            </div>
            <a href={siteConfig.phoneHref} className="flex gap-4 transition hover:text-charcoal">
              <Phone aria-hidden="true" className="mt-1 text-toast" />
              <div>
                <h3 className="font-black text-charcoal">Phone</h3>
                <p>{siteConfig.phone}</p>
              </div>
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={directionsUrl} className="w-full sm:w-auto">Open Directions</Button>
            <Button href={siteConfig.phoneHref} variant="secondary" className="w-full sm:w-auto">Call Before You Go</Button>
          </div>
        </div>

        <div className="min-h-[300px] overflow-hidden rounded-[2rem] bg-white shadow-soft sm:min-h-[360px]">
          {mapUrl ? (
            <iframe
              title="Map to Golden Bagel Cafe"
              src={mapUrl}
              loading="lazy"
              className="h-full min-h-[300px] w-full border-0 sm:min-h-[360px]"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center bg-[linear-gradient(135deg,#fff8ec,#f8df9f)] p-8 text-center">
              <MapPin aria-hidden="true" className="text-toast" size={42} />
              <h3 className="mt-5 text-2xl font-black text-charcoal">Golden Bagel Cafe</h3>
              <p className="mt-2 text-espresso/75">{businessAddress}</p>
              <Button href={directionsUrl} className="mt-6">
                Open in Google Maps
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
