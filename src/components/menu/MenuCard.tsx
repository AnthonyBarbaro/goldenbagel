"use client";

import { ArrowRight, Check, ChevronDown, Minus, Plus, SlidersHorizontal, X } from "lucide-react";
import type { KeyboardEvent, ReactElement } from "react";
import { Fragment, useEffect, useId, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { MenuItem } from "@/data/liveMenu";
import type { CartModifier } from "@/lib/cart";
import { MAX_CART_ITEM_QUANTITY, MAX_CART_MODIFIERS, useCartActions } from "@/lib/cart";
import { classNames } from "@/lib/format";
import { getCategoryLabel } from "@/lib/menuCategories";
import { isQuantityModifierGroup } from "../../../serverless/shared/menuOptions";

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
  quantity: number;
};

type OrderedModifierOption = {
  option: RawModifierOption;
  optionIndex: number;
  normalized: NormalizedOption;
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
      priceCents: 0,
      quantity: 1
    };
  }

  return {
    key: option.id || `${option.name}-${index}`,
    name: option.name,
    priceCents: option.priceCents || 0,
    quantity: 1
  };
}

function defaultSelectedOptions(modifiers: RawModifier[], requireBagelChoice = false): SelectedOptions {
  return Object.fromEntries(
    modifiers.map((modifier, index) => {
      const name = modifier.name.trim().toLowerCase();
      const defaultName = name === "choose bagel" && !requireBagelChoice ? "plain" : name === "toast level" || name === "style toast" ? "toasted" : undefined;
      const option = defaultName
        ? modifier.options.map(normalizeOption).find((candidate) => candidate.name.trim().toLowerCase() === defaultName)
        : undefined;

      return [groupKey(modifier, index), option ? [option] : []];
    })
  );
}

function orderedModifierOptions(modifier: RawModifier): OrderedModifierOption[] {
  const options = modifier.options.map((option, optionIndex) => ({ option, optionIndex, normalized: normalizeOption(option, optionIndex) }));

  if (!/^choose bagel\b/i.test(modifier.name.trim())) {
    return options;
  }

  const priority = (name: string): number => {
    const index = ["plain", "everything"].indexOf(name.trim().toLowerCase());
    return index === -1 ? 2 : index;
  };

  return options.sort((first, second) => {
    const extraChargeOrder = Number(first.normalized.priceCents > 0) - Number(second.normalized.priceCents > 0);

    if (extraChargeOrder !== 0) {
      return extraChargeOrder;
    }

    return first.normalized.priceCents > 0
      ? first.normalized.priceCents - second.normalized.priceCents
      : priority(first.normalized.name) - priority(second.normalized.name);
  });
}

function selectionCount(options: NormalizedOption[]): number {
  return options.reduce((total, option) => total + option.quantity, 0);
}

