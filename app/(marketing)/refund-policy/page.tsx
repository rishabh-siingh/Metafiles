import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/layout/legal-layout";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Refund Policy" updated="July 1, 2026">
      <LegalSection title="14-day guarantee">
        <p>
          If a product is broken, significantly misrepresented in its listing, or simply doesn't work for your
          use case, request a refund within 14 days of purchase and we'll process it within 3–5 business days.
        </p>
      </LegalSection>
      <LegalSection title="How to request a refund">
        <p>
          Go to Orders, select the relevant order, and choose "Request refund." Include a short note about the
          issue so we can pass feedback to the creator.
        </p>
      </LegalSection>
      <LegalSection title="Exceptions">
        <p>
          Refunds aren't available for products you've already extensively used in a shipped project, or for
          change-of-mind requests made outside the 14-day window.
        </p>
      </LegalSection>
      <LegalSection title="Course and subscription refunds">
        <p>
          Courses can be refunded within 14 days as long as less than 25% of the content has been completed.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
