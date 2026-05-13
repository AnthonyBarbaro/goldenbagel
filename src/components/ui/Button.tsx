import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { classNames } from "@/lib/format";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-honey text-charcoal shadow-lift hover:bg-[#ffc85c]",
  secondary: "bg-white text-charcoal shadow-soft ring-1 ring-charcoal/10 hover:bg-cream",
  dark: "bg-charcoal text-white shadow-soft hover:bg-espresso",
  ghost: "bg-transparent text-charcoal hover:bg-white/60"
};

const sizes = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-7 text-base"
};

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
};

type LinkButtonProps = SharedProps & {
  href: string;
};

type NativeButtonProps = SharedProps & ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: LinkButtonProps | NativeButtonProps) {
  const buttonClassName = classNames(
    "inline-flex items-center justify-center gap-2 rounded-full font-extrabold transition duration-200",
    "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-honey",
    "disabled:cursor-not-allowed disabled:opacity-55",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    const isExternal = /^https?:\/\//.test(props.href);

    if (isExternal) {
      return (
        <a href={props.href} className={buttonClassName} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
