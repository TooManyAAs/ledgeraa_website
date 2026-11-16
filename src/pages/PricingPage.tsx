import { ArrowRight, Landmark, Car, UserCheck, Send } from "lucide-react";
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
} from "@ds/primitives";
import { SIGNUP_URL, PLANS, type PlanId } from "@/config/site";
import { Seo } from "@/Seo";

/** Yearly cost of a plan, derived from its monthly price in site.ts. */
function annual(id: PlanId) {
  const plan = PLANS.find((p) => p.id === id);
  const monthly = Number(plan?.priceMain.replace(/[^0-9.]/g, "") ?? 0);
  return (monthly * 12).toFixed(2);
}

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
        Any time, in a couple of taps. Moving between Standard and Unlimited
        takes effect straight away. Moving to Free takes effect at the end of
        your billing period.
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
        MTD submissions to HMRC are coming soon, on the Standard and Unlimited
        plans with no add-on fees. They won't be part of the Free plan. We're
        waiting on HMRC recognition before we switch them on.
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
        <Section background="paper" spacing="lg">
          <Container>
            <Heading level="display-lg" as="h1" className="text-center">
              Simple and honest pricing
            </Heading>

            <div className="mt-12">
              <PricingPlans />
              <p className="mt-6 text-center text-sm text-[var(--color-ink-muted)]">
                Per year: Standard £{annual("standard")}, Unlimited £
                {annual("unlimited")}.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-[40rem] text-center">
              <Lede align="center">
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
            </div>
          </Container>
        </Section>

        <PricingTable
          eyebrow="Compare plans"
          heading="Compare Free, Standard and Unlimited"
        />

        <ComingSoon />

        <FaqAccordion
          eyebrow="Pricing questions"
          heading="Pricing questions: what Free, Standard and Unlimited include"
          items={pricingFaqs}
        />

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

const ROADMAP: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Send,
    title: "Making Tax Digital submissions",
    body: "Send your quarterly updates and final declaration to HMRC straight from your records, once HMRC recognises Ledgeraa. Standard and Unlimited.",
  },
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
            We're building the boring admin away, one piece at a time. Each of
            these lands on the plans it's listed for as it's ready. You'll never
            pay more for what you already have.
          </Lede>
        </div>

        <Grid cols={2} gap={5} className="mx-auto mt-12 max-w-3xl">
          {ROADMAP.map(({ icon: Icon, title, body }) => (
            <Card key={title} variant="tinted" padding="md" interactive className="flex flex-col">
              <div className="flex items-center justify-between">
                <IconCircle tone="lavender">
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
