import { ContentLayout, ContentTable } from "./ContentLayout";
import { GOV, SIGNUP_URL } from "@/config/site";

export function MtdDeadlinesPage() {
  return (
    <ContentLayout
      path="/making-tax-digital/deadlines"
      eyebrow="MTD deadlines"
      title="Making Tax Digital deadlines, 2026 to 2028"
      lede="Every date a sole trader needs for Making Tax Digital for Income Tax: the four quarterly updates, the end-of-year tax return, and when each income threshold starts."
      related={[
        { href: "/making-tax-digital/first-quarterly-update", label: "Your first quarterly update, step by step" },
        { href: "/making-tax-digital/do-i-need-it", label: "Do I need Making Tax Digital? Check your start date" },
        { href: "/making-tax-digital", label: "Making Tax Digital for sole traders, in plain English" },
      ]}
    >
      <h2>Quarterly update deadlines (every tax year)</h2>
      <p>
        With the standard update periods, each update covers the tax year so
        far, and is due on the 7th of the month after the period ends.
      </p>
      <ContentTable
        head={["Update", "Covers", "Due by"]}
        rows={[
          ["1st", "6 April to 5 July", "7 August"],
          ["2nd", "6 April to 5 October", "7 November"],
          ["3rd", "6 April to 5 January", "7 February"],
          ["4th", "6 April to 5 April", "7 May"],
          ["Tax return", "The whole tax year, plus any other income", "31 January the following year"],
        ]}
        caption={
          <>
            You can choose calendar update periods (ending on the last day of
            June, September, December and March) instead. The due dates stay
            the same.{" "}
            <a href={GOV.quarterlyUpdates}>GOV.UK: send quarterly updates</a>
          </>
        }
      />

      <h2>Key dates coming up</h2>
      <ContentTable
        head={["Date", "What happens"]}
        rows={[
          ["7 November 2026", "2nd quarterly update for 2026 to 2027 due (if you joined in April 2026)"],
          ["31 January 2027", "Self Assessment tax return for 2025 to 2026 due, and the tax you owe"],
          ["7 February 2027", "3rd quarterly update for 2026 to 2027 due"],
          ["6 April 2027", "MTD starts for qualifying income over £30,000 in 2025 to 2026"],
          ["7 May 2027", "4th quarterly update for 2026 to 2027 due"],
          ["7 August 2027", "First quarterly update for anyone who joined in April 2027"],
          ["31 January 2028", "First tax return sent through MTD software, for 2026 to 2027"],
          ["6 April 2028", "MTD starts for qualifying income over £20,000 in 2026 to 2027"],
        ]}
      />

      <h2>When do I pay?</h2>
      <p>
        Quarterly updates aren't payments. You still pay your Income Tax by 31
        January, and if you make payments on account, the second one is due by
        31 July, the same as before MTD.
      </p>

      <h2>What if I miss one?</h2>
      <p>
        Because each update covers the year to date, your next update brings
        your figures up to date. HMRC uses a points-based system for late
        submissions under MTD, so it's still worth sending on time. Check the
        current rules on <a href={GOV.useMtd}>GOV.UK</a>.
      </p>

      <h2>Never miss a date</h2>
      <p>
        Ledgeraa can nudge you before every deadline, so nothing sneaks up on
        you. <a href={SIGNUP_URL}>Create a free account</a> and switch on
        reminders.
      </p>
    </ContentLayout>
  );
}
