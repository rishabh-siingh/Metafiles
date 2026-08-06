"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { categories } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const { count: cartCount } = useCart();
  const { count: wishlistCount } = useWishlist();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 overflow-hidden border-b border-outline bg-background/85 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,hsl(var(--primary)/0.16),transparent)]" />
      <div className="container-px mx-auto flex h-16 max-w-container items-center gap-4 sm:gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-display text-h5 tracking-tight">
          <Logo size={32} />
          <span className="hidden xs:inline">Metafiles</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setCategoriesOpen((o) => !o)}
              className="flex items-center gap-1 rounded-sm px-3 py-2 text-body text-foreground/90 transition-colors hover:bg-surface-raised hover:text-foreground"
              aria-expanded={categoriesOpen}
            >
              Categories
              <ChevronDown className={cn("size-3.5 transition-transform duration-fast", categoriesOpen && "rotate-180")} />
            </button>
            {categoriesOpen && (
              <div className="absolute left-0 top-full z-[100] w-72 animate-fade-up pt-2">
                <div className="grid grid-cols-1 gap-1 rounded-md border border-outline bg-surface-overlay p-2 shadow-elevation-3">
                  {categories.map((c) => (
                    <Link
                      key={c.id}
                      href={`/category/${c.slug}`}
                      className="flex items-center justify-between rounded-sm px-3 py-2.5 transition-colors hover:bg-surface-raised"
                    >
                      <p className="text-body font-medium text-foreground">{c.name}</p>
                      <span className="text-caption text-muted-foreground">{c.productCount}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/category/ui-kits" className="rounded-sm px-3 py-2 text-body text-foreground/90 transition-colors hover:bg-surface-raised hover:text-foreground">
            Bundles
          </Link>
          <Link href="/category/ui-kits" className="rounded-sm px-3 py-2 text-body text-foreground/90 transition-colors hover:bg-surface-raised hover:text-foreground">
            Authors
          </Link>
        </nav>

        <div className="hidden flex-1 items-center md:flex">
          <form action="/search" className="relative w-full max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              name="q"
              placeholder="Search products, authors, tags…"
              className="h-10 w-full rounded-sm border border-outline bg-surface-sunken pl-9 pr-16 text-body text-foreground placeholder:text-muted-foreground focus-visible:border-primary"
            />
            <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 rounded-xs border border-outline-strong bg-surface px-1.5 py-0.5 text-caption text-muted-foreground">
              ⌘K
            </kbd>
          </form>
        </div>

        <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
          <ThemeToggle className="hidden sm:flex" />
          <Button variant="ghost" size="icon" aria-label={`Wishlist (${wishlistCount} items)`} className="relative hidden sm:flex" asChild>
            <Link href="/wishlist">
              <Heart className="size-[18px]" />
              {wishlistCount > 0 && (
                <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label={`Cart (${cartCount} items)`} className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="size-[18px]" />
              {cartCount > 0 && (
                <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Link>
          </Button>
          <Button variant="secondary" size="sm" className="ml-1 hidden lg:inline-flex" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button size="sm" className="hidden lg:inline-flex" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
      </header>

      {/* Mobile sidebar drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background/70 backdrop-blur-xs transition-opacity duration-base ease-standard lg:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[85%] max-w-sm flex-col overflow-y-auto border-l border-outline bg-surface transition-transform duration-slow ease-emphasized lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="glow-surface glow-surface-corner border-b border-outline p-5">
          <div className="relative flex items-center justify-between">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 font-display text-h5">
              <Logo size={32} />
              Metafiles
            </Link>
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X className="size-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 p-5">
          <form action="/search" className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              name="q"
              placeholder="Search products…"
              className="h-11 w-full rounded-sm border border-outline bg-surface-sunken pl-9 pr-3 text-body"
            />
          </form>

          <div>
            <p className="mb-2 px-1 text-label uppercase tracking-wide text-muted-foreground">Categories</p>
            <div className="flex flex-col gap-0.5">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/category/${c.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-sm px-3 py-3 text-body text-foreground/90 transition-colors hover:bg-surface-raised hover:text-foreground"
                >
                  {c.name}
                  <ChevronRight className="size-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-2.5 border-t border-outline pt-5">
            <Button variant="secondary" size="lg" className="w-full" asChild>
              <Link href="/login" onClick={() => setMobileOpen(false)}>Log in</Link>
            </Button>
            <Button size="lg" className="w-full" asChild>
              <Link href="/signup" onClick={() => setMobileOpen(false)}>Sign up</Link>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
