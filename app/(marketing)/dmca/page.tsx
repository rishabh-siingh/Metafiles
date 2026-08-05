import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/layout/legal-layout";

export const metadata: Metadata = { title: "DMCA Policy" };

export default function DmcaPage() {
  return (
    <LegalLayout title="DMCA Policy" updated="July 1, 2026">
      <LegalSection title="Reporting infringement">
        <p>
          If you believe a listing on Metafiles infringes your copyright, send a notice to
          dmca@metafiles.com including a description of the work, the URL of the listing, and a
          statement of good faith belief that the use is unauthorized.
        </p>
      </LegalSection>
      <LegalSection title="Our process">
        <p>
          We review valid notices within 3 business days and remove or disable access to the reported listing
          pending investigation. The listing creator is notified and may submit a counter-notice.
        </p>
      </LegalSection>
      <LegalSection title="Repeat infringers">
        <p>
          Accounts with multiple substantiated infringement claims are permanently removed from the marketplace.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
