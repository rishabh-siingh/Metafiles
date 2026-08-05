import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";

export const metadata = { title: "Coming soon" };

export default function ComingSoonPage() {
  return (
    <div className="container-px mx-auto flex min-h-[70vh] max-w-container flex-col items-center justify-center gap-6 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary-hover">
        <Sparkles className="size-8" />
      </span>
      <div>
        <h1 className="font-display text-h1 text-foreground">Something new is coming</h1>
        <p className="mt-2 max-w-sm text-body text-muted-foreground">
          We're putting the finishing touches on this. Leave your email and we'll let you know the moment it's live.
        </p>
      </div>
      <form className="flex w-full max-w-sm gap-2">
        <Input type="email" placeholder="you@studio.com" />
        <Button type="submit" className="shrink-0">Notify me</Button>
      </form>
    </div>
  );
}
