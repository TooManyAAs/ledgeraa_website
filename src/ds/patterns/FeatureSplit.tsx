import type { ReactNode } from "react";
import { Check } from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
} from "@ds/primitives";
import { cn } from "@ds/cn";

/** One feature, side by side: copy on one half, visual on the other. */
export function FeatureSplit({
  eyebrow,
  heading,
  lede,
  bullets,
  footnote,
  visual,
  orientation = "right",
  background = "canvas",
}: {
  eyebrow?: string;
  heading: string;
  lede?: string;
  bullets?: string[];
  footnote?: string;
  visual: ReactNode;
  orientation?: "right" | "left";
  background?: "canvas" | "white";
}) {
  return (
    <Section background={background} spacing="sm">
      <Container>
        <div
          className={cn(
            "grid grid-cols-1 items-center lg:grid-cols-2",
            "gap-8 lg:gap-12",
            orientation === "left" && "lg:[&>*:first-child]:order-2"
          )}
        >
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Heading
              level="display-md"
              as="h2"
              className={eyebrow ? "mt-4" : undefined}
            >
              {heading}
            </Heading>
            {lede && <Lede className="mt-4">{lede}</Lede>}

            {bullets && bullets.length > 0 && (
              <ul className={"mt-6 space-y-3.5"}>
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]"
                  >
                    <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[var(--color-primary-100)]">
                      <Check
                        className="h-3 w-3 text-[var(--color-primary-700)]"
                        strokeWidth={3.5}
                      />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {footnote && (
              <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-neutral-500)]">
                {footnote}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[360px]">{visual}</div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
