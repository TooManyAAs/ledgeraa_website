import { LegalLayout, otherLegalPages } from "./LegalLayout";
import source from "@/content/legal/accessibility.md?raw";

export function AccessibilityPage() {
  return (
    <LegalLayout
      path="/accessibility"
      title="Accessibility Statement"
      source={source}
      related={otherLegalPages("/accessibility")}
    />
  );
}
