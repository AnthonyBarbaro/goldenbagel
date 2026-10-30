import { createHash } from "node:crypto";
import { MENU_PRICE_CACHE_SECONDS } from "@/config/menu";
import { getCloverLiveMenu } from "@/lib/cloverLiveMenu";
import { isCustomerMenuItem, type PublicMenu } from "@/lib/publicMenu";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request): Promise<Response> {
  const menu = await getCloverLiveMenu();
  const items = menu.items.filter(isCustomerMenuItem);
  const data: PublicMenu = {
    items,
    categories: menu.categories.filter((category) => items.some((item) => item.category === category)),
    source: menu.source,
    updatedAt: menu.updatedAt
  };
  const body = JSON.stringify(data);
  const etag = `"${createHash("sha256").update(body).digest("hex")}"`;
  const updatedAt = Date.parse(menu.updatedAt || "");
  const remainingSeconds = menu.source === "saved" || !Number.isFinite(updatedAt)
    ? 0
    : Math.max(0, Math.floor((updatedAt + MENU_PRICE_CACHE_SECONDS * 1000 - Date.now()) / 1000));
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": remainingSeconds > 0
      ? `public, max-age=0, s-maxage=${remainingSeconds}, must-revalidate`
      : "no-store",
    ETag: etag,
    "X-Content-Type-Options": "nosniff"
  };

  if (remainingSeconds > 0 && request.headers.get("if-none-match") === etag) {
    return new Response(null, { status: 304, headers });
  }

  return new Response(body, { headers });
}
