import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({
  value,
  count,
  size = "sm",
  showValue = true,
}: {
  value: number;
  count?: number;
  size?: "xs" | "sm" | "md";
  showValue?: boolean;
}) {
  const starSize = size === "xs" ? "size-3" : size === "sm" ? "size-3.5" : "size-4";
  const textSize = size === "xs" ? "text-caption" : "text-small";

  return (
    <div className="flex items-center gap-1.5" role="img" aria-label={`Rated ${value} out of 5 stars`}>
      <div className="flex items-center" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i + 1 <= Math.round(value);
          return (
            <Star
              key={i}
              className={cn(starSize, filled ? "fill-warning text-warning" : "fill-none text-outline-strong")}
              strokeWidth={filled ? 0 : 1.5}
            />
          );
        })}
      </div>
      {showValue && (
        <span className={cn(textSize, "text-muted-foreground font-medium")}>
          {value.toFixed(1)}
          {typeof count === "number" && <span className="text-muted-foreground/70"> ({count.toLocaleString()})</span>}
        </span>
      )}
    </div>
  );
}
