import { Nav, Footer } from "@ds/patterns";
import { Container, Section, Eyebrow, Heading, Lede } from "@ds/primitives";
import { Seo } from "@/Seo";

// ponytail: placeholder, full privacy policy lands next.
export function PrivacyPage() {
  return (
    <>
      <Seo path="/privacy" />
      <Nav current="/privacy" />
      <main>
        <Section background="paper" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Eyebrow withDot>Legal</Eyebrow>
              <Heading level="display-xl" className="mt-6">
                Privacy Policy
              </Heading>
              <Lede className="mt-6" align="center">
                Our privacy policy is being written up. Check back shortly. Your
                data stays in the EU, and we never sell it.
              </Lede>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
