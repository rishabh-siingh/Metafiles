import { Check, FileText, History } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Rating } from "@/components/ui/rating";
import { ReviewCard } from "./review-card";
import { mockReviews } from "@/lib/mock-data";
import type { Product } from "@/types";

export function ProductTabs({ product }: { product: Product }) {
  return (
    <Tabs defaultValue="description">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="files">Included files</TabsTrigger>
        <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
        <TabsTrigger value="history">Version history</TabsTrigger>
        <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
      </TabsList>

      <TabsContent value="description">
        <div className="max-w-prose">
          <p className="text-body-lg text-foreground/90">{product.description}</p>
          <h3 className="mt-8 font-display text-h5 text-foreground">What's included</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-body text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-success" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="files">
        <div className="max-w-prose">
          <ul className="flex flex-col gap-2.5">
            {product.includedFiles.map((f) => (
              <li
                key={f.name}
                className="flex items-center justify-between rounded-sm border border-outline bg-surface-raised px-4 py-3"
              >
                <span className="flex items-center gap-2.5 text-small text-foreground">
                  <FileText className="size-4 text-muted-foreground" />
                  {f.name}
                </span>
                <span className="text-caption text-muted-foreground">{f.size}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-display text-h5 text-foreground">Requirements</h3>
          <ul className="mt-3 flex flex-col gap-2 text-body text-muted-foreground">
            {product.requirements.map((r) => (
              <li key={r}>• {r}</li>
            ))}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="compatibility">
        <div className="flex flex-wrap gap-2">
          {product.compatibility.map((c) => (
            <span key={c} className="rounded-pill border border-outline-strong px-3.5 py-1.5 text-small text-foreground">
              {c}
            </span>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="history">
        <ol className="flex max-w-prose flex-col gap-6 border-l border-outline pl-6">
          {product.versionHistory.map((v) => (
            <li key={v.version} className="relative">
              <span className="absolute -left-[27px] top-1 flex size-3.5 items-center justify-center rounded-full bg-primary">
                <History className="size-2 text-primary-foreground" />
              </span>
              <p className="text-small font-medium text-foreground">
                v{v.version}{" "}
                <span className="font-normal text-muted-foreground">
                  · {new Date(v.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </p>
              <p className="mt-1 text-small text-muted-foreground">{v.notes}</p>
            </li>
          ))}
        </ol>
      </TabsContent>

      <TabsContent value="reviews">
        <div className="max-w-prose">
          <div className="mb-6 flex items-center gap-4 rounded-lg border border-outline bg-surface-raised p-5">
            <p className="font-display text-h1 text-foreground">{product.rating.toFixed(1)}</p>
            <div>
              <Rating value={product.rating} showValue={false} size="md" />
              <p className="mt-1 text-caption text-muted-foreground">Based on {product.reviewCount} reviews</p>
            </div>
          </div>
          <div>
            {mockReviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
