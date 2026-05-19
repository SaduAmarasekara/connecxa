"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

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

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);
  const [nameInput, setNameInput] = useState("");
  const [additionalLine, setAdditionalLine] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (!id) return;
    const fetch_ = async () => {
      try {
        const res = await fetch(`${BACKEND}/products/public/${id}`);
        const data = await res.json();
        if (data.success && data.data) {
          const p: Product = data.data;
          setProduct(p);
          const firstImg =
            p.preview_image_url
              ? `${BACKEND}${p.preview_image_url}`
              : p.product_colors.find(c => c.image_url)
                ? `${BACKEND}${p.product_colors.find(c => c.image_url)!.image_url}`
                : null;
          setSelectedImage(firstImg);
        } else {
          setError("Product not found");
        }
      } catch {
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    fetch_();
  }, [id]);

  const handleColorSelect = (idx: number, color: ProductColor) => {
    setSelectedColorIdx(idx);
    if (color.image_url) setSelectedImage(`${BACKEND}${color.image_url}`);
    else if (product?.preview_image_url) setSelectedImage(`${BACKEND}${product.preview_image_url}`);
  };

  // All gallery images: preview + per-color images
  const galleryImages: { src: string; label: string }[] = [];
  if (product) {
    if (product.preview_image_url) galleryImages.push({ src: `${BACKEND}${product.preview_image_url}`, label: "Default" });
    product.product_colors.filter(c => c.image_url).forEach(c => galleryImages.push({ src: `${BACKEND}${c.image_url}`, label: c.color_name }));
  }

  if (loading) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
      <div style={{ width: 40, height: 40, border: "4px solid #005AD1", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  if (error || !product) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", textAlign: "center", padding: "0 24px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: "#111827", marginBottom: 16 }}>{error || "Product not found"}</h1>
      <button onClick={() => router.push("/shop")} style={{ padding: "10px 24px", background: "#005AD1", color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>
        Back to Shop
      </button>
    </div>
  );

  const activeColor = product.product_colors[selectedColorIdx] ?? null;

  return (
    <main style={{ fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif", background: "#fff", minHeight: "100vh", paddingBottom: 80 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        .thumb-btn { transition: border-color 0.18s, opacity 0.18s; opacity: 0.7; }
        .thumb-btn:hover, .thumb-btn.active { opacity: 1; }
        .thumb-btn.active { border-color: #111827 !important; }
        .color-swatch { transition: transform 0.18s, box-shadow 0.18s; cursor: pointer; }
        .color-swatch:hover { transform: scale(1.12); }
        .qty-btn { width: 36px; height: 36px; border: 1.5px solid #D1D5DB; background: #fff; border-radius: 8px; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center; transition: background 0.15s; }
        .qty-btn:hover { background: #F3F4F6; }
        .add-to-cart-btn { width: 100%; padding: 16px; background: #111827; color: #fff; border: none; border-radius: 10px; font-size: 14px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; transition: background 0.2s; margin-bottom: 16px; }
        .add-to-cart-btn:hover { background: #000; }
        .prod-input { width: 100%; border: 1.5px solid #D1D5DB; border-radius: 8px; padding: 11px 14px; font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.2s; box-sizing: border-box; background: #FAFAFA; letter-spacing: 0.05em; }
        .prod-input:focus { border-color: #111827; background: #fff; }
        .prod-select { width: 100%; border: 1.5px solid #D1D5DB; border-radius: 8px; padding: 11px 14px; font-size: 14px; font-family: inherit; outline: none; background: #FAFAFA; appearance: none; cursor: pointer; }
        .prod-select:focus { border-color: #111827; background: #fff; }
        .section-label { font-size: 13px; font-weight: 700; color: #111827; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }
        .info-icon { width: 16px; height: 16px; border: 1.5px solid #9CA3AF; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 10px; color: #9CA3AF; cursor: help; flex-shrink: 0; }
        .char-count { font-size: 12px; color: #9CA3AF; }
        .divider { border: none; border-top: 1px solid #F3F4F6; margin: 24px 0; }
        @media (max-width: 900px) {
          .pdp-layout { flex-direction: column !important; gap: 32px !important; }
          .pdp-left { max-width: 100% !important; }
          .pdp-right { max-width: 100% !important; }
        }
      `}</style>

      {/* Breadcrumb */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 24px 0" }}>
        <button onClick={() => router.back()} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#6B7280", fontSize: 13, fontWeight: 500, fontFamily: "inherit", padding: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back to Products
        </button>
      </div>

      {/* Main layout */}
      <div className="pdp-layout" style={{ maxWidth: 1200, margin: "28px auto 0", padding: "0 24px", display: "flex", gap: 64, alignItems: "flex-start" }}>

        {/* LEFT: image gallery */}
        <div className="pdp-left" style={{ flex: "1 1 0", minWidth: 0, maxWidth: 580 }}>

          {/* Main image */}
          <div style={{ background: "#F7F7F8", borderRadius: 20, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "1/1", marginBottom: 14, position: "relative" }}>
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={product.product_name}
                style={{ width: "85%", height: "85%", objectFit: "contain", display: "block", margin: "auto", borderRadius: 12 }}
              />
            ) : (
              <div style={{ color: "#9CA3AF", fontSize: 15 }}>No image available</div>
            )}
          </div>

          {/* Thumbnails */}
          {galleryImages.length > 1 && (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  className={`thumb-btn${selectedImage === img.src ? " active" : ""}`}
                  onClick={() => setSelectedImage(img.src)}
                  style={{
                    width: 76, height: 76, border: "2px solid", borderColor: selectedImage === img.src ? "#111827" : "#E5E7EB",
                    borderRadius: 10, overflow: "hidden", padding: 4, background: "#F7F7F8", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                  title={img.label}
                >
                  <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: product info */}
        <div className="pdp-right" style={{ flex: "1 1 0", minWidth: 0, maxWidth: 480 }}>

          {/* Category badge */}
          {product.product_category?.category_name && (
            <div style={{ fontSize: 12, fontWeight: 600, color: "#005AD1", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
              {product.product_category.category_name}
            </div>
          )}

          {/* Name */}
          <h1 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, color: "#111827", lineHeight: 1.1, margin: "0 0 10px 0", letterSpacing: "-0.02em" }}>
            {product.product_name}
          </h1>

          {/* Price */}
          <p style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 28px 0" }}>
            Rs {Number(product.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>

          <hr className="divider" />

          {/* Color Selector */}
          {product.product_colors.length > 0 && (
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div className="section-label">
                  Colour
                  <span className="info-icon" title="Select a colour for your card">i</span>
                </div>
                {activeColor && <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 500 }}>{activeColor.color_name}</span>}
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {product.product_colors.map((color, idx) => (
                  <button
                    key={color.product_color_id}
                    className="color-swatch"
                    onClick={() => handleColorSelect(idx, color)}
                    title={color.color_name}
                    style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: color.color_code,
                      border: "none",
                      outline: selectedColorIdx === idx ? "3px solid #111827" : "2px solid #E5E7EB",
                      outlineOffset: selectedColorIdx === idx ? 2 : 0,
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Name input */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div className="section-label">
                Name
                <span className="info-icon" title="This name will appear on your card">i</span>
              </div>
              <span className="char-count">{40 - nameInput.length} characters left</span>
            </div>
            <input
              type="text"
              maxLength={40}
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              placeholder="YOUR NAME"
              className="prod-input"
              style={{ textTransform: "uppercase" }}
            />
          </div>

          {/* Additional Line input */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div className="section-label">
                Additional Line
                <span className="info-icon" title="Job title or company name">i</span>
              </div>
              <span className="char-count">{30 - additionalLine.length} characters left</span>
            </div>
            <input
              type="text"
              maxLength={30}
              value={additionalLine}
              onChange={e => setAdditionalLine(e.target.value)}
              className="prod-input"
              style={{ textTransform: "uppercase" }}
            />
          </div>

          {/* Warranty */}
          {/*{product.warranty && (
            <div style={{ marginBottom: 28 }}>
              <div className="section-label" style={{ marginBottom: 8 }}>Warranty</div>
              <div style={{ position: "relative" }}>
                <select className="prod-select">
                  <option>{product.warranty}</option>
                </select>
                <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#9CA3AF" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
                </div>
              </div>
            </div>
          )}*/}

          {/* Add to Cart */}
          <button
            className="add-to-cart-btn"
            onClick={() => {
              if (!product) return;
              addItem({
                productId: product.product_id,
                productName: product.product_name,
                colorId: activeColor?.product_color_id ?? null,
                colorName: activeColor?.color_name ?? null,
                colorCode: activeColor?.color_code ?? null,
                imageUrl: selectedImage,
                price: product.price,
                nameInput,
                additionalLine,
                warranty: product.warranty ?? null,
              });
              router.push("/cart");
            }}
          >
            Add to Cart
          </button>

          {/* Material & warranty badges */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
            {product.material && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#F3F4F6", borderRadius: 99, padding: "6px 14px", fontSize: 12, fontWeight: 600, color: "#374151" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /></svg>
                {product.material}
              </div>
            )}
            {product.warranty && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#F3F4F6", borderRadius: 99, padding: "6px 14px", fontSize: 12, fontWeight: 600, color: "#374151" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                {product.warranty} Warranty
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#EFF6FF", borderRadius: 99, padding: "6px 14px", fontSize: 12, fontWeight: 600, color: "#1D4ED8" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              NFC Enabled
            </div>
          </div>

          <hr className="divider" />

          {/* Bulk order note */}
          <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 24 }}>
            Looking to digitalise and equip your team with smart name cards? We provide corporate rates for bulk orders, get in touch with us through our{" "}
            <Link href="/contact-us" style={{ color: "#005AD1", textDecoration: "underline" }}>contact form</Link>.
          </p>

          {/* Product heading */}
          <h2 style={{ fontSize: 13, fontWeight: 800, color: "#111827", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            {product.product_name}: The Smart NFC Business Card
          </h2>

          {/* Description */}
          <div style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.8, whiteSpace: "pre-line" }}>
            {product.description || "Experience the future of networking with this premium NFC business card. Share your contact details, social media, and more with a simple tap on any NFC-enabled smartphone.\n\nEvery card comes with lifetime digital hosting and all the networking essential features: CRM, Lead management, Live analytics, and a Digital QR code — all at a one-time cost."}
          </div>

          <hr className="divider" />

          <h2 style={{ fontSize: 13, fontWeight: 800, color: "#111827", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
            Trusted Provider for Individuals and Businesses, Internationally.
          </h2>
          <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.8, margin: 0 }}>
            Connecxa was founded with the mission to make networking more sustainable and practical in today's world.
            Based in Sri Lanka, our products are manufactured locally and shipped worldwide. Join us in the journey to a more sustainable future.
          </p>
        </div>

      </div>
    </main>
  );
}
