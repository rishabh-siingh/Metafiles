"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const priceRanges = [
  { label: "Under $25", value: "under-25" },
  { label: "$25 – $50", value: "25-50" },
  { label: "$50 – $100", value: "50-100" },
  { label: "$100+", value: "100-plus" },
];

export function PriceFilterDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggle(value: string) {
    setSelected((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={cn(
          "flex items-center gap-2 rounded-pill border px-4 py-2 text-small font-medium transition-colors",
          selected.length > 0 || open
            ? "border-primary bg-primary-soft text-primary-hover"
            : "border-outline text-foreground/90 hover:border-outline-strong"
        )}
      >
        <SlidersHorizontal className="size-3.5" />
        Price
        {selected.length > 0 && (
          <span className="flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            {selected.length}
          </span>
        )}
        <ChevronDown className={cn("size-3.5 transition-transform duration-fast", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[100] mt-2 w-56 animate-fade-up rounded-md border border-outline bg-surface-overlay p-2 shadow-elevation-3">
          {priceRanges.map((p) => (
            <label
              key={p.value}
              className="flex cursor-pointer items-center gap-2.5 rounded-sm px-2.5 py-2 text-body text-foreground/90 transition-colors hover:bg-surface-raised"
            >
              <input
                type="checkbox"
                checked={selected.includes(p.value)}
                onChange={() => toggle(p.value)}
                className="size-4 rounded-xs border-outline-strong accent-primary"
              />
              {p.label}
            </label>
          ))}
          {selected.length > 0 && (
            <button
              type="button"
              onClick={() => setSelected([])}
              className="mt-1 w-full rounded-sm px-2.5 py-2 text-left text-small text-muted-foreground transition-colors hover:bg-surface-raised hover:text-foreground"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
