import { ContentLayout } from "./ContentLayout";
import { GOV } from "@/config/site";

export function FirstQuarterlyUpdatePage() {
  return (
    <ContentLayout
      path="/making-tax-digital/first-quarterly-update"
      eyebrow="MTD guide"
      title="Your first Making Tax Digital quarterly update, step by step"
      lede="A quarterly update is a short summary of your income and expenses for the tax year so far. Here's how to send your first one without the stress."
      related={[
        { href: "/making-tax-digital/deadlines", label: "Every MTD deadline, 2026 to 2028" },
        { href: "/making-tax-digital/hmrc-signed-me-up", label: "HMRC signed me up for MTD: what now?" },
        { href: "/switch-from-spreadsheets", label: "Switching from spreadsheets" },
      ]}
    >
      <h2>Before you start</h2>
      <ul>
        <li>Your Government Gateway user ID and password.</li>
        <li>Software that works with MTD for Income Tax.</li>
        <li>Your income and expenses for the period, with receipts.</li>
      </ul>

      <h2>Step 1: Sign up for Making Tax Digital</h2>
      <p>
        If HMRC hasn't already signed you up, you{" "}
        <a href={GOV.signUp}>sign up on GOV.UK</a> using your Government Gateway
        details. If you have an accountant, they can sign you up instead.
      </p>

      <h2>Step 2: Connect your software to HMRC</h2>
      <p>
        In your software, choose the option to connect to HMRC, sign in with the
        same Government Gateway details, and give it permission. You'll need to
        reconnect every 18 months, and most software reminds you.
      </p>

      <h2>Step 3: Get your records up to date</h2>
      <p>
        Add every sale, invoice and expense for the period. In Ledgeraa you can
        snap receipts, log cash jobs as "other income", and import anything you
        kept in a spreadsheet (receipt scanning, other income and import are on
        Standard and Unlimited).
      </p>

      <h2>Step 4: Check the totals</h2>
      <p>
        Your update is a summary by category: total income, and expenses such
        as materials, travel and phone. Make sure every expense is in the right
        category and nothing is counted twice.
      </p>

      <h2>Step 5: Send it before the 7th</h2>
      <p>
        Review the figures and submit. Updates are due by 7 August, 7 November,
        7 February and 7 May. You don't pay anything when you send an update.
      </p>

      <h2>Made a mistake?</h2>
      <p>
        Each update covers the tax year so far, so you can correct your records
        and the next update will include the right figures. Anything left over
        is sorted out in your tax return.
      </p>

      <h2>Doing it in Ledgeraa</h2>
      <p>
        MTD submissions in Ledgeraa are coming soon. Ledgeraa is pending
        inclusion on HMRC's list of recognised MTD software, and can't send
        updates to HMRC until that's complete. Until then, you can keep your
        records in Ledgeraa ready for when it is. Full step-by-step guidance is
        on{" "}
        <a href={GOV.stepByStep}>GOV.UK</a>.
      </p>
    </ContentLayout>
  );
}
