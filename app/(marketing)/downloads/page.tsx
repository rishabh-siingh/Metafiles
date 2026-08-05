import Image from "next/image";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/mock-data";

export const metadata = { title: "Downloads" };

// In production this would be a Server Component query against the
// `library` view: select * from library where buyer_id = auth.uid()
const owned = products.slice(0, 3);

export default function DownloadsPage() {
  return (
    <div className="container-px mx-auto max-w-container py-10">
      <h1 className="font-display text-h1 text-foreground">Your downloads</h1>
      <p className="mt-2 text-body text-muted-foreground">Files you've purchased, ready any time.</p>

      <div className="mt-8 flex flex-col divide-y divide-outline border-y border-outline">
        {owned.map((product) => (
          <div key={product.id} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center">
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-md bg-surface-sunken sm:w-32">
              <Image src={product.coverImage} alt={product.title} fill sizes="128px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-h5 text-foreground">{product.title}</h3>
              <p className="mt-1 text-caption text-muted-foreground">
                Purchased {new Date(product.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.includedFiles.map((f) => (
                  <span key={f.name} className="flex items-center gap-1.5 rounded-xs bg-surface-raised px-2.5 py-1 text-caption text-muted-foreground">
                    <FileText className="size-3" /> {f.name}
                  </span>
                ))}
              </div>
            </div>
            <Button className="gap-2 sm:shrink-0">
              <Download className="size-4" /> Download
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