function modifierLabel(modifier: RawModifier): string {
  if (/^choose bagel\b/i.test(modifier.name.trim())) {
    return isQuantityModifierGroup(modifier) ? "Bagel flavors" : "Bagel";
  }

  if (/^(toast level|style toast)$/i.test(modifier.name.trim())) {
    return "Toasting";
  }

  return modifier.name.replace(/^(choose|size)\s+/i, "");
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

function isQuickAddItem(item: MenuItem): boolean {
  return item.category === "Golden Deals" && /^bagel\s*(?:w\/|with\b)/i.test(item.name.trim());
}

export function MenuCard({ item, showCategory = true }: MenuCardProps): ReactElement {
  const titleId = useId();
  const descriptionId = useId();
  const dialogId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const addedTimerRef = useRef<number>();
  const quickAdd = isQuickAddItem(item);
  const [added, setAdded] = useState(false);
  const [cartError, setCartError] = useState("");
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selections, setSelectedOptions] = useState<SelectedOptions>(() => defaultSelectedOptions(item.modifiers, quickAdd));
  const [expandedGroups, setExpandedGroups] = useState<ExpandedGroups>({});
  const { addItem } = useCartActions();
  const selectedOptions = useMemo<SelectedOptions>(
    () =>
      Object.fromEntries(
        item.modifiers.map((modifier, index) => {
          const key = groupKey(modifier, index);
          const selectedQuantities = new Map((selections[key] || []).map((option) => [option.key, option.quantity]));

          return [
            key,
            modifier.options.map(normalizeOption)
              .filter((option) => selectedQuantities.has(option.key))
              .map((option) => ({ ...option, quantity: selectedQuantities.get(option.key) || 1 }))
          ];
        })
      ),
    [item.modifiers, selections]
  );
  const orderedModifiers = useMemo(
    () =>
      item.modifiers
        .map((modifier, modifierIndex) => ({ modifier, modifierIndex }))
        .filter(({ modifier }) => !quickAdd || minimumRequired(modifier) > 0)
        .sort((first, second) => Number(minimumRequired(second.modifier) > 0) - Number(minimumRequired(first.modifier) > 0)),
    [item.modifiers, quickAdd]
  );
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
      item.modifiers.flatMap((modifier, index) => {
        if (quickAdd && minimumRequired(modifier) === 0) {
          return [];
        }

        return (selectedOptions[groupKey(modifier, index)] || []).map<CartModifier>((option) => ({
          name: modifier.name,
          option: option.name,
          ...(option.quantity > 1 ? { quantity: option.quantity } : {}),
          ...(option.priceCents > 0 ? { priceCents: option.priceCents } : {})
        }));
      }),
    [item.modifiers, quickAdd, selectedOptions]
  );

  const selectedOptionCents = useMemo(
    () => selectedModifiers.reduce((total, modifier) => total + (modifier.priceCents || 0) * (modifier.quantity || 1), 0),
    [selectedModifiers]
  );
  const hasAbsolutePriceSelection = item.modifiers.some((modifier, index) => {
    const selectedForGroup = selectedOptions[groupKey(modifier, index)] || [];
    return selectedForGroup.length > 0 && isAbsolutePriceModifier(item, modifier);
  });
  const totalPriceCents = (hasAbsolutePriceSelection ? 0 : item.priceCents || 0) + selectedOptionCents;
  const orderTotalCents = totalPriceCents * quantity;
  const rawCardPriceLabel =
    (quickAdd || (inlineModifier && inlineSelectedOption)) && totalPriceCents > 0 ? formatCurrency(totalPriceCents) : item.priceLabel;
  const cardPriceLabel =
    rawCardPriceLabel === "Options vary"
      ? item.priceCents && item.priceCents > 0
        ? `From ${formatCurrency(item.priceCents)}`
        : "Price varies"
      : rawCardPriceLabel;
  const requiredGroupCount = item.modifiers.filter((modifier) => minimumRequired(modifier) > 0).length;
  const completedRequiredGroupCount = item.modifiers.filter((modifier, index) => {
    const minimum = minimumRequired(modifier);

    return minimum > 0 && selectionCount(selectedOptions[groupKey(modifier, index)] || []) >= minimum;
  }).length;
  const missingRequired = item.modifiers.some((modifier, index) => {
    const minimum = minimumRequired(modifier);

    if (minimum <= 0) {
      return false;
    }

    return selectionCount(selectedOptions[groupKey(modifier, index)] || []) < minimum;
  });
  const canAddCustomizedItem = canCustomize && !missingRequired && totalPriceCents > 0;
  const requiredModifiers = orderedModifiers.filter(({ modifier }) => minimumRequired(modifier) > 0);
  const nextRequiredModifier = requiredModifiers.find(({ modifier, modifierIndex }) =>
    selectionCount(selectedOptions[groupKey(modifier, modifierIndex)] || []) < minimumRequired(modifier)
  );
  const firstOptionalModifier = orderedModifiers.find(({ modifier }) => minimumRequired(modifier) === 0);
  const summaryModifiers = orderedModifiers.filter(({ modifier, modifierIndex }) =>
    minimumRequired(modifier) > 0 || (selectedOptions[groupKey(modifier, modifierIndex)] || []).length > 0
  );

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

  function changeOptionQuantity(
    modifier: RawModifier,
    modifierIndex: number,
    option: RawModifierOption,
    optionIndex: number,
    change: -1 | 1
  ): void {
    const key = groupKey(modifier, modifierIndex);
    const normalized = normalizeOption(option, optionIndex);
    const maxAllowed = maximumAllowed(modifier);

    setSelectedOptions((current) => {
      const validKeys = new Set(modifier.options.map(normalizeOption).map((candidate) => candidate.key));
      const existingOptions = (current[key] || []).filter((selected) => validKeys.has(selected.key));
      const existing = existingOptions.find((selected) => selected.key === normalized.key);
      const selectedCount = Object.values(current).reduce((total, options) => total + options.length, 0);

      if (change > 0 && ((maxAllowed && selectionCount(existingOptions) >= maxAllowed) || (!existing && selectedCount >= MAX_CART_MODIFIERS))) {
        return current;
      }

      const nextQuantity = Math.max(0, (existing?.quantity || 0) + change);
      const nextOptions = nextQuantity === 0
        ? existingOptions.filter((selected) => selected.key !== normalized.key)
        : existing
          ? existingOptions.map((selected) => selected.key === normalized.key ? { ...normalized, quantity: nextQuantity } : selected)
          : [...existingOptions, { ...normalized, quantity: nextQuantity }];

      return { ...current, [key]: nextOptions };
    });
  }

  function toggleGroup(groupId: string) {
    setExpandedGroups((current) => ({
      ...current,
      [groupId]: !(current[groupId] ?? false)
    }));
  }

  function goToModifier(modifierIndex: number): void {
    const modifier = item.modifiers[modifierIndex];
    const key = groupKey(modifier, modifierIndex);
    setExpandedGroups((current) => ({ ...current, [key]: true }));

    const section = document.getElementById(`${dialogId}-group-${modifierIndex}`);
    section?.focus({ preventScroll: true });
    section?.scrollIntoView({
      block: "start",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    });
  }

  function handleCustomizerContinue(): void {
    if (nextRequiredModifier) {
      goToModifier(nextRequiredModifier.modifierIndex);
      return;
    }

    handleCustomizedAddToCart();
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
          {itemDescription && <p className="mt-3 whitespace-pre-line text-pretty text-sm leading-6 text-espresso/80">{itemDescription}</p>}

          <div className="mt-auto pt-5">
            {canAddToCart ? (
              <Button type="button" onClick={handleAddToCart} size="sm" className="w-full sm:w-auto">
                {added ? <Check aria-hidden="true" size={16} /> : <Plus aria-hidden="true" size={16} />}
                {added ? "Added" : "Add"}
              </Button>
            ) : quickAdd && canCustomize ? (
              <Button
                type="button"
                size="sm"
                className="w-full sm:w-auto"
                onClick={() => {
                  setCartError("");
                  setOptionsOpen(true);
                }}
                aria-haspopup="dialog"
                aria-expanded={optionsOpen}
                aria-controls={dialogId}
              >
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
          className="fixed inset-0 z-[90] flex items-end justify-center bg-charcoal/60 backdrop-blur-sm sm:items-center sm:p-6"
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
            className={classNames(
              "flex h-[calc(100svh-0.75rem)] w-full flex-col overflow-hidden rounded-t-[1.75rem] bg-white shadow-[0_30px_100px_rgba(32,24,20,0.3)] ring-1 ring-white/30 sm:h-[min(90svh,56rem)] sm:rounded-[1.75rem]",
              quickAdd ? "sm:max-w-4xl" : "sm:max-w-6xl"
            )}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={handleDialogKeyDown}
          >
            <div className="shrink-0 bg-white px-5 pb-4 pt-5 sm:px-7 sm:pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-toast">{getCategoryLabel(item.category)} <span className="mx-1 text-charcoal/25">/</span> Your order</p>
                  <h3 id={titleId} className="mt-2 text-2xl font-black leading-tight tracking-tight text-charcoal sm:text-3xl">
                    {item.name}
                  </h3>
                  {itemDescription && (
                    <p id={descriptionId} className="mt-2 max-w-2xl whitespace-pre-line text-pretty text-sm leading-6 text-espresso/75">
                      {itemDescription}
                    </p>
                  )}
                </div>
                <div className="flex shrink-0 items-start gap-2">
                  <div className="hidden rounded-2xl bg-cream px-4 py-2 text-right sm:block">
                    <p className="text-xs font-semibold text-espresso/70">Each</p>
                    <p className="text-lg font-black text-charcoal">{formatCurrency(totalPriceCents)}</p>
                  </div>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal transition hover:bg-cream"
                    onClick={() => setOptionsOpen(false)}
                    aria-label="Close customization"
                  >
                    <X aria-hidden="true" size={20} />
                  </button>
                </div>
              </div>

              {requiredGroupCount > 0 && (
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-cream"
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
                  <p className="shrink-0 text-xs font-semibold text-espresso/70" role="status">
                    {completedRequiredGroupCount} of {requiredGroupCount} complete
                  </p>
                </div>
              )}
            </div>

            <nav aria-label="Jump to choices" className="flex shrink-0 gap-2 overflow-x-auto border-y border-charcoal/10 bg-white px-5 py-3 sm:px-7">
              {requiredModifiers.map(({ modifier, modifierIndex }, index) => {
                const selected = selectedOptions[groupKey(modifier, modifierIndex)] || [];
                const complete = selectionCount(selected) >= minimumRequired(modifier);

                return (
                  <button
                    key={modifierIndex}
                    type="button"
                    aria-label={`Go to ${modifier.name}`}
                    onClick={() => goToModifier(modifierIndex)}
                    className={classNames(
                      "flex min-h-12 shrink-0 items-center gap-2.5 rounded-xl border px-3 py-2 text-left transition hover:border-honey hover:bg-cream",
                      complete ? "border-charcoal/10 bg-cream/60" : "border-honey/60 bg-white"
                    )}
                  >
                    <span className={classNames("flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black", complete ? "bg-charcoal text-white" : "bg-honey/25 text-charcoal")} aria-hidden="true">
                      {complete ? <Check size={13} /> : index + 1}
                    </span>
                    <span className="text-sm font-bold text-charcoal">{modifierLabel(modifier)}</span>
                  </button>
                );
              })}
              {firstOptionalModifier && (
                <button
                  type="button"
                  onClick={() => goToModifier(firstOptionalModifier.modifierIndex)}
                  className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl border border-charcoal/10 px-3 text-sm font-bold text-espresso/75 transition hover:border-honey hover:bg-cream"
                >
                  <Plus aria-hidden="true" size={16} />
                  Extras
                </button>
              )}
            </nav>

            <div className="min-h-0 flex-1 lg:grid lg:grid-cols-[minmax(0,1fr)_17rem]">
              <div className="h-full min-h-0 overflow-y-auto overscroll-contain bg-cream/60 px-4 py-5 sm:px-7 sm:py-6">
                <div className="space-y-5">
                  {orderedModifiers.map(({ modifier, modifierIndex }, displayIndex) => {
                    const key = groupKey(modifier, modifierIndex);
                    const groupTitleId = `${item.id}-${modifierIndex}-modifier`;
                    const groupPanelId = `${item.id}-${modifierIndex}-choices`;
                    const selectedForGroup = selectedOptions[key] || [];
                    const selectedQuantity = selectionCount(selectedForGroup);
                    const quantityChoice = isQuantityModifierGroup(modifier);
                    const bagelChoice = /^choose bagel\b/i.test(modifier.name.trim());
                    const orderedOptions = orderedModifierOptions(modifier);
                    const singleChoice = isSingleChoiceGroup(modifier);
                    const minimum = minimumRequired(modifier);
                    const maxAllowed = maximumAllowed(modifier);
                    const absolutePriceModifier = isAbsolutePriceModifier(item, modifier);
                    const hasSelections = selectedForGroup.length > 0;
                    const expanded = minimum > 0 || hasSelections || (expandedGroups[key] ?? false);
                    const optionSummary =
                      hasSelections && minimum === 0 ? selectedForGroup.map((option) => option.name).join(", ") : "";
                    const groupComplete = minimum > 0 ? selectedQuantity >= minimum : hasSelections;
                    const statusLabel =
                      minimum > 0
                        ? `${selectedQuantity}/${minimum} selected`
                        : hasSelections
                          ? `${selectedQuantity} selected`
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
                            {groupComplete ? <Check size={16} /> : minimum > 0 ? displayIndex + 1 : <Plus size={15} />}
                          </span>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span id={groupTitleId} className="block font-black text-charcoal">
                                {modifier.name}
                              </span>
                              <span
                                className={classNames(
                                  "rounded-full px-2.5 py-1 text-[0.65rem] font-bold",
                                  minimum > 0 ? "bg-toast/10 text-toast" : "bg-cream text-espresso/75"
                                )}
                              >
                                {minimum > 0 ? "Required" : "Optional"}
                              </span>
                            </div>
                            <p className="mt-1 text-sm font-medium text-espresso/70">
                              {quantityChoice ? `Choose ${minimum} in any combination` : selectionInstruction(singleChoice, minimum, maxAllowed)}
                            </p>
                            {optionSummary && <p className="mt-1 truncate text-xs font-bold text-espresso/75">{optionSummary}</p>}
                          </div>
                        </div>
                        {minimum > 0 && (selectedQuantity < minimum || quantityChoice) ? (
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
                      <section
                        key={key}
                        id={`${dialogId}-group-${modifierIndex}`}
                        tabIndex={-1}
                        aria-label={modifier.name}
                        className="scroll-mt-4 overflow-hidden rounded-2xl border border-charcoal/10 bg-white outline-offset-2"
                      >
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
                            className={classNames(
                              "grid gap-2 border-t border-charcoal/8 bg-white p-3 sm:grid-cols-2 sm:p-4",
                              bagelChoice && !quantityChoice && "grid-cols-2"
                            )}
                          >
                            {orderedOptions.map(({ option, optionIndex, normalized }, displayOptionIndex) => {
                              const surchargeHeading = bagelChoice && normalized.priceCents > 0 &&
                                (displayOptionIndex === 0 || orderedOptions[displayOptionIndex - 1].normalized.priceCents <= 0)
                                ? <p className="col-span-full px-1 pb-1 pt-3 text-xs font-black uppercase tracking-[0.12em] text-toast">Extra charge</p>
                                : null;
                              const selected = selectedForGroup.some((selectedOption) => selectedOption.key === normalized.key);
                              const inputType = singleChoice && minimum > 0 ? "radio" : "checkbox";
                              const addsSelection = !selected && (!singleChoice || selectedForGroup.length === 0);
                              const limitReached = Boolean(
                                (!singleChoice && maxAllowed && selectedQuantity >= maxAllowed && !selected) ||
                                  (addsSelection && selectedModifiers.length >= MAX_CART_MODIFIERS)
                              );

                              if (quantityChoice) {
                                const optionQuantity = selectedForGroup.find((selectedOption) => selectedOption.key === normalized.key)?.quantity || 0;
                                const cannotIncrease = Boolean(
                                  (maxAllowed && selectedQuantity >= maxAllowed) ||
                                    (!selected && selectedModifiers.length >= MAX_CART_MODIFIERS)
                                );

                                return (
                                  <Fragment key={normalized.key}>
                                    {surchargeHeading}
                                    <div
                                      className={classNames(
                                        "flex min-h-16 items-center justify-between gap-3 rounded-xl border bg-white px-3 py-2",
                                        selected ? "border-honey bg-cream/60 shadow-sm" : "border-charcoal/10"
                                      )}
                                    >
                                      <div className="min-w-0">
                                        <p className="break-words text-sm font-extrabold text-charcoal">{normalized.name}</p>
                                        {normalized.priceCents > 0 && (
                                          <p className="mt-1 text-xs font-bold text-toast">+{formatCurrency(normalized.priceCents)} each</p>
                                        )}
                                      </div>
                                      <div role="group" aria-label={`${normalized.name} quantity`} className="flex shrink-0 items-center rounded-full border border-charcoal/10 bg-cream">
                                        <button
                                          type="button"
                                          aria-label={`Remove one ${normalized.name} from ${modifier.name}`}
                                          disabled={optionQuantity === 0}
                                          onClick={() => changeOptionQuantity(modifier, modifierIndex, option, optionIndex, -1)}
                                          className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
                                        >
                                          <Minus aria-hidden="true" size={16} />
                                        </button>
                                        <output aria-label={`${normalized.name} count`} aria-live="polite" className="min-w-6 text-center text-sm font-black text-charcoal">{optionQuantity}</output>
                                        <button
                                          type="button"
                                          aria-label={`Add one ${normalized.name} to ${modifier.name}`}
                                          disabled={cannotIncrease}
                                          onClick={() => changeOptionQuantity(modifier, modifierIndex, option, optionIndex, 1)}
                                          className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
                                        >
                                          <Plus aria-hidden="true" size={16} />
                                        </button>
                                      </div>
                                    </div>
                                  </Fragment>
                                );
                              }

                              return (
                                <Fragment key={normalized.key}>
                                  {surchargeHeading}
                                  <label
                                    className={classNames(
                                      "flex min-h-14 cursor-pointer items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-left text-sm font-extrabold transition focus-within:ring-4 focus-within:ring-honey/30",
                                      selected
                                        ? "border-honey bg-cream text-charcoal shadow-sm"
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
                                </Fragment>
                              );
                            })}
                          </div>
                        )}
                      </section>
                    );
                  })}
                </div>
              </div>

              <aside aria-label="Your selection" className="hidden min-h-0 overflow-y-auto border-l border-charcoal/10 bg-white px-5 py-6 lg:block">
                <h4 className="font-serif text-xl font-black tracking-tight text-charcoal">Your selection</h4>
                <p className="mt-2 text-sm leading-6 text-espresso/70">Your choices and price update as you go.</p>
                <dl className="mt-5 space-y-4">
                  {summaryModifiers.map(({ modifier, modifierIndex }) => {
                    const selected = selectedOptions[groupKey(modifier, modifierIndex)] || [];

                    return (
                      <div key={modifierIndex} className="border-b border-charcoal/10 pb-4">
                        <dt className="flex items-center justify-between gap-2 text-xs font-bold text-espresso/70">
                          <span>{modifierLabel(modifier)}</span>
                          <button
                            type="button"
                            onClick={() => goToModifier(modifierIndex)}
                            aria-label={`Change ${modifier.name}`}
                            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg px-2 font-bold text-toast underline decoration-toast/30 underline-offset-4 transition hover:bg-cream"
                          >
                            {selected.length > 0 ? "Edit" : "Choose"}
                          </button>
                        </dt>
                        <dd className={classNames("mt-1 text-sm leading-6", selected.length > 0 ? "font-semibold text-charcoal" : "text-espresso/65")}>
                          {selected.length > 0
                            ? selected.map((option) => `${option.quantity > 1 ? `${option.quantity}× ` : ""}${option.name}`).join(", ")
                            : "Choose an option"}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
                <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-cream px-4 py-3">
                  <span className="text-sm font-semibold text-espresso/75">Item price</span>
                  <span className="text-lg font-black text-charcoal">{formatCurrency(totalPriceCents)}</span>
                </div>
              </aside>
            </div>

            <div className="shrink-0 border-t border-charcoal/10 bg-white px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-7 sm:py-5">
              <div className="grid grid-cols-[1fr_auto] items-center gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(12rem,1fr)] sm:gap-5">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-espresso/70">Order total</p>
                  <p aria-live="polite" aria-atomic="true" className="mt-1 text-2xl font-black tracking-tight text-charcoal">{formatCurrency(orderTotalCents)}</p>
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
                  onClick={handleCustomizerContinue}
                  disabled={!canAddCustomizedItem && !nextRequiredModifier}
                  size="lg"
                  className="col-span-2 w-full sm:col-span-1"
                >
                  {canAddCustomizedItem ? <Plus aria-hidden="true" size={18} /> : <ArrowRight aria-hidden="true" size={18} />}
                  {canAddCustomizedItem
                    ? `${quantity > 1 ? `Add ${quantity}` : "Add"} to cart • ${formatCurrency(orderTotalCents)}`
                    : nextRequiredModifier ? `Choose ${modifierLabel(nextRequiredModifier.modifier).toLowerCase()}` : "Finish choices"}
                </Button>
              </div>
              {selectedModifiers.length >= MAX_CART_MODIFIERS && (
                <p className="mt-2 text-xs font-bold text-espresso/75">
                  Option limit reached. Remove a selection to choose another.
                </p>
              )}
              {nextRequiredModifier && <p className="mt-2 text-xs font-medium text-espresso/70">Complete your required choices, then add to your cart.</p>}
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
