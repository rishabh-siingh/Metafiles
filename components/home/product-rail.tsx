import { ProductCard } from "@/components/product/product-card";
import { SectionHeader } from "./section-header";
import type { Product } from "@/types";

export function ProductRail({
  eyebrow,
  title,
  description,
  href,
  products,
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  products: Product[];
  tone?: "default" | "sunken";
}) {
  return (
    <section className={tone === "sunken" ? "bg-surface" : undefined}>
      <div className="container-px mx-auto max-w-container py-16 md:py-20">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} href={href} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
