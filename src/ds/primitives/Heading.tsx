import type { ReactNode } from "react";
import { cn } from "@ds/cn";

type AsTag = "h1" | "h2" | "h3" | "p";

const levelClasses = {
  "display-xl":
    "font-sans text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] font-extrabold tracking-[-0.04em] text-balance",
  "display-lg":
    "font-sans text-[length:var(--text-display-lg)] leading-[var(--text-display-lg--line-height)] font-extrabold tracking-[-0.035em] text-balance",
  "display-md":
    "font-sans text-[length:var(--text-display-md)] leading-[var(--text-display-md--line-height)] font-bold tracking-[-0.025em] text-balance",
} as const;

/** `level` sets the visual style; `as` overrides the tag when semantics differ (default h1 for display-xl, else h2). */
export function Heading({
  level,
  as,
  className,
  children,
  id,
}: {
  level: keyof typeof levelClasses;
  as?: AsTag;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  const Tag = as ?? (level === "display-xl" ? "h1" : "h2");
  return (
    <Tag id={id} className={cn("text-[var(--color-ink)]", levelClasses[level], className)}>
      {children}
    </Tag>
  );
}
