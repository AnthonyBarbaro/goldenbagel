"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { classNames } from "@/lib/format";
import { getNextOpenMessage, isStoreOpenNow } from "@/lib/hours";

type StoreStatus = {
  openNow: boolean;
  message: string;
};

type StoreStatusBadgeProps = {
  className?: string;
  compact?: boolean;
};

function getStoreStatus(): StoreStatus {
  return {
    openNow: isStoreOpenNow(siteConfig.hours),
    message: getNextOpenMessage(siteConfig.hours)
  };
}

export function StoreStatusBadge({ className, compact = false }: StoreStatusBadgeProps) {
  const [status, setStatus] = useState<StoreStatus>(() => getStoreStatus());

  useEffect(() => {
    const interval = window.setInterval(() => setStatus(getStoreStatus()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <span
      aria-live="polite"
      suppressHydrationWarning
      className={classNames(
        "inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1 text-[0.66rem] font-black uppercase tracking-[0.13em] shadow-soft ring-1",
        status.openNow
          ? "bg-emerald-100 text-emerald-950 ring-emerald-500/25"
          : "bg-red-100 text-red-950 ring-red-500/25",
        compact && "px-2.5 py-1 text-[0.6rem] tracking-[0.1em]",
        className
      )}
    >
      <span className={classNames("h-2 w-2 shrink-0 rounded-full", status.openNow ? "bg-emerald-600" : "bg-red-600")} aria-hidden="true" />
      <span className="truncate" suppressHydrationWarning>
        {status.message}
      </span>
    </span>
  );
}
