import { Wrench } from "lucide-react";

export const metadata = { title: "Under maintenance" };

export default function MaintenancePage() {
  return (
    <div className="container-px mx-auto flex min-h-screen max-w-container flex-col items-center justify-center gap-6 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-warning-soft text-warning">
        <Wrench className="size-8" />
      </span>
      <div>
        <h1 className="font-display text-h1 text-foreground">We'll be right back</h1>
        <p className="mt-2 max-w-sm text-body text-muted-foreground">
          Metafiles is undergoing scheduled maintenance. We expect to be back online shortly — thanks for your
          patience.
        </p>
      </div>
      <p className="text-caption text-muted-foreground">Follow @metafiles for live updates.</p>
    </div>
  );
}
