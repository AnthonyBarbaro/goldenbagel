import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const popularItems = [
  { name: "Bagel with Cream Cheese", price: "$4.99", category: "Golden Deals" },
  { name: "Golden Scramble", price: "$7.99", category: "Breakfast Bagels" },
  { name: "Golden Works", price: "$10.99", category: "Breakfast Bagels" },
  { name: "Lox Bagel", price: "from $10.99", category: "Lunch Bagels" },
  { name: "Thai Chicken Wrap", price: "$11.99", category: "Wraps" },
  { name: "Traditional Cobb", price: "$12.99", category: "Salads" }
];

export function PopularMenu() {
  return (
    <Section
      eyebrow="Popular picks"
      title="Made fresh for breakfast, lunch, and coffee runs."
      intro="Start with a cafe favorite, then customize your bagel, spread, or notes during the mock ordering flow."
      className="bg-cream"
    >
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <Image
            src="/goldenbagels/menu/order-online.png"
            alt="Golden Bagel Cafe bagel and sandwich favorites"
            width={814}
            height={468}
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {popularItems.map((item) => (
            <div key={item.name} className="rounded-[1.25rem] bg-white p-5 shadow-soft ring-1 ring-charcoal/5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-toast">{item.category}</p>
              <h3 className="mt-3 text-lg font-black text-charcoal">{item.name}</h3>
              <p className="mt-4 text-2xl font-black text-espresso">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/menu">Browse Full Menu</Button>
        <Button href="/order" variant="secondary">
          Order Pickup
        </Button>
      </div>
    </Section>
  );
}
