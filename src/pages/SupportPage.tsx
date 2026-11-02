import { Landmark, UserCheck, Info, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Nav, Footer } from "@ds/patterns";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Button,
  Card,
  IconCircle,
  Grid,
  Illustration,
} from "@ds/primitives";
import { HMRC_SELF_ASSESSMENT_URL, FIND_ACCOUNTANT_URL } from "@/config/site";
import { Seo } from "@/Seo";

/**
 * SupportPage (/support) - a few trusted support resources, not documentation.
 * Two jobs held in tension: point users to the right external help (HMRC,
 * a chartered accountant) AND disclaim liability, especially around tax
 * numbers. Resources read generous; disclaimers read as calm standard terms.
 */
const RESOURCES: {
  icon: LucideIcon;
  title: string;
  body: string;
  ctaLabel: string;
  href: string;
}[] = [
  {
    icon: Landmark,
    title: "How does a tax return work?",
    body: "New to Self Assessment? HMRC's own guides walk you through who needs to file, the key dates, and how it all fits together, step by step.",
    ctaLabel: "HMRC Self Assessment guide",
    href: HMRC_SELF_ASSESSMENT_URL,
  },
  {
    icon: UserCheck,
    title: "Did I do it right?",
    body: "We're a bookkeeping tool, not accountants. If you're ever unsure about your numbers, it's always worth asking a chartered accountant. You can find one near you through the ICAEW.",
    ctaLabel: "Find a chartered accountant",
    href: FIND_ACCOUNTANT_URL,
  },
];

const DISCLAIMERS = [
  "Ledgeraa is a bookkeeping tool. We do not provide financial or accounting advice.",
  "You are responsible for every number you add and submit in the app, and for its accuracy.",
  "In-app tax estimates are an educated guess and may not reflect your actual figure. The only number to rely on is the one HMRC gives you after you submit.",
];

export function SupportPage() {
  return (
    <>
      <Seo path="/support" />
      <Nav current="/support" />

      <main>
        {/* Hero */}
        <Section background="paper" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Eyebrow withDot>Support</Eyebrow>
              <Heading level="display-lg" as="h1" className="mt-6">
                Making Tax Digital help for sole traders
              </Heading>
              <Lede className="mt-5" align="center">
                A few trusted places to turn when tax gets confusing. We'll
                point you to the people who do this for a living.
              </Lede>
              <Illustration
                src="/illustrations/goal-setting.svg"
                className="mx-auto mt-10 max-w-[240px] md:max-w-[280px]"
              />
            </div>
          </Container>
        </Section>

        {/* Resource cards */}
        <Section background="canvas" spacing="base">
          <Container>
            <Grid cols={{ base: 1, md: 2 }} gap={5}>
              {RESOURCES.map(({ icon: Icon, title, body, ctaLabel, href }) => (
                <Card
                  key={title}
                  variant="default"
                  padding="lg"
                  className="flex flex-col"
                >
                  <IconCircle size={44} tone="lavender">
                    <Icon className="h-[22px] w-[22px]" strokeWidth={1.9} />
                  </IconCircle>
                  <h3 className="mt-5 text-[19px] font-bold tracking-[-0.01em] text-[var(--color-ink)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                    {body}
                  </p>
                  <div className="mt-auto pt-6">
                    <Button
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="md"
                      trailing={<ExternalLink className="h-4 w-4" aria-hidden />}
                    >
                      {ctaLabel}
                    </Button>
                  </div>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>

        {/* Disclaimers - calm, standard terms, set apart from the friendly cards */}
        <Section background="white" spacing="base">
          <Container width="narrow">
            <Card variant="soft" padding="lg">
              <div className="flex items-center gap-3">
                <IconCircle size={44} tone="neutral">
                  <Info className="h-[22px] w-[22px]" strokeWidth={1.9} />
                </IconCircle>
                <h2 className="text-[19px] font-bold tracking-[-0.01em] text-[var(--color-ink)]">
                  Before you rely on the numbers
                </h2>
              </div>
              <ul className="mt-5 space-y-3">
                {DISCLAIMERS.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-relaxed text-[var(--color-ink-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Illustration
                src="/illustrations/secure-lock.svg"
                className="mx-auto mt-8 max-w-[160px] md:max-w-[180px]"
              />
            </Card>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
