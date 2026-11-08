import type { ReactNode } from "react";
import { cn } from "@ds/cn";

/** Native <details>/<summary> disclosure; the chevron rotates via CSS on [open]. */
export function FaqItem({
  question,
  children,
  defaultOpen,
  className,
}: {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  return (
    <details
      open={defaultOpen}
      className={cn(
        "group border-t border-[var(--color-neutral-100)] last:border-b",
        "py-5",
        className
      )}
    >
      <summary
        className={cn(
          "flex cursor-pointer items-start justify-between gap-4 list-none",
          "[&::-webkit-details-marker]:hidden",
          "font-semibold text-[var(--color-ink)]",
          "hover:text-[var(--color-primary-700)]",
          "transition-colors duration-[var(--duration-fast)]"
        )}
      >
        <span className="text-[length:var(--text-body)] leading-snug">{question}</span>
        <svg
          aria-hidden
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "mt-1 flex-shrink-0 text-[var(--color-neutral-500)]",
            "transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
            "group-open:rotate-180 group-open:text-[var(--color-primary-700)]"
          )}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className="mt-3 max-w-[40em] text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
        {children}
      </div>
    </details>
  );
}
