import Image from "next/image";
import {
  Coffee,
  Croissant,
  CupSoda,
  Salad,
  Sandwich,
  Sparkles,
  Utensils,
  type LucideIcon
} from "lucide-react";
import type { MenuBoardIcon } from "@/data/menuBoard";
import type { ResolvedMenuBoard, ResolvedMenuBoardSection } from "@/lib/cloverLiveMenu";
import { classNames } from "@/lib/format";

const iconByName: Record<MenuBoardIcon, LucideIcon> = {
  bagel: Croissant,
  coffee: Coffee,
  drink: CupSoda,
  salad: Salad,
  sandwich: Sandwich,
  sparkles: Sparkles,
  utensils: Utensils
};

const photoPositionClasses = {
  left: "-bottom-8 -left-8 h-[36%] w-[36%]",
  center: "-bottom-10 left-1/2 h-[34%] w-[34%] -translate-x-1/2",
  right: "-bottom-8 -right-8 h-[42%] w-[36%]"
} as const;

function boardColumnClasses(board: ResolvedMenuBoard) {
  if (board.columns.length === 2) {
    return "lg:grid-cols-[0.94fr_1.06fr] lg:gap-10";
  }

  if (board.id === "breakfast") {
    return "lg:grid-cols-[1.08fr_0.94fr_0.98fr] lg:gap-8";
  }

  return "lg:grid-cols-[0.98fr_1fr_1.04fr] lg:gap-8";
}

function MenuSection({ section }: { section: ResolvedMenuBoardSection }) {
  const Icon = iconByName[section.icon];

  return (
    <section className="relative">
      <div className="mb-2.5 flex items-center gap-3 border-b border-[#cf9840]/70 pb-2.5">
        <Icon aria-hidden="true" className="shrink-0 text-[#d5a960]" size={36} strokeWidth={1.7} />
        <h2 className="menu-board-heading text-[clamp(1.5rem,2.15vw,2.85rem)] leading-none text-[#e9c47d] lg:whitespace-nowrap">
          {section.title}
        </h2>
      </div>

      {section.subtitle && (
        <p className="mb-2.5 text-[clamp(0.8rem,0.9vw,1.05rem)] font-bold italic leading-tight text-[#efdcb7]/85">
          {section.subtitle}
        </p>
      )}

      <ul className={section.compact ? "space-y-2" : section.dense ? "space-y-1.5" : "space-y-2.5"}>
        {section.items.map((item) => (
          <li
            key={item.cloverItemId}
            className={classNames(
              "border-b border-dotted border-[#cf9840]/45 last:border-b-0",
              section.compact ? "pb-2" : section.dense ? "pb-1.5" : "pb-2.5"
            )}
          >
            <div className="flex items-end gap-2">
              <h3
                className={classNames(
                  "min-w-0 font-black leading-tight text-[#f6e0b5]",
                  section.dense ? "text-[clamp(1rem,1.35vw,1.5rem)]" : "text-[clamp(1rem,1.48vw,1.65rem)]"
                )}
              >
                {item.name}
              </h3>
              <span className="mb-1 min-w-4 flex-1 border-b border-dotted border-[#cf9840]/55" aria-hidden="true" />
              <div className="flex shrink-0 items-end gap-2.5 text-right">
                {item.prices.map((price) => (
                  <span key={`${price.label || "price"}-${price.cents}`} className="flex flex-col">
                    {price.label && (
                      <span className="text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#d8bd88]/75 sm:text-[0.64rem]">
                        {price.label}
                      </span>
                    )}
                    <strong className="text-[clamp(1rem,1.45vw,1.62rem)] leading-none text-[#e1a94d]">
                      {price.formatted}
                    </strong>
                  </span>
                ))}
              </div>
            </div>
            {!section.compact && (
              <p
                className={classNames(
                  "mt-1 max-w-[96%] font-semibold leading-snug text-[#efddb9]/90",
                  section.dense ? "text-[clamp(0.78rem,0.86vw,0.95rem)]" : "text-[clamp(0.8rem,0.98vw,1.08rem)]"
                )}
              >
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ul>

      {section.notes && section.notes.length > 0 && (
        <div className="mt-3 rounded-sm border border-[#cf9840]/55 bg-black/25 p-2.5">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#d9a34d]">
            {section.notes.length > 2 ? "Available choices" : "Good to know"}
          </p>
          <ul className={classNames("text-[0.86rem] leading-tight text-[#f0ddb6]/92", section.notes.length > 4 ? "grid grid-cols-2 gap-x-4 gap-y-1" : "space-y-1")}>
            {section.notes.map((note) => (
              <li key={note} className="before:mr-2 before:text-[#d9a34d] before:content-['•']">
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export function MenuBoard({ board, priority = false }: { board: ResolvedMenuBoard; priority?: boolean }) {
  return (
    <article
      id={board.id}
      aria-label={board.label}
      className="menu-board-surface relative isolate min-h-[calc(100dvh-4.75rem)] w-full overflow-hidden px-6 pb-20 pt-7 text-[#ead7ad] shadow-[0_28px_90px_rgba(0,0,0,0.48)] sm:px-9 lg:h-full lg:min-h-0 lg:px-10 lg:pb-16 lg:pt-7 xl:px-12"
    >
      <div className="pointer-events-none absolute inset-2 border border-[#b98131]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-[0.85rem] border border-[#d7aa59]/80" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-[0.85rem] h-2.5 w-24 -translate-x-1/2 bg-[#151007]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-[0.68rem] h-4 w-4 -translate-x-1/2 rotate-45 border border-[#d7aa59] bg-[#151007]" aria-hidden="true" />

      <div
        className={classNames(
          "pointer-events-none absolute z-0 hidden overflow-hidden opacity-[0.22] mix-blend-luminosity lg:block",
          photoPositionClasses[board.photoPosition]
        )}
        style={{ WebkitMaskImage: "radial-gradient(ellipse, black 42%, transparent 76%)", maskImage: "radial-gradient(ellipse, black 42%, transparent 76%)" }}
        aria-hidden="true"
      >
        <Image
          src={board.photo}
          alt=""
          fill
          sizes="34vw"
          className="object-contain grayscale-[35%] sepia-[35%]"
          priority={priority}
        />
      </div>

      <div
        className={classNames(
          "relative z-10 grid gap-7 lg:h-full lg:content-start",
          boardColumnClasses(board)
        )}
      >
        {board.columns.map((column, columnIndex) => (
          <div
            key={`${board.id}-column-${columnIndex}`}
            className={classNames("space-y-6", columnIndex > 0 ? "lg:border-l lg:border-[#cf9840]/35 lg:pl-7" : "")}
          >
            {column.map((section) => (
              <MenuSection key={section.title} section={section} />
            ))}
          </div>
        ))}
      </div>

      <div className="absolute inset-x-6 bottom-3 z-20 flex min-h-10 items-center justify-center gap-4 border-y border-[#a97329] bg-[#ead5a6] px-5 py-1.5 text-center text-xs font-black uppercase tracking-[0.08em] text-[#24180d] shadow-[0_0_35px_rgba(0,0,0,0.28)] sm:text-sm lg:inset-x-[20%] lg:text-base">
        <Coffee aria-hidden="true" className="hidden shrink-0 sm:block" size={21} />
        <span>2744 Fletcher Pkwy, El Cajon</span>
        <span aria-hidden="true">•</span>
        <a href="tel:+16194642243" className="whitespace-nowrap">
          (619) 464-2243
        </a>
        <Coffee aria-hidden="true" className="hidden shrink-0 sm:block" size={21} />
      </div>
    </article>
  );
}
