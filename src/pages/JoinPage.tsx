import { ArrowRight, Check } from "lucide-react";
import { Nav, Footer } from "@ds/patterns";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Button,
} from "@ds/primitives";
import { SIGNUP_URL, SIGNIN_URL } from "@/config/site";
import { Seo } from "@/Seo";

const recap = [
  "Free to start, no card, no trial timer",
  "Send invoices, log expenses, scan receipts on paid plans",
  "MTD submissions to HMRC coming soon · your data stays in the EU",
];

export function JoinPage() {
  return (
    <>
      <Seo path="/join" />
      <Nav current="/join" />

      <main>
        <Section background="paper" spacing="lg" className="overflow-hidden">
          <Container width="narrow">
            <div className="text-center">
              <Eyebrow withDot>Join Ledgeraa</Eyebrow>
              <Heading level="display-xl" className="mt-6">
                Let's take the tax off your plate.
              </Heading>
              <Lede className="mt-6" align="center">
                Create your free account and send your first invoice in minutes.
                We'll handle the tax bit, and you get on with the work you're
                actually here to do.
              </Lede>

              <ul className="mx-auto mt-9 flex max-w-[26rem] flex-col gap-3 text-left">
                {recap.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]"
                  >
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[var(--color-primary-700)]">
                      <Check
                        className="h-3 w-3 text-white"
                        strokeWidth={3}
                        aria-hidden
                      />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col items-center gap-4">
                <Button
                  href={SIGNUP_URL}
                  variant="primary"
                  size="lg"
                  trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
                  className="min-w-[16rem]"
                >
                  Create your free account
                </Button>
                <p className="text-sm text-[var(--color-ink-muted)]">
                  Already with us?{" "}
                  <a
                    href={SIGNIN_URL}
                    className="font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-800)]"
                  >
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
