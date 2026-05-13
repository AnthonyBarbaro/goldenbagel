"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { MenuItem } from "@/data/menu";

export type CartModifier = {
  name: string;
  option: string;
};

export type CartItem = {
  cartId: string;
  id: string;
  name: string;
  price: number;
  priceLabel?: string;
  image: string;
  quantity: number;
  modifiers: CartModifier[];
  notes?: string;
};

const CART_KEY = "goldenbagel.cart.v1";
const CART_EVENT = "goldenbagel-cart";

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

function writeCart(items: CartItem[]) {
  window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(CART_EVENT));
}

function makeCartId(item: MenuItem, modifiers: CartModifier[]) {
  return `${item.id}:${modifiers.map((modifier) => `${modifier.name}=${modifier.option}`).join("|")}`;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(readCart());

    const sync = () => setItems(readCart());
    window.addEventListener("storage", sync);
    window.addEventListener(CART_EVENT, sync);

    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(CART_EVENT, sync);
    };
  }, []);

  const save = useCallback((nextItems: CartItem[]) => {
    setItems(nextItems);
    writeCart(nextItems);
  }, []);

  const addItem = useCallback(
    (menuItem: MenuItem, modifiers: CartModifier[] = [], quantity = 1) => {
      if (menuItem.price === null) {
        return;
      }

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
              price: menuItem.price,
              priceLabel: menuItem.priceLabel,
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
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    return { quantity, subtotal };
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
