import { ContentLayout } from "./ContentLayout";
import { GOV } from "@/config/site";

type Trade = {
  slug: string;
  eyebrow: string;
  title: string;
  lede: string;
  income: string[];
  expenses: string[];
  tips: { heading: string; body: string }[];
};

const TRADES: Record<string, Trade> = {
  "taxi-drivers": {
    slug: "taxi-drivers",
    eyebrow: "For taxi and private hire drivers",
    title: "Bookkeeping and Making Tax Digital for taxi drivers",
    lede: "Fares, tips, app payouts and a car that never stops costing money. Here's what self-employed taxi and private hire drivers should record, and how Making Tax Digital changes things.",
    income: [
      "Fares paid in cash or by card, including tips.",
      "Payouts from ride-hailing apps, before the app's commission is taken off.",
      "Account work invoiced to businesses.",
    ],
    expenses: [
      "Fuel, servicing, repairs, tyres and MOT.",
      "Vehicle insurance, road tax and finance or hire costs.",
      "Licences, badges and medicals.",
      "App, radio circuit or operator fees.",
      "Phone, card machine fees, car cleaning and parking.",
    ],
    tips: [
      {
        heading: "Platforms report to HMRC too",
        body: "If you take jobs through an app, the platform may share your earnings with HMRC, so make sure your records match what the app shows.",
      },
      {
        heading: "Choose your car costs method carefully",
        body: "You can claim actual vehicle costs or use HMRC's flat mileage rates (simplified expenses). Once you use simplified expenses for a vehicle, you have to stick with them for that vehicle.",
      },
    ],
  },
  cleaners: {
    slug: "cleaners",
    eyebrow: "For self-employed cleaners",
    title: "Bookkeeping and Making Tax Digital for cleaners",
    lede: "Regular clients, one-off deep cleans, and a boot full of supplies. Here's what self-employed cleaners should record, and how Making Tax Digital changes things.",
    income: [
      "Regular client payments, in cash or by bank transfer.",
      "One-off and end-of-tenancy cleans.",
      "Work for agencies or letting agents, invoiced as a sole trader.",
    ],
    expenses: [
      "Cleaning products, cloths and consumables.",
      "Equipment such as vacuums and steam cleaners.",
      "Protective clothing and uniforms.",
      "Travel between clients.",
      "Phone, insurance and advertising.",
    ],
    tips: [
      {
        heading: "Invoice regular clients automatically",
        body: "Set up recurring invoices for weekly or monthly clients once, and they appear by themselves (Standard and Unlimited plans).",
      },
      {
        heading: "Keep a note of cash jobs",
        body: "Log cash payments the moment you're paid, so they're not forgotten by the end of the quarter.",
      },
    ],
  },
};

export const TRADE_SLUGS = Object.keys(TRADES);

export function TradePage({ slug }: { slug: string }) {
  const t = TRADES[slug];
  return (
    <ContentLayout
      path={`/for/${t.slug}`}
      eyebrow={t.eyebrow}
      title={t.title}
      lede={t.lede}
      related={[
        { href: "/making-tax-digital/do-i-need-it", label: "Do I need Making Tax Digital? Check your start date" },
        { href: "/making-tax-digital/deadlines", label: "Every MTD deadline, 2026 to 2028" },
        { href: "/free-invoice-app", label: "A free invoice app for UK sole traders" },
      ]}
    >
      <h2>Does Making Tax Digital apply to me?</h2>
      <p>
        It depends on your income from self-employment and property, before
        expenses: over £50,000 brought people in from April 2026, over £30,000
        does from April 2027, and over £20,000 from April 2028.{" "}
        <a href="/making-tax-digital/do-i-need-it">Check your start date</a>.
      </p>

      <h2>Income to record</h2>
      <ul>
        {t.income.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <h2>Common expenses</h2>
      <p>
        These are typical costs for the work. Whether you can claim something
        depends on whether it's wholly for your business, so check HMRC's
        guide to <a href={GOV.expenses}>expenses if you're self-employed</a>.
      </p>
      <ul>
        {t.expenses.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>

      {t.tips.map((tip) => (
        <div key={tip.heading}>
          <h2>{tip.heading}</h2>
          <p>{tip.body}</p>
        </div>
      ))}

      <h2>How Ledgeraa helps</h2>
      <ul>
        <li>Snap a receipt and the details are filled in for you (Standard and Unlimited).</li>
        <li>Log cash jobs as "other income" as soon as they happen (Standard and Unlimited).</li>
        <li>Plain-English notes on every field, so you know what goes where.</li>
        <li>Coming soon: quarterly updates guided in-app, with reminders before each deadline.</li>
      </ul>
      <p>
        Mileage tracking is coming soon. <a href={GOV.simplifiedExpenses}>HMRC's simplified expenses guide</a>{" "}
        explains the flat rates in the meantime.
      </p>
    </ContentLayout>
  );
}
