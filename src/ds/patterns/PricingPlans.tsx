import { Check, ArrowRight } from "lucide-react";
import { Button } from "@ds/primitives";
import { cn } from "@ds/cn";
import { PLANS, SIGNUP_URL, type MarketingPlan } from "@/config/site";

/** The three plan cards from `PLANS`, plus the reassurance row. Every CTA goes to app sign-up. */
export function PricingPlans() {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start">
        {PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
      <Reassurance />
    </div>
  );
}

function Reassurance() {
  const items = ["Cancel anytime", "Free migration", "Your data stays in the EU"];
  return (
    <ul className="mt-8 flex flex-col items-center justify-center gap-2 text-[14px] font-medium text-[var(--color-ink-muted)] sm:flex-row sm:gap-8">
      {items.map((item) => (
        <li key={item} className="inline-flex items-center gap-2">
          <Check
            className="h-4 w-4 text-[var(--color-success-600)]"
            strokeWidth={2.5}
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PlanCard({ plan }: { plan: MarketingPlan }) {
  const featured = plan.featured;

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl p-7 md:p-8",
        featured
          ? "bg-white shadow-xl ring-2 ring-[var(--color-primary-500)] md:-mt-3 md:pb-10"
          : "bg-white shadow-sm ring-1 ring-[var(--color-neutral-200)]"
      )}
    >
      {featured && (
        <span
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2",
            "rounded-full bg-[var(--color-accent)] px-3 py-1",
            "text-[12px] font-bold uppercase tracking-[0.05em] text-white shadow-sm"
          )}
        >
          Most popular
        </span>
      )}

      <h3 className="text-[15px] font-bold uppercase tracking-[0.05em] text-[var(--color-primary-700)]">
        {plan.name}
      </h3>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-sans text-[3rem] font-extrabold leading-none tracking-[-0.03em] text-[var(--color-ink)] tabular-nums">
          {plan.priceMain}
        </span>
        {plan.priceCadence && (
          <span className="text-[15px] font-medium text-[var(--color-ink-muted)]">
            {plan.priceCadence}
          </span>
        )}
      </div>

      <p className="mt-3 min-h-[2.75em] text-[15px] text-[var(--color-ink-muted)]">
        {plan.tagline}
      </p>

      <Button
        href={SIGNUP_URL}
        variant={featured ? "primary" : "secondary"}
        size="md"
        block
        trailing={<ArrowRight className="h-4 w-4" aria-hidden />}
        className="mt-6"
      >
        {plan.ctaLabel}
      </Button>

      <ul className="mt-7 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]"
          >
            <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[var(--color-primary-700)]">
              <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {plan.note && (
        <p className="mt-6 border-t border-[var(--color-neutral-100)] pt-4 text-[13px] leading-relaxed text-[var(--color-neutral-500)]">
          {plan.note}
        </p>
      )}
    </div>
  );
}
