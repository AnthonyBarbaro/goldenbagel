"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import type { MenuCategory, MenuItem } from "@/data/liveMenu";

export type CartModifier = {
  id?: string;
  groupId?: string;
  name: string;
  option: string;
  priceCents?: number;
};

export type CartItem = {
  cartId: string;
  id: string;
  cloverItemId?: string;
  name: string;
  category?: MenuCategory;
  image: string;
  priceCents?: number;
  priceLabel?: string;
  quantity: number;
  modifiers: CartModifier[];
  notes?: string;
};

export const MAX_CART_ITEM_QUANTITY = 20;
export const MAX_CART_LINES = 40;
export const MAX_CART_MODIFIERS = 30;
export const MAX_CART_TOTAL_QUANTITY = 100;

const CART_KEY = "goldenbagel.cart.v2";
const CART_EVENT = "goldenbagel-cart";
const EMPTY_CART: CartItem[] = [];
let cartCacheRaw: string | null = null;
let cartCacheItems: CartItem[] = EMPTY_CART;
let cartCacheInitialized = false;
let cartStorageUnavailable = false;

function isNonEmptyString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function normalizePrice(value: unknown) {
  return Number.isInteger(value) && Number(value) > 0 && Number(value) <= 1_000_000 ? Number(value) : undefined;
}

function normalizeModifier(value: unknown): CartModifier | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const modifier = value as Partial<CartModifier>;

  if (!isNonEmptyString(modifier.name, 120) || !isNonEmptyString(modifier.option, 120)) {
    return null;
  }

  return {
    ...(isNonEmptyString(modifier.id, 80) ? { id: modifier.id } : {}),
    ...(isNonEmptyString(modifier.groupId, 80) ? { groupId: modifier.groupId } : {}),
    name: modifier.name.trim(),
    option: modifier.option.trim(),
    ...(normalizePrice(modifier.priceCents) !== undefined ? { priceCents: normalizePrice(modifier.priceCents) } : {})
  };
}

function cartIdFor(itemId: string, modifiers: CartModifier[]) {
  const stableModifierKey = [...modifiers]
    .map((modifier) => `${modifier.name}=${modifier.option}:${modifier.priceCents || 0}`)
    .sort()
    .join("|");
  let firstHash = 0x811c9dc5;
  let secondHash = 0x9e3779b9;

  for (let index = 0; index < stableModifierKey.length; index += 1) {
    const code = stableModifierKey.charCodeAt(index);
    firstHash = Math.imul(firstHash ^ code, 0x01000193);
    secondHash = Math.imul(secondHash ^ code, 0x85ebca6b);
  }

  return `${itemId}:${modifiers.length}:${(firstHash >>> 0).toString(36)}${(secondHash >>> 0).toString(36)}`;
}

function normalizeCartItem(value: unknown): CartItem | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const item = value as Partial<CartItem>;
  const quantity = Number.isFinite(item.quantity) ? Math.trunc(Number(item.quantity)) : 0;

  if (
    !isNonEmptyString(item.id, 120) ||
    !isNonEmptyString(item.name, 160) ||
    !Array.isArray(item.modifiers) ||
    quantity <= 0
  ) {
    return null;
  }

  const modifiers = item.modifiers
    .slice(0, MAX_CART_MODIFIERS)
    .map(normalizeModifier)
    .filter((modifier): modifier is CartModifier => Boolean(modifier));

  if (modifiers.length !== item.modifiers.length) {
    return null;
  }

  const inferredCloverItemId = item.id.startsWith("online-") ? item.id.slice("online-".length) : "";

  return {
    cartId: cartIdFor(item.id, modifiers),
    id: item.id,
    ...(isNonEmptyString(item.cloverItemId, 80)
      ? { cloverItemId: item.cloverItemId }
      : isNonEmptyString(inferredCloverItemId, 80)
        ? { cloverItemId: inferredCloverItemId }
        : {}),
    name: item.name.trim(),
    ...(isNonEmptyString(item.category, 120) ? { category: item.category } : {}),
    image: typeof item.image === "string" && item.image.length <= 500 ? item.image : "",
    ...(normalizePrice(item.priceCents) !== undefined ? { priceCents: normalizePrice(item.priceCents) } : {}),
    ...(typeof item.priceLabel === "string" && item.priceLabel.length <= 80 ? { priceLabel: item.priceLabel } : {}),
    quantity: Math.min(quantity, MAX_CART_ITEM_QUANTITY),
    modifiers,
    ...(typeof item.notes === "string" && item.notes.length <= 500 ? { notes: item.notes } : {})
  };
}

function normalizeCartItems(values: unknown[]) {
  const normalizedItems = values
    .slice(0, MAX_CART_LINES)
    .map(normalizeCartItem)
    .filter((item): item is CartItem => Boolean(item));
  const boundedItems: CartItem[] = [];
  let remainingQuantity = MAX_CART_TOTAL_QUANTITY;

  for (const item of normalizedItems) {
    if (remainingQuantity <= 0) {
      break;
    }

    const quantity = Math.min(item.quantity, remainingQuantity);
    boundedItems.push(quantity === item.quantity ? item : { ...item, quantity });
    remainingQuantity -= quantity;
  }

  return boundedItems.length > 0 ? boundedItems : EMPTY_CART;
}

function parseCart(raw: string | null): CartItem[] {
  if (!raw) {
    return EMPTY_CART;
  }

  try {
    const parsed = JSON.parse(raw) as unknown;

    if (!Array.isArray(parsed)) {
      return EMPTY_CART;
    }

    return normalizeCartItems(parsed);
  } catch {
    return EMPTY_CART;
  }
}

