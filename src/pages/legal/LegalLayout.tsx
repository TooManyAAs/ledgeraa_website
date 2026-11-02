import { Nav, Footer, Markdown } from "@ds/patterns";
import { Container, Section, Eyebrow, Heading, Prose } from "@ds/primitives";
import { Seo } from "@/Seo";

export type LegalLink = { href: string; label: string };

/** Every legal page, in display order. Each page passes the others as `related`. */
export const LEGAL_PAGES: LegalLink[] = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/data-processing", label: "Data Processing Agreement" },
  { href: "/sub-processors", label: "Sub-processors" },
  { href: "/security", label: "Security" },
  { href: "/accessibility", label: "Accessibility Statement" },
  { href: "/partner-terms", label: "Partner Terms" },
];

/** The legal pages other than `path`, for the "Other legal documents" nav. */
export function otherLegalPages(path: string): LegalLink[] {
  return LEGAL_PAGES.filter((p) => p.href !== path);
}

/**
 * LegalLayout - shared shell for the legal pages (terms, privacy, cookies,
 * DPA, sub-processors, security, accessibility, partner terms). Hero with the
 * title, then the document body rendered from Markdown inside <Prose>, then a
 * small list of the other legal documents.
 *
 * Content lives in src/content/legal/*.md; edit the Markdown to change a page.
 */
export function LegalLayout({
  path,
  title,
  source,
  related,
}: {
  path: string;
  title: string;
  /** Raw Markdown for the document body (imported with ?raw). */
  source: string;
  related?: LegalLink[];
}) {
  return (
    <>
      <Seo path={path} />
      <Nav current={path} />

      <main>
        <Section background="paper" spacing="lg">
          <Container width="narrow">
            <Eyebrow withDot>Legal</Eyebrow>
            <Heading level="display-lg" as="h1" className="mt-6">
              {title}
            </Heading>
          </Container>
        </Section>

        <Section background="white" spacing="base">
          <Container width="narrow">
            <Prose>
              <Markdown source={source} />
            </Prose>

            {related && related.length > 0 && (
              <nav
                aria-label="Other legal documents"
                className="mt-14 rounded-2xl bg-[var(--color-neutral-50)] p-6 ring-1 ring-[var(--color-neutral-200)]"
              >
                <h2 className="text-[17px] font-bold text-[var(--color-ink)]">
                  Other legal documents
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
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
