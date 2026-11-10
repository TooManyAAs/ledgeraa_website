// Single source of truth for external URLs, plan data and nav.

/** The app. Defaults to the local FE dev server; set APP_ORIGIN at build time. */
export const APP_ORIGIN: string = import.meta.env.APP_ORIGIN ?? "http://localhost:3000";

export const SIGNUP_URL = `${APP_ORIGIN}/auth/sign-up`;
export const SIGNIN_URL = `${APP_ORIGIN}/auth/sign-in`;

export const HELLO_EMAIL = "hello@ledgeraa.com";

export const HMRC_SELF_ASSESSMENT_URL =
  "https://www.gov.uk/self-assessment-tax-returns";
export const FIND_ACCOUNTANT_URL =
  "https://www.icaew.com/about-icaew/find-a-chartered-accountant";

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

export const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/#what-you-get", label: "Features" },
  { href: "/making-tax-digital", label: "Making Tax Digital" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Help" },
];

/**
 * Plans. Features and limits must match the app's sign-up copy and entitlements
 * (ledgeraa_frontend_1/src/pages/onboarding/copy.ts). Taglines are marketing-only.
 */
export type PlanId = "free" | "standard" | "unlimited";

export interface MarketingPlan {
  id: PlanId;
  name: string;
  priceMain: string;
  priceCadence?: string;
  tagline: string;
  features: string[];
  /** Limitation, rendered muted without a check. */
  note?: string;
  featured?: boolean;
  ctaLabel: string;
}

export const PLANS: readonly MarketingPlan[] = [
  {
    id: "free",
    name: "Free",
    priceMain: "£0",
    tagline: "To get your records started.",
    features: [
      "Unlimited PDF invoices",
      "Manual expense tracking",
      "Sales and other income records",
      "Export your data at any time",
    ],
    note: "Free has one invoice template, and invoices carry a small Ledgeraa watermark. Not on Free: your own logo, receipt scanning, imports and recurring records, adding contributions and contacts, VAT details, custom record IDs, MTD submissions.",
    ctaLabel: "Start free",
  },
  {
    id: "standard",
    name: "Standard",
    priceMain: "£4.99",
    priceCadence: "/mo",
    tagline: "For regular record keeping and tax.",
    features: [
      "3 invoice templates, your own logo, no watermark",
      "Receipt scanning, up to 2 scans per expense",
      "Imports and recurring records",
      "Contributions and contacts",
      "Making Tax Digital submissions to HMRC (coming soon)",
    ],
    note: "Not on Standard: VAT details, custom record IDs.",
    featured: true,
    ctaLabel: "Get Standard",
  },
  {
    id: "unlimited",
    name: "Unlimited",
    priceMain: "£7.99",
    priceCadence: "/mo",
    tagline: "For VAT and larger volumes.",
    features: [
      "Everything in Standard, plus:",
      "VAT details",
      "Custom record IDs",
      "Up to 20 receipt scans per expense",
      "Up to 1,000 line items per invoice",
      "Mileage (coming soon)",
    ],
    ctaLabel: "Go Unlimited",
  },
] as const;

/** Comparison table rows. A "Coming Soon: " label prefix renders as a badge. */
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
    unlimited: "Up to 20 / expense",
  },
  { label: "Recurring invoices and expenses", free: false, standard: true, unlimited: true },
  { label: "“Other income” declaration", free: true, standard: true, unlimited: true },
  { label: "Contributions and contacts", free: false, standard: true, unlimited: true },
  { label: "VAT details", free: false, standard: false, unlimited: true },
  { label: "Custom record IDs", free: false, standard: false, unlimited: true },
  { label: "Coming Soon: MTD submissions to HMRC", free: false, standard: true, unlimited: true },
  { label: "Coming Soon: VAT returns (VAT-registered sole traders)", free: false, standard: false, unlimited: true },
  { label: "Invoice line items", free: "Up to 20", standard: "Up to 100", unlimited: "Up to 1,000" },
  { label: "Import your data", free: false, standard: true, unlimited: true },
  { label: "Export your data", free: true, standard: true, unlimited: true },
  { label: "Coming Soon: Mileage", free: false, standard: false, unlimited: true },
  { label: "Coming Soon: Bank Account Connection", free: false, standard: false, unlimited: true },
  { label: "Coming Soon: Accountant Access", free: false, standard: true, unlimited: true },
] as const;
