import type { Metadata } from "next";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const metadata: Metadata = { title: "FAQ" };

const faqGroups = [
  {
    title: "Buying",
    items: [
      { q: "What happens after I buy a product?", a: "Your files are available immediately in your Downloads page, with a receipt emailed for your records." },
      { q: "Do I get future updates for free?", a: "Yes — any update a creator publishes is added to your library automatically at no extra cost." },
      { q: "Can I use these in client work?", a: "Most listings include a commercial license by default. Check the License tab on each product for exact terms." },
    ],
  },
  {
    title: "Refunds",
    items: [
      { q: "What if a product isn't what I expected?", a: "Reach out within 14 days of purchase — our refund policy covers broken, misrepresented, or significantly different files." },
      { q: "How long do refunds take?", a: "Approved refunds are processed within 3–5 business days back to your original payment method." },
    ],
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <div className="container-px mx-auto max-w-container py-16">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <h1 className="text-center font-display text-h1 text-foreground">Frequently asked questions</h1>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-10">
        {faqGroups.map((group) => (
          <div key={group.title}>
            <h2 className="mb-2 text-label uppercase tracking-wide text-primary">{group.title}</h2>
            <Accordion type="single" collapsible>
              {group.items.map((item, i) => (
                <AccordionItem key={i} value={`${group.title}-${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
