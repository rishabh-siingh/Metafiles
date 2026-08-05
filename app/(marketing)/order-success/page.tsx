import Link from "next/link";
import { CheckCircle2, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrderSuccessPage() {
  const orderNumber = `FW-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="container-px mx-auto flex max-w-container flex-col items-center gap-8 py-24 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-success-soft text-success">
        <CheckCircle2 className="size-9" />
      </span>
      <div>
        <h1 className="font-display text-h1 text-foreground">Order confirmed</h1>
        <p className="mt-2 max-w-md text-body text-muted-foreground">
          Order <span className="font-medium text-foreground">{orderNumber}</span> is complete. Your files are ready
          in your downloads, and a receipt is on its way to your inbox.
        </p>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-3">
        <Button size="lg" className="w-full gap-2" asChild>
          <Link href="/downloads">
            <Download className="size-4" /> Go to downloads
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="w-full gap-2" asChild>
          <Link href="/category/ui-kits">Continue browsing</Link>
        </Button>
      </div>

      <p className="flex items-center gap-1.5 text-caption text-muted-foreground">
        <Mail className="size-3.5" /> A copy of your receipt has been emailed to you.
      </p>
    </div>
  );
}
