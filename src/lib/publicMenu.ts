import type { MenuCategory, MenuItem } from "@/data/menu";

export type PublicMenu = {
  items: MenuItem[];
  categories: MenuCategory[];
  source: "clover" | "partial" | "saved";
  updatedAt: string | null;
};

const hiddenCategories = new Set<MenuCategory>(["Other items", "Secret Menu", "Off Menu", "Flavors & Toppings"]);

export function isCustomerMenuItem(item: MenuItem): boolean {
  return item.available && !hiddenCategories.has(item.category) && ((item.priceCents || 0) > 0 || item.modifiers.length > 0);
}
