"use client";

import { useState } from "react";
import { LayoutGrid, List, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const sortOptions = ["Most popular", "Newest", "Price: low to high", "Price: high to low", "Highest rated"];

export function CategoryToolbar({ resultCount }: { resultCount: number }) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sortOpen, setSortOpen] = useState(false);
  const [sort, setSort] = useState(sortOptions[0]);

  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <p className="text-small text-muted-foreground">{resultCount} products</p>

      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setSortOpen((o) => !o)}
            className="flex items-center gap-2 rounded-sm border border-outline bg-surface-raised px-3.5 py-2 text-small text-foreground transition-colors hover:border-outline-strong"
            aria-expanded={sortOpen}
          >
            Sort: {sort}
            <ChevronDown className={cn("size-3.5 transition-transform", sortOpen && "rotate-180")} />
          </button>
          {sortOpen && (
            <ul className="absolute right-0 top-full z-20 mt-2 w-52 animate-fade-up rounded-md border border-outline bg-surface-overlay p-1.5 shadow-elevation-3">
              {sortOptions.map((opt) => (
                <li key={opt}>
                  <button
                    onClick={() => {
                      setSort(opt);
                      setSortOpen(false);
                    }}
                    className={cn(
                      "w-full rounded-sm px-3 py-2 text-left text-small transition-colors hover:bg-surface-raised",
                      sort === opt ? "text-primary-hover" : "text-foreground/90"
                    )}
                  >
                    {opt}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center rounded-sm border border-outline p-0.5">
          <button
            onClick={() => setView("grid")}
            aria-label="Grid view"
            aria-pressed={view === "grid"}
            className={cn("rounded-xs p-1.5 transition-colors", view === "grid" ? "bg-secondary text-foreground" : "text-muted-foreground")}
          >
            <LayoutGrid className="size-4" />
          </button>
          <button
            onClick={() => setView("list")}
            aria-label="List view"
            aria-pressed={view === "list"}
            className={cn("rounded-xs p-1.5 transition-colors", view === "list" ? "bg-secondary text-foreground" : "text-muted-foreground")}
          >
            <List className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
