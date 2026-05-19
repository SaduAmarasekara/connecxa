"use client";

import Link from "next/link";
import Image from "next/image";
import CardShowcase from "@/components/CardShowcase";
import NutshellFeatures from "@/components/NutshellFeatures";
import FAQ from "@/components/FAQ";
import PurchaseSteps from "@/components/PurchaseSteps";
import CorporateBranding from "@/components/CorporateBranding";

export default function ShopPage() {
  return (
    <main
      className="w-full relative flex flex-col items-center overflow-hidden"
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        background: "linear-gradient(160deg, #faf8ff 0%, #ede8f7 40%, #d8c4e0 100%)",
      }}
    >
      {/* ── Ambient Background Glows ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-5%",
          left: "-8%",
          width: "55%",
          height: "60%",
          background: "radial-gradient(circle, rgba(0,90,209,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%",
          right: "-10%",
          width: "50%",
          height: "55%",
          background: "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "40%",
          width: "35%",
          height: "40%",
          background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* ── Hero Section ── */}
      <section className="w-full max-w-[1280px] px-6 sm:px-10 lg:px-16 z-10 relative" style={{ paddingTop: "40px", paddingBottom: "20px" }}>
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          style={{ gap: "48px", alignItems: "center" }}
        >

          {/* ── Left Column ── */}
          <div
            className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1"
            style={{ maxWidth: "620px" }}
          >
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 mb-8"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1.5px solid rgba(0,90,209,0.15)",
                borderRadius: "999px",
                padding: "10px 20px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 2px 16px rgba(0,90,209,0.08)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#005AD1",
                  display: "inline-block",
                  boxShadow: "0 0 0 3px rgba(0,90,209,0.2)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#005AD1",
                }}
              >
                NFC Business Cards
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(38px, 6vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                color: "#0f0a1e",
                marginBottom: "28px",
              }}
            >
              Your Smartest
              <br />
              <span
                style={{
                  color: "#005AD1",
                }}
              >
                Business Card Yet.
              </span>
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "#5b5472",
                lineHeight: 1.7,
                fontWeight: 450,
                maxWidth: "480px",
                marginBottom: "48px",
              }}
            >
              Modernise your networking with a single tap - share socials, links, and contacts instantly. Stand out with premium NFC technology.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full sm:w-auto">
              <Link href="/shop/products" className="no-underline w-full sm:w-auto">
                <button
                  className="hero-cta-btn"
                  style={{
                    background: "linear-gradient(135deg, #005AD1 0%, #004bb1 100%)",
                    color: "#fff",
                    fontSize: "17px",
                    fontWeight: 700,
                    borderRadius: "999px",
                    padding: "16px 40px",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                    boxShadow: "0 8px 32px rgba(0,90,209,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                    transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,90,209,0.4), inset 0 1px 0 rgba(255,255,255,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,90,209,0.3), inset 0 1px 0 rgba(255,255,255,0.15)";
                  }}
                >
                  Customise Now 
                  <span style={{ fontSize: "20px", lineHeight: 1 }}>→</span>
                </button>
              </Link>

              <Link href="#how-it-works" className="no-underline w-full sm:w-auto">
                <button
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    color: "#005AD1",
                    fontSize: "17px",
                    fontWeight: 700,
                    borderRadius: "999px",
                    padding: "16px 40px",
                    border: "1.5px solid rgba(0,90,209,0.2)",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                    boxShadow: "0 8px 32px rgba(0,90,209,0.05)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                    e.currentTarget.style.background = "rgba(0,90,209,0.06)";
                    e.currentTarget.style.borderColor = "rgba(0,90,209,0.4)";
                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,90,209,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.borderColor = "rgba(0,90,209,0.2)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,90,209,0.05)";
                  }}
                >
                  See how it works
                </button>
              </Link>
            </div>
          </div>

          {/* ── Right Column: Image ── */}
          <div
            className="flex-1 w-full flex justify-center lg:justify-end"
            style={{ maxWidth: "520px" }}
          >
            {/* Outer floating container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                paddingTop: "clamp(0px, 3vw, 40px)",
              }}
            >
              {/* Glow ring behind mockup */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "60px",
                  background: "radial-gradient(ellipse at center, rgba(0,90,209,0.12) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  pointerEvents: "none",
                }}
              />

              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "28px",
                  right: "-16px",
                  background: "linear-gradient(135deg, #005AD1 0%, #004bb1 100%)",
                  backdropFilter: "blur(16px)",
                  borderRadius: "16px",
                  padding: "12px 18px",
                  boxShadow: "0 8px 24px rgba(0,90,209,0.25)",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "22px" }}>🛒</span>
                <div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>Available Now</div>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#fff" }}>Shop Premium</div>
                </div>
              </div>

              {/* Main image card */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: "48px",
                  overflow: "hidden",
                  boxShadow: "0 40px 80px -20px rgba(0,90,209,0.25), 0 20px 40px -10px rgba(0,0,0,0.12)",
                  animation: "heroFloat 7s ease-in-out infinite",
                  border: "1px solid rgba(255,255,255,0.5)",
                  zIndex: 5,
                  backgroundColor: "transparent",
                }}
              >
                <Image
                  src="/images/shophero.png"
                  alt="Shop Premium NFC Cards"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 3px rgba(0,90,209,0.2); }
          50% { opacity: 0.7; box-shadow: 0 0 0 6px rgba(0,90,209,0.08); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
      `}</style>

      <div className="w-full">
        
        <div className="w-full h-16 lg:h-24 bg-white" />
        <CardShowcase />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <PurchaseSteps />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <CorporateBranding />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <FAQ />
        <div className="w-full h-16 lg:h-24 bg-white" />
      </div>
    </main>
  );
}