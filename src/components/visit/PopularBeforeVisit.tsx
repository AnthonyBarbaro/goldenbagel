import { Button } from "@/components/ui/Button";
import { MenuVisual } from "@/components/menu/MenuVisual";
import { menuItems, type MenuItem } from "@/data/menu";
import { onlineOrderUrl } from "@/config/site";

const visitorItemIds = ["bagel-cream-cheese", "golden-scramble", "golden-works", "lox-bagel", "golden-club", "smoothie-24"];

const visitorItems = visitorItemIds.map((id) => menuItems.find((item) => item.id === id)).filter((item): item is MenuItem => Boolean(item));

export function PopularBeforeVisit() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-toast">Popular before you visit</p>
          <h2 className="mt-3 font-serif text-3xl font-black text-charcoal sm:text-5xl">Easy pickup favorites.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visitorItems.map((item) => (
            <article key={item.id} className="grid grid-cols-[6rem_1fr] gap-4 rounded-[1.5rem] bg-cream p-4 shadow-soft ring-1 ring-charcoal/8">
              <MenuVisual category={item.category} name={item.name} compact />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-toast">{item.category}</p>
                <h3 className="mt-2 text-lg font-black text-charcoal">{item.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm font-bold leading-6 text-espresso/70">{item.description}</p>
                <Button href={onlineOrderUrl} size="sm" className="mt-4">
                  Order
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
