import Link from "next/link";
import { LayoutGrid, Type, GraduationCap, BookOpen, FileStack, Shapes, ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/mock-data";
import { SectionHeader } from "./section-header";

const icons = {
  LayoutGrid,
  Type,
  GraduationCap,
  BookOpen,
  FileStack,
  Shapes,
} as const;

export function CategoryGrid() {
  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-20">
      <SectionHeader eyebrow="Explore" title="Featured categories" description="Six ways into the catalog — start with what you're building." />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {categories.map((cat) => {
          const Icon = icons[cat.icon as keyof typeof icons] ?? LayoutGrid;
          return (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-lg border border-outline bg-surface-raised p-5 transition-all duration-base ease-standard hover:-translate-y-0.5 hover:border-outline-strong hover:shadow-elevation-3"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-sm bg-primary-soft text-primary-hover">
                  <Icon className="size-5" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity duration-fast group-hover:opacity-100" />
              </div>
              <div>
                <h3 className="font-display text-h5 text-foreground">{cat.name}</h3>
                <p className="mt-1 text-caption text-muted-foreground">{cat.productCount} products</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
