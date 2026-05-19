import { onlineMenuCategories, onlineMenuGeneratedAt, onlineMenuItems } from "./onlineMenu.generated";
import {
  featuredMenuItemIds as fallbackFeaturedMenuItemIds,
  menuCategories as fallbackMenuCategories,
  menuItems as fallbackMenuItems,
  type MenuCategory,
  type MenuItem,
  type MenuModifier,
  type MenuTag
} from "./menu";

export type { MenuCategory, MenuItem, MenuModifier, MenuTag };

export const isLiveMenu = onlineMenuItems.length > 0;

export const liveMenuGeneratedAt = onlineMenuGeneratedAt;

const preferredCategoryOrder = [
  "Golden Deals",
  "Breakfast Bagels",
  "Breakfast Wraps",
  "Lunch Bagels",
  "Focaccia Sandwiches",
  "Gourmet Wraps",
  "Salads",
  "Smoothies",
  "Coffee & Tea",
  "Beverages",
  "Donuts",
  "Off Menu",
  "Secret Menu",
  "Rewards",
  "Other items",
  "Flavors & Toppings"
] satisfies MenuCategory[];

function categoryRank(category: MenuCategory) {
  const index = preferredCategoryOrder.indexOf(category);
  return index === -1 ? preferredCategoryOrder.length : index;
}

function sortCategories(categories: MenuCategory[]) {
  return [...categories].sort((first, second) => {
    const rankDifference = categoryRank(first) - categoryRank(second);
    return rankDifference || first.localeCompare(second);
  });
}

function sortItems(items: MenuItem[]) {
  return items
    .map((item, index) => ({ item, index }))
    .sort((first, second) => {
      const rankDifference = categoryRank(first.item.category) - categoryRank(second.item.category);
      return rankDifference || first.index - second.index;
    })
    .map(({ item }) => item);
}

export const menuItems: MenuItem[] = sortItems(isLiveMenu ? onlineMenuItems : fallbackMenuItems);

export const menuCategories: MenuCategory[] = sortCategories(isLiveMenu ? onlineMenuCategories : fallbackMenuCategories);

const featuredNames = [
  "bagel w/cream cheese",
  "golden scramble",
  "golden works",
  "lox bagel",
  "golden club",
  "thai chicken wrap",
  "traditional cobb",
  "triple berry sunrise"
];

const liveFeaturedMenuItemIds = featuredNames
  .map((name) => menuItems.find((item) => item.name.toLowerCase().includes(name))?.id)
  .filter((id): id is string => Boolean(id));

export const featuredMenuItemIds = isLiveMenu && liveFeaturedMenuItemIds.length > 0 ? liveFeaturedMenuItemIds : fallbackFeaturedMenuItemIds;
