import Link from "next/link";
import { Briefcase, CalendarHeart, MapPin, ShoppingBag } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ThreeDCard } from "@/components/ui/ThreeDCard";

const actions = [
  {
    title: "Menu",
    text: "Browse and order bagels, sandwiches, wraps, salads, smoothies, and cafe favorites.",
    href: "/menu",
    icon: ShoppingBag,
    label: "Open menu ordering"
  },
  {
    title: "Catering",
    text: "Build a big-party catering ticket with date, guest count, bagels, spreads, and add-ons.",
    href: "/catering",
    icon: CalendarHeart,
    label: "Open catering ordering"
  },
  {
    title: "Visit Us",
    text: "Find us on Fletcher Parkway in El Cajon, open daily until 3 PM.",
    href: "/visit",
    icon: MapPin,
    label: "Open visit information"
  },
  {
    title: "Jobs",
    text: "Apply online for cafe roles and share your availability.",
    href: "/jobs",
    icon: Briefcase,
    label: "Open job application"
  }
];

export function QuickActions() {
  return (
    <Section className="bg-white">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map(({ title, text, href, icon: Icon, label }) => (
          <Link
            key={title}
            href={href}
            aria-label={label}
            className="group block rounded-[1.5rem] focus-visible:outline focus-visible:outline-4 focus-visible:outline-honey"
          >
            <ThreeDCard className="h-full p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-honey text-charcoal">
                <Icon aria-hidden="true" size={24} />
              </div>
              <h2 className="mt-5 text-xl font-black text-charcoal">{title}</h2>
              <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-espresso/72">{text}</p>
            </ThreeDCard>
          </Link>
        ))}
      </div>
    </Section>
  );
}
