"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, FieldError } from "@/components/ui/input";
import { useCart } from "@/lib/cart-context";
import { checkoutSchema, type CheckoutFormValues } from "@/lib/schemas/checkout";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotalCents, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { country: "US" },
  });

  async function onSubmit() {
    setSubmitting(true);
    // Simulated processing delay — wire to a real payment provider
    // (e.g. Stripe PaymentIntents via a Server Action) in production.
    await new Promise((r) => setTimeout(r, 1400));
    clear();
    router.push("/order-success");
  }

  if (items.length === 0) {
    return (
      <div className="container-px mx-auto flex max-w-container flex-col items-center justify-center gap-6 py-32 text-center">
        <h1 className="font-display text-h2 text-foreground">Nothing to check out</h1>
        <p className="text-body text-muted-foreground">Your cart is empty right now.</p>
        <Button asChild>
          <a href="/category/ui-kits">Browse products</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container-px mx-auto max-w-container py-10">
      <h1 className="font-display text-h1 text-foreground">Checkout</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="mb-4 font-display text-h4 text-foreground">Contact</h2>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="you@studio.com" error={!!errors.email} {...register("email")} />
              <FieldError>{errors.email?.message}</FieldError>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-display text-h4 text-foreground">Payment</h2>
            <div className="flex flex-col gap-4 rounded-lg border border-outline bg-surface-raised p-5">
              <div>
                <Label htmlFor="fullName">Name on card</Label>
                <Input id="fullName" placeholder="Jordan Ellis" error={!!errors.fullName} {...register("fullName")} />
                <FieldError>{errors.fullName?.message}</FieldError>
              </div>
              <div>
                <Label htmlFor="cardNumber">Card number</Label>
                <Input
                  id="cardNumber"
                  inputMode="numeric"
                  placeholder="4242 4242 4242 4242"
                  error={!!errors.cardNumber}
                  {...register("cardNumber")}
                />
                <FieldError>{errors.cardNumber?.message}</FieldError>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input id="expiry" placeholder="MM/YY" error={!!errors.expiry} {...register("expiry")} />
                  <FieldError>{errors.expiry?.message}</FieldError>
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" inputMode="numeric" placeholder="123" error={!!errors.cvc} {...register("cvc")} />
                  <FieldError>{errors.cvc?.message}</FieldError>
                </div>
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <select
                  id="country"
                  className="h-11 w-full rounded-sm border border-outline bg-surface-sunken px-3.5 text-body text-foreground focus-visible:border-primary"
                  {...register("country")}
                >
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-caption text-muted-foreground">
              <Lock className="size-3.5" /> Payments are encrypted and processed securely.
            </p>
          </section>
        </div>

        <div className="h-fit rounded-lg border border-outline bg-surface-raised p-6">
          <h2 className="mb-4 font-display text-h4 text-foreground">Order summary</h2>
          <div className="flex flex-col gap-3 border-b border-outline pb-4">
            {items.map(({ product }) => (
              <div key={product.id} className="flex items-center gap-3">
                <div className="relative size-12 shrink-0 overflow-hidden rounded-sm bg-surface-sunken">
                  <Image src={product.coverImage} alt="" fill sizes="48px" className="object-cover" />
                </div>
                <p className="line-clamp-1 flex-1 text-small text-foreground">{product.title}</p>
                <p className="text-small text-muted-foreground">{formatPrice(product.priceCents)}</p>
              </div>
            ))}
          </div>
          <div className="flex items-baseline justify-between py-4">
            <span className="text-body font-medium text-foreground">Total</span>
            <span className="font-display text-h3 text-foreground">{formatPrice(subtotalCents)}</span>
          </div>
          <Button type="submit" size="lg" className="w-full gap-2" loading={submitting}>
            <ShieldCheck className="size-4" /> {submitting ? "Processing…" : `Pay ${formatPrice(subtotalCents)}`}
          </Button>
        </div>
      </form>
    </div>
  );
}
