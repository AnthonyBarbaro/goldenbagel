"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore, type ReactElement } from "react";
import { MenuLoading } from "@/components/menu/MenuLoading";
import { MenuRefresh } from "@/components/menu/MenuRefresh";
import { siteConfig } from "@/config/site";
import {
  getPublicMenuSnapshot,
  getServerMenuSnapshot,
  refreshPublicMenu,
  subscribePublicMenu
} from "@/lib/publicMenuClient";

const MenuGrid = dynamic(() => import("@/components/menu/MenuGrid").then((module) => module.MenuGrid), {
  loading: () => <MenuLoading />
});

type LiveMenuProps = { deferUntilVisible?: boolean };

export function LiveMenu({ deferUntilVisible = false }: LiveMenuProps): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(!deferUntilVisible);
  const { menu, error } = useSyncExternalStore(subscribePublicMenu, getPublicMenuSnapshot, getServerMenuSnapshot);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "All";

  useEffect(() => {
    if (active || !containerRef.current) return;

    const activate = (): void => { setActive(true); };
    if (!("IntersectionObserver" in window)) {
      activate();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        activate();
        observer.disconnect();
      }
    }, { rootMargin: "400px" });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div ref={containerRef}>
      {active ? <MenuRefresh /> : null}
      {active && menu ? (
        <>
          {error || menu.source !== "clover" ? (
            <p role="status" className="mb-5 rounded-2xl border border-honey/40 bg-white px-4 py-3 text-sm font-semibold text-espresso">
              {error || "Some menu updates are temporarily unavailable. Prices are checked again at checkout."}
              {error ? <button type="button" onClick={() => { void refreshPublicMenu(true); }} className="ml-2 min-h-11 px-2 font-bold underline">Try again</button> : null}
            </p>
          ) : null}
          <MenuGrid key={category} initialCategory={menu.categories.find((value) => value === category) || "All"} items={menu.items} categories={menu.categories} />
        </>
      ) : error && active ? (
        <div role="alert" className="rounded-3xl border border-charcoal/10 bg-white p-7 text-center">
          <p className="font-serif text-2xl font-bold text-charcoal">We couldn’t load the menu.</p>
          <p className="mt-3 text-sm text-espresso/75">Please try again or call the cafe to place your order.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => { void refreshPublicMenu(true); }} className="min-h-12 rounded-full bg-honey px-6 font-bold text-charcoal">Try again</button>
            <a href={siteConfig.phoneHref} className="inline-flex min-h-12 items-center rounded-full border border-charcoal/15 px-6 text-sm font-bold">Call {siteConfig.phone}</a>
          </div>
        </div>
      ) : <MenuLoading />}
    </div>
  );
}
