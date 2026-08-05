import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PriceFilterDropdown } from "@/components/product/price-filter-dropdown";
import { CategoryToolbar } from "@/components/product/category-toolbar";
import { ProductCard } from "@/components/product/product-card";
import { Pagination } from "@/components/ui/pagination";
import { getCategoryBySlug, getProductsByCategory, categories, products } from "@/lib/mock-data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/category/${category.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  // Fall back to full catalog when the mock category has fewer items than
  // needed to demonstrate the grid meaningfully.
  const items = getProductsByCategory(category.slug);
  const displayItems = items.length >= 4 ? items : products;

  return (
    <div className="container-px mx-auto max-w-container py-8 md:py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: category.name }]} />

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-h1 text-foreground">{category.name}</h1>
          <p className="mt-2 text-body text-muted-foreground">{category.description}</p>
        </div>
      </div>

      {/* Category chips for quick cross-navigation */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-b border-outline pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/category/${c.slug}`}
              className={
                c.slug === category.slug
                  ? "rounded-pill bg-primary px-4 py-2 text-small font-medium text-primary-foreground"
                  : "rounded-pill border border-outline px-4 py-2 text-small text-foreground/90 transition-colors hover:border-outline-strong"
              }
            >
              {c.name}
            </Link>
          ))}
        </div>
        <PriceFilterDropdown />
      </div>

      <div className="mt-8">
        <CategoryToolbar resultCount={displayItems.length} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayItems.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-12">
          <Pagination current={1} total={6} />
        </div>
      </div>
    </div>
  );
}
