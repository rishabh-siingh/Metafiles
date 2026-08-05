import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="container-px mx-auto max-w-container pb-20">
      <div className="glow-surface rounded-2xl border border-outline bg-surface-raised px-8 py-16 text-center sm:px-16">
        <div className="relative flex flex-col items-center gap-5">
          <h2 className="max-w-xl text-balance font-display text-h1 text-foreground">
            New products land every week. Don't miss the next one.
          </h2>
          <p className="max-w-md text-body-lg text-muted-foreground">
            Browse the full catalog, or join the list for new arrivals in your inbox.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <Link href="/category/ui-kits">
              Browse the marketplace <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
