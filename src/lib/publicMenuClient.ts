"use client";

import { MENU_PRICE_CACHE_SECONDS } from "@/config/menu";
import type { PublicMenu } from "@/lib/publicMenu";

type MenuSnapshot = {
  menu: PublicMenu | null;
  error: string;
};

const emptySnapshot: MenuSnapshot = { menu: null, error: "" };
let snapshot = emptySnapshot;
let expiresAt = 0;
let request: Promise<void> | null = null;
const listeners = new Set<() => void>();

export function subscribePublicMenu(listener: () => void): () => void {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

export function getPublicMenuSnapshot(): MenuSnapshot {
  return snapshot;
}

export function getServerMenuSnapshot(): MenuSnapshot {
  return emptySnapshot;
}

function updateSnapshot(value: MenuSnapshot): void {
  snapshot = value;
  listeners.forEach((listener) => listener());
}

export async function refreshPublicMenu(force = false): Promise<void> {
  if (request) return request;
  if (!force && expiresAt > Date.now()) return;

  if (snapshot.error) updateSnapshot({ ...snapshot, error: "" });

  request = fetch("/api/menu/", { headers: { Accept: "application/json" } })
    .then(async (response) => {
      if (!response.ok) throw new Error("Menu request failed.");

      const menu = await response.json() as PublicMenu;
      if (!Array.isArray(menu.items) || !Array.isArray(menu.categories) || !["clover", "partial", "saved"].includes(menu.source)) {
        throw new Error("Invalid menu response.");
      }

      const now = Date.now();
      const updatedAt = Date.parse(menu.updatedAt || "");
      expiresAt = menu.source === "saved" || !Number.isFinite(updatedAt)
        ? now + 5000
        : Math.min(now + MENU_PRICE_CACHE_SECONDS * 1000, updatedAt + MENU_PRICE_CACHE_SECONDS * 1000);
      updateSnapshot({ menu, error: "" });
    })
    .catch(() => {
      expiresAt = Date.now() + 5000;
      updateSnapshot({ menu: snapshot.menu, error: "The menu couldn’t refresh. Please try again." });
    })
    .finally(() => { request = null; });

  return request;
}
