import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pagination({ current = 1, total = 8 }: { current?: number; total?: number }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === total || Math.abs(p - current) <= 1
  );

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1.5">
      <button
        disabled={current === 1}
        className="flex size-9 items-center justify-center rounded-sm border border-outline text-muted-foreground transition-colors hover:bg-surface-raised disabled:opacity-40"
        aria-label="Previous page"
      >
        <ChevronLeft className="size-4" />
      </button>

      {pages.map((p, i) => (
        <span key={p} className="flex items-center">
          {i > 0 && pages[i - 1] !== p - 1 && <span className="px-1.5 text-muted-foreground">…</span>}
          <button
            aria-current={p === current ? "page" : undefined}
            className={cn(
              "flex size-9 items-center justify-center rounded-sm text-small font-medium transition-colors",
              p === current ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-surface-raised"
            )}
          >
            {p}
          </button>
        </span>
      ))}

      <button
        disabled={current === total}
        className="flex size-9 items-center justify-center rounded-sm border border-outline text-muted-foreground transition-colors hover:bg-surface-raised disabled:opacity-40"
        aria-label="Next page"
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  );
}
