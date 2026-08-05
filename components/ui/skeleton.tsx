import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("skeleton rounded-sm bg-muted", className)} {...props} />;
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-lg border border-outline bg-surface-raised p-4">
      <Skeleton className="aspect-[4/3] w-full rounded-md" />
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <div className="mt-2 flex items-center justify-between">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-8 w-20 rounded-sm" />
      </div>
    </div>
  );
}

export { Skeleton };
