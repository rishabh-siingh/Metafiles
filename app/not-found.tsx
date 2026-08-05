import Link from "next/link";
import { CompassIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-px mx-auto flex max-w-container flex-col items-center justify-center gap-6 py-32 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary-hover">
        <CompassIcon className="size-8" />
      </span>
      <div>
        <h1 className="font-display text-h1 text-foreground">Page not found</h1>
        <p className="mt-2 max-w-sm text-body text-muted-foreground">
          The page you're looking for doesn't exist, or may have been moved. Let's get you back on track.
        </p>
      </div>
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/category/ui-kits">Browse products</Link>
        </Button>
      </div>
    </div>
  );
}
