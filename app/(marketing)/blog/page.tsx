import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/mock-blog";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Blog", description: "Notes on design, pricing, and building a marketplace worth trusting." };

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="container-px mx-auto max-w-container py-16">
      <h1 className="font-display text-h1 text-foreground">The Metafiles blog</h1>
      <p className="mt-2 text-body-lg text-muted-foreground">Notes on design, pricing, and building a marketplace worth trusting.</p>

      <Link href={`/blog/${featured.slug}`} className="group mt-10 grid grid-cols-1 gap-6 overflow-hidden rounded-xl border border-outline bg-surface-raised md:grid-cols-2">
        <div className="relative aspect-[16/10] md:aspect-auto">
          <Image src={featured.coverImage} alt={featured.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center gap-3 p-8">
          <Badge variant="primary" className="w-fit">{featured.category}</Badge>
          <h2 className="font-display text-h2 text-foreground transition-colors group-hover:text-primary-hover">{featured.title}</h2>
          <p className="text-body text-muted-foreground">{featured.excerpt}</p>
          <p className="text-caption text-muted-foreground">
            {featured.author} · {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {featured.readTime}
          </p>
        </div>
      </Link>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-lg border border-outline bg-surface-raised">
            <div className="relative aspect-[16/10]">
              <Image src={post.coverImage} alt={post.title} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-5">
              <Badge variant="outline" className="w-fit">{post.category}</Badge>
              <h3 className="font-display text-h5 text-foreground transition-colors group-hover:text-primary-hover">{post.title}</h3>
              <p className="line-clamp-2 text-small text-muted-foreground">{post.excerpt}</p>
              <p className="mt-auto text-caption text-muted-foreground">{post.readTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
