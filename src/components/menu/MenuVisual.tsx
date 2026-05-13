import { Coffee, Croissant, CupSoda, Salad, Sandwich, Sparkles, Utensils, type LucideIcon } from "lucide-react";
import type { MenuCategory } from "@/data/menu";
import { classNames } from "@/lib/format";

type MenuVisualProps = {
  category?: MenuCategory;
  name: string;
  compact?: boolean;
};

type VisualConfig = {
  Icon: LucideIcon;
  label: string;
  className: string;
};

const visualByCategory: Record<MenuCategory, VisualConfig> = {
  "Flavors & Toppings": {
    Icon: Sparkles,
    label: "Bagels & spreads",
    className: "from-[#fff7dd] via-[#f8df9f] to-[#f2a447]"
  },
  "Golden Deals": {
    Icon: Croissant,
    label: "Fresh bagels",
    className: "from-[#fff3c9] via-[#f6b642] to-[#b8652b]"
  },
  "Breakfast Bagels": {
    Icon: Coffee,
    label: "Breakfast bagels",
    className: "from-[#fff8ec] via-[#f8c66b] to-[#d98634]"
  },
  "Breakfast Wraps": {
    Icon: Utensils,
    label: "Breakfast wraps",
    className: "from-[#fff2df] via-[#f4b15d] to-[#9c5a2e]"
  },
  "Lunch Bagels": {
    Icon: Sandwich,
    label: "Lunch bagels",
    className: "from-[#f7f1dd] via-[#d9b56f] to-[#6f7f5f]"
  },
  "Gourmet Wraps": {
    Icon: Sandwich,
    label: "Gourmet wraps",
    className: "from-[#f8efe0] via-[#f0a96e] to-[#b8652b]"
  },
  "Focaccia Sandwiches": {
    Icon: Sandwich,
    label: "Focaccia",
    className: "from-[#fff4d8] via-[#d8aa62] to-[#8b5a2d]"
  },
  Salads: {
    Icon: Salad,
    label: "Fresh salads",
    className: "from-[#f2f7df] via-[#a7b86f] to-[#556842]"
  },
  Smoothies: {
    Icon: CupSoda,
    label: "Smoothies",
    className: "from-[#fff0f4] via-[#f4a6b4] to-[#d9794f]"
  }
};

export function MenuVisual({ category, name, compact = false }: MenuVisualProps) {
  const visual = category ? visualByCategory[category] : undefined;
  const Icon = visual?.Icon || Croissant;
  const label = visual?.label || "Golden Bagel";

  return (
    <div
      className={classNames(
        "relative isolate flex overflow-hidden bg-gradient-to-br",
        visual?.className || "from-[#fff3c9] via-[#f6b642] to-[#b8652b]",
        compact ? "h-full min-h-24 items-center justify-center rounded-2xl" : "h-44 items-end p-5"
      )}
      aria-label={`${label}: ${name}`}
      role="img"
    >
      <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-white/24" aria-hidden="true" />
      <div className="absolute -bottom-16 left-10 h-44 w-44 rounded-full bg-charcoal/10" aria-hidden="true" />
      <Icon
        aria-hidden="true"
        className={classNames(
          "z-10 text-charcoal drop-shadow-[0_12px_22px_rgba(32,24,20,0.16)]",
          compact ? "relative" : "pointer-events-none absolute right-7 top-7 opacity-90"
        )}
        size={compact ? 38 : 68}
      />
      {!compact && (
        <div className="relative z-10 rounded-2xl bg-white/76 px-4 py-3 shadow-soft backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-toast">{label}</p>
          <p className="mt-1 max-w-[14rem] truncate text-lg font-black text-charcoal">{name}</p>
        </div>
      )}
    </div>
  );
}
