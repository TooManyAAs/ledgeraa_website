import { ContentLayout, ContentTable } from "./ContentLayout";
import { GOV } from "@/config/site";

export function MtdHubPage() {
  return (
    <ContentLayout
      path="/making-tax-digital"
      eyebrow="Making Tax Digital"
      title="Making Tax Digital for sole traders, in plain English"
      lede="Making Tax Digital for Income Tax changes how most sole traders report to HMRC. Here's who has to join, when, and what you actually have to do."
      related={[
        { href: "/making-tax-digital/do-i-need-it", label: "Do I need Making Tax Digital? Check your start date" },
        { href: "/making-tax-digital/deadlines", label: "Every MTD deadline, 2026 to 2028" },
        { href: "/making-tax-digital/first-quarterly-update", label: "Your first quarterly update, step by step" },
        { href: "/making-tax-digital/hmrc-signed-me-up", label: "HMRC signed me up for MTD: what now?" },
        { href: "/switch-from-spreadsheets", label: "Switching from spreadsheets" },
      ]}
    >
      <h2>What is Making Tax Digital for Income Tax?</h2>
      <p>
        Making Tax Digital (MTD) for Income Tax is HMRC's new way for sole
        traders and landlords to report their income. Instead of one tax return
        a year, you keep digital records as you go, send HMRC a short summary
        every three months, and finish the year with a tax return sent from
        your software.
      </p>
      <p>
        You still pay your tax at the usual times. The quarterly updates are
        summaries of your income and expenses, not four tax bills.
      </p>

      <h2>Who has to join, and when</h2>
      <p>
        It depends on your <strong>qualifying income</strong>: your total income
        from self-employment and property, <em>before</em> expenses. HMRC looks
        at an earlier tax year to decide when you start.
      </p>
      <ContentTable
        head={["If your qualifying income was", "In the tax year", "You use MTD from"]}
        rows={[
          ["Over £50,000", "2024 to 2025", "6 April 2026"],
          ["Over £30,000", "2025 to 2026", "6 April 2027"],
          ["Over £20,000", "2026 to 2027", "6 April 2028"],
        ]}
        caption={
          <>
            Source:{" "}
            <a href={GOV.checkEligible}>GOV.UK, check if you're eligible for MTD for Income Tax</a>
          </>
        }
      />
      <p>
        Not sure where you stand?{" "}
        <a href="/making-tax-digital/do-i-need-it">Use our MTD threshold checker</a>{" "}
        or read HMRC's guide to{" "}
        <a href={GOV.qualifyingIncome}>working out your qualifying income</a>.
        Partnerships don't need to use MTD for Income Tax yet, and some people
        can apply for an exemption if using digital tools isn't practical for
        them.
      </p>

      <h2>What you have to do</h2>
      <ol>
        <li>
          <strong>Keep digital records</strong> of your business income and
          expenses in software that works with MTD. Paper records on their own
          won't do.
        </li>
        <li>
          <strong>Send a quarterly update</strong> to HMRC four times a year, by
          7 August, 7 November, 7 February and 7 May.{" "}
          <a href="/making-tax-digital/deadlines">See every deadline</a>.
        </li>
        <li>
          <strong>Submit your tax return</strong> through your software by 31
          January after the tax year ends, including any other income such as
          savings or dividends.
        </li>
      </ol>
      <p>
        HMRC doesn't provide its own software for this. You'll need a product
        from its list of{" "}
        <a href={GOV.findSoftware}>software that works with MTD for Income Tax</a>
        , then sign up and connect it to HMRC.
      </p>

      <h2>Can I keep my spreadsheet?</h2>
      <p>
        You can, as long as it's connected to HMRC through compatible software
        (often called bridging software). Retyping figures by hand into
        another program doesn't meet the rules. If you'd rather leave the
        spreadsheet behind, Ledgeraa imports Excel and CSV files for free.{" "}
        <a href="/switch-from-spreadsheets">Here's how switching works</a>.
      </p>

      <h2>How Ledgeraa helps</h2>
      <ul>
        <li>Plain-English notes on every important field, so you know what each box means.</li>
        <li>Snap a receipt and the details are filled in for you.</li>
        <li>A running tax estimate, so the January bill isn't a surprise.</li>
        <li>Reminders before every deadline, if you want them.</li>
        <li>
          Quarterly updates and your tax return, guided in-app. Ledgeraa is
          pending inclusion on HMRC's list of recognised MTD software;
          submissions go live as soon as recognition is complete.
        </li>
      </ul>
      <p>
        MTD is included on the Standard plan at £4.99 a month.{" "}
        <a href="/pricing">See pricing</a>.
      </p>
    </ContentLayout>
  );
}
