import { Check, Minus } from "lucide-react";
import { Container, Section, Eyebrow, Heading } from "@ds/primitives";
import { cn } from "@ds/cn";
import { PLANS, COMPARE_ROWS, type CompareRow } from "@/config/site";

/** Feature rows × plan columns from `COMPARE_ROWS`; the featured plan column is tinted. */
export function PricingTable({
  eyebrow = "Compare plans",
  heading = "Everything, side by side",
}: {
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <Section background="white" spacing="base">
      <Container>
        <div className="mx-auto max-w-[44rem] text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            {heading}
          </Heading>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl ring-1 ring-[var(--color-neutral-200)]">
          <table className="w-full min-w-[560px] border-collapse bg-white text-left">
            <thead>
              <tr className="sticky top-0">
                <th
                  scope="col"
                  className="bg-white px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.05em] text-[var(--color-neutral-500)]"
                >
                  Feature
                </th>
                {PLANS.map((plan) => (
                  <th
                    key={plan.id}
                    scope="col"
                    className={cn(
                      "px-5 py-4 text-center text-[15px] font-bold",
                      plan.featured
                        ? "bg-[var(--color-primary-50)] text-[var(--color-primary-800)]"
                        : "bg-white text-[var(--color-ink)]"
                    )}
                  >
                    <span className="flex flex-col items-center gap-0.5">
                      {plan.name}
                      <span className="text-[13px] font-medium text-[var(--color-ink-muted)]">
                        {plan.priceMain}
                        {plan.priceCadence ?? ""}
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row, i) => (
                <ComparisonRow key={row.label} row={row} zebra={i % 2 === 1} />
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-[13px] text-[var(--color-neutral-500)]">
          All plans include unlimited PDF invoices and let you export your data
          any time.
        </p>
      </Container>
    </Section>
  );
}

const COMING_SOON_PREFIX = "Coming Soon: ";

function ComparisonRow({ row, zebra }: { row: CompareRow; zebra: boolean }) {
  const comingSoon = row.label.startsWith(COMING_SOON_PREFIX);
  const label = comingSoon
    ? row.label.slice(COMING_SOON_PREFIX.length)
    : row.label;

  return (
    <tr
      className={cn(
        "border-t border-[var(--color-neutral-100)]",
        zebra && "bg-[var(--color-canvas-soft)]"
      )}
    >
      <th
        scope="row"
        className="px-5 py-4 text-left text-[15px] font-medium text-[var(--color-ink)]"
      >
        <span className="inline-flex flex-wrap items-center gap-2">
          {label}
          {comingSoon && (
            <span className="inline-flex items-center rounded-full bg-[var(--color-primary-50)] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.04em] text-[var(--color-primary-700)] ring-1 ring-[var(--color-primary-100)]">
              Coming soon
            </span>
          )}
        </span>
      </th>
      <Cell value={row.free} />
      <Cell value={row.standard} featured />
      <Cell value={row.unlimited} />
    </tr>
  );
}

function Cell({
  value,
  featured = false,
}: {
  value: boolean | string;
  featured?: boolean;
}) {
  return (
    <td
      className={cn(
        "px-5 py-4 text-center text-[15px]",
        featured && "bg-[var(--color-primary-50)]/60"
      )}
    >
      {typeof value === "boolean" ? (
        value ? (
          <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-[var(--color-primary-700)]">
            <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} aria-hidden />
            <span className="sr-only">Included</span>
          </span>
        ) : (
          <>
            <Minus
              className="mx-auto h-4 w-4 text-[var(--color-neutral-300)]"
              aria-hidden
            />
            <span className="sr-only">Not included</span>
          </>
        )
      ) : (
        <span className="text-[var(--color-ink)]">{value}</span>
      )}
    </td>
  );
}
