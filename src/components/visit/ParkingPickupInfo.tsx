import { Accessibility, Car, MapPin, ShoppingBag, Utensils } from "lucide-react";
import { siteConfig } from "@/config/site";

const infoRows = [
  { label: "Pickup", value: siteConfig.visitInfo.pickup, icon: ShoppingBag },
  { label: "Parking", value: siteConfig.visitInfo.parking, icon: Car },
  { label: "Dine-in", value: siteConfig.visitInfo.dineIn, icon: Utensils },
  { label: "Nearby", value: siteConfig.visitInfo.nearby, icon: MapPin },
  { label: "Accessibility", value: siteConfig.visitInfo.accessibility, icon: Accessibility }
];

export function ParkingPickupInfo() {
  return (
    <section className="bg-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-charcoal/8 sm:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-toast">Before you arrive</p>
          <h2 className="mt-3 font-serif text-3xl font-black text-charcoal sm:text-5xl">Pickup, parking & dine-in</h2>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {infoRows.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-[1.35rem] bg-cream p-4">
              <Icon aria-hidden="true" className="text-toast" size={24} />
              <h3 className="mt-3 font-black text-charcoal">{label}</h3>
              <p className="mt-2 text-sm font-bold leading-6 text-espresso/70">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
