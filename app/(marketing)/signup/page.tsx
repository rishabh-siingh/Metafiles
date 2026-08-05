import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export const metadata: Metadata = { title: "Sign up" };

export default function SignupPage() {
  return (
    <div className="container-px mx-auto flex min-h-[70vh] max-w-container items-center justify-center py-16">
      <div className="w-full max-w-sm">
        <h1 className="text-center font-display text-h2 text-foreground">Create your account</h1>
        <p className="mt-2 text-center text-body text-muted-foreground">Join buyers and creators on Metafiles.</p>

        <form className="mt-8 flex flex-col gap-4">
          <div>
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Jordan Ellis" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@studio.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="At least 8 characters" />
          </div>
          <Button type="submit" size="lg" className="mt-2 w-full">Create account</Button>
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
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">Log in</Link>
        </p>
        <p className="mt-4 text-center text-caption text-muted-foreground">
          By signing up, you agree to our <Link href="/terms" className="hover:underline">Terms</Link> and{" "}
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
