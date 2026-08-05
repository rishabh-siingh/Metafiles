import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { AccountLayout } from "@/components/layout/account-layout";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export const metadata: Metadata = { title: "Account" };

export default function AccountPage() {
  return (
    <AccountLayout>
      <h1 className="font-display text-h2 text-foreground">Profile</h1>
      <p className="mt-1 text-body text-muted-foreground">Manage how you appear on Metafiles.</p>

      <div className="mt-8 flex items-center gap-4">
        <div className="relative size-20 overflow-hidden rounded-full bg-surface-sunken">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <Button variant="outline" size="sm">Change photo</Button>
          <p className="mt-1.5 flex items-center gap-1 text-caption text-muted-foreground">
            <BadgeCheck className="size-3.5 text-primary" /> Verified account
          </p>
        </div>
      </div>

      <form className="mt-8 flex max-w-md flex-col gap-4">
        <div>
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" defaultValue="Jordan Ellis" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue="jordan@studio.com" />
        </div>
        <div>
          <Label htmlFor="bio">Bio</Label>
          <textarea
            id="bio"
            rows={3}
            placeholder="Tell buyers a bit about you"
            className="w-full rounded-sm border border-outline bg-surface-sunken px-3.5 py-3 text-body text-foreground placeholder:text-muted-foreground focus-visible:border-primary"
          />
        </div>
        <Button type="submit" size="lg" className="w-fit">Save changes</Button>
      </form>
    </AccountLayout>
  );
}
