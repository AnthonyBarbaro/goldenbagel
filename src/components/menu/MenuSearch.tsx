"use client";

import { Search, X } from "lucide-react";
import { useRef } from "react";

type MenuSearchProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  resultsId: string;
};

export function MenuSearch({ id, value, onChange, resultsId }: MenuSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function clearSearch() {
    onChange("");
    inputRef.current?.focus();
  }

  return (
    <div className="relative" role="search">
      <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso/70" size={20} />
      <label htmlFor={id} className="sr-only">
        Search menu
      </label>
      <input
        ref={inputRef}
        id={id}
        type="search"
        autoComplete="off"
        enterKeyHint="search"
        aria-controls={resultsId}
        maxLength={80}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search the menu"
        className="min-h-14 w-full appearance-none rounded-2xl border border-charcoal/15 bg-white py-3 pl-12 pr-12 font-bold text-charcoal shadow-soft outline-none transition placeholder:font-semibold placeholder:text-espresso/70 focus:border-honey focus:ring-4 focus:ring-honey/20 [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={clearSearch}
          aria-label="Clear menu search"
          className="absolute right-1.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-espresso/75 transition hover:bg-cream hover:text-charcoal"
        >
          <X aria-hidden="true" size={18} />
        </button>
      )}
    </div>
  );
}
