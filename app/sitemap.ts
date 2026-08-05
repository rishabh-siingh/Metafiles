import type { MetadataRoute } from "next";
import { products, categories } from "@/lib/mock-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://metafiles.com";

  const staticRoutes = ["", "/about", "/contact", "/faq"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/category/${c.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/product/${p.slug}`,
    lastModified: new Date(p.updatedAt),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
