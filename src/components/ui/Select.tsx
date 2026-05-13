import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { classNames } from "@/lib/format";

type SelectProps = ComponentPropsWithoutRef<"select"> & {
  label: string;
  error?: string;
  children: ReactNode;
};

export function Select({ label, error, className, id, children, ...props }: SelectProps) {
  const inputId = id || props.name;

  return (
    <label className="block text-sm font-bold text-charcoal" htmlFor={inputId}>
      {label}
      <select
        id={inputId}
        className={classNames("mt-2 min-h-12 w-full rounded-2xl border border-charcoal/10 bg-white px-4 text-charcoal", className)}
        {...props}
      >
        {children}
      </select>
      {error && <span className="mt-1 block text-xs font-bold text-red-700">{error}</span>}
    </label>
  );
}
