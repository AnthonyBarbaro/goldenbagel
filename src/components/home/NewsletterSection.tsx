import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Section } from "@/components/ui/Section";

export function NewsletterSection() {
  return (
    <Section className="bg-cream">
      <div className="rounded-[2rem] bg-charcoal p-6 text-white shadow-soft sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-honey">Newsletter</p>
          <h2 className="mt-3 font-serif text-3xl font-black sm:text-5xl">Get fresh updates.</h2>
          <p className="mt-3 max-w-2xl text-white/70">Join the list for cafe updates, seasonal specials, and catering reminders.</p>
        </div>
        <div className="mt-6 lg:mt-0">
          <NewsletterForm />
        </div>
      </div>
    </Section>
  );
}
