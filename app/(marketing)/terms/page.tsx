import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/layout/legal-layout";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="July 1, 2026">
      <LegalSection title="1. Acceptance of terms">
        <p>
          By creating an account or purchasing a product on Metafiles, you agree to these terms and our Privacy
          Policy. If you don't agree, please don't use the marketplace.
        </p>
      </LegalSection>
      <LegalSection title="2. Accounts">
        <p>
          You're responsible for maintaining the confidentiality of your account credentials and for all activity
          under your account.
        </p>
      </LegalSection>
      <LegalSection title="3. Purchases and licensing">
        <p>
          Each product listing specifies its license terms. Purchasing a product grants you the rights described
          in that listing's License tab — it does not transfer copyright ownership.
        </p>
      </LegalSection>
      <LegalSection title="4. Creator responsibilities">
        <p>
          Creators listing products on Metafiles must own the rights to what they upload and must accurately
          represent what's included in each listing.
        </p>
      </LegalSection>
      <LegalSection title="5. Prohibited use">
        <p>
          You may not use the marketplace to distribute malicious files, infringe on others' intellectual
          property, or circumvent our review process.
        </p>
      </LegalSection>
      <LegalSection title="6. Termination">
        <p>
          We may suspend or terminate accounts that violate these terms, with notice where practical.
        </p>
      </LegalSection>
      <LegalSection title="7. Limitation of liability">
        <p>
          Metafiles is provided "as is." We're not liable for indirect or consequential damages arising from
          your use of products purchased through the marketplace.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
