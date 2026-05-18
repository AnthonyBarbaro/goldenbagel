import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_ORDERING_URL = "https://golden-bagel-el-cajon.cloveronline.com/";
const OUTPUT_PATH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src/data/onlineMenu.generated.ts");
const DEFAULT_IMAGE = "/goldenbagels/menu/order-online.png";

function getMenuUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_CLOVER_ONLINE_ORDERING_URL?.trim() || DEFAULT_ORDERING_URL;
  const url = new URL(configuredUrl);

  url.pathname = "/menu/all";
  url.search = "";
  url.hash = "";

  return url;
}

function extractNextFlightText(html) {
  const marker = "self.__next_f.push([1,";
  let text = "";
  let index = 0;

  while ((index = html.indexOf(marker, index)) !== -1) {
    const start = html.indexOf("\"", index + marker.length);

    if (start === -1) {
      break;
    }

    let escaped = false;
    let position = start + 1;

    for (; position < html.length; position += 1) {
      const character = html[position];

      if (escaped) {
        escaped = false;
        continue;
      }

      if (character === "\\") {
        escaped = true;
        continue;
      }

      if (character === "\"") {
        break;
      }
    }

    text += JSON.parse(html.slice(start, position + 1));
    index = position + 1;
  }

  return text;
}

function readJsonArrayAt(text, start) {
  let depth = 0;
  let escaped = false;
  let inString = false;

  for (let index = start; index < text.length; index += 1) {
    const character = text[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === "\"") {
        inString = false;
      }

      continue;
    }

    if (character === "\"") {
      inString = true;
      continue;
    }

    if (character === "[") {
      depth += 1;
    }

    if (character === "]") {
      depth -= 1;

      if (depth === 0) {
        return JSON.parse(text.slice(start, index + 1));
      }
    }
  }

  throw new Error("Could not find the end of the menu data array.");
}

function readJsonArrayAfter(text, marker) {
  const markerIndex = text.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error(`Could not find ${marker} in the online menu payload.`);
  }

  const start = text.indexOf("[", markerIndex);

  if (start === -1) {
    throw new Error(`Could not find array start for ${marker}.`);
  }

  return readJsonArrayAt(text, start);
}

function formatPriceLabel(priceCents) {
  if (!Number.isFinite(priceCents) || priceCents <= 0) {
    return "Options vary";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(priceCents / 100);
}

function normalizeUrl(itemUrl) {
  if (!itemUrl || typeof itemUrl !== "string") {
    return "";
  }

  if (/^https?:\/\//.test(itemUrl)) {
    return itemUrl;
  }

  return `https://${itemUrl}`;
}

function cleanText(value) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function descriptionForItem(item, categoryName) {
  const description = cleanText(item.description);

  if (description) {
    return description;
  }

  if (item.price <= 0 || item.modifierGroupIds?.length > 0) {
    return "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.";
  }

  return `A Golden Bagel Cafe favorite from the ${categoryName} menu.`;
}

function tagsForItem(item) {
  const name = cleanText(item.name).toLowerCase();
  const popularNames = [
    "bagel w/cream cheese",
    "golden scramble",
    "golden works",
    "lox bagel",
    "golden club",
    "thai chicken wrap",
    "traditional cobb",
    "triple berry sunrise"
  ];

  return popularNames.some((popularName) => name.includes(popularName)) ? ["popular"] : [];
}

function toMenuItem(item, categoryName) {
  return {
    id: `online-${item.id}`,
    name: cleanText(item.name),
    description: descriptionForItem(item, categoryName),
    category: categoryName,
    image: DEFAULT_IMAGE,
    tags: tagsForItem(item),
    modifiers: [],
    available: Boolean(item.available),
    priceCents: Number.isFinite(item.price) ? item.price : undefined,
    priceLabel: formatPriceLabel(item.price),
    orderUrl: normalizeUrl(item.itemUrl),
    requiresOptions: item.price <= 0 || item.modifierGroupIds?.length > 0
  };
}

function buildMenu(categories, items) {
  const itemById = new Map(items.map((item) => [item.id, item]));
  const sortedCategories = [...categories].sort((first, second) => (first.sortOrder ?? 999) - (second.sortOrder ?? 999));
  const seenItemIds = new Set();
  const outputCategories = [];
  const outputItems = [];

  for (const category of sortedCategories) {
    const categoryItems = (category.items || [])
      .map((id) => itemById.get(id))
      .filter((item) => item?.available && cleanText(item.name));

    if (categoryItems.length === 0) {
      continue;
    }

    outputCategories.push(cleanText(category.name));

    for (const item of categoryItems) {
      if (seenItemIds.has(item.id)) {
        continue;
      }

      outputItems.push(toMenuItem(item, cleanText(category.name)));
      seenItemIds.add(item.id);
    }
  }

  const uncategorizedItems = items.filter((item) => item.available && cleanText(item.name) && !seenItemIds.has(item.id));

  if (uncategorizedItems.length > 0) {
    outputCategories.push("Other items");

    for (const item of uncategorizedItems) {
      outputItems.push(toMenuItem(item, "Other items"));
    }
  }

  return {
    categories: outputCategories,
    items: outputItems
  };
}

function renderGeneratedFile({ generatedAt, categories, items }) {
  return `import type { MenuCategory, MenuItem } from "./menu";

export const onlineMenuGeneratedAt = ${JSON.stringify(generatedAt)};

export const onlineMenuCategories = ${JSON.stringify(categories, null, 2)} satisfies MenuCategory[];

export const onlineMenuItems = ${JSON.stringify(items, null, 2)} satisfies MenuItem[];
`;
}

async function writeGeneratedMenu() {
  const menuUrl = getMenuUrl();
  const response = await fetch(menuUrl, {
    headers: {
      "user-agent": "GoldenBagelMenuSync/1.0"
    }
  });

  if (!response.ok) {
    throw new Error(`Online menu request failed with ${response.status} ${response.statusText}.`);
  }

  const html = await response.text();
  const flightText = extractNextFlightText(html);
  const categories = readJsonArrayAfter(flightText, "\"menu\":[");
  const items = readJsonArrayAfter(flightText, "\"items\":[{");
  const menu = buildMenu(categories, items);

  if (menu.items.length < 10 || menu.categories.length < 2) {
    throw new Error(`Online menu payload looked incomplete: ${menu.items.length} items, ${menu.categories.length} categories.`);
  }

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(
    OUTPUT_PATH,
    renderGeneratedFile({
      generatedAt: new Date().toISOString(),
      categories: menu.categories,
      items: menu.items
    })
  );

  console.log(`Synced ${menu.items.length} menu items across ${menu.categories.length} categories.`);
}

async function main() {
  try {
    await writeGeneratedMenu();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    try {
      await readFile(OUTPUT_PATH, "utf8");
      console.warn(`Menu sync skipped; using the existing generated menu. ${message}`);
    } catch {
      console.error(`Menu sync failed and no generated menu exists. ${message}`);
      process.exitCode = 1;
    }
  }
}

await main();
