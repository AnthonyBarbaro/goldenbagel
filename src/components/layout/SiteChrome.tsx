"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/menu-tv" || pathname.startsWith("/menu-tv/")) {
    return null;
  }

  return children;
}