function readCart(): CartItem[] {
  if (typeof window === "undefined") {
    return EMPTY_CART;
  }

  if (cartStorageUnavailable) {
    return cartCacheItems;
  }

  try {
    const raw = window.localStorage.getItem(CART_KEY);

    if (cartCacheInitialized && raw === cartCacheRaw) {
      return cartCacheItems;
    }

    cartCacheRaw = raw;
    cartCacheItems = parseCart(raw);
    cartCacheInitialized = true;
    return cartCacheItems;
  } catch {
    cartStorageUnavailable = true;
    cartCacheInitialized = true;
    return cartCacheItems;
  }
}

function getCartSnapshot() {
  return readCart();
}

function writeCart(items: CartItem[]) {
  const nextItems = normalizeCartItems(items);
  const raw = JSON.stringify(nextItems);
  cartCacheRaw = raw;
  cartCacheItems = nextItems;
  cartCacheInitialized = true;

  if (!cartStorageUnavailable) {
    try {
      window.localStorage.setItem(CART_KEY, raw);
    } catch {
      cartStorageUnavailable = true;
    }
  }

  window.dispatchEvent(new CustomEvent(CART_EVENT));
}

function subscribeCart(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CART_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CART_EVENT, callback);
  };
}

function makeCartId(item: MenuItem, modifiers: CartModifier[]) {
  return cartIdFor(item.id, modifiers);
}

function enrichModifiers(menuItem: MenuItem, modifiers: CartModifier[]) {
  return modifiers.map((selectedModifier) => {
    const group = menuItem.modifiers.find((modifier) => modifier.name === selectedModifier.name);
    const option = group?.options.find((candidate) =>
      typeof candidate === "string" ? candidate === selectedModifier.option : candidate.name === selectedModifier.option
    );

    return {
      ...selectedModifier,
      ...(group?.id ? { groupId: group.id } : {}),
      ...(option && typeof option !== "string" && option.id ? { id: option.id } : {})
    };
  });
}

export function useCart() {
  const items = useSyncExternalStore(subscribeCart, getCartSnapshot, () => EMPTY_CART);

  const save = useCallback((nextItems: CartItem[]) => {
    writeCart(nextItems);
  }, []);

  const addItem = useCallback(
    (menuItem: MenuItem, modifiers: CartModifier[] = [], quantity = 1) => {
      const safeQuantity = Math.min(Math.max(Math.trunc(quantity) || 1, 1), MAX_CART_ITEM_QUANTITY);
      const enrichedModifiers = enrichModifiers(menuItem, modifiers);

      if (enrichedModifiers.length > MAX_CART_MODIFIERS) {
        return { ok: false as const, message: `Choose no more than ${MAX_CART_MODIFIERS} options for one item.` };
      }

      const cartId = makeCartId(menuItem, enrichedModifiers);
      const current = readCart();
      const existing = current.find((item) => item.cartId === cartId);
      const totalQuantity = current.reduce((total, item) => total + item.quantity, 0);

      if (totalQuantity + safeQuantity > MAX_CART_TOTAL_QUANTITY) {
        return { ok: false as const, message: `Your cart can hold up to ${MAX_CART_TOTAL_QUANTITY} items.` };
      }

      if (existing && existing.quantity + safeQuantity > MAX_CART_ITEM_QUANTITY) {
        return { ok: false as const, message: `You can add up to ${MAX_CART_ITEM_QUANTITY} of the same item.` };
      }

      if (!existing && current.length >= MAX_CART_LINES) {
        return { ok: false as const, message: `Your cart can hold up to ${MAX_CART_LINES} different items.` };
      }

      const nextItems = existing
        ? current.map((item) => (item.cartId === cartId ? { ...item, quantity: item.quantity + safeQuantity } : item))
        : [
            ...current,
            {
              cartId,
              id: menuItem.id,
              ...(menuItem.cloverItemId ? { cloverItemId: menuItem.cloverItemId } : {}),
              name: menuItem.name,
              category: menuItem.category,
              image: menuItem.image,
              priceCents: menuItem.priceCents,
              priceLabel: menuItem.priceLabel,
              quantity: safeQuantity,
              modifiers: enrichedModifiers
            }
          ];

      save(nextItems);
      return { ok: true as const };
    },
    [save]
  );

  const updateQuantity = useCallback(
    (cartId: string, quantity: number) => {
      const current = readCart();
      const otherQuantity = current.reduce((total, item) => (item.cartId === cartId ? total : total + item.quantity), 0);
      const safeQuantity = Math.min(
        Math.trunc(quantity),
        MAX_CART_ITEM_QUANTITY,
        Math.max(0, MAX_CART_TOTAL_QUANTITY - otherQuantity)
      );
      const nextItems = current
        .map((item) => (item.cartId === cartId ? { ...item, quantity: safeQuantity } : item))
        .filter((item) => item.quantity > 0);
      save(nextItems);
    },
    [save]
  );

  const removeItem = useCallback(
    (cartId: string) => {
      save(readCart().filter((item) => item.cartId !== cartId));
    },
    [save]
  );

  const clearCart = useCallback(() => save([]), [save]);

  const summary = useMemo(() => {
    const quantity = items.reduce((total, item) => total + item.quantity, 0);
    const subtotalCents = items.reduce((total, item) => total + (item.priceCents || 0) * item.quantity, 0);
    return { quantity, subtotalCents };
  }, [items]);

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    ...summary
  };
}
