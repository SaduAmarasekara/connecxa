"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export interface CartItem {
  cartItemId: string;          // unique id (productId + colorId + name + line)
  productId: number;
  productName: string;
  colorId: number | null;
  colorName: string | null;
  colorCode: string | null;
  imageUrl: string | null;     // full URL (with BACKEND prefix already applied)
  price: number;
  quantity: number;
  nameInput: string;
  additionalLine: string;
  warranty: string | null;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  addItem: (item: Omit<CartItem, "cartItemId" | "quantity">) => void;
  updateQty: (cartItemId: string, qty: number) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "connecxa_cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((incoming: Omit<CartItem, "cartItemId" | "quantity">) => {
    const cartItemId = `${incoming.productId}-${incoming.colorId ?? "none"}-${incoming.nameInput}-${incoming.additionalLine}`;
    setItems(prev => {
      const existing = prev.find(i => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map(i => i.cartItemId === cartItemId ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...incoming, cartItemId, quantity: 1 }];
    });
  }, []);

  const updateQty = useCallback((cartItemId: string, qty: number) => {
    if (qty < 1) return;
    setItems(prev => prev.map(i => i.cartItemId === cartItemId ? { ...i, quantity: qty } : i));
  }, []);

  const removeItem = useCallback((cartItemId: string) => {
    setItems(prev => prev.filter(i => i.cartItemId !== cartItemId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, count, addItem, updateQty, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
