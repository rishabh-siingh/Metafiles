import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/layout/legal-layout";

export const metadata: Metadata = { title: "License" };

export default function LicensePage() {
  return (
    <LegalLayout title="License Terms" updated="July 1, 2026">
      <LegalSection title="Standard license">
        <p>
          Included with every purchase unless otherwise noted. Covers use in unlimited personal and commercial
          projects for you or one client at a time. You may not resell or redistribute the source files
          themselves.
        </p>
      </LegalSection>
      <LegalSection title="Extended license">
        <p>
          Some creators offer an extended license for use in products you'll resell (templates, themes, SaaS
          products). Check the specific product listing to see if this option is available.
        </p>
      </LegalSection>
      <LegalSection title="What's never allowed">
        <p>
          Reselling or sublicensing the original files as-is, claiming authorship of unmodified work, or using
          purchased fonts/assets to create a competing marketplace listing.
        </p>
      </LegalSection>
      <LegalSection title="Per-product terms">
        <p>
          Individual creators may specify additional terms on their listing page. Where a conflict exists, the
          listing's stated terms take precedence over this general summary.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
