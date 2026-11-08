import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Nav, Footer } from "@ds/patterns";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Button,
  Prose,
} from "@ds/primitives";
import { SIGNUP_URL } from "@/config/site";
import { Seo } from "@/Seo";

export type RelatedLink = { href: string; label: string };

/**
 * Shared shell for the MTD hub, guides, comparison and trade pages.
 */
export function ContentLayout({
  path,
  eyebrow,
  title,
  lede,
  children,
  related,
  updated = "2 November 2026",
  ctaHeading = "Get your books ready for Making Tax Digital.",
  ctaBody = "Start free with unlimited invoices. Standard is £4.99 a month, with MTD submissions coming soon.",
}: {
  path: string;
  eyebrow: string;
  title: string;
  lede: ReactNode;
  children: ReactNode;
  related?: RelatedLink[];
  updated?: string;
  ctaHeading?: string;
  ctaBody?: string;
}) {
  return (
    <>
      <Seo path={path} />
      <Nav current={path} />

      <main>
        <Section background="paper" spacing="lg">
          <Container width="narrow">
            <Eyebrow withDot>{eyebrow}</Eyebrow>
            <Heading level="display-lg" as="h1" className="mt-6">
              {title}
            </Heading>
            <Lede className="mt-5">{lede}</Lede>
            <p className="mt-6 text-sm text-[var(--color-ink-muted)]">
              Last checked against GOV.UK guidance on {updated}.
            </p>
          </Container>
        </Section>

        <Section background="white" spacing="base">
          <Container width="narrow">
            <Prose>{children}</Prose>

            {related && related.length > 0 && (
              <nav
                aria-label="Related guides"
                className="mt-14 rounded-2xl bg-[var(--color-neutral-50)] p-6 ring-1 ring-[var(--color-neutral-200)]"
              >
                <h2 className="text-[17px] font-bold text-[var(--color-ink)]">
                  Related guides
                </h2>
                <ul className="mt-3 space-y-2">
                  {related.map((r) => (
                    <li key={r.href}>
                      <a
                        href={r.href}
                        className="text-[var(--color-primary-700)] underline underline-offset-[3px] decoration-[var(--color-primary-200)] hover:decoration-[var(--color-primary-500)]"
                      >
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <p className="mt-10 text-[13px] leading-relaxed text-[var(--color-neutral-500)]">
              Ledgeraa is a bookkeeping app, and only that. This page is general
              information, not financial, tax or accountancy advice. For advice
              about your own situation, speak to a qualified accountant.
            </p>
          </Container>
        </Section>

        <Section background="dark" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Heading level="display-lg" as="h2" className="text-white">
                {ctaHeading}
              </Heading>
              <p className="mx-auto mt-5 max-w-[36em] text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] text-[var(--color-primary-200)] text-pretty">
                {ctaBody}
              </p>
              <div className="mt-9 flex justify-center">
                <Button
                  href={SIGNUP_URL}
                  variant="secondary"
                  size="lg"
                  trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
                >
                  Start free
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}

/** Simple bordered table for use inside <Prose>. */
export function ContentTable({
  head,
  rows,
  caption,
}: {
  head: string[];
  rows: ReactNode[][];
  caption?: ReactNode;
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl ring-1 ring-[var(--color-neutral-200)]">
      <table className="w-full min-w-[32rem] border-collapse text-left text-[15px]">
        <thead className="bg-[var(--color-neutral-50)]">
          <tr>
            {head.map((h) => (
              <th
                key={h}
                scope="col"
                className="px-4 py-3 font-semibold text-[var(--color-ink)]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-[var(--color-neutral-200)] align-top">
              {r.map((c, j) => (
                <td key={j} className="px-4 py-3 text-[var(--color-ink-muted)]">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <p className="border-t border-[var(--color-neutral-200)] px-4 py-2 text-[13px] text-[var(--color-neutral-500)]">
          {caption}
        </p>
      )}
    </div>
  );
}
