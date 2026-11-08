import type { ReactNode } from "react";
import { cn } from "@ds/cn";

type Background = "canvas" | "tinted" | "white" | "dark" | "paper";
type Spacing = "sm" | "base" | "lg" | "none";

const backgrounds: Record<Background, string> = {
  canvas: "bg-[var(--color-canvas)]",
  tinted: "bg-[var(--color-canvas-tinted)]",
  white: "bg-white",
  dark: "bg-aurora text-white",
  paper: "bg-paper",
};

const spacings: Record<Spacing, string> = {
  none: "py-0",
  sm: "py-16 md:py-20",
  base: "py-20 md:py-24",
  lg: "py-24 md:py-32",
};

/** Full-width band: vertical rhythm + background. Pair with <Container> for width. */
export function Section({
  background = "canvas",
  spacing = "base",
  bordered,
  className,
  children,
  id,
}: {
  background?: Background;
  spacing?: Spacing;
  bordered?: boolean;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        backgrounds[background],
        spacings[spacing],
        bordered &&
          "border-y border-[var(--color-neutral-100)]",
        className
      )}
    >
      {children}
    </section>
  );
}
