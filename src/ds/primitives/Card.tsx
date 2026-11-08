import type { ReactNode } from "react";
import { cn } from "@ds/cn";

const variants = {
  default: "bg-white border border-[var(--color-neutral-100)] shadow-sm",
  tinted: "bg-[var(--color-primary-50)] border border-[var(--color-primary-100)]",
  soft: "bg-[var(--color-canvas-soft)] border border-[var(--color-primary-100)]",
} as const;

const paddings = {
  md: "p-6 md:p-7",
  lg: "p-8 md:p-10",
} as const;

export function Card({
  variant = "default",
  padding = "md",
  interactive,
  className,
  children,
}: {
  variant?: keyof typeof variants;
  padding?: keyof typeof paddings;
  /** Hover lift: the only hover motion used on the site. */
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        variants[variant],
        paddings[padding],
        interactive &&
          "transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
