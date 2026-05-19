import type { MenuCategory } from "@/data/liveMenu";

const categoryLabels: Partial<Record<MenuCategory, string>> = {
  "Breakfast Bagels": "Breakfast",
  "Lunch Bagels": "Lunch",
  "Focaccia Sandwiches": "Focaccia",
  "Gourmet Wraps": "Wraps",
  "Coffee & Tea": "Coffee",
  Beverages: "Drinks",
  "Secret Menu": "Secret",
  "Other items": "Other"
};

export function getCategoryLabel(category: MenuCategory | "All") {
  return category === "All" ? category : categoryLabels[category] || category;
}
