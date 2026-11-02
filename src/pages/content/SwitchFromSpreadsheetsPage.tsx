import { ContentLayout } from "./ContentLayout";
import { GOV } from "@/config/site";

export function SwitchFromSpreadsheetsPage() {
  return (
    <ContentLayout
      path="/switch-from-spreadsheets"
      eyebrow="Easy switching"
      title="Switch from spreadsheets to plain-English bookkeeping"
      lede="Most sole traders still keep their books in Excel or Google Sheets. Here's how to bring those records into Ledgeraa, and what Making Tax Digital means for spreadsheets."
      related={[
        { href: "/making-tax-digital", label: "Making Tax Digital for sole traders" },
        { href: "/free-invoice-app", label: "A free invoice app for UK sole traders" },
        { href: "/making-tax-digital/first-quarterly-update", label: "Your first quarterly update, step by step" },
      ]}
    >
      <h2>Do spreadsheets still work under Making Tax Digital?</h2>
      <p>
        Only if they're connected to HMRC through compatible software, often
        called bridging software. Copying figures by hand from a spreadsheet
        into another program doesn't meet the rules: the data has to move
        digitally. HMRC lists both kinds of product in its{" "}
        <a href={GOV.findSoftware}>software finder</a>.
      </p>

      <h2>Moving your records into Ledgeraa</h2>
      <ol>
        <li>Export your invoices, sales or expenses from Excel or Google Sheets as a CSV or Excel file.</li>
        <li>Upload the file in Ledgeraa.</li>
        <li>Match your columns (date, description, amount, category) to ours, then import.</li>
      </ol>
      <p>
        Importing is free on every plan, including Free, and you can export
        everything again any time, in any date range.
      </p>

      <h2>Why switch at all?</h2>
      <ul>
        <li>Snap a receipt instead of typing it in (Standard and Unlimited).</li>
        <li>Invoices, expenses and other income in one place, ready for your return.</li>
        <li>A running tax estimate, rather than a surprise in January.</li>
        <li>No broken formulas or totals drifting out of line.</li>
      </ul>
    </ContentLayout>
  );
}
