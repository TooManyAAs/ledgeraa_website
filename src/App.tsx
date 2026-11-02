import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";
import { JoinPage } from "./pages/JoinPage";
import { ContactPage } from "./pages/ContactPage";
import { SupportPage } from "./pages/SupportPage";
import { TermsPage } from "./pages/legal/TermsPage";
import { CookiesPage } from "./pages/legal/CookiesPage";
import { PrivacyPage } from "./pages/legal/PrivacyPage";
import { DataProcessingPage } from "./pages/legal/DataProcessingPage";
import { SubProcessorsPage } from "./pages/legal/SubProcessorsPage";
import { SecurityPage } from "./pages/legal/SecurityPage";
import { AccessibilityPage } from "./pages/legal/AccessibilityPage";
import { PartnerTermsPage } from "./pages/legal/PartnerTermsPage";
import { PlaygroundPage } from "./playground/PlaygroundPage";
import { SectionsPage } from "./playground/SectionsPage";
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
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/data-processing" element={<DataProcessingPage />} />
        <Route path="/sub-processors" element={<SubProcessorsPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/partner-terms" element={<PartnerTermsPage />} />
        {/* Dev-only surfaces: not registered in production builds. */}
        {import.meta.env.DEV && (
          <>
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/sections" element={<SectionsPage />} />
          </>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
