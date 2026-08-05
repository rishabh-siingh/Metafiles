import type { Product, Category, Author, Review } from "@/types";

export const categories: Category[] = [
  { id: "c1", slug: "ui-kits", name: "UI Kits", description: "Ready-to-build interface systems", icon: "LayoutGrid", productCount: 214 },
  { id: "c2", slug: "fonts", name: "Fonts", description: "Type families for print and screen", icon: "Type", productCount: 389 },
  { id: "c3", slug: "courses", name: "Courses", description: "Guided learning from working creators", icon: "GraduationCap", productCount: 96 },
  { id: "c4", slug: "ebooks", name: "Ebooks", description: "In-depth guides and playbooks", icon: "BookOpen", productCount: 152 },
  { id: "c5", slug: "templates", name: "Templates", description: "Documents, decks, and site starters", icon: "FileStack", productCount: 301 },
  { id: "c6", slug: "icon-sets", name: "Icon Sets", description: "Consistent iconography systems", icon: "Shapes", productCount: 178 },
];

const authors: Author[] = [
  { id: "a1", name: "Mira Solberg", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces", verified: true, productCount: 12 },
  { id: "a2", name: "Theo Marchetti", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=faces", verified: true, productCount: 8 },
  { id: "a3", name: "Priya Nandakumar", avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&fit=crop&crop=faces", verified: true, productCount: 21 },
  { id: "a4", name: "Kenji Osei", avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=128&h=128&fit=crop&crop=faces", verified: false, productCount: 4 },
  { id: "a5", name: "Elena Voss", avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=128&h=128&fit=crop&crop=faces", verified: true, productCount: 15 },
];

const reviews: Review[] = [
  { id: "r1", author: "Sam Whitfield", avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&fit=crop&crop=faces", rating: 5, date: "2026-06-14", title: "Saved me two weeks of work", body: "The component structure is exactly how I'd have built it myself, if I had the time. Dropped it into an existing design system with almost no rework.", helpful: 34 },
  { id: "r2", author: "Nadia Farouk", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces", rating: 4, date: "2026-05-30", title: "Great value, minor gaps in docs", body: "Everything works well out of the box. The documentation could use a few more edge-case examples but support answered quickly.", helpful: 12 },
  { id: "r3", author: "Tomás Herrera", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces", rating: 5, date: "2026-05-02", title: "Exactly as previewed", body: "What you see in the gallery is what you get — no surprises, clean layer naming, and it scales beautifully at different sizes.", helpful: 21 },
];

function money(n: number) {
  return Math.round(n * 100);
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "aperture-ui-kit",
    title: "Aperture UI Kit",
    tagline: "A 400+ component system for product teams shipping fast",
    description:
      "Aperture is a complete interface kit built for teams who need to move from idea to production without reinventing basic patterns. Every component ships in three density modes and follows an 8pt spacing grid, with light and dark variants fully wired.",
    type: "ui-kit",
    category: { slug: "ui-kits", name: "UI Kits" },
    author: authors[0],
    coverImage: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&h=900&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&h=1200&fit=crop",
    ],
    priceCents: money(59),
    compareAtCents: money(89),
    rating: 4.8,
    reviewCount: 312,
    downloadCount: 8420,
    tags: ["figma", "design-system", "dashboard", "dark-mode"],
    featured: true,
    isBestseller: true,
    updatedAt: "2026-07-02",
    features: [
      "420+ components across 12 categories",
      "Auto-layout and variants fully configured",
      "Light and dark themes with linked color styles",
      "Figma + Sketch source files included",
    ],
    includedFiles: [
      { name: "Aperture-UI-Kit.fig", size: "184 MB" },
      { name: "Aperture-UI-Kit.sketch", size: "162 MB" },
      { name: "Style-Guide.pdf", size: "12 MB" },
    ],
    compatibility: ["Figma", "Sketch", "Adobe XD (partial)"],
    requirements: ["Figma desktop or web app", "No plugins required"],
    versionHistory: [
      { version: "3.2.0", date: "2026-07-02", notes: "Added 40 new e-commerce components, refined focus states." },
      { version: "3.1.0", date: "2026-04-18", notes: "Introduced compact density mode across all components." },
    ],
  },
  {
    id: "p2",
    slug: "canela-serif-family",
    title: "Canela Serif Family",
    tagline: "A quietly confident serif for editorial and branding work",
    description:
      "Canela balances warmth and precision — a serif built for long-form reading that still holds up at display sizes. Includes 8 weights with matching italics and an extended Latin character set.",
    type: "font",
    category: { slug: "fonts", name: "Fonts" },
    author: authors[1],
    coverImage: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=1200&h=900&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&h=1200&fit=crop",
    ],
    priceCents: money(38),
    rating: 4.9,
    reviewCount: 187,
    downloadCount: 5310,
    tags: ["serif", "editorial", "branding", "webfont"],
    featured: true,
    isNew: true,
    updatedAt: "2026-07-15",
    features: [
      "8 weights, thin to black, with true italics",
      "Extended Latin + Vietnamese support",
      "OpenType features: ligatures, oldstyle figures, small caps",
      "Desktop, webfont, and app licenses included",
    ],
    includedFiles: [
      { name: "Canela-Desktop.zip", size: "4.2 MB" },
      { name: "Canela-Webfonts.zip", size: "1.8 MB" },
      { name: "Specimen.pdf", size: "22 MB" },
    ],
    compatibility: ["macOS", "Windows", "Web (woff2)"],
    requirements: ["Any font manager or OS-level font install"],
    versionHistory: [{ version: "1.4", date: "2026-07-15", notes: "Added Vietnamese diacritics and 2 new weights." }],
  },
  {
    id: "p3",
    slug: "product-design-systems-course",
    title: "Design Systems in Practice",
    tagline: "A 9-hour course on building systems real teams actually adopt",
    description:
      "Learn how to design, document, and roll out a design system without stalling your product team. Taught by a working design systems lead with case studies from three different company stages.",
    type: "course",
    category: { slug: "courses", name: "Courses" },
    author: authors[2],
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&h=1200&fit=crop",
    ],
    priceCents: money(129),
    compareAtCents: money(179),
    rating: 4.7,
    reviewCount: 421,
    downloadCount: 3980,
    tags: ["design-systems", "figma", "leadership", "case-study"],
    isBestseller: true,
    updatedAt: "2026-06-20",
    features: [
      "9 hours across 42 lessons, fully captioned",
      "3 real-world case studies with source files",
      "Downloadable templates for audits and governance docs",
      "Lifetime access and future updates included",
    ],
    includedFiles: [
      { name: "Course-Videos (streaming)", size: "9h 12m" },
      { name: "Workbook.pdf", size: "8 MB" },
      { name: "Templates.zip", size: "34 MB" },
    ],
    compatibility: ["Any modern browser", "Companion app (iOS/Android)"],
    requirements: ["Figma account recommended for exercises"],
    versionHistory: [{ version: "2.0", date: "2026-06-20", notes: "Re-recorded modules 4–6, added governance case study." }],
  },
  {
    id: "p4",
    slug: "north-icon-system",
    title: "North Icon System",
    tagline: "1,200 icons drawn on a single consistent grid",
    description:
      "North is an icon system built stroke-first for interface work — every icon shares the same optical weight, corner radius, and grid so nothing looks mismatched once it ships.",
    type: "icon-set",
    category: { slug: "icon-sets", name: "Icon Sets" },
    author: authors[4],
    coverImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1200&h=900&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&h=1200&fit=crop",
    ],
    priceCents: money(24),
    rating: 4.6,
    reviewCount: 98,
    downloadCount: 6210,
    tags: ["icons", "svg", "figma", "interface"],
    isNew: true,
    updatedAt: "2026-07-10",
    features: [
      "1,200 icons in outline and filled styles",
      "SVG, React component, and Figma library formats",
      "Consistent 24px grid, 2px stroke",
      "Organized into 38 categories",
    ],
    includedFiles: [
      { name: "North-Icons.svg.zip", size: "9 MB" },
      { name: "North-Icons-React.zip", size: "3 MB" },
      { name: "North-Icons.fig", size: "26 MB" },
    ],
    compatibility: ["Figma", "React", "Vue", "Web (SVG)"],
    requirements: ["Node 18+ for the React package"],
    versionHistory: [{ version: "2.3", date: "2026-07-10", notes: "Added 120 new commerce and finance icons." }],
  },
  {
    id: "p5",
    slug: "the-pricing-playbook",
    title: "The Pricing Playbook",
    tagline: "A practical ebook on pricing digital products without guesswork",
    description:
      "A concise, example-driven guide to structuring pricing tiers, testing willingness to pay, and avoiding the most common mistakes founders make when pricing software and digital goods.",
    type: "ebook",
    category: { slug: "ebooks", name: "Ebooks" },
    author: authors[3],
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=900&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1600&h=1200&fit=crop",
    ],
    priceCents: money(19),
    rating: 4.5,
    reviewCount: 66,
    downloadCount: 2140,
    tags: ["pricing", "strategy", "startups"],
    updatedAt: "2026-05-28",
    features: [
      "142 pages, 6 chapters, 24 worked examples",
      "Includes a pricing-model decision worksheet",
      "EPUB, PDF, and MOBI formats",
    ],
    includedFiles: [
      { name: "Pricing-Playbook.pdf", size: "6 MB" },
      { name: "Pricing-Playbook.epub", size: "2 MB" },
      { name: "Worksheet.xlsx", size: "1 MB" },
    ],
    compatibility: ["Any e-reader", "PDF viewer"],
    requirements: ["None"],
    versionHistory: [{ version: "1.1", date: "2026-05-28", notes: "Added a chapter on usage-based pricing." }],
  },
  {
    id: "p6",
    slug: "meridian-notion-template",
    title: "Meridian Notion OS",
    tagline: "A complete workspace template for small product teams",
    description:
      "Meridian brings project tracking, docs, and a lightweight CRM into one connected Notion workspace, with dashboards that update automatically as you fill in linked databases.",
    type: "template",
    category: { slug: "templates", name: "Templates" },
    author: authors[2],
    coverImage: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&h=900&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&h=1200&fit=crop",
    ],
    priceCents: money(29),
    compareAtCents: money(45),
    rating: 4.8,
    reviewCount: 254,
    downloadCount: 7830,
    tags: ["notion", "productivity", "team-os"],
    featured: true,
    updatedAt: "2026-06-30",
    features: [
      "12 connected databases with rollups pre-built",
      "Team, solo, and agency variants included",
      "Onboarding walkthrough page included",
    ],
    includedFiles: [{ name: "Meridian-Template-Link.txt", size: "1 KB" }, { name: "Setup-Guide.pdf", size: "4 MB" }],
    compatibility: ["Notion (free or paid plan)"],
    requirements: ["Notion account"],
    versionHistory: [{ version: "4.0", date: "2026-06-30", notes: "Rebuilt CRM view, added agency variant." }],
  },
  {
    id: "p7",
    slug: "fieldnotes-audio-pack",
    title: "Fieldnotes Ambient Pack",
    tagline: "38 royalty-free ambient tracks for video and product demos",
    description:
      "A collection of warm, understated ambient tracks designed to sit under voiceover and product demo footage without competing for attention.",
    type: "audio",
    category: { slug: "templates", name: "Templates" },
    author: authors[4],
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=900&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&h=1200&fit=crop"],
    priceCents: money(34),
    rating: 4.4,
    reviewCount: 41,
    downloadCount: 1520,
    tags: ["audio", "royalty-free", "video"],
    updatedAt: "2026-04-11",
    features: ["38 tracks, 2–4 minutes each", "WAV and MP3 formats", "Full commercial license included"],
    includedFiles: [{ name: "Fieldnotes-WAV.zip", size: "410 MB" }, { name: "Fieldnotes-MP3.zip", size: "88 MB" }],
    compatibility: ["Any DAW or video editor"],
    requirements: ["None"],
    versionHistory: [{ version: "1.0", date: "2026-04-11", notes: "Initial release." }],
  },
  {
    id: "p8",
    slug: "orbit-dashboard-template",
    title: "Orbit Analytics Dashboard",
    tagline: "A Next.js + Tailwind admin dashboard, fully typed",
    description:
      "Orbit is a production-ready analytics dashboard template built with the Next.js App Router, Tailwind, and Recharts — designed to be forked, not just previewed.",
    type: "template",
    category: { slug: "templates", name: "Templates" },
    author: authors[0],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=1200&fit=crop",
    ],
    priceCents: money(49),
    rating: 4.7,
    reviewCount: 133,
    downloadCount: 4020,
    tags: ["nextjs", "tailwind", "dashboard", "typescript"],
    isNew: true,
    updatedAt: "2026-07-20",
    features: ["Fully typed with TypeScript + Zod", "12 chart types wired to sample data", "Dark mode and responsive by default"],
    includedFiles: [{ name: "orbit-source.zip", size: "18 MB" }],
    compatibility: ["Next.js 14+", "Node 18+"],
    requirements: ["Node 18+", "npm or pnpm"],
    versionHistory: [{ version: "2.1", date: "2026-07-20", notes: "Migrated to App Router, added Server Components." }],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products.filter((p) => p.id !== product.id && p.category.slug === product.category.slug).slice(0, limit);
}

export const mockReviews = reviews;
