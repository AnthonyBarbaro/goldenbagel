import type { ComponentPropsWithoutRef } from "react";
import { classNames } from "@/lib/format";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={classNames("rounded-[1.5rem] border border-charcoal/10 bg-white shadow-soft", className)}
      {...props}
    />
  );
}
