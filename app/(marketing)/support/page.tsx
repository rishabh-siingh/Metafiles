import Link from "next/link";
import type { Metadata } from "next";
import { Search, Package, CreditCard, ShieldQuestion, User } from "lucide-react";

export const metadata: Metadata = { title: "Support" };

const topics = [
  { icon: Package, title: "Orders & downloads", body: "Find past purchases, redownload files, track order status.", href: "/orders" },
  { icon: CreditCard, title: "Payments & refunds", body: "Payment methods, failed charges, refund requests.", href: "/refund-policy" },
  { icon: User, title: "Account & settings", body: "Update your profile, email, or password.", href: "/account" },
  { icon: ShieldQuestion, title: "Licensing", body: "What you can and can't do with a purchased file.", href: "/license" },
];

export default function SupportPage() {
  return (
    <div className="container-px mx-auto max-w-container py-16">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-display text-h1 text-foreground">How can we help?</h1>
        <div className="relative mt-6">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search help articles…"
            className="h-12 w-full rounded-sm border border-outline bg-surface-raised pl-11 pr-4 text-body text-foreground placeholder:text-muted-foreground focus-visible:border-primary"
          />
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
        {topics.map((t) => (
          <Link
            key={t.title}
            href={t.href}
            className="flex items-start gap-4 rounded-lg border border-outline bg-surface-raised p-6 transition-all duration-base ease-standard hover:-translate-y-0.5 hover:border-outline-strong hover:shadow-elevation-2"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-primary-soft text-primary-hover">
              <t.icon className="size-5" />
            </span>
            <div>
              <h3 className="font-display text-h5 text-foreground">{t.title}</h3>
              <p className="mt-1 text-small text-muted-foreground">{t.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
