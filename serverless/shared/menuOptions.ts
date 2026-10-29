export const MAX_MODIFIER_QUANTITY = 100;

type QuantityModifierGroup = {
  name?: string;
  minRequired?: number;
  maxAllowed?: number;
};

export function isQuantityModifierGroup(group: QuantityModifierGroup | undefined): boolean {
  return Boolean(
    group &&
      /^choose bagel\b/i.test((group.name || "").trim()) &&
      Number.isInteger(group.minRequired) &&
      Number(group.minRequired) > 1 &&
      group.maxAllowed === group.minRequired
  );
}

export function isOnlineModifierGroup(name: string | undefined): boolean {
  return (name || "").trim().toLowerCase().replace(/\s+/g, " ") !== "remove ingredients - general";
}
