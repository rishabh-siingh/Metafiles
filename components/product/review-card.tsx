import Image from "next/image";
import { ThumbsUp } from "lucide-react";
import { Rating } from "@/components/ui/rating";
import type { Review } from "@/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col gap-3 border-b border-outline py-6 last:border-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={review.avatarUrl} alt="" width={40} height={40} className="size-10 rounded-full object-cover" />
          <div>
            <p className="text-small font-medium text-foreground">{review.author}</p>
            <p className="text-caption text-muted-foreground">
              {new Date(review.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
        <Rating value={review.rating} showValue={false} size="sm" />
      </div>
      <div>
        <h4 className="text-body font-medium text-foreground">{review.title}</h4>
        <p className="mt-1 text-small text-muted-foreground">{review.body}</p>
      </div>
      <button className="flex w-fit items-center gap-1.5 text-caption text-muted-foreground transition-colors hover:text-foreground">
        <ThumbsUp className="size-3.5" /> Helpful ({review.helpful})
      </button>
    </div>
  );
}
