import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { SectionHeader } from "./section-header";

const faqs = [
  {
    q: "What happens after I buy a product?",
    a: "Your files are available immediately in your Downloads page, and we email a receipt with a direct download link. Nothing to wait on.",
  },
  {
    q: "Do I get future updates for free?",
    a: "Yes. Any update a creator publishes to a product you own is added to your library automatically at no extra cost.",
  },
  {
    q: "Can I use these in client work?",
    a: "Most listings include a commercial license by default — check the License tab on each product page for the exact terms, since a few creators set custom limits.",
  },
  {
    q: "What if a product isn't what I expected?",
    a: "Reach out within 14 days of purchase. Our refund policy covers files that are broken, misrepresented, or significantly different from the listing.",
  },
  {
    q: "How do creators get paid?",
    a: "Creators keep 80% of each sale, paid out weekly via direct deposit or PayPal once they clear a $25 minimum balance.",
  },
];

export function FAQ() {
  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-20">
      <SectionHeader eyebrow="Questions" title="Frequently asked" />
      <Accordion type="single" collapsible className="mx-auto max-w-2xl">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
