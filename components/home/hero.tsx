import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";

const stackImages = [
  "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&h=750&fit=crop",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-outline">
      <div className="container-px relative mx-auto grid max-w-container items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-1.5 rounded-pill border border-outline-strong bg-surface-raised px-3 py-1.5 text-label text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            2,400+ vetted digital products
          </span>

          <h1 className="max-w-xl text-balance font-display text-4xl text-foreground sm:text-5xl lg:text-hero">
            Work built by people who make this for a living.
          </h1>

          <p className="max-w-md text-body-lg text-muted-foreground">
            UI kits, type families, courses, and templates — every listing reviewed before it ships, every creator paid directly.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/category/ui-kits">
                Browse the marketplace <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-2 flex items-center gap-6">
            <div className="flex -space-x-2.5">
              {stackImages.map((src, i) => (
                <div key={i} className="size-9 overflow-hidden rounded-full ring-2 ring-background">
                  <Image src={src} alt="" width={36} height={36} className="size-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <Rating value={4.8} showValue size="sm" />
              <p className="text-caption text-muted-foreground">from 18,200+ buyers</p>
            </div>
          </div>
        </div>

        {/* Signature visual: layered file-stack, evoking the product card's peek interaction at hero scale */}
        <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm lg:block">
          {stackImages.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 overflow-hidden rounded-xl border border-outline shadow-elevation-4"
              style={{
                transform: `rotate(${(i - 1) * 4}deg) translate(${(i - 1) * 18}px, ${i * 6}px)`,
                zIndex: 3 - i,
              }}
            >
              <Image src={src} alt="" fill sizes="400px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
