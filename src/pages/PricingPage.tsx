import { ArrowRight, Landmark, Car, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Nav,
  Footer,
  PricingPlans,
  PricingTable,
  FaqAccordion,
} from "@ds/patterns";
import type { FaqEntry } from "@ds/patterns";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Button,
  Grid,
  Card,
  IconCircle,
  Illustration,
} from "@ds/primitives";
import { SIGNUP_URL, PLANS, type PlanId } from "@/config/site";

/** Yearly cost of a plan, derived from its monthly price in site.ts. */
function annual(id: PlanId) {
  const plan = PLANS.find((p) => p.id === id);
  const monthly = Number(plan?.priceMain.replace(/[^0-9.]/g, "") ?? 0);
  return (monthly * 12).toFixed(2);
}
import { Seo } from "@/Seo";

const pricingFaqs: FaqEntry[] = [
  {
    question: "Do I need a card to start on Free?",
    answer: (
      <>
        No. Free is genuinely free, forever: no card, no trial timer. You only
        add a card if and when you move to a paid plan.
      </>
    ),
  },
  {
    question: "Can I switch plans later?",
    answer: (
      <>
        Any time, in a couple of taps. Changes take effect straight away.
      </>
    ),
  },
  {
    question: "What happens if I stop paying?",
    answer: (
      <>
        You keep read-only access to your records forever. It's your data, not
        ours. You can export everything at any time, on any plan.
      </>
    ),
  },
  {
    question: "Is Making Tax Digital included?",
    answer: (
      <>
        Full MTD submission to HMRC is included on the Standard and Unlimited
        plans, with no add-on fees. It is not part of the Free plan. Ledgeraa is
        (soon) HMRC-recognised software.
      </>
    ),
  },
  {
    question: "Do new features cost extra?",
    answer: (
      <>
        No. What's on the way (a bank connection that matches your transactions,
        mileage tracking, and accountant access) lands on your plan as
        it's ready, at no extra charge. The price you signed up at is the price
        you keep. If we ever do change the price, we'll give you at least two
        months' notice first.
      </>
    ),
  },
  {
    question: "Why so much cheaper than the big names?",
    answer: (
      <>
        Two founders, no investors, no sales team. We built the app and we run
        it. Most accounting software costs more because it has more salespeople
        than engineers.
      </>
    ),
  },
];

export function PricingPage() {
  return (
    <>
      <Seo path="/pricing" />
      <Nav current="/pricing" />

      <main>
        {/* Header */}
        <Section background="paper" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Eyebrow withDot>Simple and honest pricing</Eyebrow>
              <Heading level="display-lg" as="h1" className="mt-6">
                Sole trader bookkeeping and MTD pricing: free, £4.99 or £7.99
              </Heading>
              <Lede className="mt-5" align="center">
                No add-ons, no first-year discount that doubles in year two. The
                price you see is the price you pay, always.
              </Lede>
              <div className="mt-8 flex justify-center">
                <Button
                  href={SIGNUP_URL}
                  variant="primary"
                  size="lg"
                  trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
                >
                  Start Now
                </Button>
              </div>
              <Illustration
                src="/illustrations/planning.svg"
                className="mx-auto mt-12 max-w-[260px] md:max-w-[300px]"
              />
            </div>
          </Container>
        </Section>

        {/* Three plan cards (no extra section chrome - header above sets context) */}
        <Section background="canvas" spacing="sm">
          <Container>
            <PricingPlans compact />
            <p className="mt-6 text-center text-sm text-[var(--color-ink-muted)]">
              Per year: Standard £{annual("standard")}, Unlimited £
              {annual("unlimited")}.
            </p>
          </Container>
        </Section>

        {/* Full comparison table */}
        <PricingTable
          eyebrow="Compare plans"
          heading="Compare Free, Standard and Unlimited"
        />

        {/* What's coming next */}
        <ComingSoon />

        {/* Pricing FAQ */}
        <FaqAccordion
          eyebrow="Pricing questions"
          heading="Pricing questions: what Free, Standard and Unlimited include"
          items={pricingFaqs}
        />

        {/* Exit CTA */}
        <Section background="dark" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Heading level="display-lg" as="h2" className="text-white">
                Start today.
              </Heading>
              <p className="mx-auto mt-5 max-w-[36em] text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] text-[var(--color-primary-200)] text-pretty">
                Picture it: it's tax return day and you don't need to worry about
                a thing. We want you to know exactly what you're paying, and
                exactly what you get for your money.
              </p>
              <div className="mt-9 flex justify-center">
                <Button
                  href={SIGNUP_URL}
                  variant="secondary"
                  size="lg"
                  trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
                >
                  Create your account
                </Button>
              </div>
              <p className="mt-4 text-sm text-[var(--color-primary-300)]">
                Ledgeraa is a bookkeeping app. We do not provide financial or
                accounting advice.
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * ComingSoon - the roadmap. Three features on the way, included as they land.
 * Tinted cards + a "Coming soon" pill so it reads as momentum, not a to-do.
 * ──────────────────────────────────────────────────────────────────────── */
const ROADMAP: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Landmark,
    title: "Bank connection",
    body: "Link your account and we'll match transactions to your records automatically. No more manual entry.",
  },
  {
    icon: Car,
    title: "Mileage tracking",
    body: "Log business miles as you drive and claim every penny you're owed at tax time.",
  },
  {
    icon: UserCheck,
    title: "Accountant access",
    body: "Give your accountant a read-only window into your books, whenever you need a second pair of eyes.",
  },
];

function ComingSoon() {
  return (
    <Section background="white" spacing="base">
      <Container>
        <div className="mx-auto max-w-[44rem] text-center">
          <Eyebrow>On the way</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            More coming, at no extra charge.
          </Heading>
          <Lede className="mt-4" align="center">
            We're building the boring admin away, one piece at a time. Every one
            of these lands on your plan as it's ready. You'll never pay more for
            what you already have.
          </Lede>
        </div>

        <Grid cols={{ base: 1, md: 3 }} gap={5} className="mx-auto mt-12 max-w-4xl">
          {ROADMAP.map(({ icon: Icon, title, body }) => (
            <Card key={title} variant="tinted" padding="md" interactive className="flex flex-col">
              <div className="flex items-center justify-between">
                <IconCircle size={44} tone="lavender">
                  <Icon className="h-[22px] w-[22px]" strokeWidth={1.9} />
                </IconCircle>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary-700)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.05em] text-white">
                  Coming soon
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-bold tracking-[-0.01em] text-[var(--color-ink)]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
                {body}
              </p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
