import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductGallery } from "@/components/product/product-gallery";
import { PurchasePanel } from "@/components/product/purchase-panel";
import { ProductTabs } from "@/components/product/product-tabs";
import { ProductCard } from "@/components/product/product-card";
import { Rating } from "@/components/ui/rating";
import { Badge } from "@/components/ui/badge";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/mock-data";
import { formatCompactNumber } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.tagline,
    openGraph: {
      title: product.title,
      description: product.tagline,
      images: [{ url: product.coverImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.tagline,
      images: [product.coverImage],
    },
    alternates: { canonical: `/product/${product.slug}` },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.coverImage,
    brand: { "@type": "Brand", name: product.author.name },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    offers: {
      "@type": "Offer",
      price: (product.priceCents / 100).toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: product.category.name, item: `/category/${product.category.slug}` },
      { "@type": "ListItem", position: 3, name: product.title },
    ],
  };

  return (
    <div className="container-px mx-auto max-w-container py-8 md:py-10">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: product.category.name, href: `/category/${product.category.slug}` },
          { label: product.title },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{product.category.name}</Badge>
              {product.isNew && <Badge variant="info">New</Badge>}
              {product.isBestseller && <Badge variant="primary">Bestseller</Badge>}
            </div>
            <h1 className="mt-3 text-balance font-display text-h1 text-foreground">{product.title}</h1>
            <p className="mt-2 text-body-lg text-muted-foreground">{product.tagline}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Rating value={product.rating} count={product.reviewCount} size="md" />
              <span className="text-outline-strong">·</span>
              <span className="text-small text-muted-foreground">
                {formatCompactNumber(product.downloadCount)} downloads
              </span>
              <span className="text-outline-strong">·</span>
              <span className="text-small text-muted-foreground">
                Updated {new Date(product.updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>
          </div>

          <ProductGallery images={product.gallery} title={product.title} />

          {/* Purchase panel appears here on mobile, before tabs */}
          <div className="lg:hidden">
            <PurchasePanel product={product} />
          </div>

          <ProductTabs product={product} />
        </div>

        <div className="hidden lg:block">
          <PurchasePanel product={product} />
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-outline pt-12">
          <h2 className="mb-8 font-display text-h2 text-foreground">You might also like</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
