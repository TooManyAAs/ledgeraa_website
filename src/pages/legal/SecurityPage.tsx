import { LegalLayout, otherLegalPages } from "./LegalLayout";
import source from "@/content/legal/security.md?raw";

export function SecurityPage() {
  return (
    <LegalLayout
      path="/security"
      title="Security at Ledgeraa"
      source={source}
      related={otherLegalPages("/security")}
    />
  );
}
