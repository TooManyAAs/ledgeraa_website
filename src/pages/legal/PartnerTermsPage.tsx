import { LegalLayout, otherLegalPages } from "./LegalLayout";
import source from "@/content/legal/partner-terms.md?raw";

export function PartnerTermsPage() {
  return (
    <LegalLayout
      path="/partner-terms"
      title="Partner Terms"
      source={source}
      related={otherLegalPages("/partner-terms")}
    />
  );
}
