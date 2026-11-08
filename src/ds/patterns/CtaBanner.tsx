import { ArrowRight } from "lucide-react";
import { Container, Section, Button } from "@ds/primitives";

/** Full-width strip: one line of copy and one button. */
export function CtaBanner({
  text,
  ctaLabel,
  ctaHref,
}: {
  text: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <Section background="tinted" spacing="sm" bordered>
      <Container>
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
          <p className="max-w-[38em] text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] font-medium text-pretty text-[var(--color-ink)]">
            {text}
          </p>
          <div className="flex-shrink-0">
            <Button
              href={ctaHref}
              size="md"
              trailing={<ArrowRight className="h-4 w-4" aria-hidden />}
            >
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
