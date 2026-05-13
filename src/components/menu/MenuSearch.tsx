"use client";

import { Search } from "lucide-react";

type MenuSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function MenuSearch({ value, onChange }: MenuSearchProps) {
  return (
    <div className="relative">
      <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso/45" size={20} />
      <label htmlFor="menu-search" className="sr-only">
        Search menu
      </label>
      <input
        id="menu-search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search bagels, wraps, smoothies..."
        className="min-h-14 w-full rounded-full border border-charcoal/10 bg-white py-3 pl-12 pr-5 text-charcoal shadow-soft outline-none transition focus:border-honey"
      />
    </div>
  );
}
