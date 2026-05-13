"use client";

import { Plus, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { MenuItem } from "@/data/menu";
import { useCart } from "@/lib/cart";
import { MenuVisual } from "./MenuVisual";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  const { addItem } = useCart();
  const [customizing, setCustomizing] = useState(false);
  const [selectedModifiers, setSelectedModifiers] = useState<Record<string, string>>({});
  const modifiers = item.modifiers;
  const canAddToCart = item.available && item.category !== "Flavors & Toppings";

  const cartModifiers = useMemo(
    () =>
      Object.entries(selectedModifiers)
        .filter(([, option]) => Boolean(option))
        .map(([name, option]) => ({ name, option })),
    [selectedModifiers]
  );

  function handleAdd() {
    addItem(item, cartModifiers);
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

        {customizing && modifiers.length > 0 && (
          <div className="mt-4 space-y-3 rounded-2xl bg-cream p-4">
            {modifiers.map((modifier) => (
              <label key={modifier.name} className="block text-sm font-bold text-charcoal">
                {modifier.name}
                <select
                  value={selectedModifiers[modifier.name] || ""}
                  onChange={(event) =>
                    setSelectedModifiers((current) => ({
                      ...current,
                      [modifier.name]: event.target.value
                    }))
                  }
                  className="mt-2 min-h-11 w-full rounded-xl border border-charcoal/10 bg-white px-3 text-sm"
                >
                  <option value="">No preference</option>
                  {modifier.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        )}

        <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
          <Button type="button" onClick={handleAdd} disabled={!canAddToCart}>
            <Plus aria-hidden="true" size={18} />
            {canAddToCart ? "Add" : "Info Only"}
          </Button>
          {modifiers.length > 0 && (
            <Button
              type="button"
              variant="secondary"
              aria-expanded={customizing}
              aria-label={`Customize ${item.name}`}
              onClick={() => setCustomizing((value) => !value)}
            >
              <SlidersHorizontal aria-hidden="true" size={18} />
              <span className="sr-only">Customize</span>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
