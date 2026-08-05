"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { useWishlist } from "@/lib/wishlist-context";

export default function WishlistPage() {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="container-px mx-auto flex max-w-container flex-col items-center justify-center gap-6 py-32 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary-hover">
          <Heart className="size-8" />
        </span>
        <div>
          <h1 className="font-display text-h2 text-foreground">Your wishlist is empty</h1>
          <p className="mt-2 max-w-sm text-body text-muted-foreground">
            Tap the heart on any product to save it here for later.
          </p>
        </div>
        <Button asChild>
          <Link href="/category/ui-kits">Browse products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container-px mx-auto max-w-container py-10">
      <h1 className="font-display text-h1 text-foreground">Your wishlist</h1>
      <p className="mt-2 text-body text-muted-foreground">{items.length} saved item{items.length !== 1 && "s"}</p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
