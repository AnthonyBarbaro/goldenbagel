"use client";

import { useEffect, useState } from "react";
import { primaryLocation, type StoreLocation } from "@/config/site";
import { classNames } from "@/lib/format";
import { getNextOpenMessage, isStoreOpenNow } from "@/lib/hours";

type StoreStatus = {
  openNow: boolean;
  message: string;
};

type StoreStatusBadgeProps = {
  className?: string;
  compact?: boolean;
  location?: StoreLocation;
};

function getStoreStatus(location: StoreLocation): StoreStatus {
  const now = new Date();

  return {
    openNow: isStoreOpenNow(location.hours, location.timezone, now),
    message: getNextOpenMessage(location.hours, location.timezone, now)
  };
}

export function StoreStatusBadge({ className, compact = false, location = primaryLocation }: StoreStatusBadgeProps) {
  const [status, setStatus] = useState<StoreStatus | null>(null);
  const statusMessage = status?.message || "Checking hours...";

  useEffect(() => {
    const updateStatus = () => setStatus(getStoreStatus(location));
    const interval = window.setInterval(updateStatus, 60_000);

    updateStatus();
    return () => window.clearInterval(interval);
  }, [location]);

  return (
    <span
      aria-live="polite"
      suppressHydrationWarning
      className={classNames(
        "inline-flex max-w-full min-w-0 items-center gap-2 rounded-full px-3 py-1 text-[0.66rem] font-black uppercase tracking-[0.13em] shadow-soft ring-1",
        status
          ? status.openNow
            ? "bg-emerald-100 text-emerald-950 ring-emerald-500/25"
            : "bg-red-100 text-red-950 ring-red-500/25"
          : "bg-cream text-charcoal ring-white/20",
        compact && "px-2.5 py-1 text-[0.6rem] tracking-[0.1em]",
        className
      )}
    >
      <span
        className={classNames(
          "h-2 w-2 shrink-0 rounded-full",
          status ? (status.openNow ? "bg-emerald-600" : "bg-red-600") : "bg-honey"
        )}
        aria-hidden="true"
      />
      <span className="min-w-0 truncate" suppressHydrationWarning>
        {statusMessage}
      </span>
    </span>
  );
}
