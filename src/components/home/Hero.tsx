import Image from "next/image";
import { ArrowRight, MapPin, ShoppingBag } from "lucide-react";
import { AnimatedBagel } from "@/components/ui/AnimatedBagel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { directionsUrl, siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(246,182,66,0.38),transparent_28%),linear-gradient(135deg,#fff8ec_0%,#ffffff_50%,#fde7b0_100%)] px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-honey/30" aria-hidden="true" />
      <div className="absolute right-10 top-32 h-40 w-40 rounded-full border border-toast/20" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <Badge>Open daily 6:30 AM - 3:00 PM</Badge>
          <h1 className="mt-6 font-serif text-5xl font-black leading-[0.96] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            Fresh Bagels, Breakfast Sandwiches & Cafe Favorites
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-espresso/78">
            Golden Bagel Cafe serves fresh bagels, breakfast sandwiches, wraps, salads, smoothies, and catering favorites in
            El Cajon.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/order" size="lg">
              <ShoppingBag aria-hidden="true" size={20} />
              Order Pickup
            </Button>
            <Button href="/menu" variant="secondary" size="lg">
              View Menu
              <ArrowRight aria-hidden="true" size={19} />
            </Button>
            <Button href={directionsUrl} variant="ghost" size="lg">
              <MapPin aria-hidden="true" size={19} />
              Get Directions
            </Button>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
            {[
              ["4.1", "Google rating"],
              ["205", "reviews"],
              ["Daily", "fresh bagels"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/74 p-4 shadow-soft ring-1 ring-charcoal/5">
                <div className="text-2xl font-black text-charcoal">{value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-espresso/60">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <div className="absolute right-0 top-4 w-[86%] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-soft">
            <Image
              src="/goldenbagels/hero/bagel-counter.jpg"
              alt="Fresh bagels and cafe counter"
              width={900}
              height={660}
              className="h-[420px] w-full object-cover"
              priority
            />
          </div>
          <div className="absolute left-0 top-36 rounded-[2rem] bg-charcoal p-4 text-white shadow-lift">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-honey">Start your morning golden</p>
            <p className="mt-2 max-w-[13rem] text-sm leading-6 text-white/80">Bagels, coffee, smoothies, and a quick pickup flow.</p>
          </div>
          <div className="absolute bottom-5 left-10 rounded-full bg-white/88 p-4 shadow-soft backdrop-blur">
            <AnimatedBagel />
          </div>
          <div className="absolute bottom-20 right-2 rounded-[1.5rem] bg-white p-5 shadow-lift ring-1 ring-charcoal/10">
            <p className="text-sm font-black text-charcoal">Golden Works</p>
            <p className="mt-1 text-xs text-espresso/70">Eggs, cheese, bacon, ham, sausage</p>
            <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-toast">Breakfast favorite</p>
          </div>
        </div>
      </div>
    </section>
  );
}
