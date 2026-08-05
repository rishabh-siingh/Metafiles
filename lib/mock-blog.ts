export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "state-of-design-systems-2026",
    title: "The state of design systems in 2026",
    excerpt: "What changed once AI-assisted handoff stopped being a novelty and started being the default workflow.",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=700&fit=crop",
    author: "Priya Nandakumar",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces",
    date: "2026-07-15",
    readTime: "6 min read",
    category: "Design Systems",
    content: [
      "Two years ago, most teams treated their design system as a Figma library and a Storybook nobody updated. That's changed — largely because the cost of keeping documentation current dropped once generation could be automated from the source components themselves.",
      "The teams pulling ahead in 2026 share one habit: they treat the design system as a product with its own roadmap, not a side project bolted onto a redesign. That means a named owner, a changelog, and actual deprecation cycles instead of components that quietly rot.",
      "The other shift worth naming is density. Expressive, spacious interfaces had a moment, but teams shipping real software are pulling back toward tighter information density — without losing the polish that made the expressive era worth learning from in the first place.",
    ],
  },
  {
    slug: "pricing-digital-products-without-guessing",
    title: "Pricing digital products without guessing",
    excerpt: "A framework for setting a launch price you won't regret six months in.",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1200&h=700&fit=crop",
    author: "Kenji Osei",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
    date: "2026-06-28",
    readTime: "5 min read",
    category: "Business",
    content: [
      "Most creators price their first product by looking at what similar things cost and picking a number that feels roughly right. That's a reasonable starting point, but it's not a pricing strategy — it's a guess with extra steps.",
      "A better starting question: what is the buyer's next-best alternative, and how much time or money does your product save against it? If your UI kit replaces forty hours of a designer's time, the price ceiling is much higher than 'what other kits cost.'",
      "Resist the urge to price low to compete on volume unless you've actually modeled the math. Most independent creators do better with fewer, higher-priced sales than with a race to the bottom.",
    ],
  },
  {
    slug: "why-we-review-every-listing",
    title: "Why we review every single listing by hand",
    excerpt: "The unglamorous process behind keeping a marketplace worth trusting.",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=700&fit=crop",
    author: "Mira Solberg",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    date: "2026-06-05",
    readTime: "4 min read",
    category: "Behind the scenes",
    content: [
      "Every product that goes live on Metafiles passes through a human reviewer first. It's slower than automated approval, and it means we turn away listings that would technically be fine to publish elsewhere.",
      "The bar isn't perfection — it's honesty. Do the screenshots match what's in the download? Does the license page say what the creator actually intends? Is the file organized well enough that a buyer won't feel lost?",
      "This doesn't scale as fast as we'd sometimes like. But a marketplace's only real asset is whether buyers trust that what they see is what they'll get, and that trust compounds slower than it erodes.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
