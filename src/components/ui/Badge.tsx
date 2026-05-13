import type { ComponentPropsWithoutRef } from "react";
import { classNames } from "@/lib/format";

export function Badge({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full bg-sesame px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-espresso",
        className
      )}
      {...props}
    />
  );
}
