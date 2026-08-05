# Fernwright — Digital Products Marketplace

A premium, from-scratch digital products marketplace built with Next.js 14 (App Router),
TypeScript, Tailwind, and Supabase. Sells UI kits, fonts, courses, ebooks, templates, icon
sets, and audio from independent creators.

This repo was hand-authored file by file (not scaffolded via `create-next-app`), so read
this file before running anything — a few one-time setup steps are required.

---

## 1. Prerequisites

- Node.js 18.17+ (Node 20 LTS recommended)
- npm 9+ (or pnpm/yarn if you prefer — update the lockfile accordingly)
- A free [Supabase](https://supabase.com) project (only needed once you move past mock data)
- A [Vercel](https://vercel.com) account for deployment

## 2. Install

```bash
npm install
```

This installs Next.js, React, Tailwind, Radix primitives, Supabase's JS client,
React Hook Form + Zod, Framer Motion, and lucide-react — everything referenced in the
codebase. No other setup is required to run the site with mock data.

## 3. Environment variables

Copy the example file and fill in your Supabase project's values (Project Settings → API):

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The app **runs and looks fully functional without these** — every page currently reads
from `lib/mock-data.ts` and `lib/mock-blog.ts` so you can evaluate the design system
immediately. Section 6 below explains how to cut over to live Supabase data.

## 4. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build — do this before every deploy to catch type errors
npm run start   # serve the production build locally
npm run lint    # ESLint
```

---

## 5. Project structure

```
app/
  layout.tsx                 Root layout — fonts, metadata, Providers, Navbar/Footer
  page.tsx                   Home page (assembles all home sections)
  globals.css                Design tokens (colors, base styles)
  sitemap.ts / robots.ts     SEO
  not-found.tsx               404
  global-error.tsx            500 boundary
  (marketing)/
    product/[slug]/           Product detail page + generateStaticParams
    category/[slug]/          Category listing + filters
    cart/, checkout/, order-success/
    wishlist/, downloads/, orders/, orders/[id]/
    account/, settings/       (uses AccountLayout sidebar)
    login/, signup/
    blog/, blog/[slug]/
    about/, pricing/, contact/, faq/, support/, affiliate/
    privacy/, terms/, refund-policy/, license/, dmca/
    maintenance/, coming-soon/
    search/

components/
  ui/            Design-system primitives (Button, Card, Badge, Tabs, Dialog, Toast, ...)
  layout/        Navbar, Footer, AccountLayout, LegalLayout
  home/          Hero, CategoryGrid, ProductRail, Stats, Testimonials, FAQ, CTA
  product/       ProductCard, ProductGallery, PurchasePanel, ProductTabs, ReviewCard,
                 CategoryFilters, CategoryToolbar, OrderTimeline
  providers.tsx  Wraps the app in Cart/Wishlist/Toast context

lib/
  mock-data.ts          Product/category/author/review fixtures
  mock-blog.ts          Blog post fixtures
  cart-context.tsx      Client-side cart state (React context)
  wishlist-context.tsx  Client-side wishlist state
  schemas/checkout.ts   Zod schema for the checkout form
  supabase/client.ts    Browser Supabase client
  supabase/server.ts    Server Component / Server Action Supabase client
  utils.ts              cn(), formatPrice(), formatCompactNumber()

types/index.ts     Product, Category, Author, Review, ProductType

supabase/schema.sql  Full Postgres schema + RLS policies (see Section 6)
```

## 6. Wiring up Supabase (moving off mock data)

The schema is already written for you at `supabase/schema.sql`. To activate it:

1. **Run the schema.** In the Supabase dashboard, open the SQL editor, paste the contents
   of `supabase/schema.sql`, and run it. This creates `profiles`, `categories`, `products`,
   `product_files`, `orders`, `order_items`, `reviews`, `wishlist_items`, plus two views
   (`library` — what a buyer owns, used to gate downloads and reviews — and
   `product_ratings` — rating rollups) with row-level security already configured.

2. **Enable auth providers** you want (Email, Google, GitHub) under Authentication →
   Providers.

3. **Seed data.** Either insert rows manually via the Table Editor, or write a seed script
   that maps `lib/mock-data.ts` into `insert` calls against `products`/`categories` using
   the service-role key server-side (never in a client component).

4. **Swap fetching.** Pages currently importing from `lib/mock-data.ts`
   (e.g. `app/page.tsx`, `app/(marketing)/product/[slug]/page.tsx`) are Server Components,
   so replacing the import is mechanical:

   ```ts
   // before
   import { products } from "@/lib/mock-data";

   // after
   import { createClient } from "@/lib/supabase/server";
   const supabase = createClient();
   const { data: products } = await supabase
     .from("products")
     .select("*, category:categories(*), author:profiles(*)")
     .eq("status", "published");
   ```

   Do this one page at a time — the mock data's shape matches the `Product` type in
   `types/index.ts`, which matches the SQL schema's column names, so the swap doesn't
   require touching any JSX.

5. **File storage.** Create a private Supabase Storage bucket (e.g. `product-files`) for
   the actual downloadable assets. Reference each file's `storage_path` in the
   `product_files` table. Generate signed URLs server-side, gated by a check against the
   `library` view, so only buyers who purchased a product can download it.

6. **Payments.** The checkout form in `app/(marketing)/checkout/page.tsx` currently
   simulates payment with a timeout. Wire it to Stripe:
   - Add `STRIPE_SECRET_KEY` / `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` to `.env.local`
   - Create a Server Action that creates a Stripe PaymentIntent and an `orders` row
     (`status: 'pending'`)
   - Handle the `payment_intent.succeeded` webhook to flip the order to `status: 'paid'`
     and insert `order_items`
   - Replace the simulated `onSubmit` in the checkout page with Stripe Elements

## 7. State management notes

Cart and wishlist currently live in **React context with in-memory state**
(`lib/cart-context.tsx`, `lib/wishlist-context.tsx`) — they reset on page reload by
design, since there's no persistence layer wired up yet. Two reasonable upgrade paths:

- **Signed-in users:** persist to a `cart_items` / `wishlist_items` Supabase table (the
  `wishlist_items` table already exists in the schema) and hydrate context from a Server
  Component on load.
- **Guests:** persist to a cookie or `localStorage` and merge into the Supabase-backed
  cart on login.

## 8. Deploying to Vercel

```bash
npm i -g vercel   # if you don't have it
vercel
```

Or connect the GitHub repo directly in the Vercel dashboard (Import Project). Either way:

1. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (and
   `SUPABASE_SERVICE_ROLE_KEY` if you have server-only routes that need it) as
   Environment Variables in the Vercel project settings — for Production, Preview, and
   Development.
2. Vercel auto-detects Next.js — no build command changes needed
   (`next build` / `.next` output).
3. Update `metadataBase` in `app/layout.tsx` and the hardcoded URLs in `app/sitemap.ts` /
   `app/robots.ts` from `https://fernwright.example.com` to your real production domain
   before going live, so Open Graph images and canonical URLs resolve correctly.
4. Push to `main` — Vercel builds and deploys automatically on every push, with preview
   deployments on every PR.

## 9. Design system reference

All tokens live in `tailwind.config.ts` (spacing, radius, shadows, motion, type scale) and
`app/globals.css` (color HSL variables, light/dark). To retheme:

- **Accent color:** change `--primary` (and its `-hover`/`-pressed`/`-soft` companions) in
  `globals.css`. Everything else derives from it.
- **Type scale:** each size in `tailwind.config.ts` under `theme.extend.fontSize` is a
  `[size, { lineHeight, letterSpacing, fontWeight }]` tuple — edit in one place, applies
  everywhere via `text-h1`, `text-body`, etc.
- **Light mode:** toggle by adding/removing the `.light` class on `<html>` (see the
  `.light { ... }` block in `globals.css`); the app ships dark-mode-first
  (`<html className="dark">` in `app/layout.tsx`).

## 10. What's stubbed vs. production-ready

**Production-ready patterns** (correct architecture, just needs real data/keys):
Supabase schema + RLS, Server Component data fetching pattern, SEO metadata + JSON-LD,
sitemap/robots, checkout form validation (Zod), design token system.

**Intentionally stubbed** (by design, to keep this a reviewable single delivery):
payment processing (simulated), file delivery (no signed URLs wired yet), auth (forms
exist, no Supabase Auth calls wired), cart/wishlist persistence (in-memory only), email
notifications, search (client-side substring match, not full-text/vector search).

Each of these is called out inline in the relevant file with a comment pointing to what a
production implementation would do.
