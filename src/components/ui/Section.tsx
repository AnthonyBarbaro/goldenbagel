import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { classNames } from "@/lib/format";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, intro, children, className, ...props }: SectionProps) {
  return (
    <section className={classNames("px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24", className)} {...props}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-8 max-w-3xl sm:mb-10">
            {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-toast sm:text-sm sm:tracking-[0.26em]">{eyebrow}</p>}
            {title && <h2 className="font-serif text-3xl font-black tracking-tight text-charcoal sm:text-5xl">{title}</h2>}
            {intro && <p className="mt-4 text-base leading-7 text-espresso/75 sm:text-lg sm:leading-8">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
