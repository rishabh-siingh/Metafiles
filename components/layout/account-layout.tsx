import Link from "next/link";
import { User, Package, Download, Heart, Settings, Store } from "lucide-react";

const navItems = [
  { label: "Profile", href: "/account", icon: User },
  { label: "Orders", href: "/orders", icon: Package },
  { label: "Downloads", href: "/downloads", icon: Download },
  { label: "Wishlist", href: "/wishlist", icon: Heart },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-px mx-auto max-w-container py-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="flex flex-col gap-1 lg:sticky lg:top-24 lg:h-fit">
          <div className="mb-2 flex items-center gap-2 px-3 text-label uppercase tracking-wide text-muted-foreground">
            <Store className="size-3.5" /> Account
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2.5 rounded-sm px-3 py-2.5 text-body text-foreground/90 transition-colors hover:bg-surface-raised hover:text-foreground"
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
