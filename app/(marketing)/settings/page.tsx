import type { Metadata } from "next";
import { AccountLayout } from "@/components/layout/account-layout";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export const metadata: Metadata = { title: "Settings" };

const toggles = [
  { label: "Order confirmations", description: "Email me when an order is placed or completed" },
  { label: "Product updates", description: "Notify me when a creator updates something I own" },
  { label: "Marketing emails", description: "Occasional new arrivals and promotions" },
];

export default function SettingsPage() {
  return (
    <AccountLayout>
      <h1 className="font-display text-h2 text-foreground">Settings</h1>
      <p className="mt-1 text-body text-muted-foreground">Manage your password and notification preferences.</p>

      <section className="mt-8">
        <h2 className="mb-4 font-display text-h4 text-foreground">Password</h2>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" />
          </div>
          <div>
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" />
          </div>
          <Button type="submit" className="w-fit">Update password</Button>
        </form>
      </section>

      <section className="mt-10 border-t border-outline pt-8">
        <h2 className="mb-4 font-display text-h4 text-foreground">Notifications</h2>
        <div className="flex max-w-md flex-col gap-4">
          {toggles.map((t) => (
            <label key={t.label} className="flex items-start justify-between gap-4">
              <div>
                <p className="text-body text-foreground">{t.label}</p>
                <p className="text-caption text-muted-foreground">{t.description}</p>
              </div>
              <input type="checkbox" defaultChecked className="mt-1 size-4 shrink-0 rounded-xs accent-primary" />
            </label>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t border-outline pt-8">
        <h2 className="mb-2 font-display text-h4 text-error">Danger zone</h2>
        <p className="mb-4 text-small text-muted-foreground">Deleting your account is permanent and cannot be undone.</p>
        <Button variant="destructive">Delete account</Button>
      </section>
    </AccountLayout>
  );
}
