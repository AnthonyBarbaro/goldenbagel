import { ContactForm } from "@/components/forms/ContactForm";

export function VisitContactSection() {
  return (
    <section className="bg-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-toast">Need help?</p>
          <h2 className="mt-3 font-serif text-3xl font-black text-charcoal sm:text-5xl">Need help with an order or visit?</h2>
          <p className="mt-4 max-w-xl text-base font-bold leading-7 text-espresso/72">
            Send us a note and we&apos;ll follow up when the cafe team is available.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
