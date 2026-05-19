"use client";

import { Check, ChevronDown, Plus, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { MenuItem } from "@/data/liveMenu";
import type { CartModifier } from "@/lib/cart";
import { useCart } from "@/lib/cart";
import { classNames } from "@/lib/format";

type MenuCardProps = {
  item: MenuItem;
  showCategory?: boolean;
};

type RawModifier = MenuItem["modifiers"][number];
type RawModifierOption = RawModifier["options"][number];

type NormalizedOption = {
  key: string;
  name: string;
  priceCents: number;
};

type SelectedOptions = Record<string, NormalizedOption[]>;
type ExpandedGroups = Record<string, boolean>;

const MANY_ALLOWED = 10_000;

function formatCurrency(priceCents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(priceCents / 100);
}

function groupKey(modifier: RawModifier, index: number) {
  return modifier.id || `${modifier.name}-${index}`;
}

function normalizeOption(option: RawModifierOption, index: number): NormalizedOption {
  if (typeof option === "string") {
    return {
      key: `${option}-${index}`,
      name: option,
      priceCents: 0
    };
  }

  return {
    key: option.id || `${option.name}-${index}`,
    name: option.name,
    priceCents: option.priceCents || 0
  };
}

function isSingleChoiceGroup(modifier: RawModifier) {
  const name = modifier.name.toLowerCase();

  return (
    modifier.maxAllowed === 1 ||
    name.startsWith("choose ") ||
    name.startsWith("size ") ||
    name.startsWith("style ")
  );
}

function minimumRequired(modifier: RawModifier) {
  if (modifier.minRequired && modifier.minRequired > 0) {
    return modifier.minRequired;
  }

  if (isSingleChoiceGroup(modifier)) {
    return 1;
  }

  return modifier.required ? 1 : 0;
}

function maximumAllowed(modifier: RawModifier) {
  if (!modifier.maxAllowed || modifier.maxAllowed >= MANY_ALLOWED) {
    return undefined;
  }

  return modifier.maxAllowed;
}

export function MenuCard({ item, showCategory = true }: MenuCardProps) {
  const [added, setAdded] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [expandedGroups, setExpandedGroups] = useState<ExpandedGroups>({});
  const { addItem } = useCart();
  const hasOptions = item.modifiers.length > 0;
  const inlineModifier =
    item.modifiers.length === 1 &&
    isSingleChoiceGroup(item.modifiers[0]) &&
    minimumRequired(item.modifiers[0]) === 1 &&
    item.modifiers[0].options.length <= 4
      ? item.modifiers[0]
      : null;
  const inlineModifierKey = inlineModifier ? groupKey(inlineModifier, 0) : "";
  const inlineOptions = inlineModifier ? inlineModifier.options.map(normalizeOption) : [];
  const inlineSelectedOption = inlineModifier ? selectedOptions[inlineModifierKey]?.[0] : undefined;
  const inlinePrompt = inlineModifier?.name.toLowerCase().startsWith("size ") ? "Choose size" : "Choose one";
  const canOrderItem = item.available && item.category !== "Flavors & Toppings";
  const canAddToCart = canOrderItem && Boolean(item.priceCents && item.priceCents > 0) && !hasOptions;
  const canCustomize = canOrderItem && hasOptions;
  const canOpenCustomizer = canCustomize && !inlineModifier;

  const selectedModifiers = useMemo(
    () =>
      item.modifiers.flatMap((modifier, index) =>
        (selectedOptions[groupKey(modifier, index)] || []).map<CartModifier>((option) => ({
          name: modifier.name,
          option: option.name,
          ...(option.priceCents > 0 ? { priceCents: option.priceCents } : {})
        }))
      ),
    [item.modifiers, selectedOptions]
  );

  const selectedOptionCents = useMemo(
    () => selectedModifiers.reduce((total, modifier) => total + (modifier.priceCents || 0), 0),
    [selectedModifiers]
  );
  const totalPriceCents = (item.priceCents || 0) + selectedOptionCents;
  const rawCardPriceLabel = inlineModifier ? (inlineSelectedOption ? formatCurrency(totalPriceCents) : "") : item.priceLabel;
  const cardPriceLabel = rawCardPriceLabel === "Options vary" ? "" : rawCardPriceLabel;
  const missingRequired = item.modifiers.some((modifier, index) => {
    const minimum = minimumRequired(modifier);

    if (minimum <= 0) {
      return false;
    }

    return (selectedOptions[groupKey(modifier, index)] || []).length < minimum;
  });
  const canAddCustomizedItem = canCustomize && !missingRequired && totalPriceCents > 0;

  function flashAdded() {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  }

  function handleAddToCart() {
    addItem(item);
    flashAdded();
  }

  function handleCustomizedAddToCart() {
    if (!canAddCustomizedItem) {
      return;
    }

    addItem(
      {
        ...item,
        priceCents: totalPriceCents,
        priceLabel: formatCurrency(totalPriceCents),
        requiresOptions: false
      },
      selectedModifiers
    );
    setOptionsOpen(false);
    flashAdded();
  }

  function toggleOption(modifier: RawModifier, modifierIndex: number, option: RawModifierOption, optionIndex: number) {
    const key = groupKey(modifier, modifierIndex);
    const normalized = normalizeOption(option, optionIndex);
    const singleChoice = isSingleChoiceGroup(modifier);
    const maxAllowed = maximumAllowed(modifier);

    setSelectedOptions((current) => {
      if (singleChoice) {
        const existingOptions = current[key] || [];
        const hasOption = existingOptions.some((selected) => selected.key === normalized.key);

        return {
          ...current,
          [key]: hasOption && minimumRequired(modifier) === 0 ? [] : [normalized]
        };
      }

      const existingOptions = current[key] || [];
      const hasOption = existingOptions.some((selected) => selected.key === normalized.key);
      const nextOptions = hasOption
        ? existingOptions.filter((selected) => selected.key !== normalized.key)
        : maxAllowed && existingOptions.length >= maxAllowed
          ? existingOptions
          : [...existingOptions, normalized];

      return {
        ...current,
        [key]: nextOptions
      };
    });
  }

  function toggleGroup(groupId: string) {
    setExpandedGroups((current) => ({
      ...current,
      [groupId]: !(current[groupId] ?? false)
    }));
  }

  return (
    <>
      <article className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white p-4 shadow-sm transition duration-200 hover:border-honey/60">
        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              {showCategory && <p className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-toast">{item.category}</p>}
              <h2 className={classNames("break-words font-black text-charcoal", showCategory ? "mt-1 text-lg" : "text-lg")}>
                {item.name}
              </h2>
            </div>
            {cardPriceLabel && <p className="shrink-0 text-sm font-black text-charcoal sm:text-base">{cardPriceLabel}</p>}
          </div>

          <div className="mt-4">
            {canAddToCart ? (
              <Button type="button" onClick={handleAddToCart} size="sm">
                {added ? <Check aria-hidden="true" size={16} /> : <Plus aria-hidden="true" size={16} />}
                {added ? "Added" : "Add"}
              </Button>
            ) : inlineModifier ? (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {inlineOptions.map((option, optionIndex) => {
                    const selected = inlineSelectedOption?.key === option.key;
                    const optionPrice = option.priceCents > 0 ? `${item.priceCents && item.priceCents > 0 ? "+" : ""}${formatCurrency(option.priceCents)}` : "";

                    return (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => toggleOption(inlineModifier, 0, inlineModifier.options[optionIndex], optionIndex)}
                        aria-pressed={selected}
                        className={classNames(
                          "min-h-11 rounded-xl border px-3 py-2 text-left transition",
                          selected ? "border-honey bg-sesame shadow-sm" : "border-charcoal/10 bg-cream/65 hover:bg-sesame/60"
                        )}
                      >
                        <span className="block text-sm font-black text-charcoal">{option.name}</span>
                        {optionPrice && <span className="mt-1 block text-xs font-black text-toast">{optionPrice}</span>}
                      </button>
                    );
                  })}
                </div>
                <Button type="button" onClick={handleCustomizedAddToCart} disabled={!canAddCustomizedItem} size="sm" className="w-full">
                  {added ? <Check aria-hidden="true" size={16} /> : <Plus aria-hidden="true" size={16} />}
                  {added ? "Added" : inlineSelectedOption ? "Add" : inlinePrompt}
                </Button>
              </div>
            ) : canOpenCustomizer ? (
              <Button type="button" variant="secondary" size="sm" onClick={() => setOptionsOpen(true)}>
                {added ? <Check aria-hidden="true" size={16} /> : <SlidersHorizontal aria-hidden="true" size={16} />}
                {added ? "Added" : "Options"}
              </Button>
            ) : (
              <Button type="button" size="sm" disabled>
                <Plus aria-hidden="true" size={16} />
                Info Only
              </Button>
            )}
          </div>
        </div>
      </article>

      {optionsOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-end bg-charcoal/45 backdrop-blur-sm sm:items-stretch sm:justify-end"
          role="dialog"
          aria-modal="true"
          onClick={() => setOptionsOpen(false)}
        >
          <div
            className="flex max-h-[calc(100svh-1rem)] w-full flex-col overflow-hidden rounded-t-[1.75rem] bg-white shadow-lift sm:ml-auto sm:h-full sm:max-h-none sm:max-w-xl sm:rounded-l-[1.75rem] sm:rounded-r-none sm:rounded-t-none"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-charcoal/10 bg-white p-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-toast">{item.category}</p>
                <h3 className="mt-2 text-2xl font-black text-charcoal">{item.name}</h3>
                <p className="mt-1 text-sm font-bold text-espresso/70">{formatCurrency(totalPriceCents)}</p>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-charcoal transition hover:bg-sesame"
                onClick={() => setOptionsOpen(false)}
                aria-label="Close customization"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-5">
              <div className="space-y-5">
                {item.modifiers.map((modifier, modifierIndex) => {
                  const key = groupKey(modifier, modifierIndex);
                  const selectedForGroup = selectedOptions[key] || [];
                  const singleChoice = isSingleChoiceGroup(modifier);
                  const minimum = minimumRequired(modifier);
                  const maxAllowed = maximumAllowed(modifier);
                  const hasSelections = selectedForGroup.length > 0;
                  const expanded = minimum > 0 || hasSelections || (expandedGroups[key] ?? false);
                  const optionSummary =
                    hasSelections && minimum === 0 ? selectedForGroup.map((option) => option.name).join(", ") : "";

                  return (
                    <section key={key} className="rounded-2xl border border-charcoal/10 bg-cream/55 p-4">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-3 text-left"
                        onClick={() => {
                          if (minimum === 0) {
                            toggleGroup(key);
                          }
                        }}
                        aria-expanded={expanded}
                      >
                        <div>
                          <h4 className="font-black text-charcoal">{modifier.name}</h4>
                          <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-espresso/55">
                            {singleChoice ? "Choose one" : minimum > 0 ? "Required" : "Optional"}
                            {maxAllowed && !singleChoice ? ` up to ${maxAllowed}` : ""}
                          </p>
                          {optionSummary && <p className="mt-1 truncate text-xs font-bold text-espresso/65">{optionSummary}</p>}
                        </div>
                        {minimum > 0 && selectedForGroup.length < minimum ? (
                          <span className="rounded-full bg-cream px-3 py-1 text-xs font-black text-toast">Needed</span>
                        ) : (
                          <ChevronDown
                            aria-hidden="true"
                            size={20}
                            className={classNames(
                              "shrink-0 text-espresso/60 transition",
                              expanded ? "rotate-180" : "rotate-0",
                              minimum > 0 && "opacity-0"
                            )}
                          />
                        )}
                      </button>

                      {expanded && (
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {modifier.options.map((option, optionIndex) => {
                            const normalized = normalizeOption(option, optionIndex);
                            const selected = selectedForGroup.some((selectedOption) => selectedOption.key === normalized.key);
                            const limitReached = Boolean(
                              !singleChoice && maxAllowed && selectedForGroup.length >= maxAllowed && !selected
                            );

                            return (
                              <button
                                type="button"
                                key={normalized.key}
                                onClick={() => toggleOption(modifier, modifierIndex, option, optionIndex)}
                                disabled={limitReached}
                                aria-pressed={selected}
                                className={classNames(
                                  "flex min-h-12 items-center justify-between gap-3 rounded-xl border px-3 py-2 text-left text-sm font-extrabold transition",
                                  selected
                                    ? "border-honey bg-sesame text-charcoal shadow-sm"
                                    : "border-charcoal/10 bg-white text-charcoal hover:bg-cream",
                                  limitReached && "cursor-not-allowed opacity-50"
                                )}
                              >
                                <span>{normalized.name}</span>
                                {normalized.priceCents > 0 && (
                                  <span className="shrink-0 text-xs font-black text-toast">
                                    +{formatCurrency(normalized.priceCents)}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-charcoal/10 bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-18px_38px_rgba(32,24,20,0.08)] sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-espresso/55">Total</p>
                  <p className="text-xl font-black text-charcoal">{formatCurrency(totalPriceCents)}</p>
                </div>
                <Button type="button" onClick={handleCustomizedAddToCart} disabled={!canAddCustomizedItem} className="min-w-44">
                  <Plus aria-hidden="true" size={18} />
                  Add
                </Button>
              </div>
              {missingRequired && <p className="mt-2 text-xs font-bold text-toast">Choose the required options to add this item.</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
