import { ArrowRight } from "lucide-react";
import { Nav, Footer } from "@ds/patterns";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Button,
  Illustration,
} from "@ds/primitives";
import { Seo } from "@/Seo";

export function NotFoundPage() {
  return (
    <>
      <Seo />
      <Nav />

      <main>
        <Section background="paper" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Eyebrow>Error 404</Eyebrow>
              <Heading level="display-lg" as="h1" className="mt-6">
                This page took a wrong turn.
              </Heading>
              <Lede className="mt-5" align="center">
                The page you're looking for doesn't exist or has moved. Let's
                get you back on track.
              </Lede>
              <Illustration
                src="/illustrations/404.svg"
                className="mx-auto mt-10 max-w-[420px] md:max-w-[480px]"
              />
              <div className="mt-10 flex justify-center">
                <Button
                  href="/"
                  variant="primary"
                  size="lg"
                  trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
                >
                  Take me to Ledgeraa
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
