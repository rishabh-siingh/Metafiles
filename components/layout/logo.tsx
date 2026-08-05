import { cn } from "@/lib/utils";

/**
 * Metafiles brand mark — gradient hexagon with an "M" wordmark cutout,
 * matching the provided brand kit (purple → pink → orange, 135°).
 * Single source of truth: update here to restyle the mark everywhere.
 */
export function Logo({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="metafiles-gradient" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6C3BFF" />
          <stop offset="50%" stopColor="#FF4F88" />
          <stop offset="100%" stopColor="#FF6A2D" />
        </linearGradient>
      </defs>
      <path
        d="M16 1.5L29.5 9.25V23.75L16 31.5L2.5 23.75V9.25L16 1.5Z"
        fill="url(#metafiles-gradient)"
      />
      <path d="M9 22V11.5L16 16.5L23 11.5V22H19.5V17.3L16 19.7L12.5 17.3V22H9Z" fill="white" />
    </svg>
  );
}
