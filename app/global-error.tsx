"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en" className="dark">
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center font-body text-foreground">
        <span className="flex size-16 items-center justify-center rounded-full bg-error-soft text-error">
          <AlertTriangle className="size-8" />
        </span>
        <div>
          <h1 className="font-display text-h1">Something went wrong</h1>
          <p className="mt-2 max-w-sm text-body text-muted-foreground">
            An unexpected error occurred on our end. Try again, or head back to the home page.
          </p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => reset()}>Try again</Button>
          <Button variant="outline" asChild>
            <a href="/">Back to home</a>
          </Button>
        </div>
      </body>
    </html>
  );
}
