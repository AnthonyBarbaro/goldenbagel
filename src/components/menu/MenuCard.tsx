"use client";

import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { onlineOrderUrl, siteConfig } from "@/config/site";
import type { MenuItem } from "@/data/menu";
import { useCart } from "@/lib/cart";
import { MenuVisual } from "./MenuVisual";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  const { addItem } = useCart();
  const canAddToCart = item.available && item.category !== "Flavors & Toppings";
  const useHostedOrdering = Boolean(siteConfig.cloverOnlineOrderingUrl);

  function handleAdd() {
    addItem(item);
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-charcoal/10 bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative h-44 bg-cream">
        <MenuVisual category={item.category} name={item.name} />
        {item.tags.includes("popular") && <Badge className="absolute left-4 top-4">Popular</Badge>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-toast">{item.category}</p>
          <h2 className="mt-2 text-xl font-black text-charcoal">{item.name}</h2>
        </div>

        <p className="mt-3 flex-1 text-sm leading-6 text-espresso/72">{item.description}</p>

        {item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-espresso/70">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5">
          {useHostedOrdering && canAddToCart ? (
            <Button href={onlineOrderUrl}>
              <Plus aria-hidden="true" size={18} />
              Order Online
            </Button>
          ) : (
            <Button type="button" onClick={handleAdd} disabled={!canAddToCart}>
              <Plus aria-hidden="true" size={18} />
              {canAddToCart ? "Add to Cart" : "Info Only"}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
