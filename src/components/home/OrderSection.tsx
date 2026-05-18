import { Clock3, PackageCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { StoreStatusBadge } from "@/components/ui/StoreStatusBadge";
import { onlineOrderUrl } from "@/config/site";

export function OrderSection() {
  return (
    <Section className="bg-charcoal text-white">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-honey">Order ahead</p>
          <h2 className="font-serif text-4xl font-black tracking-tight sm:text-6xl">Order online from Golden Bagel.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/74 sm:text-lg sm:leading-8">
            Use Golden Bagel online ordering for pickup details, payment, and a smoother cafe handoff.
          </p>
          <div className="mt-8">
            <Button href={onlineOrderUrl} className="w-full sm:w-auto">Order Online</Button>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            { icon: Clock3, title: "Hours today", text: <StoreStatusBadge compact className="mt-1" /> },
            { icon: PackageCheck, title: "Online checkout", text: "Customers can complete pickup orders once the online ordering link is added." },
            { icon: Truck, title: "Pickup first", text: "Delivery can stay a future option." }
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-honey text-charcoal">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <div>
                  <h3 className="font-black">{title}</h3>
                  {typeof text === "string" ? <p className="mt-1 text-sm text-white/70">{text}</p> : text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
