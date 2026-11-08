import type { ReactNode } from "react";
import { cn } from "@ds/cn";

// Literal class strings so Tailwind's source scan picks them up.
const colClasses = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
} as const;

const gapClasses = {
  5: "gap-5",
  6: "gap-6",
} as const;

/** Single column on mobile, `cols` columns from md up. */
export function Grid({
  cols,
  gap = 6,
  className,
  children,
}: {
  cols: keyof typeof colClasses;
  gap?: keyof typeof gapClasses;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("grid", colClasses[cols], gapClasses[gap], className)}>
      {children}
    </div>
  );
}
