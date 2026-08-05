import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/layout/legal-layout";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 1, 2026">
      <LegalSection title="1. Information we collect">
        <p>
          We collect account information you provide directly (name, email, payment details processed by our
          payment provider), along with usage data such as pages viewed and products purchased, to operate and
          improve the marketplace.
        </p>
      </LegalSection>
      <LegalSection title="2. How we use your information">
        <p>
          We use your information to process orders, deliver digital files, provide customer support, and send
          transactional emails. We do not sell your personal information to third parties.
        </p>
      </LegalSection>
      <LegalSection title="3. Data retention">
        <p>
          Order records are retained for as long as your account is active, and for a reasonable period afterward
          to comply with tax and accounting obligations.
        </p>
      </LegalSection>
      <LegalSection title="4. Your rights">
        <p>
          You may request a copy of your data, ask us to correct inaccuracies, or request deletion of your
          account by contacting privacy@metafiles.com.
        </p>
      </LegalSection>
      <LegalSection title="5. Cookies">
        <p>
          We use essential cookies to keep you signed in and remember your cart, and optional analytics cookies
          to understand how the marketplace is used. You can manage cookie preferences in your browser settings.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
