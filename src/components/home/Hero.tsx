import { ShoppingBag, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { onlineOrderUrl, siteConfig } from "@/config/site";

export function Hero() {
  const hasHostedOrdering = Boolean(siteConfig.cloverOnlineOrderingUrl);

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-charcoal px-4 py-16 text-white sm:px-6 lg:px-8">
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster="/goldenbagels/hero/header-video-poster.jpg"
        aria-hidden="true"
      >
        <source src="/goldenbagels/hero/header-video.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,24,20,0.92)_0%,rgba(32,24,20,0.70)_42%,rgba(32,24,20,0.20)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(32,24,20,0.42)_0%,rgba(32,24,20,0)_48%)]" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[590px] max-w-7xl items-center">
        <div className="max-w-3xl">
          <Badge>Open daily 6:30 AM - 3:00 PM</Badge>
          <h1 className="mt-6 font-serif text-5xl font-black leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
            Fresh Bagels, Breakfast Sandwiches & Cafe Favorites
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            Golden Bagel Cafe serves fresh bagels, breakfast sandwiches, wraps, salads, smoothies, and catering favorites in
            El Cajon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={onlineOrderUrl} size="lg">
              <ShoppingBag aria-hidden="true" size={20} />
              Order Online
            </Button>
            {hasHostedOrdering && (
              <Button href="/menu" size="lg" variant="secondary">
                <Utensils aria-hidden="true" size={20} />
                View Menu
              </Button>
            )}
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
            {[
              ["5-star", "flavor goal"],
              ["Daily", "fresh bagels"],
              ["Local", "El Cajon cafe"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/14 p-4 shadow-soft ring-1 ring-white/16 backdrop-blur">
                <div className="text-2xl font-black">{value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-white/62">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
