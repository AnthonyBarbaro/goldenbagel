"use client";

import { useEffect } from "react";
import { MENU_REFRESH_SECONDS } from "@/config/menu";
import { refreshPublicMenu } from "@/lib/publicMenuClient";

export function MenuRefresh(): null {
  useEffect(() => {
    let lastRefreshAt = Date.now();

    const refresh = (): void => {
      if (document.visibilityState !== "visible" || Date.now() - lastRefreshAt < 1000) {
        return;
      }

      lastRefreshAt = Date.now();
      void refreshPublicMenu();
    };
    void refreshPublicMenu();
    const intervalId = window.setInterval(refresh, MENU_REFRESH_SECONDS * 1000);

    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", refresh);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  return null;
}
