import type { ReactNode } from "react";
import { cn } from "@ds/cn";

/** CSS-only phone shell that houses a <ScreenMock>. */
export function PhoneFrame({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[320px] aspect-[9/19]",
        "rounded-[44px] p-[10px]",
        "bg-[var(--color-neutral-950)]",
        "ring-1 ring-[var(--color-neutral-800)]",
        "shadow-xl",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute top-[18px] left-1/2 -translate-x-1/2 z-10 h-[24px] w-[96px] rounded-full bg-[var(--color-neutral-950)]"
      />
      <div
        aria-hidden
        className="absolute -left-[2px] top-[120px] h-[60px] w-[3px] rounded-l-sm bg-[var(--color-neutral-800)]"
      />
      <div
        aria-hidden
        className="absolute -right-[2px] top-[160px] h-[80px] w-[3px] rounded-r-sm bg-[var(--color-neutral-800)]"
      />
      <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-[var(--color-canvas)]">
        {children}
      </div>
    </div>
  );
}
