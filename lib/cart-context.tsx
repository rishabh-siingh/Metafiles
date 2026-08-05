"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";
import type { Product } from "@/types";

interface CartItem {
  product: Product;
  addedAt: string;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
  isInCart: (productId: string) => boolean;
  subtotalCents: number;
  count: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => (prev.some((i) => i.product.id === product.id) ? prev : [...prev, { product, addedAt: new Date().toISOString() }]));
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const isInCart = useCallback((productId: string) => items.some((i) => i.product.id === productId), [items]);

  const subtotalCents = useMemo(() => items.reduce((sum, i) => sum + i.product.priceCents, 0), [items]);

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    clear,
    isInCart,
    subtotalCents,
    count: items.length,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
