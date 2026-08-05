export type ProductType = "ui-kit" | "font" | "course" | "ebook" | "template" | "plugin" | "icon-set" | "audio";

export interface Author {
  id: string;
  name: string;
  avatarUrl: string;
  verified: boolean;
  productCount: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
}

export interface Review {
  id: string;
  author: string;
  avatarUrl: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  helpful: number;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  type: ProductType;
  category: Pick<Category, "slug" | "name">;
  author: Author;
  coverImage: string;
  gallery: string[];
  priceCents: number;
  compareAtCents?: number;
  rating: number;
  reviewCount: number;
  downloadCount: number;
  tags: string[];
  featured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  updatedAt: string;
  features: string[];
  includedFiles: { name: string; size: string }[];
  compatibility: string[];
  requirements: string[];
  versionHistory: { version: string; date: string; notes: string }[];
}
