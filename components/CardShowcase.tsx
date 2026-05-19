"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface ProductColor {
  product_color_id: number;
  color_name: string;
  color_code: string;
  image_url: string | null;
  is_active: boolean;
}

interface Product {
  product_id: number;
  product_name: string;
  price: number;
  description: string | null;
  material: string | null;
  warranty: string | null;
  preview_image_url: string | null;
  status: string;
  product_category_id: number | null;
  product_colors: ProductColor[];
  product_category?: { category_name: string } | null;
}

interface ProductCategory {
  product_category_id: number;
  category_name: string;
}

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export default function CardShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeColors, setActiveColors] = useState<Record<number, number>>({});
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch(`${BACKEND}/products/public/active`),
          fetch(`${BACKEND}/product-category/public`),
        ]);
        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();

        if (productsData.success) {
          setProducts(productsData.data.filter((p: Product) => p.status === "active"));
        }
        if (categoriesData.success) {
          setCategories(categoriesData.data);
        }
      } catch (error) {
        console.error("Failed to fetch shop data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Build the list of categories that have at least one product
  const categoriesWithProducts = categories.filter((cat) =>
    products.some((p) => p.product_category_id === cat.product_category_id)
  );

  const tabs = ["All Products", ...categoriesWithProducts.map((cat) => cat.category_name)];

  const filteredProducts = activeTab === 0
    ? products
    : products.filter((p) => {
      const cat = categoriesWithProducts[activeTab - 1];
      return cat && p.product_category_id === cat.product_category_id;
    });

  return (
    <section
      className="py-16 md:py-24"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#ffffff" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .cards-container {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 20px;
          padding: 0 0 40px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .card-wrap {
          width: 300px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          scroll-snap-align: center;
        }

        @media (min-width: 768px) {
          .cards-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            padding: 0 0 40px;
            overflow-x: visible;
            scroll-snap-type: none;
          }
          .card-wrap {
            width: 100%;
            max-width: 100%;
            flex-shrink: unset;
            scroll-snap-align: none;
          }
        }

        @media (min-width: 1024px) {
          .cards-container {
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;
          }
        }

        .gray-box { transition: background 0.3s ease; }
        .gray-box:hover { background: #EBEBEB !important; }
        .biz-card { transition: transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease; }
        .biz-card:hover { transform: perspective(800px) rotateY(-5deg) rotateX(2deg) scale(1.04); box-shadow: 24px 24px 56px rgba(0,0,0,0.28) !important; }
        .color-dot { transition: transform 0.2s ease, box-shadow 0.2s ease; cursor: pointer; border-radius: 50%; }
        .color-dot:hover { transform: scale(1.15); }
        .tab-pill { border: none; cursor: pointer; font-weight: 700; font-size: 15px; padding: 10px 28px; border-radius: 99px; transition: all 0.25s ease; font-family: inherit; }
        .carousel-arrow {
          position: absolute;
          top: 33%; transform: translateY(-50%);
          width: 48px; height: 48px;
          background: rgba(17,17,17,0.6); backdrop-filter: blur(8px);
          border: none; cursor: pointer; color: #fff;
          display: flex; align-items: center; justify-content: center;
          z-index: 50; transition: all 0.2s ease;
        }
        .arrow-right { right: 0; border-top-left-radius: 99px; border-bottom-left-radius: 99px; }
        .arrow-left  { left: 0;  border-top-right-radius: 99px; border-bottom-right-radius: 99px; }
        .carousel-arrow:hover { background: rgba(17,17,17,0.8) !important; }
        @media (max-width: 767px) { .carousel-arrow { width: 40px; height: 40px; top: 25%; } }
        @media (min-width: 768px) { .carousel-arrow { display: none !important; } }
      `}</style>

      <div style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto", paddingLeft: 32, paddingRight: 32 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{
            fontSize: "clamp(34px, 4vw, 48px)",
            fontWeight: 700, color: "#111827",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            margin: "0 0 40px 0",
          }}>
            Design Your NFC Business Card
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className="tab-pill"
                onClick={() => setActiveTab(i)}
                style={{
                  background: activeTab === i ? "#005AD1" : "#F5F5F5",
                  color: activeTab === i ? "#ffffff" : "#374151",
                  boxShadow: activeTab === i ? "0 8px 24px rgba(0,102,255,0.3)" : "none",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", gap: 16, padding: "60px 0" }}>
            {[...Array(4)].map((_, i) => (
              <div key={i} style={{
                width: 280, height: 380, borderRadius: 24,
                background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmerLoad 1.5s infinite",
              }} />
            ))}
            <style>{`@keyframes shimmerLoad { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }`}</style>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#9CA3AF", fontSize: 18 }}>
            No products available in this category yet.
          </div>
        ) : (
          /* Cards */
          <div style={{ position: "relative" }}>
            <div ref={scrollRef} className="no-scrollbar cards-container">
              {filteredProducts.map((product) => {
                const colors = product.product_colors?.filter(c => c.is_active) || [];
                const selColorIdx = activeColors[product.product_id] ?? 0;
                const activeColor = colors[selColorIdx];
                const cardBg = activeColor?.color_code || "#1F2937";

                // Determine text color based on bg brightness
                const hex = cardBg.replace("#", "");
                const r = parseInt(hex.substring(0, 2), 16);
                const g = parseInt(hex.substring(2, 4), 16);
                const b = parseInt(hex.substring(4, 6), 16);
                const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                const textColor = luminance > 0.5 ? "#111827" : "#ffffff";
                const subColor = luminance > 0.5 ? "rgba(17,24,39,0.55)" : "rgba(255,255,255,0.6)";

                const hasImage = activeColor?.image_url || product.preview_image_url;
                const imageUrl = activeColor?.image_url
                  ? `${BACKEND}${activeColor.image_url}`
                  : product.preview_image_url
                    ? `${BACKEND}${product.preview_image_url}`
                    : null;

                return (
                  <div key={product.product_id} className="card-wrap">

                    {/* Visual box */}
                    <Link href={`/shop/products/${product.product_id}`} className="gray-box" style={{
                      width: "100%", aspectRatio: "1/1",
                      background: "#F2F2F2", borderRadius: 32,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "clamp(24px, 8%, 48px)",
                      marginBottom: 32, boxSizing: "border-box",
                      textDecoration: "none"
                    }}>
                      <div className="biz-card" style={{
                        width: "100%", aspectRatio: "1.58/1",
                        borderRadius: 16,
                        background: imageUrl ? "transparent" : cardBg,
                        position: "relative", overflow: "hidden",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.20)",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                        padding: imageUrl ? 0 : "clamp(16px, 5%, 28px)",
                        boxSizing: "border-box",
                      }}>
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={product.product_name}
                            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16 }}
                          />
                        ) : (
                          <>
                            {/* Shimmer */}
                            <div style={{
                              position: "absolute", inset: 0,
                              background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.14) 50%, transparent 65%)",
                              backgroundSize: "200% 100%",
                              animation: "shimmer 3.5s ease-in-out 1 forwards",
                              pointerEvents: "none", borderRadius: "inherit",
                            }} />
                            <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                              <div style={{ fontWeight: 900, fontSize: "clamp(16px, 3vw, 20px)", color: textColor, letterSpacing: "0.2em" }}>
                                {product.product_name.toUpperCase()}
                              </div>
                              <div style={{ fontSize: "clamp(8px, 1.5vw, 11px)", fontWeight: 700, color: subColor, letterSpacing: "0.3em", marginTop: 6, textTransform: "uppercase", opacity: 0.8 }}>
                                {product.product_category?.category_name || "NFC Card"}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </Link>

                    {/* Color dots */}
                    {colors.length > 0 && (
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24 }}>
                        {colors.map((c, ci) => {
                          const isLight = (() => {
                            const h = c.color_code.replace("#", "");
                            const lr = parseInt(h.substring(0, 2), 16);
                            const lg = parseInt(h.substring(2, 4), 16);
                            const lb = parseInt(h.substring(4, 6), 16);
                            return (0.299 * lr + 0.587 * lg + 0.114 * lb) / 255 > 0.85;
                          })();
                          return (
                            <div
                              key={c.product_color_id}
                              className="color-dot"
                              title={c.color_name}
                              onClick={() => setActiveColors((prev) => ({ ...prev, [product.product_id]: ci }))}
                              style={{
                                width: 26, height: 26,
                                background: c.color_code,
                                border: isLight ? "2px solid #E5E7EB" : "2px solid transparent",
                                boxShadow: selColorIdx === ci
                                  ? `0 0 0 2px #fff, 0 0 0 4px #22c55e`
                                  : "0 1px 3px rgba(0,0,0,0.15)",
                              }}
                            />
                          );
                        })}
                      </div>
                    )}

                    {/* Name & price */}
                    <Link href={`/shop/products/${product.product_id}`} style={{ textDecoration: "none" }}>
                      <div style={{ textAlign: "center", marginBottom: 24 }}>
                        <h3 style={{ fontSize: 26, fontWeight: 700, color: "#111827", margin: "0 0 6px 0" }}>
                          {product.product_name}
                        </h3>
                        <p style={{ fontSize: 18, fontWeight: 600, color: "#9CA3AF", margin: 0 }}>
                          Rs {Number(product.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                    </Link>

                    {/* Specs */}
                    <div style={{ paddingTop: 24, borderTop: "1px solid #F3F4F6", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                      {product.material && (
                        <div className="spec-row" style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#9CA3AF", fontWeight: 500 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>
                          {product.material}
                        </div>
                      )}
                      {product.warranty && (
                        <div className="spec-row" style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#9CA3AF", fontWeight: 500 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                          {product.warranty} Warranty
                        </div>
                      )}
                      <div className="spec-row" style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#9CA3AF", fontWeight: 500, opacity: 0.8 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                        {colors.length > 0 ? `${colors.length} Color${colors.length > 1 ? "s" : ""} Available` : "NFC Enabled"}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            <button className="carousel-arrow arrow-left" onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })} aria-label="Scroll left">
              <span style={{ fontSize: 24, fontWeight: 300, marginRight: -4 }}>‹</span>
            </button>
            <button className="carousel-arrow arrow-right" onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })} aria-label="Scroll right">
              <span style={{ fontSize: 24, fontWeight: 300, marginLeft: -4 }}>›</span>
            </button>
          </div>
        )}

        {/* View all */}
        {/*<div style={{ marginTop: 56, display: "flex", justifyContent: "center" }}>
          <Link href="/shop/products" style={{ textDecoration: "none" }}>
            <button style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#111827",
            }}>
              View All Products →
            </button>
          </Link>
        </div>*/}

      </div>

      <style>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
      `}</style>
    </section>
  );
}