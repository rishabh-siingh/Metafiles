import { ProductCardSkeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container-px mx-auto max-w-container py-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
