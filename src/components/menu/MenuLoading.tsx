import type { ReactElement } from "react";
import { BagelLoading } from "@/components/ui/BagelLoading";
import { siteConfig } from "@/config/site";

export function MenuLoading(): ReactElement {
  return (
    <>
      <BagelLoading message="Loading the menu and current prices…" />
      <noscript><p className="px-4 py-4 text-center text-sm">Please enable JavaScript to customize your order, or <a className="underline" href={siteConfig.phoneHref}>call the cafe</a>.</p></noscript>
    </>
  );
}
