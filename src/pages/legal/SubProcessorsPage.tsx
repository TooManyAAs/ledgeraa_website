import { LegalLayout, otherLegalPages } from "./LegalLayout";
import source from "@/content/legal/sub-processors.md?raw";

export function SubProcessorsPage() {
  return (
    <LegalLayout
      path="/sub-processors"
      title="Sub-processors"
      source={source}
      related={otherLegalPages("/sub-processors")}
    />
  );
}
