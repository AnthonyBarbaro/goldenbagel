import { Hero } from "@/components/home/Hero";
import { HomeGallery } from "@/components/home/HomeGallery";
import { LocationSection } from "@/components/home/LocationSection";
import { PopularMenu } from "@/components/home/PopularMenu";
import { QuickActions } from "@/components/home/QuickActions";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, homepageMenuPreviewSchema } from "@/lib/seo";

export default function Home() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <JsonLd data={homepageMenuPreviewSchema()} />
      <Hero />
      <QuickActions />
      <div id="menu" className="scroll-mt-24">
        <PopularMenu />
      </div>
      <HomeGallery />
      <LocationSection />
      <ReviewsSection />
    </main>
  );
}
