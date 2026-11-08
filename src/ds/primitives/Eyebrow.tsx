import type { ReactNode } from "react";
import { cn } from "@ds/cn";

type Tone = "purple" | "neutral";

const toneClasses: Record<Tone, string> = {
  purple:
    "bg-[var(--color-primary-50)] text-[var(--color-primary-700)] ring-1 ring-[var(--color-primary-100)]",
  neutral:
    "bg-white text-[var(--color-ink)] ring-1 ring-[var(--color-neutral-200)]",
};

/** Small uppercase tag above a section heading. */
export function Eyebrow({
  tone = "purple",
  withDot,
  className,
  children,
}: {
  tone?: Tone;
  withDot?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
        "text-[length:var(--text-eyebrow)] leading-[var(--text-eyebrow--line-height)]",
        "font-semibold uppercase tracking-[0.06em]",
        toneClasses[tone],
        className
      )}
    >
      {withDot && (
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)] animate-pulse"
        />
      )}
      {children}
    </span>
  );
}
