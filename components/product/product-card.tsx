"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Download, Eye, ShoppingCart, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { useToast } from "@/components/ui/toast";
import { cn, formatPrice, formatCompactNumber } from "@/lib/utils";
import type { Product } from "@/types";

/**
 * PRODUCT CARD — the signature component of the marketplace.
 *
 * Signature interaction: on hover, the cover image doesn't just scale —
 * a second "content layer" (the second gallery image) rises from beneath
 * it with a slight offset, evoking flipping through a stack of files.
 * This nods to the fact these are *file-based* digital products without
 * resorting to a generic zoom effect.
 */
export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const { addItem, isInCart } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const { toast } = useToast();
  const wishlisted = isWishlisted(product.id);
  const inCart = isInCart(product.id);
  const discount =
    product.compareAtCents && product.compareAtCents > product.priceCents
      ? Math.round(100 - (product.priceCents / product.compareAtCents) * 100)
      : null;

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-outline bg-surface-raised transition-all duration-base ease-standard hover:border-outline-strong hover:shadow-elevation-3",
        className
      )}
    >
      {/* Media stack */}
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-surface-sunken">
        {/* Peek layer — second image, offset, revealed on hover */}
        {product.gallery[1] && (
          <div className="absolute inset-0 translate-y-2 scale-[0.94] opacity-0 transition-all duration-slow ease-emphasized group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
            <Image
              src={product.gallery[1]}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
        {/* Primary cover */}
        <div className="absolute inset-0 transition-all duration-slow ease-emphasized group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:opacity-0">
          <Image
            src={product.coverImage}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Top-left badges */}
        <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1.5">
          {product.isNew && <Badge variant="info">New</Badge>}
          {product.isBestseller && <Badge variant="primary">Bestseller</Badge>}
          {discount && <Badge variant="success">-{discount}%</Badge>}
        </div>

        {/* Wishlist */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggle(product);
            toast({
              title: wishlisted ? "Removed from wishlist" : "Added to wishlist",
              variant: "success",
            });
          }}
          aria-pressed={wishlisted}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-background/70 backdrop-blur-xs transition-all duration-fast ease-standard hover:bg-background active:scale-90"
        >
          <Heart className={cn("size-4 transition-colors", wishlisted ? "fill-error text-error" : "text-foreground")} />
        </button>

        {/* Quick preview — appears on hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 translate-y-3 opacity-0 transition-all duration-base ease-standard group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-background/85 px-3 py-2 text-label text-foreground backdrop-blur-xs">
            <Eye className="size-3.5" /> Quick preview
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline" className="text-muted-foreground">
            {product.category.name}
          </Badge>
          <Rating value={product.rating} count={product.reviewCount} size="xs" />
        </div>

        <div>
          <Link href={`/product/${product.slug}`} className="story-link">
            <h3 className="font-display text-h5 leading-snug text-foreground transition-colors group-hover:text-primary-hover">
              {product.title}
            </h3>
          </Link>
          <p className="mt-1 line-clamp-2 text-small text-muted-foreground">{product.tagline}</p>
        </div>

        <div className="flex items-center gap-2 text-caption text-muted-foreground">
          <Download className="size-3.5" />
          <span>{formatCompactNumber(product.downloadCount)} downloads</span>
          <span className="text-outline-strong">·</span>
          <span>by {product.author.name}</span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-h5 text-foreground">{formatPrice(product.priceCents)}</span>
            {product.compareAtCents && (
              <span className="text-small text-muted-foreground line-through">
                {formatPrice(product.compareAtCents)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            variant={inCart ? "secondary" : "primary"}
            className="gap-1.5"
            onClick={(e) => {
              e.preventDefault();
              if (!inCart) {
                addItem(product);
                toast({ title: "Added to cart", description: product.title, variant: "success" });
              }
            }}
          >
            {inCart ? <Check className="size-3.5" /> : <ShoppingCart className="size-3.5" />}
            {inCart ? "In cart" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
}
