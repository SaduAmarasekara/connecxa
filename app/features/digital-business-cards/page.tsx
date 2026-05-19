"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import SmarterConnect from "@/components/SmarterConnect";
import ProfilesShowcase from "@/components/ProfilesShowcase";
import FeatureGrid from "@/components/FeatureGrid";
import SecuritySection from "@/components/SecuritySection";
import ProductShowcase from "@/components/ProductShowcase";
import FAQ from '@/components/FAQ';

export default function DigitalBusinessCards() {
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
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(167,100,255,0.07) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(196,160,255,0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* ── Hero Section ── */}
      <section className="w-full max-w-[1280px] px-6 sm:px-10 lg:px-16 z-10 relative" style={{ paddingTop: "20px", paddingBottom: "0px" }}>
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
                Digital Business Card
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
              Ditch the Paper.
              <br />
              <span
                style={{
                  color: "#0f0a1e",
                }}
              >
                Go Fully Digital.
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
              Make every impression count with a sleek, modern digital business card — no apps, no limits, just your brand at its best.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full sm:w-auto">
              <button
                onClick={() => window.open(`${process.env.NEXT_PUBLIC_APP_URL}/login`, "_blank")}
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
                Get Started 
                <span style={{ fontSize: "20px", lineHeight: 1 }}>→</span>
              </button>

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
            {/* Outer floating container — shifted down intentionally for visual balance */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                paddingTop: "clamp(0px, 3vw, 60px)",
              }}
            >
              {/* Glow ring behind card */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "60px",
                  background: "radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  pointerEvents: "none",
                }}
              />

              {/* Decorative dots grid */}
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-30px",
                  width: "100px",
                  height: "100px",
                  backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.25) 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                  borderRadius: "8px",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "-24px",
                  width: "80px",
                  height: "80px",
                  backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.2) 1.5px, transparent 1.5px)",
                  backgroundSize: "12px 12px",
                  borderRadius: "8px",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Floating share badge — bottom right */}
              <div
                style={{
                  position: "absolute",
                  bottom: "28px",
                  right: "-16px",
                  background: "linear-gradient(135deg, #7C3AED 0%, #9333ea 100%)",
                  backdropFilter: "blur(16px)",
                  borderRadius: "16px",
                  padding: "12px 18px",
                  boxShadow: "0 8px 24px rgba(124,58,237,0.35)",
                  zIndex: 10,
                  animation: "floatB 6s ease-in-out infinite",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "22px" }}>🔗</span>
                <div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>Shared instantly</div>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#fff" }}>No app needed</div>
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
                }}
              >
                <Image
                  src="/digital_card_lavender_mockup_1777364739572.png"
                  alt="Digital Business Card Mockup"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle sheen overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(124,58,237,0.04) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Keyframe Animations ── */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 3px rgba(124,58,237,0.2); }
          50% { opacity: 0.7; box-shadow: 0 0 0 6px rgba(124,58,237,0.08); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        /* Responsive image sizing */
        @media (max-width: 1023px) {
          /* On tablet/mobile, reduce the top margin so image isn't too far down */
          .hero-image-wrapper {
            margin-top: 16px !important;
          }
        }
        @media (max-width: 639px) {
          /* On small mobile, hide floating badges to avoid overflow */
          .floating-badge {
            display: none;
          }
        }
      `}</style>

      {/* ── Page Sections ── */}
      <div className="w-full">
        <div className="w-full h-16 lg:h-24 bg-white" />
        <ProfilesShowcase />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <ProductShowcase />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <SmarterConnect />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <FeatureGrid />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <SecuritySection />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <FAQ />
        <div className="w-full h-24 lg:h-32 bg-white" />
      </div>
    </main>
  );
}