"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MENU_BOARD_REFRESH_SECONDS } from "@/data/menuBoard";

export function MenuBoardRefresh() {
  const router = useRouter();

  useEffect(() => {
    const refresh = () => router.refresh();
    const intervalId = window.setInterval(refresh, MENU_BOARD_REFRESH_SECONDS * 1000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        refresh();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [router]);

  return null;
}
