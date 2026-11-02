import { useState } from "react";
import { ContentLayout } from "./ContentLayout";
import { GOV } from "@/config/site";

type Year = "2024-25" | "2025-26" | "2026-27";

const RULES: Record<Year, { threshold: number; start: string; label: string }> = {
  "2024-25": { threshold: 50000, start: "6 April 2026", label: "2024 to 2025" },
  "2025-26": { threshold: 30000, start: "6 April 2027", label: "2025 to 2026" },
  "2026-27": { threshold: 20000, start: "6 April 2028", label: "2026 to 2027" },
};

const gbp = (n: number) =>
  n.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });

function parse(v: string) {
  const n = Number(v.replace(/[£,\s]/g, ""));
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

const fieldClass =
  "mt-2 block h-[52px] w-full rounded-lg border border-[var(--color-neutral-200)] bg-white px-4 text-base text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-4 focus:ring-[color:var(--color-primary-500)]/15";

function Checker() {
  const [year, setYear] = useState<Year>("2025-26");
  const [selfEmployed, setSelfEmployed] = useState("");
  const [property, setProperty] = useState("");
  const total = parse(selfEmployed) + parse(property);
  const rule = RULES[year];
  const touched = selfEmployed !== "" || property !== "";
  const inScope = total > rule.threshold;

  return (
    <div className="not-prose my-8 rounded-2xl bg-[var(--color-neutral-50)] p-6 ring-1 ring-[var(--color-neutral-200)] md:p-8">
      <div className="grid gap-5">
        <label className="block text-[15px] font-semibold text-[var(--color-ink)]">
          Which tax year are these figures for?
          <select
            className={fieldClass}
            value={year}
            onChange={(e) => setYear(e.target.value as Year)}
          >
            <option value="2024-25">6 April 2024 to 5 April 2025</option>
            <option value="2025-26">6 April 2025 to 5 April 2026</option>
            <option value="2026-27">6 April 2026 to 5 April 2027</option>
          </select>
        </label>
        <label className="block text-[15px] font-semibold text-[var(--color-ink)]">
          Self-employment income, before expenses (£)
          <input
            className={fieldClass}
            inputMode="decimal"
            placeholder="e.g. 34000"
            value={selfEmployed}
            onChange={(e) => setSelfEmployed(e.target.value)}
          />
        </label>
        <label className="block text-[15px] font-semibold text-[var(--color-ink)]">
          Property income, before expenses (£)
          <input
            className={fieldClass}
            inputMode="decimal"
            placeholder="0 if you don't rent anything out"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
          />
        </label>
      </div>

      <div aria-live="polite" className="mt-6 rounded-xl bg-white p-5 ring-1 ring-[var(--color-neutral-200)]">
        {!touched ? (
          <p className="m-0 text-[var(--color-ink-muted)]">
            Enter your figures to see when MTD applies to you.
          </p>
        ) : inScope ? (
          <p className="m-0 text-[var(--color-ink)]">
            <strong>Your qualifying income is {gbp(total)}</strong>, over the{" "}
            {gbp(rule.threshold)} threshold for {rule.label}. You'll need to use
            Making Tax Digital from <strong>{rule.start}</strong>.
          </p>
        ) : (
          <p className="m-0 text-[var(--color-ink)]">
            <strong>Your qualifying income is {gbp(total)}</strong>, not over the{" "}
            {gbp(rule.threshold)} threshold for {rule.label}, so this year alone
            doesn't bring you into MTD from {rule.start}. Check again with your
            figures for the next tax year: the threshold keeps falling.
          </p>
        )}
      </div>
    </div>
  );
}

export function MtdCheckerPage() {
  return (
    <ContentLayout
      path="/making-tax-digital/do-i-need-it"
      eyebrow="MTD threshold checker"
      title="Do I need Making Tax Digital?"
      lede="Enter your income from self-employment and property, before expenses, and we'll show you when Making Tax Digital for Income Tax applies to you."
      related={[
        { href: "/making-tax-digital", label: "Making Tax Digital for sole traders, in plain English" },
        { href: "/making-tax-digital/deadlines", label: "Every MTD deadline, 2026 to 2028" },
        { href: "/making-tax-digital/hmrc-signed-me-up", label: "HMRC signed me up for MTD: what now?" },
      ]}
    >
      <Checker />

      <h2>How the threshold works</h2>
      <p>
        HMRC adds up your <strong>gross</strong> income from self-employment and
        property for a tax year. That's turnover, before you take off any
        expenses, so £52,000 of sales with £12,000 of costs still counts as
        £52,000.
      </p>
      <ul>
        <li>Over £50,000 in 2024 to 2025: MTD from 6 April 2026.</li>
        <li>Over £30,000 in 2025 to 2026: MTD from 6 April 2027.</li>
        <li>Over £20,000 in 2026 to 2027: MTD from 6 April 2028.</li>
      </ul>
      <p>
        Wages from a job (PAYE), pensions, savings and dividends don't count
        towards the threshold, though you'll still report them on your tax
        return.
      </p>

      <h2>Things this checker can't see</h2>
      <ul>
        <li>Partnerships aren't part of MTD for Income Tax yet, so this checker is for sole traders and landlords.</li>
        <li>
          Some people can be exempt, for example if age, disability or where
          they live makes using digital tools impractical. You apply to HMRC
          for this.
        </li>
        <li>
          If your income later falls below the threshold, HMRC has rules on
          when you can stop using MTD. Check GOV.UK before you stop.
        </li>
      </ul>
      <p>
        For the official answer, use HMRC's guidance to{" "}
        <a href={GOV.checkEligible}>check if you're eligible</a> and{" "}
        <a href={GOV.qualifyingIncome}>work out your qualifying income</a>.
      </p>
    </ContentLayout>
  );
}
