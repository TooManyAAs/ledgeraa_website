import { ArrowRight, Mail } from "lucide-react";
import { Nav, Footer, CtaBanner } from "@ds/patterns";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Button,
  Prose,
  Illustration,
} from "@ds/primitives";
import { HELLO_EMAIL, SIGNUP_URL } from "@/config/site";
import { Seo } from "@/Seo";

export function ContactPage() {
  return (
    <>
      <Seo path="/contact" />
      <Nav current="/contact" />

      <main>
        <Section background="paper" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Eyebrow withDot>Contact</Eyebrow>
              <Heading level="display-lg" as="h1" className="mt-6">
                Say hello.
              </Heading>
              <Lede className="mt-5" align="center">
                Questions, feedback, or just want to talk it through? We read
                every message, so write to us any time.
              </Lede>
              <Illustration
                src="/illustrations/yippy.svg"
                className="mx-auto mt-10 max-w-[240px] md:max-w-[280px]"
              />
            </div>
          </Container>
        </Section>

        <Section background="canvas" spacing="base">
          <Container width="narrow">
            <div className="rounded-3xl bg-[var(--color-primary-50)] px-6 py-10 text-center ring-1 ring-[var(--color-primary-100)] md:px-12 md:py-14">
              <Heading level="display-md" as="h2">
                Write to us
              </Heading>
              <p className="mx-auto mt-4 max-w-[34em] text-pretty text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] text-[var(--color-ink-muted)]">
                The best way to reach us is email. We'd love to hear from you.
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  href={`mailto:${HELLO_EMAIL}`}
                  variant="primary"
                  size="lg"
                  leading={<Mail className="h-5 w-5" aria-hidden />}
                >
                  {HELLO_EMAIL}
                </Button>
              </div>
              <p className="mx-auto mt-4 max-w-[32em] text-sm text-[var(--color-ink-muted)]">
                We'll always get back to you, just not always straight away.
                See the note below.
              </p>
            </div>
          </Container>
        </Section>

        <Section background="white" spacing="base" bordered>
          <Container width="narrow">
            <Heading level="display-md" as="h2" className="mb-8 text-center">
              About us
            </Heading>
            <Prose>
              <p>
                We're two co-founders, and we're sole traders ourselves. We know
                the carrier-bag-of-receipts feeling first-hand, and we're
                genuinely passionate about making tax easier for people doing
                what we do.
              </p>
              <p>
                We both have other jobs, and we build and run Ledgeraa around
                them. We do our very best to support every user, but because
                it's just the two of us, we can't always promise to get back to
                you quickly. When you write, we'll reply as soon as we honestly
                can.
              </p>
              <p>
                <strong>Something urgent?</strong> Have a look at the resources
                on our <a href="/support">Support page</a> first, you'll often
                find the answer there faster than waiting on a reply.
              </p>
            </Prose>
            <Illustration
              src="/illustrations/task-done.svg"
              className="mx-auto mt-10 max-w-[180px] md:max-w-[200px]"
            />
          </Container>
        </Section>

        <CtaBanner
          text="Need an answer right now? Our Support page has guides and resources for the most common questions."
          ctaLabel="Go to Support"
          ctaHref="/support"
        />

        <Section background="dark" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Heading level="display-lg" as="h2" className="text-white">
                Ready when you are.
              </Heading>
              <p className="mx-auto mt-5 max-w-[36em] text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] text-[var(--color-primary-200)] text-pretty">
                No need to wait on us to get started. Create your free account
                and send your first invoice today, we'll be here when you need
                us.
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
