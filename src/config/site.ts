/**
 * Site config - single source of truth for external URLs, plan data, and nav.
 *
 * The marketing site is a separate origin from the app; every "sign up" / "get
 * started" / plan CTA sends the user to the real app's sign-up flow. Keep the
 * host in ONE place (`APP_ORIGIN`) so dev→prod is a one-line change.
 *
 * Plan data is copied VERBATIM from the app's onboarding source of truth
 * (`ledgeraa_fe/src/pages/onboarding/copy.ts`) so the marketing site can never
 * drift from what a user actually sees on sign-up - EXCEPT the £4.99 tier's
 * display name, which is intentionally rebranded here (see `PLANS`).
 */

/**
 * Where the live app lives. In dev the app runs on :3000 (see ledgeraa_fe
 * vite.config). Override at build time with VITE_APP_ORIGIN for staging/prod.
 */
export const APP_ORIGIN: string =
  import.meta.env.VITE_APP_ORIGIN ?? "http://localhost:3000";

/** Sign-up entry point. The app redirects /auth/sign-up → /onboarding. */
export const SIGNUP_URL = `${APP_ORIGIN}/auth/sign-up`;
/** Returning users. */
export const SIGNIN_URL = `${APP_ORIGIN}/auth/sign-in`;

/** Support/contact inbox. Single source of truth - Footer and Contact page both use this. */
export const HELLO_EMAIL = "hello@ledgeraa.com";

/** External resources surfaced in Support + Footer. Keep in one place so they can't drift. */
export const HMRC_SELF_ASSESSMENT_URL =
  "https://www.gov.uk/self-assessment-tax-returns";
export const FIND_ACCOUNTANT_URL =
  "https://www.icaew.com/about-icaew/find-a-chartered-accountant";

/** GOV.UK Making Tax Digital guidance, linked from the MTD pages. */
export const GOV = {
  useMtd: "https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax",
  checkEligible:
    "https://www.gov.uk/guidance/check-if-youre-eligible-for-making-tax-digital-for-income-tax",
  qualifyingIncome:
    "https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax",
  quarterlyUpdates:
    "https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates",
  signUp:
    "https://www.gov.uk/guidance/sign-up-your-business-for-making-tax-digital-for-income-tax",
  findSoftware:
    "https://www.gov.uk/guidance/find-software-that-works-with-making-tax-digital-for-income-tax",
  stepByStep:
    "https://www.gov.uk/government/collections/making-tax-digital-for-income-tax-for-businesses-step-by-step",
  expenses: "https://www.gov.uk/expenses-if-youre-self-employed",
  simplifiedExpenses: "https://www.gov.uk/simpler-income-tax-simplified-expenses",
} as const;

/** Primary nav links (marketing routes are same-origin; app links are absolute).
 *  Contact + Support live in the footer; the top nav stays lean. */
export const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/#what-you-get", label: "Features" },
  { href: "/making-tax-digital", label: "Making Tax Digital" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Help" },
];

// ─── Plans ───────────────────────────────────────────────────────────────────

export type PlanId = "free" | "standard" | "unlimited";

export interface MarketingPlan {
  id: PlanId;
  /** Display name on the marketing site. */
  name: string;
  /** "£0" | "£4.99" | "£7.99" */
  priceMain: string;
  /** "/mo" - omitted for Free. */
  priceCadence?: string;
  tagline: string;
  /** Positive entitlements only (verbatim from the app). */
  features: string[];
  /** Honest limitation, rendered muted without a check. */
  note?: string;
  /** Highlight as the recommended tier ("Most popular"). */
  featured?: boolean;
  /** CTA label on the plan card. */
  ctaLabel: string;
}

/**
 * The three real tiers. Names/prices/features track the app's copy.ts, with the
 * middle tier rebranded "Sole Trader's Best Friend" → **Standard** (approved).
 * To change the middle-tier name, edit ONLY the `name` below.
 */
export const PLANS: readonly MarketingPlan[] = [
  {
    id: "free",
    name: "Free",
    priceMain: "£0",
    tagline: "Unlimited invoices and bookkeeping",
    features: [
      "Unlimited PDF invoices",
      "Manual expense tracking",
      "Export your data any time",
    ],
    note: "Invoices carry a small Ledgeraa watermark. Automated receipt reading, “other income” and MTD submissions aren’t on Free.",
    ctaLabel: "Start free",
  },
  {
    id: "standard",
    name: "Standard",
    priceMain: "£4.99",
    priceCadence: "/mo",
    tagline: "MTD, receipt scanning, custom invoice templates, and more",
    features: [
      "3 customisable PDF invoice templates",
      "Automated receipt reading, up to 2 scans per expense",
      "“Other income” declaration",
      "Complete MTD compatibility",
    ],
    featured: true,
    ctaLabel: "Get Standard",
  },
  {
    id: "unlimited",
    name: "Unlimited",
    priceMain: "£7.99",
    priceCadence: "/mo",
    tagline: "Every limit removed, for traders going full throttle.",
    features: [
      "Everything in Standard, plus:",
      "Unlimited receipt scanning",
      "VAT support for VAT-registered sole traders",
      "Mileage (coming soon)",
    ],
    ctaLabel: "Go Unlimited",
  },
] as const;

/**
 * Comparison-table model - feature rows × plan columns. A cell is either a
 * boolean (✓ / -) or a short string. Derived from PLANS; kept explicit so the
 * table reads cleanly and stays defensible.
 */
export interface CompareRow {
  label: string;
  free: boolean | string;
  standard: boolean | string;
  unlimited: boolean | string;
}

export const COMPARE_ROWS: readonly CompareRow[] = [
  { label: "Unlimited PDF invoices", free: true, standard: true, unlimited: true },
  {
    label: "Invoice templates",
    free: "1 (watermarked)",
    standard: "3, customisable",
    unlimited: "3, customisable",
  },
  { label: "Manual expense tracking", free: true, standard: true, unlimited: true },
  {
    label: "Automated receipt scanning",
    free: false,
    standard: "Up to 2 / expense",
    unlimited: "Unlimited",
  },
  { label: "Recurring invoices and expenses", free: false, standard: true, unlimited: true },
  { label: "“Other income” declaration", free: false, standard: true, unlimited: true },
  { label: "Full MTD / HMRC submission", free: false, standard: true, unlimited: true },
  { label: "VAT (for VAT-registered sole traders)", free: false, standard: false, unlimited: true },
  { label: "Import your data", free: true, standard: true, unlimited: true },
  { label: "Export your data", free: true, standard: true, unlimited: true },
  { label: "Coming Soon: Mileage", free: false, standard: false, unlimited: true },
  { label: "Coming Soon: Bank Account Connection", free: false, standard: false, unlimited: true },
  { label: "Coming Soon: Accountant Access", free: false, standard: true, unlimited: true },
] as const;
