import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { MenuBoard } from "@/components/menu-tv/MenuBoard";
import { MenuBoardRefresh } from "@/components/menu-tv/MenuBoardRefresh";
import { siteConfig } from "@/config/site";
import { MENU_BOARD_REFRESH_SECONDS } from "@/data/menuBoard";
import { getCloverLiveMenu, resolveMenuBoards } from "@/lib/cloverLiveMenu";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cafe Menu Board",
  description: "Golden Bagel Cafe's in-store menu board with current menu prices.",
  alternates: {
    canonical: "/menu-tv/"
  }
};

function formatUpdatedAt(value: string | null) {
  if (!value) {
    return "recently";
  }

  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(value));
}

type MenuTvPageProps = {
  searchParams?: Promise<{
    board?: string | string[];
  }>;
};

const boardNavLabels = ["Breakfast", "Lunch", "Wraps & More"] as const;

function getBoardIndex(board: string | string[] | undefined, boardCount: number) {
  const requestedBoard = Array.isArray(board) ? board[0] : board;
  const parsedBoard = Number(requestedBoard || "1");

  if (!Number.isInteger(parsedBoard) || parsedBoard < 1 || parsedBoard > boardCount) {
    return 0;
  }

  return parsedBoard - 1;
}

export default async function MenuTvPage({ searchParams }: MenuTvPageProps) {
  const params = await searchParams;
  const menu = await getCloverLiveMenu({ fresh: true });
  const resolvedMenu = resolveMenuBoards(menu);
  const boards = resolvedMenu.boards;
  const activeBoardIndex = getBoardIndex(params?.board, boards.length);
  const activeBoard = boards[activeBoardIndex] || boards[0];
  const sourceLabel =
    menu.source === "saved"
      ? "Saved menu prices"
      : menu.source === "clover" && !resolvedMenu.hasSavedPrices
        ? "Live Clover prices"
        : "Clover items + saved option prices";

  return (
    <main className="flex min-h-dvh flex-col bg-[#080603] text-[#ead7ad] lg:h-dvh lg:overflow-hidden">
      <MenuBoardRefresh />

      <div className="z-50 shrink-0 border-b border-[#cf9840]/30 bg-[#0d0905]/95 px-4 py-2 shadow-xl sm:px-6">
        <div className="mx-auto flex max-w-[1880px] items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <Image src={siteConfig.logo} alt="Golden Bagel Cafe" width={132} height={46} className="h-8 w-auto lg:h-9" priority />
            <div className="hidden sm:block">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d9a34d]">Cafe Menu Board</p>
              <p className="text-[0.68rem] text-[#ead7ad]/65" title={sourceLabel}>
                Menu updated {formatUpdatedAt(menu.updatedAt)}
              </p>
            </div>
          </div>

          <nav aria-label="Menu board sections" className="flex items-center gap-1">
            {boards.map((board, index) => (
              <Link
                key={board.id}
                href={`/menu-tv/?board=${index + 1}`}
                prefetch={false}
                aria-current={index === activeBoardIndex ? "page" : undefined}
                className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-[0.06em] transition ${
                  index === activeBoardIndex
                    ? "border-[#d9a34d] bg-[#d9a34d] text-[#1a1108]"
                    : "border-transparent text-[#ead7ad]/72 hover:border-[#d9a34d]/35 hover:bg-[#d9a34d]/12 hover:text-[#f0cf8c]"
                }`}
              >
                <span className="sm:hidden">{index + 1}</span>
                <span className="hidden sm:inline">Board {index + 1} · {boardNavLabels[index] || board.label}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <span className="hidden items-center gap-2 rounded-full border border-[#cf9840]/30 px-3 py-2 text-xs text-[#ead7ad]/65 md:flex">
              <RefreshCw aria-hidden="true" size={14} />
              Refreshes every {Math.round(MENU_BOARD_REFRESH_SECONDS / 60)} min
            </span>
            <Link
              href="/menu"
              className="flex min-h-9 items-center gap-2 rounded-full bg-[#d9a34d] px-4 py-2 text-sm font-black text-[#1a1108] transition hover:bg-[#ecc16f]"
            >
              <ArrowLeft aria-hidden="true" size={16} />
              Order online
            </Link>
          </div>
        </div>
      </div>

      <h1 className="sr-only">Golden Bagel Cafe menu board</h1>
      <div className="mx-auto flex min-h-0 w-full max-w-[1920px] flex-1 p-2 sm:p-3">
        <MenuBoard key={activeBoard.id} board={activeBoard} priority />
      </div>

      <p className="sr-only">
        Prices and availability are subject to change. Please tell us about food allergies before ordering.
      </p>
    </main>
  );
}
