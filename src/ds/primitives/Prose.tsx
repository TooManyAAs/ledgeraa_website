import type { ReactNode } from "react";
import { cn } from "@ds/cn";

/** Long-form text wrapper; styles plain HTML children via descendant selectors. */
export function Prose({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-[40em]",
        "text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-ink-muted)]",
        "[&_p]:mb-5 [&_p:last-child]:mb-0",
        "[&_strong]:font-semibold [&_strong]:text-[var(--color-ink)]",
        "[&_em]:italic",
        "[&_a]:text-[var(--color-primary-700)] [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:decoration-[var(--color-primary-200)] hover:[&_a]:decoration-[var(--color-primary-500)]",
        "[&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:marker:text-[var(--color-primary-500)]",
        "[&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:marker:text-[var(--color-primary-500)]",
        "[&_h2]:font-sans [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-[-0.01em] [&_h2]:text-[var(--color-ink)] [&_h2]:mt-12 [&_h2]:mb-4",
        "[&_h3]:font-sans [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-[-0.005em] [&_h3]:text-[var(--color-ink)] [&_h3]:mt-8 [&_h3]:mb-3",
        "[&_blockquote]:border-l-4 [&_blockquote]:border-[var(--color-primary-300)] [&_blockquote]:pl-5 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-[var(--color-ink)]",
        className
      )}
    >
      {children}
    </div>
  );
}
