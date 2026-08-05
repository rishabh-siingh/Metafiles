import Link from "next/link";
import type { Metadata } from "next";
import { Percent, Link2, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Affiliate Program" };

const steps = [
  { icon: Link2, title: "Share your link", body: "Get a unique referral link for any product or your storefront." },
  { icon: Percent, title: "Earn on every sale", body: "You earn 15% commission on any purchase made through your link within 30 days." },
  { icon: Wallet, title: "Get paid monthly", body: "Commissions are paid out automatically once you clear a $50 balance." },
];

export default function AffiliatePage() {
  return (
    <div className="container-px mx-auto max-w-container py-16">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-display text-h1 text-foreground">Earn by sharing what you already recommend</h1>
        <p className="mt-4 text-body-lg text-muted-foreground">
          If you write about tools, teach design, or run a newsletter, the affiliate program turns your
          recommendations into income.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <Link href="/signup">Join the program</Link>
        </Button>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="flex flex-col items-center gap-3 rounded-xl border border-outline bg-surface-raised p-6 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary-soft text-primary-hover">
              <s.icon className="size-6" />
            </span>
            <h3 className="font-display text-h5 text-foreground">{s.title}</h3>
            <p className="text-small text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
