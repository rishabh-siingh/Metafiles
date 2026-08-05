import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "View all",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="mb-2 text-label uppercase tracking-wide text-primary">{eyebrow}</p>}
        <h2 className="font-display text-h2 text-foreground">{title}</h2>
        {description && <p className="mt-2 max-w-xl text-body text-muted-foreground">{description}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="hidden shrink-0 items-center gap-1.5 text-body font-medium text-foreground transition-colors hover:text-primary-hover sm:inline-flex"
        >
          {linkLabel} <ArrowRight className="size-4" />
        </Link>
      )}
    </div>
  );
}
