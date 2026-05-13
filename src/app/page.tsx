import { ArrowRight, MapPin } from "lucide-react";
import { CateringPartySection } from "@/components/home/CateringPartySection";
import { Hero } from "@/components/home/Hero";
import { LocationSection } from "@/components/home/LocationSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { OrderSection } from "@/components/home/OrderSection";
import { PopularMenu } from "@/components/home/PopularMenu";
import { QuickActions } from "@/components/home/QuickActions";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { Button } from "@/components/ui/Button";
import { directionsUrl } from "@/config/site";

function AnnouncementBar() {
  return (
    <div className="bg-charcoal px-4 py-2 text-sm font-bold text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p>Open daily 6:30 AM - 3:00 PM - Order pickup or stop by in El Cajon</p>
        <div className="flex gap-3">
          <Button href="/order" variant="primary" size="sm">
            Order pickup
            <ArrowRight aria-hidden="true" size={16} />
          </Button>
          <Button href={directionsUrl} variant="ghost" size="sm" className="text-white hover:bg-white/10">
            <MapPin aria-hidden="true" size={16} />
            Directions
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Hero />
      <QuickActions />
      <PopularMenu />
      <OrderSection />
      <CateringPartySection />
      <LocationSection />
      <ReviewsSection />
      <NewsletterSection />
    </main>
  );
}
