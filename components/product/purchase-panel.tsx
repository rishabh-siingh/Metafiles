"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, Zap, ShieldCheck, RefreshCw, BadgeCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { useToast } from "@/components/ui/toast";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

export function PurchasePanel({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem, isInCart } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const { toast } = useToast();
  const wishlisted = isWishlisted(product.id);
  const inCart = isInCart(product.id);

  const discount =
    product.compareAtCents && product.compareAtCents > product.priceCents
      ? Math.round(100 - (product.priceCents / product.compareAtCents) * 100)
      : null;

  function handleBuyNow() {
    if (!inCart) addItem(product);
    router.push("/checkout");
  }

  function handleAddToCart() {
    if (inCart) return;
    addItem(product);
    toast({ title: "Added to cart", description: product.title, variant: "success" });
  }

  return (
    <div className="lg:sticky lg:top-24">
      <div className="flex flex-col gap-6 rounded-lg border border-outline bg-surface-raised p-6 shadow-elevation-2">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-h2 text-foreground">{formatPrice(product.priceCents)}</span>
            {product.compareAtCents && (
              <span className="text-body text-muted-foreground line-through">{formatPrice(product.compareAtCents)}</span>
            )}
            {discount && (
              <span className="rounded-xs bg-success-soft px-2 py-0.5 text-caption font-medium text-success">
                Save {discount}%
              </span>
            )}
          </div>
          <p className="mt-1 text-caption text-muted-foreground">One-time payment · lifetime updates included</p>
        </div>

        <div className="flex flex-col gap-2.5">
          <Button size="lg" className="w-full gap-2" onClick={handleBuyNow}>
            <Zap className="size-4" /> Buy now
          </Button>
          <Button size="lg" variant="secondary" className="w-full gap-2" onClick={handleAddToCart} disabled={inCart}>
            {inCart ? <Check className="size-4" /> : <ShoppingCart className="size-4" />}
            {inCart ? "Added to cart" : "Add to cart"}
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="w-full gap-2"
            onClick={() => {
              toggle(product);
              toast({ title: wishlisted ? "Removed from wishlist" : "Added to wishlist", variant: "success" });
            }}
            aria-pressed={wishlisted}
          >
            <Heart className={wishlisted ? "size-4 fill-error text-error" : "size-4"} />
            {wishlisted ? "Saved to wishlist" : "Add to wishlist"}
          </Button>
        </div>

        <div className="flex flex-col gap-3 border-t border-outline pt-5 text-small text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <Zap className="size-4 text-primary" /> Instant download after purchase
          </div>
          <div className="flex items-center gap-2.5">
            <RefreshCw className="size-4 text-primary" /> Free updates for life
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="size-4 text-primary" /> 14-day refund guarantee
          </div>
        </div>

        <Link
          href="#"
          className="flex items-center gap-3 rounded-md border border-outline p-3 transition-colors hover:border-outline-strong"
        >
          <Avatar className="size-11">
            <AvatarImage src={product.author.avatarUrl} alt={product.author.name} />
            <AvatarFallback>{product.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="flex items-center gap-1 text-small font-medium text-foreground">
              {product.author.name}
              {product.author.verified && <BadgeCheck className="size-3.5 text-primary" />}
            </p>
            <p className="text-caption text-muted-foreground">{product.author.productCount} products</p>
          </div>
          <Rating value={product.rating} showValue={false} size="xs" />
        </Link>
      </div>
    </div>
  );
}
