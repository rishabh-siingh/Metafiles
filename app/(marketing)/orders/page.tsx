import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";

export const metadata = { title: "Orders" };

// Production: query `orders` + `order_items` joined to `products` for auth.uid()
const mockOrders = [
  { id: "FW-482913", date: "2026-07-20", status: "paid" as const, items: products.slice(0, 2) },
  { id: "FW-471002", date: "2026-06-12", status: "paid" as const, items: products.slice(2, 3) },
  { id: "FW-458821", date: "2026-05-03", status: "refunded" as const, items: products.slice(4, 5) },
];

const statusVariant = { paid: "success", refunded: "warning", pending: "info" } as const;

export default function OrdersPage() {
  return (
    <div className="container-px mx-auto max-w-container py-10">
      <h1 className="font-display text-h1 text-foreground">Order history</h1>
      <p className="mt-2 text-body text-muted-foreground">All your past purchases in one place.</p>

      <div className="mt-8 flex flex-col divide-y divide-outline border-y border-outline">
        {mockOrders.map((order) => {
          const total = order.items.reduce((sum, p) => sum + p.priceCents, 0);
          return (
            <Link
              key={order.id}
              href={`/orders/${order.id}`}
              className="flex items-center justify-between gap-4 py-5 transition-colors hover:bg-surface-raised"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <p className="font-display text-h5 text-foreground">{order.id}</p>
                  <Badge variant={statusVariant[order.status]} className="capitalize">
                    {order.status}
                  </Badge>
                </div>
                <p className="mt-1 text-caption text-muted-foreground">
                  {new Date(order.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} ·{" "}
                  {order.items.length} item{order.items.length !== 1 && "s"}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-display text-h5 text-foreground">{formatPrice(total)}</p>
                <ChevronRight className="size-4 text-muted-foreground" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
