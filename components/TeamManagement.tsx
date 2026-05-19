"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Team Templates",
    description: "Create brand-approved designs in minutes and assign them to everyone instantly.",
    image: "/images/team-templates-v2.png",
    icon: "🎨",
    accent: "#2563EB",
    bg: "rgba(37,99,235,0.07)",
  },
  {
    title: "Admin Control",
    description: "Lock sections, set permissions, and manage who can edit what — all from one dashboard.",
    image: "/images/admin-control-v2.png",
    icon: "🔐",
    accent: "#0284C7",
    bg: "rgba(2,132,199,0.07)",
  },
  {
    title: "Lead Capture & CRM",
    description: "Sync contacts directly to HubSpot, Salesforce, Outlook, and more in real-time.",
    image: "/images/crm-integrations-connecxa.png",
    icon: "⚡",
    accent: "#0369A1",
    bg: "rgba(3,105,161,0.07)",
  },
  {
    title: "Analytics Dashboard",
    description: "Track usage, profile views, and lead capture performance with beautiful insights.",
    image: "/images/analytics-dashboard-v2.png",
    icon: "📊",
    accent: "#1D4ED8",
    bg: "rgba(29,78,216,0.07)",
  },
  {
    title: "Advanced Branding",
    description: "Upload your brand fonts and logo. Every card looks 100% professional and on-brand.",
    image: "/images/advanced-branding-v2.png",
    icon: "✨",
    accent: "#2563EB",
    bg: "rgba(37,99,235,0.07)",
  },
  {
    title: "Instant Deployment",
    description: "Bulk import members via CSV or Active Directory and get them sharing in minutes.",
    image: "/images/instant-deployment-v2.png",
    icon: "🚀",
    accent: "#0284C7",
    bg: "rgba(2,132,199,0.07)",
  },
];

export default function FeatureGrid() {
  const [hovered, setHovered] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section style={{
      width: "100%",
      background: "linear-gradient(180deg, #f8faff 0%, #eff6ff 100%)",
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      paddingTop: "clamp(60px, 8vw, 110px)",
      paddingBottom: "clamp(60px, 8vw, 110px)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Soft background glows */}
      <div style={{
        position: "absolute", top: "-8%", right: "-4%",
        width: "38%", height: "45%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
        filter: "blur(60px)",
      }} />
      <div style={{
        position: "absolute", bottom: "-8%", left: "-4%",
        width: "35%", height: "40%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(2,132,199,0.06) 0%, transparent 70%)",
        filter: "blur(60px)",
      }} />

      <div style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 clamp(16px, 4vw, 64px)",
        position: "relative",
        zIndex: 1,
      }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)" }}>

          {/* Pill badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(37,99,235,0.08)",
            border: "1px solid rgba(37,99,235,0.16)",
            borderRadius: "999px", padding: "8px 20px",
            marginBottom: "20px",
          }}>
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "#2563EB", display: "inline-block",
            }} />
            <span style={{
              fontSize: "12px", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase" as const,
              color: "#2563EB",
            }}>
              Powerful Tools
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 58px)",
            fontWeight: 900, lineHeight: 1.07,
            letterSpacing: "-0.04em", color: "#0f172a",
            maxWidth: "780px", margin: "0 auto 18px",
          }}>
            All your team&apos;s digital cards.{" "}
            <span style={{
              backgroundImage: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #0EA5E9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Managed in one place.
            </span>
          </h2>

          <p style={{
            fontSize: "clamp(15px, 1.6vw, 18px)",
            color: "#64748B", maxWidth: "560px",
            margin: "0 auto 36px", lineHeight: 1.7, fontWeight: 450,
          }}>
            Everything your team needs to design, deploy, and manage digital
            business cards — in minutes, not days.
          </p>

          {/* Single CTA button */}
          <button
            onClick={() => window.open(`${process.env.NEXT_PUBLIC_APP_URL}/login`, "_blank")}
            style={{
              background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)",
              color: "#fff",
              fontSize: "clamp(14px, 1.3vw, 17px)",
              fontWeight: 700,
              borderRadius: "999px",
              padding: "clamp(12px, 1.1vw, 15px) clamp(28px, 2.5vw, 44px)",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 28px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
              transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
              display: "inline-flex", alignItems: "center", gap: "8px",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(37,99,235,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,99,235,0.3)";
            }}
          >
            Start free trial <span style={{ fontSize: "18px" }}>→</span>
          </button>
        </div>

        {/* ── Feature Grid / Slider (Larger Cards & Images) ── */}
        <div className="relative w-full group">
          {/* Mobile Navigation Arrows */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-3 top-[40%] -translate-y-1/2 z-30 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-200/60 flex items-center justify-center text-gray-600 hover:text-[#005AD1] hover:scale-105 hover:bg-white transition-all duration-300 md:hidden"
            aria-label="Previous step"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-3 top-[40%] -translate-y-1/2 z-30 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-200/60 flex items-center justify-center text-gray-600 hover:text-[#005AD1] hover:scale-105 hover:bg-white transition-all duration-300 md:hidden"
            aria-label="Next step"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div 
            ref={scrollRef}
            className="feature-grid-responsive flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory w-full"
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center"
                style={{
                  background: "#ffffff",
                  borderRadius: "32px",
                  border: hovered === idx
                    ? `1.5px solid ${feature.accent}35`
                    : "1.5px solid #e8f0fe",
                  padding: "clamp(24px, 2.5vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s cubic-bezier(0.34,1.2,0.64,1)",
                  transform: hovered === idx ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: hovered === idx
                    ? `0 24px 60px rgba(37,99,235,0.12), 0 0 0 1px ${feature.accent}15`
                    : "0 2px 14px rgba(37,99,235,0.05)",
                  cursor: "default",
                  boxSizing: "border-box" as const,
                }}
              >

                {/* Text - larger font sizes */}
                <h3 style={{
                  fontSize: "clamp(20px, 1.6vw, 24px)",
                  fontWeight: 800, color: "#0f172a",
                  marginBottom: "10px", letterSpacing: "-0.02em", lineHeight: 1.2,
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: "clamp(15px, 1.2vw, 17px)",
                  color: "#64748B", lineHeight: 1.65,
                  fontWeight: 450, marginBottom: "24px",
                  flexGrow: 1,
                }}>
                  {feature.description}
                </p>

                {/* Image — uniform 16:10 ratio but larger overall */}
                <div style={{
                  position: "relative", width: "100%",
                  aspectRatio: "16 / 10",
                  borderRadius: "20px", overflow: "hidden",
                  background: feature.bg,
                  border: `1px solid ${feature.accent}15`,
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                }}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      transform: hovered === idx ? "scale(1.05)" : "scale(1)",
                    }}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Accent bar */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, ${feature.accent}, ${feature.accent}50)`,
                    opacity: hovered === idx ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }} />
                </div>

                {/* Learn more link */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  marginTop: "18px", color: feature.accent,
                  fontSize: "14px", fontWeight: 700,
                  opacity: hovered === idx ? 1 : 0,
                  transform: hovered === idx ? "translateY(0)" : "translateY(4px)",
                  transition: "all 0.25s ease",
                }}>
                  Learn more <span style={{ fontSize: "15px" }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Standard CSS for responsive grid */}
      <style>{`
        .feature-grid-responsive {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(20px, 2.2vw, 30px);
          align-items: stretch;
        }
        @media (max-width: 1024px) {
          .feature-grid-responsive {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .feature-grid-responsive {
            display: flex !important;
          }
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}