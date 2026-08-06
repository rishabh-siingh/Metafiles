import Image from "next/image";
import { cn } from "@/lib/utils";

// Actual exported ratio of /public/logo.png (467 x 527) — used so the
// component can be given a single `size` (width) and compute a correct
// height without distorting the mark.
const ASPECT_RATIO = 527 / 467;

/**
 * Metafiles brand mark — renders the official logo asset (public/logo.png).
 * `size` sets the rendered width in pixels; height is derived from the
 * source image's true aspect ratio so the mark is never stretched.
 */
export function Logo({ size = 32, className }: { size?: number; className?: string }) {
  const height = Math.round(size * ASPECT_RATIO);
  return (
    <Image
      src="/logo.png"
      alt="Metafiles"
      width={size}
      height={height}
      priority
      className={cn("shrink-0 object-contain", className)}
    />
  );
}
