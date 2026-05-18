import type { Metadata } from "next";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { primaryLocation, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Jobs",
  siteConfig.locations.length > 1
    ? "Apply online to join the Golden Bagel Cafe team."
    : `Apply online to join the Golden Bagel Cafe team in ${primaryLocation.name}.`,
  "/jobs/"
);

export default function JobsPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em] text-toast">Jobs</p>
          <h1 className="mt-4 font-serif text-5xl font-black tracking-tight text-charcoal sm:text-7xl">Join the Golden Bagel Cafe team.</h1>
          <p className="mt-5 text-lg leading-8 text-espresso/74">
            We are hiring friendly, dependable people who care about good food, clean service, and warm hospitality.
          </p>
          <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-soft">
            <h2 className="text-xl font-black text-charcoal">Quick interview form</h2>
            <p className="mt-3 text-espresso/72">
              Share your contact info, the days you can work between 7 AM and 3 PM, and a short note. We will reach out to schedule an interview when there is a fit.
            </p>
          </div>
        </div>
        <JobApplicationForm />
      </div>
    </main>
  );
}
