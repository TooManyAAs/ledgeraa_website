import { LegalLayout, otherLegalPages } from "./LegalLayout";
import source from "@/content/legal/data-processing.md?raw";

export function DataProcessingPage() {
  return (
    <LegalLayout
      path="/data-processing"
      title="Data Processing Agreement"
      source={source}
      related={otherLegalPages("/data-processing")}
    />
  );
}
