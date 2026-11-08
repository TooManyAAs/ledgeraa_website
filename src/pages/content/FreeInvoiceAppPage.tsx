import { ContentLayout, ContentTable } from "./ContentLayout";

export function FreeInvoiceAppPage() {
  return (
    <ContentLayout
      path="/free-invoice-app"
      eyebrow="Free invoicing"
      title="A free invoice app for UK sole traders"
      lede="Send as many professional PDF invoices as you like, free, and see at a glance who has paid. Your records stay in one place, ready for when Ledgeraa’s MTD submissions arrive."
      ctaHeading="Send your first invoice in minutes."
      ctaBody="No card, no trial timer. Free is free, forever."
      related={[
        { href: "/pricing", label: "Compare Free, Standard and Unlimited" },
        { href: "/switch-from-spreadsheets", label: "Switching from spreadsheets" },
        { href: "/making-tax-digital", label: "Making Tax Digital for sole traders" },
      ]}
    >
      <h2>What you get on the Free plan</h2>
      <ul>
        <li>Unlimited PDF invoices, ready to email or print.</li>
        <li>Plain-English notes on every field, so nothing on the invoice is guesswork.</li>
        <li>A clear view of what's been paid and what's still owed.</li>
        <li>Manual expense tracking.</li>
        <li>Export your data any time.</li>
      </ul>
      <p>
        Free invoices carry a small Ledgeraa watermark. No card is needed to
        start.
      </p>

      <h2>When to upgrade</h2>
      <ContentTable
        head={["", "Free", "Standard, £4.99 a month"]}
        rows={[
          ["PDF invoices", "Unlimited", "Unlimited"],
          ["Invoice templates", "1, watermarked", "3, customisable"],
          ["Recurring invoices and expenses", "No", "Yes"],
          ["Receipt scanning", "No", "Up to 2 scans per expense"],
          ["Import from Excel or CSV", "No", "Yes"],
          ["Making Tax Digital submissions", "No", "Coming soon"],
        ]}
        caption={<a href="/pricing">Full plan comparison</a>}
      />

      <h2>What to put on an invoice</h2>
      <p>As a sole trader, a clear invoice usually includes:</p>
      <ul>
        <li>Your name (or trading name) and contact details.</li>
        <li>Your customer's name and address.</li>
        <li>A unique invoice number and the date.</li>
        <li>What you did or sold, with the date of the work, and the amount.</li>
        <li>The total due and how to pay you.</li>
        <li>If you're VAT-registered, your VAT number and the VAT charged.</li>
      </ul>
      <p>Ledgeraa lays all of this out for you, so every invoice looks the part.</p>
    </ContentLayout>
  );
}
