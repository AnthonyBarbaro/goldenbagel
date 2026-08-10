"use client";

import { Check, ChevronDown, Minus, Plus, SlidersHorizontal, X } from "lucide-react";
import type { KeyboardEvent } from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { MenuItem } from "@/data/liveMenu";
import type { CartModifier } from "@/lib/cart";
import { MAX_CART_ITEM_QUANTITY, MAX_CART_MODIFIERS, useCart } from "@/lib/cart";
import { classNames } from "@/lib/format";
import { getCategoryLabel } from "@/lib/menuCategories";

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
  const maxAllowed = maximumAllowed(modifier);

  if (maxAllowed) {
    return maxAllowed === 1;
  }

  return (
    name.startsWith("choose ") ||
    name.startsWith("size ") ||
    name.startsWith("style ")
  );
}

function minimumRequired(modifier: RawModifier) {
  if (modifier.minRequired && modifier.minRequired > 0) {
    return modifier.minRequired;
  }

  if (modifier.minRequired === 0 && modifier.name.toLowerCase().startsWith("add ")) {
    return 0;
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

function selectionInstruction(singleChoice: boolean, minimum: number, maxAllowed?: number) {
  if (singleChoice) {
    return minimum > 0 ? "Choose one" : "Optional — choose one";
  }

  if (minimum > 0 && maxAllowed && minimum === maxAllowed) {
    return `Choose ${minimum}`;
  }

  if (minimum > 0 && maxAllowed) {
    return `Choose ${minimum}-${maxAllowed}`;
  }

  if (minimum > 0) {
    return `Choose at least ${minimum}`;
  }

  if (maxAllowed) {
    return `Choose up to ${maxAllowed}`;
  }

  return "Choose any";
}

function isAbsolutePriceModifier(item: MenuItem, modifier: RawModifier) {
  const basePriceCents = item.priceCents || 0;
  const optionPrices = modifier.options.map((option, index) => normalizeOption(option, index).priceCents);

  return (
    basePriceCents > 0 &&
    modifier.name.toLowerCase().startsWith("size ") &&
    minimumRequired(modifier) > 0 &&
    optionPrices.length > 0 &&
    optionPrices.every((priceCents) => priceCents >= basePriceCents)
  );
}

function customizerActionLabel(item: MenuItem) {
  const itemText = `${item.name} ${item.category}`.toLowerCase();
  const modifierNames = item.modifiers.map((modifier) => modifier.name.toLowerCase());
  const hasModifierName = (keywords: string[]) => modifierNames.some((name) => keywords.some((keyword) => name.includes(keyword)));

  if (itemText.includes("nosh box")) {
    return "Choose flavors";
  }

  if (item.modifiers.length === 1 && hasModifierName(["size"])) {
    return "Choose size";
  }

  if (itemText.includes("cream cheese tub")) {
    return "Choose flavor";
  }

  if (itemText.includes("salad")) {
    return "Customize salad";
  }

  if (itemText.includes("wrap")) {
    return "Customize wrap";
  }

  if (itemText.includes("focaccia") || itemText.includes("sandwich")) {
    return "Build sandwich";
  }

  if (itemText.includes("bagel") || itemText.includes("scramble")) {
    return "Build bagel";
  }

  if (hasModifierName(["flavor", "tea", "mocha"])) {
    return "Choose flavor";
  }

  return "Customize";
}

export function MenuCard({ item, showCategory = true }: MenuCardProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const addedTimerRef = useRef<number>();
  const [added, setAdded] = useState(false);
  const [cartError, setCartError] = useState("");
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
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
  const itemDescription = item.description.trim();
  const customizerLabel = customizerActionLabel(item);

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
  const hasAbsolutePriceSelection = item.modifiers.some((modifier, index) => {
    const selectedForGroup = selectedOptions[groupKey(modifier, index)] || [];
    return selectedForGroup.length > 0 && isAbsolutePriceModifier(item, modifier);
  });
  const totalPriceCents = (hasAbsolutePriceSelection ? 0 : item.priceCents || 0) + selectedOptionCents;
  const orderTotalCents = totalPriceCents * quantity;
  const rawCardPriceLabel = inlineModifier && inlineSelectedOption ? formatCurrency(totalPriceCents) : item.priceLabel;
  const cardPriceLabel =
    rawCardPriceLabel === "Options vary"
      ? item.priceCents && item.priceCents > 0
        ? `From ${formatCurrency(item.priceCents)}`
        : "Price varies"
      : rawCardPriceLabel;
  const requiredGroupCount = item.modifiers.filter((modifier) => minimumRequired(modifier) > 0).length;
  const completedRequiredGroupCount = item.modifiers.filter((modifier, index) => {
    const minimum = minimumRequired(modifier);

    return minimum > 0 && (selectedOptions[groupKey(modifier, index)] || []).length >= minimum;
  }).length;
  const missingRequired = item.modifiers.some((modifier, index) => {
    const minimum = minimumRequired(modifier);

    if (minimum <= 0) {
      return false;
    }

    return (selectedOptions[groupKey(modifier, index)] || []).length < minimum;
  });
  const canAddCustomizedItem = canCustomize && !missingRequired && totalPriceCents > 0;

  useEffect(() => {
    if (!optionsOpen) {
      return undefined;
    }

    const previousActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      previousActiveElement?.focus();
    };
  }, [optionsOpen]);

  useEffect(
    () => () => {
      if (addedTimerRef.current) {
        window.clearTimeout(addedTimerRef.current);
      }
    },
    []
  );

  function flashAdded() {
    if (addedTimerRef.current) {
      window.clearTimeout(addedTimerRef.current);
    }

    setCartError("");
    setAdded(true);
    addedTimerRef.current = window.setTimeout(() => setAdded(false), 1400);
  }

  function showCartError(message: string) {
    if (addedTimerRef.current) {
      window.clearTimeout(addedTimerRef.current);
    }

    setAdded(false);
    setCartError(message);
  }

  function handleAddToCart() {
    const result = addItem(item);

    if (!result.ok) {
      showCartError(result.message);
      return;
    }

    flashAdded();
  }

  function handleCustomizedAddToCart() {
    if (!canAddCustomizedItem) {
      return;
    }

    const result = addItem(
      {
        ...item,
        priceCents: totalPriceCents,
        priceLabel: formatCurrency(totalPriceCents),
        requiresOptions: false
      },
      selectedModifiers,
      quantity
    );

    if (!result.ok) {
      showCartError(result.message);
      return;
    }

    setOptionsOpen(false);
    setQuantity(1);
    flashAdded();
  }

  function toggleOption(modifier: RawModifier, modifierIndex: number, option: RawModifierOption, optionIndex: number) {
    const key = groupKey(modifier, modifierIndex);
    const normalized = normalizeOption(option, optionIndex);
    const singleChoice = isSingleChoiceGroup(modifier);
    const maxAllowed = maximumAllowed(modifier);

    setSelectedOptions((current) => {
      const existingOptions = current[key] || [];
      const hasOption = existingOptions.some((selected) => selected.key === normalized.key);
      const selectedCount = Object.values(current).reduce((total, options) => total + options.length, 0);
      const addsSelection = !hasOption && (!singleChoice || existingOptions.length === 0);

      if (addsSelection && selectedCount >= MAX_CART_MODIFIERS) {
        return current;
      }

      if (singleChoice) {

        return {
          ...current,
          [key]: hasOption && minimumRequired(modifier) === 0 ? [] : [normalized]
        };
      }

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

  function handleDialogKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      setOptionsOpen(false);
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    const focusableElements = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true");

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return (
    <>
      <article className="flex h-full flex-col rounded-[1.25rem] border border-charcoal/10 bg-white p-5 shadow-sm transition duration-200 hover:border-honey/70 hover:shadow-[0_14px_34px_rgba(32,24,20,0.09)]">
        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              {showCategory && (
                <p className="text-xs font-black uppercase tracking-[0.14em] text-toast">
                  {getCategoryLabel(item.category)}
                </p>
              )}
              <h3 className={classNames("break-words text-lg font-black leading-snug text-charcoal", showCategory && "mt-1")}>
                {item.name}
              </h3>
            </div>
            {cardPriceLabel && (
              <p className="shrink-0 rounded-full bg-cream px-3 py-1.5 text-sm font-black text-charcoal ring-1 ring-charcoal/5">
                {cardPriceLabel}
              </p>
            )}
          </div>
          {itemDescription && <p className="mt-3 line-clamp-3 text-sm font-semibold leading-6 text-espresso/72">{itemDescription}</p>}

          <div className="mt-auto pt-5">
            {canAddToCart ? (
              <Button type="button" onClick={handleAddToCart} size="sm" className="w-full sm:w-auto">
                {added ? <Check aria-hidden="true" size={16} /> : <Plus aria-hidden="true" size={16} />}
                {added ? "Added" : "Add"}
              </Button>
            ) : inlineModifier ? (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label={inlinePrompt}>
                  {inlineOptions.map((option, optionIndex) => {
                    const selected = inlineSelectedOption?.key === option.key;
                    const absolutePriceModifier = isAbsolutePriceModifier(item, inlineModifier);
                    const optionPrice =
                      option.priceCents > 0
                        ? `${!absolutePriceModifier && item.priceCents && item.priceCents > 0 ? "+" : ""}${formatCurrency(option.priceCents)}`
                        : "";

                    return (
                      <label
                        key={option.key}
                        className={classNames(
                          "flex min-h-11 cursor-pointer items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left transition focus-within:ring-4 focus-within:ring-honey/30",
                          selected ? "border-honey bg-sesame shadow-sm" : "border-charcoal/10 bg-cream/65 hover:border-honey hover:bg-sesame/60"
                        )}
                      >
                        <input
                          className="sr-only"
                          type="radio"
                          name={`${item.id}-inline-choice`}
                          checked={selected}
                          onChange={() => toggleOption(inlineModifier, 0, inlineModifier.options[optionIndex], optionIndex)}
                        />
                        <span className="block min-w-0 text-sm font-black text-charcoal">{option.name}</span>
                        {optionPrice && <span className="mt-1 block text-xs font-black text-toast">{optionPrice}</span>}
                      </label>
                    );
                  })}
                </div>
                <Button type="button" onClick={handleCustomizedAddToCart} disabled={!canAddCustomizedItem} size="sm" className="w-full">
                  {added ? <Check aria-hidden="true" size={16} /> : <Plus aria-hidden="true" size={16} />}
                  {added ? "Added" : inlineSelectedOption ? "Add" : inlinePrompt}
                </Button>
              </div>
            ) : canOpenCustomizer ? (
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => {
                  setCartError("");
                  setOptionsOpen(true);
                }}
                aria-haspopup="dialog"
                aria-expanded={optionsOpen}
                aria-controls={dialogId}
                className="w-full sm:w-auto"
              >
                {added ? <Check aria-hidden="true" size={16} /> : <SlidersHorizontal aria-hidden="true" size={16} />}
                {added ? "Added" : customizerLabel}
              </Button>
            ) : (
              <Button type="button" size="sm" disabled className="w-full sm:w-auto">
                <Plus aria-hidden="true" size={16} />
                Info Only
              </Button>
            )}
          </div>
        </div>
        {cartError && !optionsOpen && (
          <p role="alert" className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-800">
            {cartError}
          </p>
        )}
        <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {added ? `${item.name} added to cart.` : ""}
        </span>
      </article>

      {optionsOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-end bg-charcoal/55 backdrop-blur-sm sm:items-stretch sm:justify-end"
          onClick={() => setOptionsOpen(false)}
        >
          <div
            id={dialogId}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={itemDescription ? descriptionId : undefined}
            tabIndex={-1}
            className="flex max-h-[calc(100svh-0.75rem)] w-full flex-col overflow-hidden rounded-t-[1.75rem] bg-cream shadow-lift ring-1 ring-white/40 sm:ml-auto sm:h-full sm:max-h-none sm:max-w-2xl sm:rounded-l-[1.75rem] sm:rounded-r-none sm:rounded-t-none"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={handleDialogKeyDown}
          >
            <div className="border-b border-charcoal/10 bg-white px-5 py-5 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-toast">{getCategoryLabel(item.category)}</p>
                  <h3 id={titleId} className="mt-2 text-2xl font-black leading-tight text-charcoal sm:text-3xl">
                    {item.name}
                  </h3>
                  {itemDescription && (
                    <p id={descriptionId} className="mt-3 max-w-xl text-sm font-bold leading-6 text-espresso/70">
                      {itemDescription}
                    </p>
                  )}
                </div>
                <div className="flex shrink-0 items-start gap-2">
                  <div className="rounded-2xl bg-cream px-3 py-2 text-right ring-1 ring-charcoal/8">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-espresso/75">Each</p>
                    <p className="text-lg font-black text-charcoal">{formatCurrency(totalPriceCents)}</p>
                  </div>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-charcoal transition hover:bg-sesame"
                    onClick={() => setOptionsOpen(false)}
                    aria-label="Close customization"
                  >
                    <X aria-hidden="true" size={20} />
                  </button>
                </div>
              </div>

              {requiredGroupCount > 0 && (
                <div
                  className="mt-4 h-2 overflow-hidden rounded-full bg-cream"
                  role="progressbar"
                  aria-label="Required choices completed"
                  aria-valuemin={0}
                  aria-valuemax={requiredGroupCount}
                  aria-valuenow={completedRequiredGroupCount}
                  aria-valuetext={`${completedRequiredGroupCount} of ${requiredGroupCount} required groups complete`}
                >
                  <div
                    className="h-full rounded-full bg-honey transition-all"
                    style={{ width: `${(completedRequiredGroupCount / requiredGroupCount) * 100}%` }}
                  />
                </div>
              )}
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
              <div className="space-y-4">
                {item.modifiers.map((modifier, modifierIndex) => {
                  const key = groupKey(modifier, modifierIndex);
                  const groupTitleId = `${item.id}-${modifierIndex}-modifier`;
                  const groupPanelId = `${item.id}-${modifierIndex}-choices`;
                  const selectedForGroup = selectedOptions[key] || [];
                  const singleChoice = isSingleChoiceGroup(modifier);
                  const minimum = minimumRequired(modifier);
                  const maxAllowed = maximumAllowed(modifier);
                  const absolutePriceModifier = isAbsolutePriceModifier(item, modifier);
                  const hasSelections = selectedForGroup.length > 0;
                  const expanded = minimum > 0 || hasSelections || (expandedGroups[key] ?? false);
                  const optionSummary =
                    hasSelections && minimum === 0 ? selectedForGroup.map((option) => option.name).join(", ") : "";
                  const groupComplete = minimum > 0 ? selectedForGroup.length >= minimum : hasSelections;
                  const statusLabel =
                    minimum > 0
                      ? `${selectedForGroup.length}/${minimum} selected`
                      : hasSelections
                        ? `${selectedForGroup.length} selected`
                        : "Optional";
                  const groupHeader = (
                    <>
                      <div className="flex min-w-0 gap-3">
                        <span
                          className={classNames(
                            "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-black",
                            groupComplete ? "bg-honey text-charcoal" : "bg-cream text-toast"
                          )}
                          aria-hidden="true"
                        >
                          {groupComplete ? <Check size={16} /> : modifierIndex + 1}
                        </span>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span id={groupTitleId} className="block font-black text-charcoal">
                              {modifier.name}
                            </span>
                            <span
                              className={classNames(
                                "rounded-full px-2.5 py-1 text-xs font-black uppercase tracking-[0.1em]",
                                minimum > 0 ? "bg-toast/10 text-toast" : "bg-cream text-espresso/75"
                              )}
                            >
                              {minimum > 0 ? "Required" : "Optional"}
                            </span>
                          </div>
                          <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-espresso/75">
                            {selectionInstruction(singleChoice, minimum, maxAllowed)}
                          </p>
                          {optionSummary && <p className="mt-1 truncate text-xs font-bold text-espresso/75">{optionSummary}</p>}
                        </div>
                      </div>
                      {minimum > 0 && selectedForGroup.length < minimum ? (
                        <span className="shrink-0 rounded-full bg-toast/10 px-3 py-1 text-xs font-black text-toast">{statusLabel}</span>
                      ) : (
                        <span className="flex shrink-0 items-center gap-2">
                          {hasSelections && (
                            <span className="hidden rounded-full bg-cream px-3 py-1 text-xs font-black text-espresso/75 sm:inline-flex">
                              {statusLabel}
                            </span>
                          )}
                          {minimum === 0 && (
                            <ChevronDown
                              aria-hidden="true"
                              size={20}
                              className={classNames("mt-1 text-espresso/75 transition", expanded ? "rotate-180" : "rotate-0")}
                            />
                          )}
                        </span>
                      )}
                    </>
                  );

                  return (
                    <section key={key} className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm">
                      {minimum === 0 ? (
                        <button
                          type="button"
                          className="flex min-h-16 w-full items-start justify-between gap-3 px-4 py-4 text-left transition hover:bg-cream/55 sm:px-5"
                          onClick={() => toggleGroup(key)}
                          aria-expanded={expanded}
                          aria-controls={groupPanelId}
                        >
                          {groupHeader}
                        </button>
                      ) : (
                        <div className="flex min-h-16 w-full items-start justify-between gap-3 px-4 py-4 sm:px-5">{groupHeader}</div>
                      )}

                      {expanded && (
                        <div
                          id={groupPanelId}
                          role={singleChoice && minimum > 0 ? "radiogroup" : "group"}
                          aria-labelledby={groupTitleId}
                          className="grid gap-2 border-t border-charcoal/8 bg-cream/45 p-3 sm:grid-cols-2 sm:p-4"
                        >
                          {modifier.options.map((option, optionIndex) => {
                            const normalized = normalizeOption(option, optionIndex);
                            const selected = selectedForGroup.some((selectedOption) => selectedOption.key === normalized.key);
                            const inputType = singleChoice && minimum > 0 ? "radio" : "checkbox";
                            const addsSelection = !selected && (!singleChoice || selectedForGroup.length === 0);
                            const limitReached = Boolean(
                              (!singleChoice && maxAllowed && selectedForGroup.length >= maxAllowed && !selected) ||
                                (addsSelection && selectedModifiers.length >= MAX_CART_MODIFIERS)
                            );

                            return (
                              <label
                                key={normalized.key}
                                className={classNames(
                                  "flex min-h-14 cursor-pointer items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-left text-sm font-extrabold transition focus-within:ring-4 focus-within:ring-honey/30",
                                  selected
                                    ? "border-honey bg-white text-charcoal shadow-sm"
                                    : "border-charcoal/10 bg-white text-charcoal hover:border-honey/70 hover:bg-white",
                                  limitReached && "cursor-not-allowed opacity-50"
                                )}
                              >
                                <input
                                  className="sr-only"
                                  type={inputType}
                                  name={inputType === "radio" ? groupTitleId : undefined}
                                  checked={selected}
                                  disabled={limitReached}
                                  onChange={() => toggleOption(modifier, modifierIndex, option, optionIndex)}
                                />
                                <span className="flex min-w-0 items-center gap-2">
                                  <span
                                    className={classNames(
                                      "flex h-5 w-5 shrink-0 items-center justify-center border",
                                      singleChoice ? "rounded-full" : "rounded-md",
                                      selected ? "border-charcoal bg-charcoal text-white" : "border-charcoal/20 bg-cream"
                                    )}
                                    aria-hidden="true"
                                  >
                                    {selected && <Check size={13} />}
                                  </span>
                                  <span className="min-w-0 break-words">{normalized.name}</span>
                                </span>
                                {normalized.priceCents > 0 && (
                                  <span className="shrink-0 text-xs font-black text-toast">
                                    {!absolutePriceModifier && "+"}
                                    {formatCurrency(normalized.priceCents)}
                                  </span>
                                )}
                              </label>
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
              <div className="grid grid-cols-[1fr_auto] items-center gap-3 sm:grid-cols-[auto_auto_minmax(11rem,1fr)]">
                <div className="min-w-0">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-espresso/75">
                    {requiredGroupCount > 0 ? `${completedRequiredGroupCount}/${requiredGroupCount} required choices` : "Ready to add"}
                  </p>
                  <p className="text-xl font-black text-charcoal">{formatCurrency(orderTotalCents)}</p>
                </div>
                <div
                  className="flex w-fit items-center rounded-full border border-charcoal/10 bg-cream p-1"
                  role="group"
                  aria-label="Quantity"
                >
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    disabled={quantity === 1}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
                    aria-label="Decrease quantity"
                  >
                    <Minus aria-hidden="true" size={17} />
                  </button>
                  <output className="min-w-8 text-center text-sm font-black text-charcoal" aria-live="polite" aria-label={`Quantity ${quantity}`}>
                    {quantity}
                  </output>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.min(MAX_CART_ITEM_QUANTITY, current + 1))}
                    disabled={quantity >= MAX_CART_ITEM_QUANTITY}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
                    aria-label="Increase quantity"
                  >
                    <Plus aria-hidden="true" size={17} />
                  </button>
                </div>
                <Button
                  type="button"
                  onClick={handleCustomizedAddToCart}
                  disabled={!canAddCustomizedItem}
                  className="col-span-2 w-full sm:col-span-1 sm:justify-self-end"
                >
                  <Plus aria-hidden="true" size={18} />
                  {canAddCustomizedItem
                    ? `${quantity > 1 ? `Add ${quantity}` : "Add"} to cart • ${formatCurrency(orderTotalCents)}`
                    : "Finish choices"}
                </Button>
              </div>
              {selectedModifiers.length >= MAX_CART_MODIFIERS && (
                <p className="mt-2 text-xs font-bold text-espresso/75">
                  Option limit reached. Remove a selection to choose another.
                </p>
              )}
              {missingRequired && <p className="mt-2 text-xs font-bold text-toast">Choose the required options to add this item.</p>}
              {cartError && (
                <p role="alert" className="mt-2 rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-800">
                  {cartError}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
