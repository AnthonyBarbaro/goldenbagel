import { Button } from "@/components/ui/Button";
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
        <form className="mt-6 flex w-full max-w-md gap-2 lg:mt-0">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@example.com"
            className="min-h-12 flex-1 rounded-full border border-white/20 bg-white px-5 text-charcoal shadow-inner"
          />
          <Button type="submit">Join</Button>
        </form>
      </div>
    </Section>
  );
}
