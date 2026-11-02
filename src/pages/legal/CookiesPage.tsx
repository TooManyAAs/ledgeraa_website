import { LegalLayout, otherLegalPages } from "./LegalLayout";
import source from "@/content/legal/cookies.md?raw";

export function CookiesPage() {
  return (
    <LegalLayout
      path="/cookies"
      title="Cookie Policy"
      source={source}
      related={otherLegalPages("/cookies")}
    />
  );
}
