import type { ReactNode } from "react";
import { cn } from "@ds/cn";

/** The secondary line under a heading. */
export function Lede({
  className,
  children,
  align = "start",
}: {
  className?: string;
  children: ReactNode;
  align?: "start" | "center";
}) {
  return (
    <p
      className={cn(
        "max-w-[36em] text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] text-[var(--color-ink-muted)] text-pretty",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {children}
    </p>
  );
}
