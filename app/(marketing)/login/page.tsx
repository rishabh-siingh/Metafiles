import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export const metadata: Metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <div className="container-px mx-auto flex min-h-[70vh] max-w-container items-center justify-center py-16">
      <div className="w-full max-w-sm">
        <h1 className="text-center font-display text-h2 text-foreground">Welcome back</h1>
        <p className="mt-2 text-center text-body text-muted-foreground">Log in to access your downloads and orders.</p>

        <form className="mt-8 flex flex-col gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@studio.com" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="mb-0">Password</Label>
              <Link href="#" className="mb-1.5 text-caption text-primary hover:underline">Forgot?</Link>
            </div>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button type="submit" size="lg" className="mt-2 w-full">Log in</Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-outline" />
          <span className="text-caption text-muted-foreground">or</span>
          <span className="h-px flex-1 bg-outline" />
        </div>

        <div className="flex flex-col gap-2.5">
          <Button variant="outline" size="lg" className="w-full">Continue with Google</Button>
          <Button variant="outline" size="lg" className="w-full">Continue with GitHub</Button>
        </div>

        <p className="mt-8 text-center text-small text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
