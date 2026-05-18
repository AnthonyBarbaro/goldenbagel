"use client";

import { Check, ExternalLink, Plus } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { hasHostedOnlineOrdering, onlineOrderUrl } from "@/config/site";
import type { MenuItem } from "@/data/liveMenu";
import { useCart } from "@/lib/cart";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const canAddToCart =
    item.available && item.category !== "Flavors & Toppings" && Boolean(item.priceCents && item.priceCents > 0) && !item.requiresOptions;
  const orderHref = item.orderUrl || onlineOrderUrl;

  function handleAddToCart() {
    addItem(item);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  }

  return (
    <article className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-toast">{item.category}</p>
              {item.tags.includes("popular") && <Badge>Popular</Badge>}
            </div>
            <h2 className="mt-3 break-words text-xl font-black text-charcoal">{item.name}</h2>
          </div>
          {item.priceLabel && <p className="shrink-0 text-base font-black text-charcoal">{item.priceLabel}</p>}
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
          {canAddToCart ? (
            <Button type="button" onClick={handleAddToCart}>
              {added ? <Check aria-hidden="true" size={18} /> : <Plus aria-hidden="true" size={18} />}
              {added ? "Added" : "Add to Cart"}
            </Button>
          ) : hasHostedOnlineOrdering ? (
            <Button href={orderHref} variant="secondary">
              <ExternalLink aria-hidden="true" size={18} />
              Choose Options
            </Button>
          ) : (
            <Button type="button" disabled>
              <Plus aria-hidden="true" size={18} />
              Info Only
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
