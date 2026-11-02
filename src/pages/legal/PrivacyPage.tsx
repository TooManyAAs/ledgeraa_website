import { LegalLayout, otherLegalPages } from "./LegalLayout";
import source from "@/content/legal/privacy.md?raw";

export function PrivacyPage() {
  return (
    <LegalLayout
      path="/privacy"
      title="Privacy Policy"
      source={source}
      related={otherLegalPages("/privacy")}
    />
  );
}
