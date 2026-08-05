import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { OrderTimeline } from "@/components/product/order-timeline";
import { products } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";

const mockOrders: Record<string, { date: string; items: typeof products }> = {
  "FW-482913": { date: "2026-07-20", items: products.slice(0, 2) },
  "FW-471002": { date: "2026-06-12", items: products.slice(2, 3) },
  "FW-458821": { date: "2026-05-03", items: products.slice(4, 5) },
};

export function generateStaticParams() {
  return Object.keys(mockOrders).map((id) => ({ id }));
}

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = mockOrders[params.id];
  if (!order) notFound();

  const total = order.items.reduce((sum, p) => sum + p.priceCents, 0);

  return (
    <div className="container-px mx-auto max-w-container py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Orders", href: "/orders" }, { label: params.id }]} />

      <h1 className="mt-4 font-display text-h1 text-foreground">Order {params.id}</h1>
      <p className="mt-2 text-body text-muted-foreground">
        Placed {new Date(order.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="mb-4 font-display text-h4 text-foreground">Status</h2>
          <OrderTimeline />

          <h2 className="mb-4 mt-10 font-display text-h4 text-foreground">Items</h2>
          <div className="flex flex-col divide-y divide-outline border-y border-outline">
            {order.items.map((product) => (
              <div key={product.id} className="flex items-center gap-4 py-4">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-surface-sunken">
                  <Image src={product.coverImage} alt={product.title} fill sizes="64px" className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <Link href={`/product/${product.slug}`} className="line-clamp-1 text-body font-medium text-foreground hover:text-primary-hover">
                    {product.title}
                  </Link>
                  <p className="mt-0.5 text-caption text-muted-foreground">{formatPrice(product.priceCents)}</p>
                </div>
                <Button size="sm" variant="secondary" className="gap-1.5">
                  <Download className="size-3.5" /> Download
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="h-fit rounded-lg border border-outline bg-surface-raised p-6">
          <h2 className="mb-4 font-display text-h4 text-foreground">Summary</h2>
          <div className="flex justify-between border-b border-outline pb-4 text-body text-muted-foreground">
            <span>Subtotal</span>
            <span className="text-foreground">{formatPrice(total)}</span>
          </div>
          <div className="flex items-baseline justify-between py-4">
            <span className="text-body font-medium text-foreground">Total</span>
            <span className="font-display text-h3 text-foreground">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
