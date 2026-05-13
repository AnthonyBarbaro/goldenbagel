import type { ComponentPropsWithoutRef } from "react";
import { classNames } from "@/lib/format";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id || props.name;

  return (
    <label className="block text-sm font-bold text-charcoal" htmlFor={inputId}>
      {label}
      <input
        id={inputId}
        className={classNames("mt-2 min-h-12 w-full rounded-2xl border border-charcoal/10 bg-white px-4 text-charcoal", className)}
        {...props}
      />
      {error && <span className="mt-1 block text-xs font-bold text-red-700">{error}</span>}
    </label>
  );
}
