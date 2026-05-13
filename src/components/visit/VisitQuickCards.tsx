"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { businessAddress, siteConfig } from "@/config/site";
import { formatTodayHours, getNextOpenMessage, isStoreOpenNow } from "@/lib/hours";
import { getGoogleMapsDirectionsUrl } from "@/lib/maps";

function getVisitStatus() {
  return {
    openNow: isStoreOpenNow(siteConfig.hours),
    message: getNextOpenMessage(siteConfig.hours)
  };
}

export function VisitQuickCards() {
  const todayHours = formatTodayHours(siteConfig.hours);
  const [status, setStatus] = useState({
    openNow: false,
    message: "Open daily 6:30 AM - 3:00 PM"
  });

  useEffect(() => {
    const timeout = window.setTimeout(() => setStatus(getVisitStatus()), 0);
    const interval = window.setInterval(() => setStatus(getVisitStatus()), 60_000);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="bg-cream px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        <div className="rounded-[1.5rem] bg-white p-5 shadow-soft ring-1 ring-charcoal/8">
          <MapPin aria-hidden="true" className="text-toast" size={26} />
          <h2 className="mt-4 text-xl font-black text-charcoal">Address</h2>
          <p className="mt-2 font-bold leading-6 text-espresso/72">{businessAddress}</p>
          <Button href={getGoogleMapsDirectionsUrl()} className="mt-5 w-full">
            Get Directions
          </Button>
        </div>

        <div className="rounded-[1.5rem] bg-charcoal p-5 text-white shadow-soft">
          <Clock aria-hidden="true" className="text-honey" size={26} />
          <h2 className="mt-4 text-xl font-black">Hours</h2>
          <p className="mt-2 font-bold text-white/74">Open daily</p>
          <p className="mt-1 text-2xl font-black">{todayHours}</p>
          <p className={status.openNow ? "mt-3 text-sm font-black text-honey" : "mt-3 text-sm font-black text-white/70"}>{status.message}</p>
        </div>

        <div className="rounded-[1.5rem] bg-white p-5 shadow-soft ring-1 ring-charcoal/8">
          <Phone aria-hidden="true" className="text-toast" size={26} />
          <h2 className="mt-4 text-xl font-black text-charcoal">Call</h2>
          <p className="mt-2 text-2xl font-black text-charcoal">{siteConfig.phone}</p>
          <p className="mt-1 text-sm font-bold text-espresso/68">Questions before you head over?</p>
          <Button href={siteConfig.phoneHref} className="mt-5 w-full">
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
