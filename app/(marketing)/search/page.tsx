import type { Metadata } from "next";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Search" };

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q?.trim() ?? "";
  const results = query
    ? products.filter((p) => {
        const haystack = `${p.title} ${p.tagline} ${p.tags.join(" ")} ${p.author.name}`.toLowerCase();
        return haystack.includes(query.toLowerCase());
      })
    : [];

  return (
    <div className="container-px mx-auto max-w-container py-10">
      <form className="relative mx-auto max-w-xl">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          name="q"
          defaultValue={query}
          autoFocus
          placeholder="Search products, authors, tags…"
          className="h-12 w-full rounded-sm border border-outline bg-surface-raised pl-11 pr-4 text-body text-foreground placeholder:text-muted-foreground focus-visible:border-primary"
        />
      </form>

      {query ? (
        <div className="mt-10">
          <p className="text-body text-muted-foreground">
            {results.length} result{results.length !== 1 && "s"} for <span className="text-foreground">&ldquo;{query}&rdquo;</span>
          </p>
          {results.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center gap-2 text-center">
              <p className="font-display text-h4 text-foreground">No matches</p>
              <p className="max-w-sm text-body text-muted-foreground">
                Try a different term, or browse categories to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-14">
          <p className="mb-4 text-label uppercase tracking-wide text-muted-foreground">Popular searches</p>
          <div className="flex flex-wrap gap-2">
            {["UI kit", "serif font", "Notion template", "icon set", "design course", "dashboard"].map((term) => (
              <Link
                key={term}
                href={`/search?q=${encodeURIComponent(term)}`}
                className="rounded-pill border border-outline px-4 py-2 text-small text-foreground/90 transition-colors hover:border-outline-strong hover:bg-surface-raised"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
