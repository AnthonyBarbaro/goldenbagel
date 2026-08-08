import type {
  MenuBoardDefinition,
  MenuBoardItemDefinition,
  MenuBoardPriceDefinition,
  MenuBoardSectionDefinition
} from "@/data/menuBoard";
import { MENU_BOARD_REFRESH_SECONDS, menuBoards } from "@/data/menuBoard";
import {
  liveMenuGeneratedAt,
  menuCategories as savedMenuCategories,
  menuItems as savedMenuItems
} from "@/data/liveMenu";
import type { MenuCategory, MenuItem, MenuModifier } from "@/data/menu";

type CloverCollection<T> = {
  elements?: T[];
};

type CloverModifierGroupReference = {
  id: string;
  name?: string;
  minRequired?: number;
  maxAllowed?: number;
  sortOrder?: number;
};

type CloverInventoryItem = {
  id: string;
  name?: string;
  price?: number;
  priceType?: string;
  available?: boolean;
  hidden?: boolean;
  deleted?: boolean;
  modifierGroups?: CloverCollection<CloverModifierGroupReference>;
};

type CloverInventoryModifier = {
  id: string;
  name?: string;
  price?: number;
  available?: boolean;
  sortOrder?: number;
  modifierGroup?: CloverModifierGroupReference;
};

type CloverInventorySnapshot = {
  itemsById: Map<string, CloverInventoryItem>;
  modifiersById: Map<string, CloverInventoryModifier>;
  modifiersByGroupId: Map<string, CloverInventoryModifier[]>;
  modifiersLoaded: boolean;
  updatedAt: string;
};

export type CloverMenuSource = "clover" | "partial" | "saved";

export type CloverLiveMenuData = {
  items: MenuItem[];
  categories: MenuCategory[];
  source: CloverMenuSource;
  updatedAt: string | null;
  inventory: CloverInventorySnapshot | null;
};

export type ResolvedMenuBoardPrice = {
  label?: string;
  cents: number;
  formatted: string;
  source: "clover" | "saved";
};

export type ResolvedMenuBoardItem = Omit<MenuBoardItemDefinition, "prices"> & {
  prices: ResolvedMenuBoardPrice[];
};

export type ResolvedMenuBoardSection = Omit<MenuBoardSectionDefinition, "items"> & {
  items: ResolvedMenuBoardItem[];
};

export type ResolvedMenuBoard = Omit<MenuBoardDefinition, "columns"> & {
  columns: ResolvedMenuBoardSection[][];
};

export type ResolvedMenuBoards = {
  boards: ResolvedMenuBoard[];
  hasSavedPrices: boolean;
};

type CloverLiveMenuOptions = {
  fresh?: boolean;
};

function cloverApiBaseUrl() {
  const configured = process.env.CLOVER_API_BASE_URL?.trim();

  if (configured) {
    return configured.replace(/\/$/, "");
  }

  return process.env.CLOVER_ENV === "sandbox" ? "https://apisandbox.dev.clover.com" : "https://api.clover.com";
}

async function fetchAllCloverElements<T>(
  resourcePath: string,
  accessToken: string,
  query: Record<string, string> = {},
  fresh = false
): Promise<T[]> {
  const limit = 1000;
  const elements: T[] = [];
  let offset = 0;

  while (offset < 10_000) {
    const url = new URL(resourcePath, cloverApiBaseUrl());

    url.searchParams.set("limit", String(limit));
    url.searchParams.set("offset", String(offset));

    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, value);
    }

    const response = await fetch(url, {
      ...(fresh
        ? { cache: "no-store" as const }
        : {
            next: {
              revalidate: MENU_BOARD_REFRESH_SECONDS
            }
          }),
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "GoldenBagelWebsite/1.0"
      },
      signal: AbortSignal.timeout(8_000)
    });

    if (!response.ok) {
      throw new Error(`Clover inventory request failed with status ${response.status}.`);
    }

    const page = (await response.json()) as CloverCollection<T>;
    const pageElements = Array.isArray(page.elements) ? page.elements : [];

    elements.push(...pageElements);

    if (pageElements.length < limit) {
      return elements;
    }

    offset += pageElements.length;
  }

  throw new Error("Clover inventory pagination exceeded the safety limit.");
}

