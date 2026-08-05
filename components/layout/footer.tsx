import Link from "next/link";
import { Twitter, Instagram, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";

const columns = [
  {
    title: "Marketplace",
    links: [
      { label: "Browse all", href: "/category/ui-kits" },
      { label: "UI Kits", href: "/category/ui-kits" },
      { label: "Fonts", href: "/category/fonts" },
      { label: "Courses", href: "/category/courses" },
      { label: "Bundles", href: "/category/templates" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Affiliate program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "/support" },
      { label: "Refund policy", href: "/refund-policy" },
      { label: "License", href: "/license" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
      { label: "DMCA", href: "/dmca" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="glow-surface border-t border-outline bg-surface">
      <div className="container-px mx-auto max-w-container py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-h5">
              <Logo size={32} />
              Metafiles
            </Link>
            <p className="max-w-xs text-small text-muted-foreground">
              A curated marketplace for design assets, fonts, courses, and templates from independent creators.
            </p>
            <div className="flex items-center gap-2">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-sm border border-outline text-muted-foreground transition-colors hover:border-outline-strong hover:text-foreground"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-label uppercase tracking-wide text-muted-foreground">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-small text-foreground/80 transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glow-surface mt-16 flex flex-col gap-4 rounded-lg border border-outline bg-surface-raised p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-h5">Get new drops in your inbox</p>
            <p className="mt-1 text-small text-muted-foreground">One email a week. New products, no noise.</p>
          </div>
          <form className="flex w-full max-w-sm flex-col gap-2 xs:flex-row">
            <input
              size="md"
              type="email"
              required
              placeholder="you@studio.com"
              className="h-12 min-w-0 flex-1 rounded-sm border border-outline bg-surface-sunken px-3.5 text-body placeholder:text-muted-foreground focus-visible:border-primary"
            />
            <Button type="submit" size="md" className="w-full gap-1.5 xs:w-auto xs:shrink-0">
              <Send className="size-4" /> Subscribe
            </Button>
          </form>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-3 border-t border-outline pt-6 text-caption text-muted-foreground sm:flex-row">
          <p>© 2026 Metafiles, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-foreground">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
