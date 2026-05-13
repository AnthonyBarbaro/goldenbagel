import type { Metadata } from "next";
import { MapDirections } from "@/components/visit/MapDirections";
import { ParkingPickupInfo } from "@/components/visit/ParkingPickupInfo";
import { PlanYourVisit } from "@/components/visit/PlanYourVisit";
import { PopularBeforeVisit } from "@/components/visit/PopularBeforeVisit";
import { VisitContactSection } from "@/components/visit/VisitContactSection";
import { VisitHero } from "@/components/visit/VisitHero";
import { VisitPhotoGallery } from "@/components/visit/VisitPhotoGallery";
import { VisitQuickCards } from "@/components/visit/VisitQuickCards";
import { VisitSeoSection } from "@/components/visit/VisitSeoSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Visit Golden Bagel Cafe in El Cajon | Hours, Directions & Pickup",
  "Find Golden Bagel Cafe at 2744 Fletcher Pkwy in El Cajon. View hours, get directions, call the cafe, and order pickup.",
  "/visit/"
);

export default function VisitPage() {
  return (
    <main className="bg-cream">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Visit Us", path: "/visit/" }])} />
      <VisitHero />
      <VisitQuickCards />
      <MapDirections />
      <VisitPhotoGallery />
      <PlanYourVisit />
      <ParkingPickupInfo />
      <PopularBeforeVisit />
      <VisitContactSection />
      <VisitSeoSection />
    </main>
  );
}
