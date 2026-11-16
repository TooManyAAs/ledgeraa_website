import { ContentLayout, ContentTable } from "./ContentLayout";

type Competitor = {
  slug: string;
  name: string;
  intro: string;
  price: string;
  free: string;
  mtd: string;
  vat: string;
  bank: string;
  receipts: string;
  stronger: string[];
  sources: { label: string; href: string }[];
};

const LEDGERAA = {
  price: "Free; Standard £4.99 a month; Unlimited £7.99 a month",
  free: "Yes: unlimited invoices and manual expenses (no MTD)",
  mtd: "Coming soon, on Standard and Unlimited (HMRC recognition pending)",
  vat: "VAT returns coming soon, on Unlimited",
  bank: "Coming soon",
  receipts: "Standard: up to 2 scans per expense. Unlimited: up to 20",
};

const COMPETITORS: Record<string, Competitor> = {
  "sage-sole-trader": {
    slug: "sage-sole-trader",
    name: "Sage Sole Trader",
    intro:
      "Sage is one of the UK's oldest accounting brands, and Sage Sole Trader is its app for self-employed people who aren't VAT-registered.",
    price: "Free plan; Sole Trader plan £7 a month (excl. VAT) after 3 months free",
    free: "Yes, for non-VAT-registered sole traders",
    mtd: "HMRC-recognised",
    vat: "Not on Sole Trader plans; Sage points VAT-registered users to Sage Accounting",
    bank: "Yes (Finder reports the free plan connects to one bank account)",
    receipts: "Yes",
    stronger: [
      "It's HMRC-recognised today, and its free plan includes MTD submissions.",
      "Bank feeds are available now.",
      "CIS features are included in the £7 plan from April 2026, which matters for construction subcontractors.",
    ],
    sources: [
      { label: "Sage: MTD software for sole traders", href: "https://www.sage.com/en-gb/making-tax-digital/sole-trader/" },
      { label: "Finder: best MTD software for sole traders", href: "https://www.finder.com/uk/business-banking/making-tax-digital/best-making-tax-digital-software-for-sole-traders" },
    ],
  },
  "clear-books": {
    slug: "clear-books",
    name: "Clear Books",
    intro:
      "Clear Books is UK accounting software that has run since 2008, with a free Making Tax Digital plan for sole traders and landlords.",
    price: "Free MTD plan; paid plans from £5 a month",
    free: "Yes: MTD quarterly updates, no transaction limits, CIS included",
    mtd: "HMRC-recognised",
    vat: "Paid plans",
    bank: "Check Clear Books' site",
    receipts: "Check Clear Books' site",
    stronger: [
      "It's HMRC-recognised today, and MTD quarterly updates are free.",
      "CIS support is included on the free plan.",
      "It has covered VAT-registered businesses for years, from £5 a month.",
    ],
    sources: [
      { label: "Clear Books: free MTD software", href: "https://clearbooks.co.uk/free-mtd-software/" },
    ],
  },
  freeagent: {
    slug: "freeagent",
    name: "FreeAgent",
    intro:
      "FreeAgent is full accounting software for freelancers and small businesses, and comes free with some UK business bank accounts.",
    price: "Free with a NatWest, RBS, Ulster Bank or Mettle account; otherwise from about £19 a month for sole traders",
    free: "Only through those bank accounts",
    mtd: "HMRC-recognised: quarterly updates and final declaration",
    vat: "Yes",
    bank: "Yes, through Open Banking",
    receipts: "Check FreeAgent's site",
    stronger: [
      "It's HMRC-recognised today and files the full tax return.",
      "Bank feeds and automatic categorising are available now.",
      "If you already bank with NatWest, RBS, Ulster Bank or Mettle, it can cost you nothing.",
    ],
    sources: [
      { label: "Finder: best MTD software for sole traders", href: "https://www.finder.com/uk/business-banking/making-tax-digital/best-making-tax-digital-software-for-sole-traders" },
      { label: "MTD.digital: HMRC-recognised MTD software list", href: "https://mtd.digital/mtd-income-tax/hmrc-recognised-mtd-software-list/" },
    ],
  },
  coconut: {
    slug: "coconut",
    name: "Coconut",
    intro:
      "Coconut is a tax and bookkeeping app built for sole traders and landlords, with a running Income Tax and National Insurance estimate.",
    price: "14-day free trial; see Coconut's pricing page for plan prices",
    free: "Free for 2 years for eligible new Zempler bank users",
    mtd: "HMRC-recognised",
    vat: "Check Coconut's site",
    bank: "Yes, through Open Banking",
    receipts: "Yes",
    stronger: [
      "It's HMRC-recognised today.",
      "Bank connections are available now.",
      "It offers bridging software if you want to keep your spreadsheet.",
    ],
    sources: [
      { label: "Coconut: MTD for sole traders", href: "https://www.getcoconut.com/mtd-software/sole-traders" },
    ],
  },
};

export const COMPARE_SLUGS = Object.keys(COMPETITORS);

export function ComparePage({ slug }: { slug: string }) {
  const c = COMPETITORS[slug];
  return (
    <ContentLayout
      path={`/compare/${c.slug}`}
      eyebrow="Compare"
      title={`Ledgeraa vs ${c.name}`}
      lede={`An honest look at how Ledgeraa and ${c.name} compare for UK sole traders, including where ${c.name} is the better choice.`}
      updated="2 November 2026"
      related={COMPARE_SLUGS.filter((s) => s !== slug)
        .map((s) => ({ href: `/compare/${s}`, label: `Ledgeraa vs ${COMPETITORS[s].name}` }))
        .concat({ href: "/pricing", label: "Ledgeraa pricing" })}
    >
      <p>{c.intro}</p>

      <h2>At a glance</h2>
      <ContentTable
        head={["", "Ledgeraa", c.name]}
        rows={[
          ["Price", LEDGERAA.price, c.price],
          ["Free option", LEDGERAA.free, c.free],
          ["Making Tax Digital", LEDGERAA.mtd, c.mtd],
          ["VAT", LEDGERAA.vat, c.vat],
          ["Bank connection", LEDGERAA.bank, c.bank],
          ["Receipt scanning", LEDGERAA.receipts, c.receipts],
        ]}
        caption={`${c.name} details checked on 1 November 2026 from the sources below. Prices and features change, so check their site before you decide.`}
      />

      <h2>Where {c.name} is stronger</h2>
      <ul>
        {c.stronger.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h2>Where Ledgeraa is different</h2>
      <ul>
        <li>Plain-English notes on every important field, written for people who aren't accountants.</li>
        <li>One honest price: £4.99 a month for Standard, with no first-year discount that doubles later.</li>
        <li>"Other income" in one place, including cash jobs, rent and foreign property.</li>
        <li>Excel and CSV import on Standard and Unlimited, and export whenever you like on every plan.</li>
      </ul>

      <h2>Which should you choose?</h2>
      <p>
        If you need to send MTD updates through HMRC-recognised software right
        now, or you need bank feeds today, {c.name} is the safer choice:
        Ledgeraa's MTD submissions are coming soon, once HMRC recognition is
        complete. If you want the simplest,
        plain-English way to keep your books ahead of Making Tax Digital,
        start on Ledgeraa's Free plan and see how it feels.
      </p>

      <h2>Sources</h2>
      <ul>
        {c.sources.map((s) => (
          <li key={s.href}>
            <a href={s.href} rel="noopener">{s.label}</a>
          </li>
        ))}
      </ul>
    </ContentLayout>
  );
}
