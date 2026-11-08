import type { ReactNode } from "react";
import { cn } from "@ds/cn";

type Width = "narrow" | "default" | "wide";

const widths: Record<Width, string> = {
  narrow: "max-w-[720px]",
  default: "max-w-[1120px]",
  wide: "max-w-[1280px]",
};

/** Max-width + responsive horizontal gutter. Layout only. */
export function Container({
  width = "default",
  className,
  children,
}: {
  width?: Width;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8 lg:px-10",
        widths[width],
        className
      )}
    >
      {children}
    </div>
  );
}
