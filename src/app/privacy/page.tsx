import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Privacy Policy",
  "How Golden Bagel Cafe handles website forms, ordering details, and customer information.",
  "/privacy/"
);

const lastUpdated = "May 19, 2026";

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 border-t border-charcoal/10 pt-6">
      <h2 className="text-xl font-black text-charcoal">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="bg-cream px-4 py-14 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 leading-8 text-espresso/78 shadow-soft sm:p-10">
        <h1 className="font-serif text-4xl font-black text-charcoal">Privacy Policy</h1>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-toast">Last updated {lastUpdated}</p>
        <p className="mt-5">
          {siteConfig.name} uses this website to share menu, location, ordering, job, and visit information. This policy explains
          what information we collect through the site and how we use it.
        </p>

        <PolicySection title="Information We Collect">
          <p>
            When you place an order, apply for a job, or contact us, we may collect details such as your name, phone number, email
            address, pickup details, order notes, application information, resume attachments, and the message you choose to send.
          </p>
          <p>
            The site may also collect basic technical information such as browser type, device type, pages visited, and general
            usage data so we can keep the website working well.
          </p>
        </PolicySection>

        <PolicySection title="How We Use Information">
          <p>
            We use submitted information to prepare and confirm orders, respond to messages, review job applications, troubleshoot
            website issues, improve the menu and ordering experience, and contact you about the request you made.
          </p>
          <p>We do not sell customer information.</p>
        </PolicySection>

        <PolicySection title="Payments">
          <p>
            Payment details are handled through a secure payment checkout. We do not collect or store raw card numbers through
            general website forms.
          </p>
        </PolicySection>

        <PolicySection title="Sharing Information">
          <p>
            We may share information with trusted service providers that help operate the website, process online orders, route
            messages, host the site, or provide payment checkout. We may also disclose information if required by law or needed to
            protect the website, customers, or business.
          </p>
        </PolicySection>

        <PolicySection title="Your Choices">
          <p>
            You can contact us to ask about information you submitted through the website. For urgent order changes, call the cafe
            directly at <a href={siteConfig.phoneHref} className="font-black text-charcoal underline">{siteConfig.phone}</a>.
          </p>
        </PolicySection>

        <PolicySection title="Children">
          <p>This website is intended for general customers and is not designed to collect information from children under 13.</p>
        </PolicySection>

        <PolicySection title="Updates">
          <p>
            We may update this policy as the website, ordering tools, or business needs change. The latest version will be posted on
            this page.
          </p>
        </PolicySection>
      </article>
    </main>
  );
}
