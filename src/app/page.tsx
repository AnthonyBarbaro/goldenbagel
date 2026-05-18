import { Hero } from "@/components/home/Hero";
import { LocationSection } from "@/components/home/LocationSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { OrderSection } from "@/components/home/OrderSection";
import { PopularMenu } from "@/components/home/PopularMenu";
import { QuickActions } from "@/components/home/QuickActions";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { businessAddress, siteConfig } from "@/config/site";
import { breadcrumbSchema, homepageMenuPreviewSchema } from "@/lib/seo";

function AnnouncementBar() {
  const hasMultipleLocations = siteConfig.locations.length > 1;

  return (
    <div className="bg-charcoal px-4 py-2 text-xs font-bold text-white sm:px-6 sm:text-sm lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-center sm:text-left">{hasMultipleLocations ? "Easy pickup at every Golden Bagel location" : `Easy pickup at ${businessAddress}`}</p>
        <p className="hidden text-honey sm:block">Fresh bagels, breakfast sandwiches, smoothies, and coffee.</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <JsonLd data={homepageMenuPreviewSchema()} />
      <AnnouncementBar />
      <Hero />
      <QuickActions />
      <PopularMenu />
      <OrderSection />
      <LocationSection />
      <ReviewsSection />
      <NewsletterSection />
    </main>
  );
}
