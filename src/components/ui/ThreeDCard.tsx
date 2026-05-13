import type { ComponentPropsWithoutRef } from "react";
import { classNames } from "@/lib/format";

export function ThreeDCard({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={classNames(
        "transform-gpu rounded-[1.5rem] border border-white/70 bg-white/90 shadow-soft transition duration-300 will-change-transform hover:-translate-y-1 hover:rotate-[-0.35deg] hover:shadow-lift",
        className
      )}
      {...props}
    />
  );
}
