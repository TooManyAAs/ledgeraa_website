import { Nav, Footer, Markdown } from "@ds/patterns";
import { Container, Section, Eyebrow, Heading, Prose } from "@ds/primitives";
import { Seo } from "@/Seo";
import { LEGAL_PAGES, type LegalPage } from "./legalPages";

/** Shared shell for the legal pages. Content lives in src/content/legal/*.md. */
export function LegalLayout({ page }: { page: LegalPage }) {
  const { href: path, title, source } = page;
  const related = LEGAL_PAGES.filter((p) => p.href !== path);
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
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
