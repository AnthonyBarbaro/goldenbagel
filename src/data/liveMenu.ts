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

export const menuItems: MenuItem[] = isLiveMenu ? onlineMenuItems : fallbackMenuItems;

export const menuCategories: MenuCategory[] = isLiveMenu ? onlineMenuCategories : fallbackMenuCategories;

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
