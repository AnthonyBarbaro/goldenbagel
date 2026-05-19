import { Clock3, CreditCard, ListChecks, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { StoreStatusBadge } from "@/components/ui/StoreStatusBadge";
import { onlineOrderUrl } from "@/config/site";

export function OrderSection() {
  return (
    <Section className="bg-charcoal text-white">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-honey">Order ahead</p>
          <h2 className="font-serif text-4xl font-black tracking-tight sm:text-6xl">Pickup without the counter wait.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/74 sm:text-lg sm:leading-8">
            Build the order here, choose a pickup time, then finish payment through secure checkout.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href={onlineOrderUrl} className="w-full sm:w-auto">
              Start Order
            </Button>
            <StoreStatusBadge compact className="border-white/12 bg-white/8 text-white" />
          </div>
        </div>
        <div className="grid gap-4">
          {[
            { icon: ListChecks, title: "Choose food", text: "Bagels, sandwiches, wraps, salads, smoothies, and coffee." },
            { icon: Clock3, title: "Pick time", text: "ASAP when open, or schedule the next pickup window." },
            { icon: CreditCard, title: "Pay securely", text: "Checkout happens on the secure payment page." },
            { icon: PackageCheck, title: "Grab and go", text: "We will use your pickup details to match the order." }
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[1.25rem] border border-white/12 bg-white/8 p-4 sm:p-5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-honey text-charcoal">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <div>
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/70">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
