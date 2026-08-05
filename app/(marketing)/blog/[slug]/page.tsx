import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { blogPosts, getPostBySlug } from "@/lib/mock-blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [{ url: post.coverImage }], type: "article" },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: post.coverImage,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
  };

  return (
    <article className="container-px mx-auto max-w-container py-10">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />

      <div className="mx-auto mt-6 max-w-prose">
        <Badge variant="primary">{post.category}</Badge>
        <h1 className="mt-3 text-balance font-display text-h1 text-foreground">{post.title}</h1>
        <div className="mt-4 flex items-center gap-3">
          <Image src={post.authorAvatar} alt={post.author} width={40} height={40} className="size-10 rounded-full object-cover" />
          <div>
            <p className="text-small font-medium text-foreground">{post.author}</p>
            <p className="text-caption text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {post.readTime}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-8 aspect-[16/9] max-w-4xl overflow-hidden rounded-xl">
        <Image src={post.coverImage} alt={post.title} fill sizes="(min-width:1024px) 900px, 100vw" className="object-cover" priority />
      </div>

      <div className="prose-legal mx-auto mt-10 flex max-w-prose flex-col gap-5 text-body-lg text-foreground/90">
        {post.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
