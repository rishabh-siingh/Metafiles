"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, subtotalCents } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-px mx-auto flex max-w-container flex-col items-center justify-center gap-6 py-32 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary-hover">
          <ShoppingBag className="size-8" />
        </span>
        <div>
          <h1 className="font-display text-h2 text-foreground">Your cart is empty</h1>
          <p className="mt-2 max-w-sm text-body text-muted-foreground">
            Browse the catalog and add something you'd actually use.
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
      <h1 className="font-display text-h1 text-foreground">Your cart</h1>
      <p className="mt-2 text-body text-muted-foreground">{items.length} item{items.length !== 1 && "s"}</p>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col divide-y divide-outline border-y border-outline">
          {items.map(({ product }) => (
            <div key={product.id} className="flex items-center gap-4 py-5">
              <Link href={`/product/${product.slug}`} className="relative size-20 shrink-0 overflow-hidden rounded-md bg-surface-sunken">
                <Image src={product.coverImage} alt={product.title} fill sizes="80px" className="object-cover" />
              </Link>
              <div className="min-w-0 flex-1">
                <Link href={`/product/${product.slug}`} className="line-clamp-1 font-display text-h5 text-foreground hover:text-primary-hover">
                  {product.title}
                </Link>
                <p className="mt-1 text-caption text-muted-foreground">by {product.author.name}</p>
              </div>
              <p className="font-display text-h5 text-foreground">{formatPrice(product.priceCents)}</p>
              <button
                onClick={() => removeItem(product.id)}
                aria-label={`Remove ${product.title} from cart`}
                className="flex size-9 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-error-soft hover:text-error"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-lg border border-outline bg-surface-raised p-6">
          <h2 className="font-display text-h4 text-foreground">Order summary</h2>
          <div className="mt-4 flex flex-col gap-2.5 border-b border-outline pb-4 text-body">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span className="text-foreground">{formatPrice(subtotalCents)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Tax</span>
              <span className="text-foreground">Calculated at checkout</span>
            </div>
          </div>
          <div className="flex items-baseline justify-between py-4">
            <span className="text-body font-medium text-foreground">Total</span>
            <span className="font-display text-h3 text-foreground">{formatPrice(subtotalCents)}</span>
          </div>
          <Button size="lg" className="w-full gap-2" asChild>
            <Link href="/checkout">
              Proceed to checkout <ArrowRight className="size-4" />
            </Link>
          </Button>
          <p className="mt-4 text-center text-caption text-muted-foreground">
            Instant download · 14-day refund guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
