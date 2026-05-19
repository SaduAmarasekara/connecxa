"use client";

import { useCart } from "@/lib/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, count, updateQty, removeItem } = useCart();
  const router = useRouter();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main style={{ fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif", minHeight: "70vh", background: "#fff", paddingBottom: 80 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        .cart-table-header {
          display: grid;
          grid-template-columns: 1fr 120px 140px 120px;
          padding: 0 0 12px;
          border-bottom: 1px solid #E5E7EB;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6B7280;
        }
        .cart-row {
          display: grid;
          grid-template-columns: 1fr 120px 140px 120px;
          padding: 28px 0;
          border-bottom: 1px solid #F3F4F6;
          align-items: start;
          gap: 16px;
        }
        .qty-ctrl { display: flex; align-items: center; border: 1.5px solid #E5E7EB; border-radius: 8px; overflow: hidden; width: fit-content; }
        .qty-ctrl button { width: 36px; height: 36px; border: none; background: #fff; cursor: pointer; font-size: 18px; font-weight: 300; color: #374151; transition: background 0.15s; display: flex; align-items: center; justify-content: center; }
        .qty-ctrl button:hover { background: #F9FAFB; }
        .qty-ctrl input { width: 44px; height: 36px; border: none; border-left: 1.5px solid #E5E7EB; border-right: 1.5px solid #E5E7EB; text-align: center; font-size: 14px; font-weight: 600; outline: none; font-family: inherit; }
        .remove-link { font-size: 13px; color: #6B7280; text-decoration: underline; cursor: pointer; background: none; border: none; font-family: inherit; margin-top: 10px; padding: 0; transition: color 0.15s; }
        .remove-link:hover { color: #111827; }
        .proceed-btn { background: #111827; color: #fff; border: none; padding: 16px 40px; font-size: 13px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: background 0.2s; width: 100%; margin-top: 16px; }
        .proceed-btn:hover { background: #000; }
        @media (max-width: 700px) {
          .cart-table-header { grid-template-columns: 1fr 80px 100px; }
          .cart-table-header .col-total { display: none; }
          .cart-row { grid-template-columns: 1fr 80px 100px; }
          .cart-row .row-total { display: none; }
        }
        @media (max-width: 500px) {
          .cart-table-header { display: none; }
          .cart-row { grid-template-columns: 1fr; }
          .qty-col, .price-col { margin-top: 8px; }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", padding: "48px 24px 24px" }}>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 500, color: "#111827", margin: "0 0 8px 0" }}>
          Your cart
        </h1>
        <Link href="/shop" style={{ fontSize: 15, color: "#374151", textDecoration: "underline" }}>
          Continue shopping
        </Link>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Empty state */}
        {items.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 24px" }}>
            <p style={{ fontSize: 18, color: "#6B7280", marginBottom: 28 }}>Your cart is currently empty.</p>
            <Link href="/shop">
              <button style={{ background: "#111827", color: "#fff", border: "none", padding: "14px 36px", borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            {/* Table header */}
            <div className="cart-table-header">
              <div>Product</div>
              <div style={{ textAlign: "right" }}>Price</div>
              <div style={{ textAlign: "center" }}>Quantity</div>
              <div className="col-total" style={{ textAlign: "right" }}>Total</div>
            </div>

            {/* Items */}
            {items.map(item => {
              const lineTotal = item.price * item.quantity;
              return (
                <div key={item.cartItemId} className="cart-row">
                  {/* Product info */}
                  <div style={{ display: "flex", gap: 20, minWidth: 0 }}>
                    {/* Image */}
                    <div style={{ width: 80, height: 80, flexShrink: 0, background: "#F7F7F8", borderRadius: 8, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.productName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: 60, height: 38, background: item.colorCode ?? "#1F2937", borderRadius: 4 }} />
                      )}
                    </div>

                    {/* Details */}
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 15, color: "#111827", marginBottom: 6 }}>{item.productName}</div>
                      {item.colorName && (
                        <div style={{ fontSize: 13, color: "#374151", marginBottom: 2 }}>
                          <span style={{ fontWeight: 700 }}>Colour:</span> {item.colorName}
                          {item.colorCode && (
                            <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: item.colorCode, marginLeft: 6, verticalAlign: "middle", border: "1px solid #E5E7EB" }} />
                          )}
                        </div>
                      )}
                      {item.nameInput && (
                        <div style={{ fontSize: 13, color: "#374151", marginBottom: 2 }}>
                          <span style={{ fontWeight: 700 }}>Name:</span> {item.nameInput}
                        </div>
                      )}
                      {item.additionalLine && (
                        <div style={{ fontSize: 13, color: "#374151", marginBottom: 2 }}>
                          <span style={{ fontWeight: 700 }}>Additional Line:</span> {item.additionalLine}
                        </div>
                      )}
                      {item.warranty && (
                        <div style={{ fontSize: 13, color: "#374151", marginBottom: 2 }}>
                          <span style={{ fontWeight: 700 }}>Warranty:</span> {item.warranty}
                        </div>
                      )}
                      <button className="remove-link" onClick={() => removeItem(item.cartItemId)}>
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="price-col" style={{ textAlign: "right", fontSize: 14, fontWeight: 600, color: "#111827", paddingTop: 4 }}>
                    Rs {Number(item.price).toLocaleString("en-US", { minimumFractionDigits: 2 })} LKR
                  </div>

                  {/* Quantity */}
                  <div className="qty-col" style={{ display: "flex", justifyContent: "center" }}>
                    <div className="qty-ctrl">
                      <button onClick={() => updateQty(item.cartItemId, item.quantity - 1)}>−</button>
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={e => updateQty(item.cartItemId, Math.max(1, parseInt(e.target.value) || 1))}
                        onWheel={e => (e.target as HTMLInputElement).blur()}
                      />
                      <button onClick={() => updateQty(item.cartItemId, item.quantity + 1)}>+</button>
                    </div>
                  </div>

                  {/* Line total */}
                  <div className="row-total" style={{ textAlign: "right", fontSize: 14, fontWeight: 600, color: "#111827", paddingTop: 4 }}>
                    Rs {lineTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })} LKR
                  </div>
                </div>
              );
            })}

            {/* Summary */}
            <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 32 }}>
              <div style={{ width: 340, maxWidth: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 17, fontWeight: 600, color: "#111827" }}>Subtotal</span>
                  <span style={{ fontSize: 17, fontWeight: 700, color: "#111827" }}>
                    Rs {subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })} LKR
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 20 }}>
                  Taxes and <strong>shipping</strong> calculated at checkout
                </p>
                <button className="proceed-btn">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
