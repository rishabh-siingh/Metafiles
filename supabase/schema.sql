-- ============================================================================
-- Fernwright marketplace — Supabase schema
-- Run this in the Supabase SQL editor (or via `supabase db push`).
-- ============================================================================

create extension if not exists "uuid-ossp";

-- ---------------------------------------------------------------------------
-- Profiles (extends Supabase auth.users)
-- ---------------------------------------------------------------------------
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  is_creator boolean not null default false,
  verified boolean not null default false,
  bio text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles are viewable by everyone"
  on public.profiles for select using (true);

create policy "Users can update their own profile"
  on public.profiles for update using (auth.uid() = id);

-- ---------------------------------------------------------------------------
-- Categories
-- ---------------------------------------------------------------------------
create table public.categories (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  description text,
  icon text,
  created_at timestamptz not null default now()
);

alter table public.categories enable row level security;
create policy "Categories are viewable by everyone" on public.categories for select using (true);

-- ---------------------------------------------------------------------------
-- Products
-- ---------------------------------------------------------------------------
create table public.products (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  tagline text not null,
  description text not null,
  product_type text not null check (product_type in ('ui-kit','font','course','ebook','template','plugin','icon-set','audio')),
  category_id uuid references public.categories(id) on delete set null,
  author_id uuid references public.profiles(id) on delete cascade,
  cover_image text not null,
  gallery text[] not null default '{}',
  price_cents integer not null check (price_cents >= 0),
  compare_at_cents integer,
  tags text[] not null default '{}',
  features text[] not null default '{}',
  compatibility text[] not null default '{}',
  requirements text[] not null default '{}',
  is_featured boolean not null default false,
  is_bestseller boolean not null default false,
  status text not null default 'draft' check (status in ('draft','pending_review','published','rejected')),
  download_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index products_category_idx on public.products(category_id);
create index products_author_idx on public.products(author_id);
create index products_status_idx on public.products(status);

alter table public.products enable row level security;

create policy "Published products are viewable by everyone"
  on public.products for select using (status = 'published');

create policy "Authors can view their own drafts"
  on public.products for select using (auth.uid() = author_id);

create policy "Authors can insert their own products"
  on public.products for insert with check (auth.uid() = author_id);

create policy "Authors can update their own products"
  on public.products for update using (auth.uid() = author_id);

-- ---------------------------------------------------------------------------
-- Product files (private bucket references, not directly downloadable
-- until purchase is verified via a Storage RLS policy / signed URL)
-- ---------------------------------------------------------------------------
create table public.product_files (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid references public.products(id) on delete cascade,
  file_name text not null,
  storage_path text not null,
  size_bytes bigint,
  created_at timestamptz not null default now()
);

alter table public.product_files enable row level security;

create policy "Files visible to product author"
  on public.product_files for select using (
    exists (select 1 from public.products p where p.id = product_id and p.author_id = auth.uid())
  );

-- ---------------------------------------------------------------------------
-- Orders + order items
-- ---------------------------------------------------------------------------
create table public.orders (
  id uuid primary key default uuid_generate_v4(),
  buyer_id uuid references public.profiles(id) on delete set null,
  total_cents integer not null,
  status text not null default 'pending' check (status in ('pending','paid','refunded','failed')),
  stripe_payment_intent_id text,
  created_at timestamptz not null default now()
);

alter table public.orders enable row level security;
create policy "Buyers can view their own orders" on public.orders for select using (auth.uid() = buyer_id);

create table public.order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete restrict,
  price_cents integer not null,
  created_at timestamptz not null default now()
);

alter table public.order_items enable row level security;
create policy "Buyers can view their own order items"
  on public.order_items for select using (
    exists (select 1 from public.orders o where o.id = order_id and o.buyer_id = auth.uid())
  );

-- A library view: what a buyer actually owns, used to gate downloads.
create view public.library as
  select oi.product_id, o.buyer_id, o.created_at as purchased_at
  from public.order_items oi
  join public.orders o on o.id = oi.order_id
  where o.status = 'paid';

-- ---------------------------------------------------------------------------
-- Reviews
-- ---------------------------------------------------------------------------
create table public.reviews (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid references public.products(id) on delete cascade,
  author_id uuid references public.profiles(id) on delete cascade,
  rating smallint not null check (rating between 1 and 5),
  title text,
  body text,
  helpful_count integer not null default 0,
  created_at timestamptz not null default now(),
  unique (product_id, author_id)
);

alter table public.reviews enable row level security;
create policy "Reviews are viewable by everyone" on public.reviews for select using (true);
create policy "Only verified buyers can review"
  on public.reviews for insert with check (
    exists (select 1 from public.library l where l.product_id = reviews.product_id and l.buyer_id = auth.uid())
  );

-- ---------------------------------------------------------------------------
-- Wishlists
-- ---------------------------------------------------------------------------
create table public.wishlist_items (
  user_id uuid references public.profiles(id) on delete cascade,
  product_id uuid references public.products(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, product_id)
);

alter table public.wishlist_items enable row level security;
create policy "Users manage their own wishlist"
  on public.wishlist_items for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- Helpful view: product rating rollups (keeps products table free of
-- denormalized aggregates that can drift)
-- ---------------------------------------------------------------------------
create view public.product_ratings as
  select product_id, avg(rating)::numeric(3,2) as average_rating, count(*) as review_count
  from public.reviews
  group by product_id;
