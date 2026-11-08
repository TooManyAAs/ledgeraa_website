import type { ReactNode } from "react";
import { cn } from "@ds/cn";

const toneClasses = {
  lavender:
    "bg-[var(--color-primary-100)] text-[var(--color-primary-800)] ring-1 ring-[var(--color-primary-200)]",
  neutral:
    "bg-[var(--color-neutral-50)] text-[var(--color-ink)] ring-1 ring-[var(--color-neutral-100)]",
} as const;

export function IconCircle({
  tone,
  className,
  children,
}: {
  tone: keyof typeof toneClasses;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn("grid h-11 w-11 place-items-center rounded-full", toneClasses[tone], className)}
      aria-hidden
    >
      {children}
    </div>
  );
}
