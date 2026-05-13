import { CalendarHeart, MapPin, ShoppingBag, Utensils } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ThreeDCard } from "@/components/ui/ThreeDCard";
import { directionsUrl } from "@/config/site";

const actions = [
  {
    title: "Order Pickup",
    text: "Build a bagel, sandwich, wrap, salad, or smoothie order for pickup.",
    href: "/order",
    icon: ShoppingBag,
    cta: "Start Order"
  },
  {
    title: "View Menu",
    text: "Browse bagels, cream cheese, breakfast, lunch, salads, and smoothies.",
    href: "/menu",
    icon: Utensils,
    cta: "See Menu"
  },
  {
    title: "Catering",
    text: "Bagel trays, sandwiches, salads, and cafe favorites for groups.",
    href: "/catering",
    icon: CalendarHeart,
    cta: "Request Catering"
  },
  {
    title: "Visit Us",
    text: "Find us on Fletcher Parkway in El Cajon, open daily until 3 PM.",
    href: directionsUrl,
    icon: MapPin,
    cta: "Directions"
  }
];

export function QuickActions() {
  return (
    <Section className="bg-white">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map(({ title, text, href, icon: Icon, cta }) => (
          <ThreeDCard key={title} className="p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-honey text-charcoal">
              <Icon aria-hidden="true" size={24} />
            </div>
            <h2 className="mt-5 text-xl font-black text-charcoal">{title}</h2>
            <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-espresso/72">{text}</p>
            <Button href={href} variant="ghost" size="sm" className="mt-4 px-0">
              {cta}
            </Button>
          </ThreeDCard>
        ))}
      </div>
    </Section>
  );
}
