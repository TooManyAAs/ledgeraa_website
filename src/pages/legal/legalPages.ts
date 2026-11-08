import terms from "@/content/legal/terms.md?raw";
import privacy from "@/content/legal/privacy.md?raw";
import cookies from "@/content/legal/cookies.md?raw";
import dataProcessing from "@/content/legal/data-processing.md?raw";
import subProcessors from "@/content/legal/sub-processors.md?raw";
import security from "@/content/legal/security.md?raw";
import accessibility from "@/content/legal/accessibility.md?raw";
import partnerTerms from "@/content/legal/partner-terms.md?raw";

export type LegalPage = { href: string; label: string; title: string; source: string };

/** Every legal page, in display order: drives the routes, the footer and the cross-links. */
export const LEGAL_PAGES: LegalPage[] = [
  { href: "/terms", label: "Terms of Service", title: "Terms of Service", source: terms },
  { href: "/privacy", label: "Privacy Policy", title: "Privacy Policy", source: privacy },
  { href: "/cookies", label: "Cookie Policy", title: "Cookie Policy", source: cookies },
  { href: "/data-processing", label: "Data Processing Agreement", title: "Data Processing Agreement", source: dataProcessing },
  { href: "/sub-processors", label: "Sub-processors", title: "Sub-processors", source: subProcessors },
  { href: "/security", label: "Security", title: "Security at Ledgeraa", source: security },
  { href: "/accessibility", label: "Accessibility", title: "Accessibility Statement", source: accessibility },
  { href: "/partner-terms", label: "Partner Terms", title: "Partner Terms", source: partnerTerms },
];
