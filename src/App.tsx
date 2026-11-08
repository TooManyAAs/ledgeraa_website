import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";
import { JoinPage } from "./pages/JoinPage";
import { ContactPage } from "./pages/ContactPage";
import { SupportPage } from "./pages/SupportPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MtdHubPage } from "./pages/content/MtdHubPage";
import { MtdCheckerPage } from "./pages/content/MtdCheckerPage";
import { MtdDeadlinesPage } from "./pages/content/MtdDeadlinesPage";
import { FirstQuarterlyUpdatePage } from "./pages/content/FirstQuarterlyUpdatePage";
import { HmrcSignedMeUpPage } from "./pages/content/HmrcSignedMeUpPage";
import { FreeInvoiceAppPage } from "./pages/content/FreeInvoiceAppPage";
import { SwitchFromSpreadsheetsPage } from "./pages/content/SwitchFromSpreadsheetsPage";
import { ComparePage, COMPARE_SLUGS } from "./pages/content/ComparePage";
import { TradePage, TRADE_SLUGS } from "./pages/content/TradePage";
import { ScrollToHash } from "./ScrollToHash";
import { LegalLayout } from "./pages/legal/LegalLayout";
import { LEGAL_PAGES } from "./pages/legal/legalPages";

// New routes also need an entry in src/config/seo-pages.json (title,
// description, sitemap) or the build won't write an HTML file for them.
export function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/making-tax-digital" element={<MtdHubPage />} />
        <Route path="/making-tax-digital/do-i-need-it" element={<MtdCheckerPage />} />
        <Route path="/making-tax-digital/deadlines" element={<MtdDeadlinesPage />} />
        <Route
          path="/making-tax-digital/first-quarterly-update"
          element={<FirstQuarterlyUpdatePage />}
        />
        <Route path="/making-tax-digital/hmrc-signed-me-up" element={<HmrcSignedMeUpPage />} />
        <Route path="/free-invoice-app" element={<FreeInvoiceAppPage />} />
        <Route path="/switch-from-spreadsheets" element={<SwitchFromSpreadsheetsPage />} />
        {COMPARE_SLUGS.map((slug) => (
          <Route key={slug} path={`/compare/${slug}`} element={<ComparePage slug={slug} />} />
        ))}
        {TRADE_SLUGS.map((slug) => (
          <Route key={slug} path={`/for/${slug}`} element={<TradePage slug={slug} />} />
        ))}
        <Route path="/join" element={<JoinPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/support" element={<SupportPage />} />
        {LEGAL_PAGES.map((page) => (
          <Route key={page.href} path={page.href} element={<LegalLayout page={page} />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
