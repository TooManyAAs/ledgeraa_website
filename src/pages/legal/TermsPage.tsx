import { LegalLayout, otherLegalPages } from "./LegalLayout";
import source from "@/content/legal/terms.md?raw";

export function TermsPage() {
  return (
    <LegalLayout
      path="/terms"
      title="Terms of Service"
      source={source}
      related={otherLegalPages("/terms")}
    />
  );
}
