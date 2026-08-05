import { Hero } from "@/components/home/hero";
import { CategoryGrid } from "@/components/home/category-grid";
import { ProductRail } from "@/components/home/product-rail";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { products } from "@/lib/mock-data";

export default function HomePage() {
  const trending = products.filter((p) => p.featured);
  const newArrivals = products.filter((p) => p.isNew);
  const bestsellers = products.filter((p) => p.isBestseller);

  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductRail
        eyebrow="Trending"
        title="Trending this week"
        description="What buyers are adding to their downloads right now."
        href="/category/ui-kits"
        products={trending}
        tone="sunken"
      />
      <ProductRail
        eyebrow="Just listed"
        title="New arrivals"
        description="Fresh from independent creators in the last two weeks."
        href="/category/ui-kits"
        products={newArrivals}
      />
      <Stats />
      <ProductRail
        eyebrow="All-time favorites"
        title="Best sellers"
        description="The products buyers come back to buy again for new projects."
        href="/category/ui-kits"
        products={bestsellers}
        tone="sunken"
      />
      <Testimonials />
      <FAQ />
    </>
  );
}
