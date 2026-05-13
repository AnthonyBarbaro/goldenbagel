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
    <section className={classNames("px-4 py-16 sm:px-6 lg:px-8 lg:py-24", className)} {...props}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-[0.26em] text-toast">{eyebrow}</p>}
            {title && <h2 className="font-serif text-3xl font-black tracking-tight text-charcoal sm:text-5xl">{title}</h2>}
            {intro && <p className="mt-4 text-lg leading-8 text-espresso/75">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
