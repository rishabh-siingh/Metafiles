import Image from "next/image";
import { Quote } from "lucide-react";
import { Rating } from "@/components/ui/rating";
import { SectionHeader } from "./section-header";

const testimonials = [
  {
    quote: "We rebuilt our entire onboarding flow with Aperture in a week. The variants alone saved our team weeks of Figma cleanup.",
    name: "Dana Okafor",
    role: "Product Designer, Loop",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=faces",
  },
  {
    quote: "The design systems course paid for itself the first time I used the governance template with a skeptical stakeholder.",
    name: "Marcus Ihejirika",
    role: "Design Lead, Fintra",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  },
  {
    quote: "Canela is the first serif I've bought that actually holds its warmth at both 12px and 120px. No compromises either direction.",
    name: "Yuki Tanaka",
    role: "Brand Designer, freelance",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=faces",
  },
];

export function Testimonials() {
  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-20">
      <SectionHeader eyebrow="Trusted by teams" title="What buyers are saying" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="flex flex-col gap-4 rounded-lg border border-outline bg-surface-raised p-6">
            <Quote className="size-6 text-primary" />
            <Rating value={5} showValue={false} size="xs" />
            <blockquote className="flex-1 text-body text-foreground/90">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="flex items-center gap-3 border-t border-outline pt-4">
              <Image src={t.avatar} alt="" width={36} height={36} className="size-9 rounded-full object-cover" />
              <div>
                <p className="text-small font-medium text-foreground">{t.name}</p>
                <p className="text-caption text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
