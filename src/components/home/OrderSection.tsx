import { Clock3, PackageCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { formatHour } from "@/lib/format";

export function OrderSection() {
  const hours = `${formatHour(siteConfig.hours[0].open)} - ${formatHour(siteConfig.hours[0].close)}`;

  return (
    <Section className="bg-charcoal text-white">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-honey">Order ahead</p>
          <h2 className="font-serif text-4xl font-black tracking-tight sm:text-6xl">Order ahead. Pick up fresh.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
            Choose your favorites, add notes, and send the order through the Clover-ready flow. Mock mode stays on until live credentials are connected.
          </p>
          <div className="mt-8">
            <Button href="/order">Open Clover Order</Button>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            { icon: Clock3, title: "Open daily", text: hours },
            { icon: PackageCheck, title: "Clover-ready", text: "Submit item details now; route to hosted Clover checkout later." },
            { icon: Truck, title: "Delivery", text: "Delivery can be enabled as a future Clover/order-provider option." }
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-honey text-charcoal">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <div>
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
