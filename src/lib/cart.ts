"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import type { MenuCategory, MenuItem } from "@/data/menu";

export type CartModifier = {
  name: string;
  option: string;
};

export type CartItem = {
  cartId: string;
  id: string;
  name: string;
  category?: MenuCategory;
  image: string;
  quantity: number;
  modifiers: CartModifier[];
  notes?: string;
};

const CART_KEY = "goldenbagel.cart.v1";
const CART_EVENT = "goldenbagel-cart";
const EMPTY_CART: CartItem[] = [];
let cartCacheRaw = "";
let cartCacheItems: CartItem[] = EMPTY_CART;

function readCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function getCartSnapshot() {
  if (typeof window === "undefined") {
    return EMPTY_CART;
  }

  const raw = window.localStorage.getItem(CART_KEY) || "";

  if (raw === cartCacheRaw) {
    return cartCacheItems;
  }

  cartCacheRaw = raw;
  cartCacheItems = raw ? readCart() : EMPTY_CART;
  return cartCacheItems;
}

function writeCart(items: CartItem[]) {
  const raw = JSON.stringify(items);
  cartCacheRaw = raw;
  cartCacheItems = items;
  window.localStorage.setItem(CART_KEY, raw);
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
  return `${item.id}:${modifiers.map((modifier) => `${modifier.name}=${modifier.option}`).join("|")}`;
}

export function useCart() {
  const items = useSyncExternalStore(subscribeCart, getCartSnapshot, () => EMPTY_CART);

  const save = useCallback((nextItems: CartItem[]) => {
    writeCart(nextItems);
  }, []);

  const addItem = useCallback(
    (menuItem: MenuItem, modifiers: CartModifier[] = [], quantity = 1) => {
      const cartId = makeCartId(menuItem, modifiers);
      const current = readCart();
      const existing = current.find((item) => item.cartId === cartId);

      const nextItems = existing
        ? current.map((item) => (item.cartId === cartId ? { ...item, quantity: item.quantity + quantity } : item))
        : [
            ...current,
            {
              cartId,
              id: menuItem.id,
              name: menuItem.name,
              category: menuItem.category,
              image: menuItem.image,
              quantity,
              modifiers
            }
          ];

      save(nextItems);
    },
    [save]
  );

  const updateQuantity = useCallback(
    (cartId: string, quantity: number) => {
      const nextItems = readCart()
        .map((item) => (item.cartId === cartId ? { ...item, quantity } : item))
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
    return { quantity };
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
