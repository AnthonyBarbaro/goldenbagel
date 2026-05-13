import { MenuVisual } from "@/components/menu/MenuVisual";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { featuredMenuItemIds, menuItems, type MenuItem } from "@/data/menu";
import { onlineOrderUrl } from "@/config/site";

const popularItems = featuredMenuItemIds
  .map((id) => menuItems.find((item) => item.id === id))
  .filter((item): item is MenuItem => Boolean(item))
  .slice(0, 6);

export function PopularMenu() {
  return (
    <Section
      eyebrow="Popular picks"
      title="Made fresh for breakfast, lunch, and coffee runs."
      intro="Browse a few favorites here, then use Clover hosted ordering when you are ready to place a pickup order."
      className="bg-cream"
    >
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-soft sm:grid-cols-2">
          {popularItems.slice(0, 4).map((item) => (
            <MenuVisual key={item.id} category={item.category} name={item.name} />
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {popularItems.map((item) => (
            <div key={item.name} className="rounded-[1.25rem] bg-white p-5 shadow-soft ring-1 ring-charcoal/5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-toast">{item.category}</p>
              <h3 className="mt-3 text-lg font-black text-charcoal">{item.name}</h3>
              <p className="mt-4 text-sm font-bold leading-6 text-espresso/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Button href={onlineOrderUrl}>Order Online</Button>
      </div>
    </Section>
  );
}