async function fetchCloverInventory(fresh = false): Promise<CloverInventorySnapshot | null> {
  if (process.env.MOCK_CLOVER !== "false") {
    return null;
  }

  const accessToken = process.env.CLOVER_ACCESS_TOKEN?.trim();
  const merchantId = process.env.CLOVER_MERCHANT_ID?.trim();

  if (!accessToken || !merchantId) {
    return null;
  }

  const merchantPath = `/v3/merchants/${encodeURIComponent(merchantId)}`;

  try {
    const itemRequest = fetchAllCloverElements<CloverInventoryItem>(
      `${merchantPath}/items`,
      accessToken,
      { expand: "modifierGroups" },
      fresh
    );
    const modifierRequest = fetchAllCloverElements<CloverInventoryModifier>(
      `${merchantPath}/modifiers`,
      accessToken,
      { expand: "modifierGroup" },
      fresh
    );
    const [itemResult, modifierResult] = await Promise.allSettled([itemRequest, modifierRequest]);

    if (itemResult.status === "rejected") {
      throw itemResult.reason;
    }

    const modifiers = modifierResult.status === "fulfilled" ? modifierResult.value : [];
    const modifiersByGroupId = new Map<string, CloverInventoryModifier[]>();

    for (const modifier of modifiers) {
      const groupId = modifier.modifierGroup?.id;

      if (!groupId) {
        continue;
      }

      const groupModifiers = modifiersByGroupId.get(groupId) || [];
      groupModifiers.push(modifier);
      modifiersByGroupId.set(groupId, groupModifiers);
    }

    if (modifierResult.status === "rejected") {
      console.warn("Clover modifier prices were unavailable; saved modifier prices will be used.");
    }

    return {
      itemsById: new Map(itemResult.value.map((item) => [item.id, item])),
      modifiersById: new Map(modifiers.map((modifier) => [modifier.id, modifier])),
      modifiersByGroupId,
      modifiersLoaded: modifierResult.status === "fulfilled",
      updatedAt: new Date().toISOString()
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Clover inventory error.";
    console.warn(`Clover live pricing unavailable; using the saved menu. ${message}`);
    return null;
  }
}

function formatCurrency(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(cents / 100);
}

function cloverItemIdFor(item: MenuItem) {
  if (item.cloverItemId) {
    return item.cloverItemId;
  }

  return item.id.startsWith("online-") ? item.id.slice("online-".length) : "";
}

function isSellableItem(item: CloverInventoryItem | undefined): item is CloverInventoryItem {
  return Boolean(item && item.available !== false && !item.hidden && !item.deleted);
}

function liveModifierGroups(item: CloverInventoryItem, inventory: CloverInventorySnapshot): MenuModifier[] {
  const seenGroupIds = new Set<string>();

  return [...(item.modifierGroups?.elements || [])]
    .sort((first, second) => (first.sortOrder || 0) - (second.sortOrder || 0))
    .flatMap((group) => {
      if (!group.id || seenGroupIds.has(group.id)) {
        return [];
      }

      seenGroupIds.add(group.id);

      const modifiers = [...(inventory.modifiersByGroupId.get(group.id) || [])]
        .filter((modifier) => modifier.available !== false && Boolean(modifier.name?.trim()))
        .sort((first, second) => (first.sortOrder || 0) - (second.sortOrder || 0));

      if (modifiers.length === 0) {
        return [];
      }

      const groupName = group.name?.trim() || modifiers[0].modifierGroup?.name?.trim();

      if (!groupName) {
        return [];
      }

      const minRequired = Number.isInteger(group.minRequired) ? group.minRequired : undefined;
      const maxAllowed = Number.isInteger(group.maxAllowed) ? group.maxAllowed : undefined;

      return [
        {
          id: group.id,
          name: groupName,
          required: Boolean(minRequired && minRequired > 0),
          ...(minRequired !== undefined ? { minRequired } : {}),
          ...(maxAllowed !== undefined ? { maxAllowed } : {}),
          options: modifiers.map((modifier) => {
            const priceCents = Number.isInteger(modifier.price) ? modifier.price || 0 : 0;

            return {
              id: modifier.id,
              name: modifier.name?.trim() || "Option",
              priceCents,
              priceLabel: priceCents > 0 ? formatCurrency(priceCents) : undefined
            };
          })
        }
      ];
    });
}

function overlaySavedItem(item: MenuItem, inventory: CloverInventorySnapshot): MenuItem {
  const cloverItemId = cloverItemIdFor(item);

  if (!cloverItemId) {
    return item;
  }

  const liveItem = inventory.itemsById.get(cloverItemId);

  if (!isSellableItem(liveItem)) {
    return {
      ...item,
      available: false
    };
  }

  const priceCents = Number.isInteger(liveItem.price) && (liveItem.price || 0) > 0 ? liveItem.price : undefined;
  const modifiers = inventory.modifiersLoaded ? liveModifierGroups(liveItem, inventory) : item.modifiers;

  return {
    ...item,
    cloverItemId,
    available: true,
    modifiers,
    priceCents,
    priceLabel: priceCents ? formatCurrency(priceCents) : modifiers.length > 0 ? "Options vary" : item.priceLabel
  };
}

export async function getCloverLiveMenu(options: CloverLiveMenuOptions = {}): Promise<CloverLiveMenuData> {
  const inventory = await fetchCloverInventory(Boolean(options.fresh));

  if (!inventory) {
    return {
      items: savedMenuItems,
      categories: savedMenuCategories,
      source: "saved",
      updatedAt: liveMenuGeneratedAt || null,
      inventory: null
    };
  }

  const items = savedMenuItems.map((item) => overlaySavedItem(item, inventory));
  const categories = savedMenuCategories.filter((category) =>
    items.some((item) => item.available && item.category === category)
  );

  return {
    items,
    categories,
    source: inventory.modifiersLoaded ? "clover" : "partial",
    updatedAt: inventory.updatedAt,
    inventory
  };
}

function normalizeText(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function matchesOne(value: string | undefined, candidates: readonly string[]) {
  if (!value) {
    return false;
  }

  const normalizedValue = normalizeText(value);
  return candidates.some((candidate) => normalizeText(candidate) === normalizedValue);
}

function findModifierPrice(
  item: CloverInventoryItem,
  inventory: CloverInventorySnapshot,
  groupIds: readonly string[],
  groupNames: readonly string[],
  optionNames: readonly string[]
): { associated: boolean; cents: number | null } {
  const matchingGroupIds = (item.modifierGroups?.elements || [])
    .filter((group) => {
      if (groupIds.includes(group.id)) {
        return true;
      }

      if (matchesOne(group.name, groupNames)) {
        return true;
      }

      return (inventory.modifiersByGroupId.get(group.id) || []).some((modifier) =>
        matchesOne(modifier.modifierGroup?.name, groupNames)
      );
    })
    .map((group) => group.id);
  const itemGroupModifiers = matchingGroupIds.flatMap((groupId) => inventory.modifiersByGroupId.get(groupId) || []);
  const matchingModifiers = itemGroupModifiers.filter(
    (modifier) => modifier.available !== false && matchesOne(modifier.name, optionNames) && Number.isInteger(modifier.price)
  );

  if (matchingModifiers.length === 0) {
    return {
      associated: matchingGroupIds.length > 0,
      cents: null
    };
  }

  return {
    associated: true,
    cents: Math.min(...matchingModifiers.map((modifier) => modifier.price || 0))
  };
}

function resolvePrice(
  item: CloverInventoryItem | undefined,
  price: MenuBoardPriceDefinition,
  inventory: CloverInventorySnapshot | null
): ResolvedMenuBoardPrice | null {
  const savedPrice = (): ResolvedMenuBoardPrice => ({
    ...(price.label ? { label: price.label } : {}),
    cents: price.fallbackCents,
    formatted: formatCurrency(price.fallbackCents),
    source: "saved"
  });

  if (!inventory || !item) {
    return savedPrice();
  }

  if (price.source.kind === "item") {
    const cents = Number.isInteger(item.price) && (item.price || 0) > 0 ? item.price || 0 : price.fallbackCents;

    return {
      ...(price.label ? { label: price.label } : {}),
      cents,
      formatted: formatCurrency(cents),
      source: cents === price.fallbackCents && (!Number.isInteger(item.price) || (item.price || 0) <= 0) ? "saved" : "clover"
    };
  }

  const modifierPrice = findModifierPrice(
    item,
    inventory,
    price.source.groupIds || [],
    price.source.groupNames,
    price.source.optionNames
  );

  if (!modifierPrice.associated) {
    return savedPrice();
  }

  if (modifierPrice.cents === null) {
    return savedPrice();
  }

  let cents = modifierPrice.cents;

  if (price.source.kind === "item-plus-modifier") {
    const itemCents = Number.isInteger(item.price) && (item.price || 0) > 0 ? item.price || 0 : 0;

    if (itemCents <= 0) {
      return savedPrice();
    }

    cents = itemCents + modifierPrice.cents;
  }

  if (cents <= 0) {
    return savedPrice();
  }

  return {
    ...(price.label ? { label: price.label } : {}),
    cents,
    formatted: formatCurrency(cents),
    source: "clover"
  };
}

function resolveBoardItem(item: MenuBoardItemDefinition, inventory: CloverInventorySnapshot | null) {
  const liveItem = inventory?.itemsById.get(item.cloverItemId);

  if (liveItem?.deleted) {
    return null;
  }

  return {
    ...item,
    prices: item.prices
      .map((price) => resolvePrice(liveItem, price, inventory))
      .filter((price): price is ResolvedMenuBoardPrice => Boolean(price))
  } satisfies ResolvedMenuBoardItem;
}

export function resolveMenuBoards(menu: CloverLiveMenuData): ResolvedMenuBoards {
  const boards = menuBoards.map((board) => ({
    ...board,
    columns: board.columns.map((column) =>
      column
        .map((section) => ({
          ...section,
          items: section.items
            .map((item) => resolveBoardItem(item, menu.inventory))
            .filter((item): item is ResolvedMenuBoardItem => item !== null)
            .filter((item) => item.prices.length > 0)
        }))
        .filter((section) => section.items.length > 0)
    )
  }));

  return {
    boards,
    hasSavedPrices: boards.some((board) =>
      board.columns.some((column) =>
        column.some((section) => section.items.some((item) => item.prices.some((price) => price.source === "saved")))
      )
    )
  };
}
