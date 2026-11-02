import { Nav, Footer } from "@ds/patterns";
import { Container, Section, Eyebrow, Heading, Lede } from "@ds/primitives";
import { Seo } from "@/Seo";

// ponytail: placeholder, full cookie policy lands next.
export function CookiesPage() {
  return (
    <>
      <Seo path="/cookies" />
      <Nav current="/cookies" />
      <main>
        <Section background="paper" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Eyebrow withDot>Legal</Eyebrow>
              <Heading level="display-xl" className="mt-6">
                Cookie Policy
              </Heading>
              <Lede className="mt-6" align="center">
                Our cookie policy is on its way. Check back shortly.
              </Lede>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
