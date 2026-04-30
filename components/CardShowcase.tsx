"use client";
import { useState, useRef } from "react";
import Link from "next/link";

interface ColorVariant {
  dot: string;
  hasBorder?: boolean;
  bgCard: string;
  textColor: string;
  subColor: string;
  accent: string;
}

interface CardData {
  id: string;
  name: string;
  price: string;
  material: string;
  printing: string;
  title: string;
  sub: string;
  tag: string;
  tagColor: string;
  variants: ColorVariant[];
  shimmer: string;
  woodGrain?: boolean;
  isCustom?: boolean;
}

const cards: CardData[] = [
  {
    id: "obsidian",
    name: "Obsidian",
    price: "Rs 19,912.38",
    material: "Stainless Steel",
    printing: "Laser Engraving",
    title: "STEVE MILLER",
    sub: "TECH ENTHUSIAST",
    tag: "Premium",
    tagColor: "#4A3B12",
    shimmer: "rgba(212,175,55,0.15)",
    variants: [
      {
        dot: "#D4AF37",
        bgCard: "#D4AF37",
        textColor: "#4A3B12",
        subColor: "rgba(74,59,18,0.55)",
        accent: "#D4AF37",
      },
      {
        dot: "#9CA3AF",
        bgCard: "#9CA3AF",
        textColor: "#111827",
        subColor: "rgba(17,24,39,0.55)",
        accent: "#9CA3AF",
      },
      {
        dot: "#111827",
        bgCard: "#111827",
        textColor: "#D4AF37",
        subColor: "rgba(212,175,55,0.55)",
        accent: "#111827",
      },
      {
        dot: "#ffffff",
        hasBorder: true,
        bgCard: "#ffffff",
        textColor: "#111827",
        subColor: "rgba(17,24,39,0.55)",
        accent: "#000000",
      },
    ],
  },
  {
    id: "walnut",
    name: "Walnut",
    price: "Rs 10,691.38",
    material: "Sapele Wood",
    printing: "Laser Engraving",
    title: "EMILY GREEN",
    sub: "BOTANIST",
    tag: "Natural",
    tagColor: "#8B5A2B",
    shimmer: "rgba(139,90,43,0.12)",
    woodGrain: true,
    variants: [
      {
        dot: "#8B5A2B",
        bgCard: "#8B5A2B",
        textColor: "#2B1B12",
        subColor: "rgba(43,27,18,0.5)",
        accent: "#8B5A2B",
      },
    ],
  },
  {
    id: "modern",
    name: "Modern",
    price: "Rs 9,943.73",
    material: "Matte PVC",
    printing: "Thermal Printing",
    title: "DARREN LEE",
    sub: "ENTREPRENEUR",
    tag: "Best Seller",
    tagColor: "#D4AF37",
    shimmer: "rgba(212,175,55,0.12)",
    variants: [
      {
        dot: "#111827",
        bgCard: "#111827",
        textColor: "#ffffff",
        subColor: "rgba(255,255,255,0.6)",
        accent: "#111827",
      },
      {
        dot: "#4B5563",
        bgCard: "#4B5563",
        textColor: "#ffffff",
        subColor: "rgba(255,255,255,0.6)",
        accent: "#4B5563",
      },
      {
        dot: "#064e3b",
        bgCard: "#064e3b",
        textColor: "#ffffff",
        subColor: "rgba(255,255,255,0.6)",
        accent: "#064e3b",
      },
      {
        dot: "#1e3a8a",
        bgCard: "#1e3a8a",
        textColor: "#ffffff",
        subColor: "rgba(255,255,255,0.6)",
        accent: "#1e3a8a",
      },
      {
        dot: "#7f1d1d",
        bgCard: "#7f1d1d",
        textColor: "#ffffff",
        subColor: "rgba(255,255,255,0.6)",
        accent: "#7f1d1d",
      },
      {
        dot: "#ffffff",
        hasBorder: true,
        bgCard: "#ffffff",
        textColor: "#000000",
        subColor: "rgba(0,0,0,0.5)",
        accent: "#000000",
      },
    ],
  },
  {
    id: "parallels",
    name: "Parallels",
    price: "Rs 13,681.97",
    material: "Matte PVC",
    printing: "UV Printing",
    title: "NATALIE DIAZ",
    sub: "CONTENT STRATEGIST",
    tag: "Pro",
    tagColor: "#005AD1",
    shimmer: "rgba(255,255,255,0.10)",
    variants: [
      {
        dot: "#1F2937",
        bgCard: "#1F2937",
        textColor: "#ffffff",
        subColor: "rgba(255,255,255,0.6)",
        accent: "#1F2937",
      },
      {
        dot: "#0F766E",
        bgCard: "#0F766E",
        textColor: "#ffffff",
        subColor: "rgba(255,255,255,0.6)",
        accent: "#0F766E",
      },
      {
        dot: "#D4AF37",
        bgCard: "#D4AF37",
        textColor: "#111827",
        subColor: "rgba(17,24,39,0.6)",
        accent: "#D4AF37",
      },
      {
        dot: "#6B7280",
        bgCard: "#6B7280",
        textColor: "#ffffff",
        subColor: "rgba(255,255,255,0.6)",
        accent: "#6B7280",
      },
      {
        dot: "#991B1B",
        bgCard: "#991B1B",
        textColor: "#ffffff",
        subColor: "rgba(255,255,255,0.6)",
        accent: "#991B1B",
      },
    ],
  },
];

const tabs = ["All Cards", "Premium Cards", "Matte Cards", "Glossy Cards"];

export default function CardShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeColors, setActiveColors] = useState<Record<string, number>>({});
  const scrollRef = useRef<HTMLDivElement>(null);


  return (
    <section
      className="py-16 md:py-24"
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        background: "#ffffff",
        marginLeft: "20px"
       
      
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .cards-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
          padding: 0 20px 64px;
        }

        .card-wrap { 
          width: 100%;
          max-width: 380px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          transition: none;
        }

        @media (min-width: 768px) {
          .cards-container {
            flex-direction: row;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 24px;
            padding: 0 0 40px;
            align-items: stretch;
          }
          .card-wrap {
            width: 380px;
            scroll-snap-align: start;
          }
        }

        .gray-box { transition: background 0.3s ease; }
        .gray-box:hover { background: #EBEBEB !important; }
        .biz-card { transition: transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease; }
        .biz-card:hover { transform: perspective(800px) rotateY(-5deg) rotateX(2deg) scale(1.04); box-shadow: 24px 24px 56px rgba(0,0,0,0.28) !important; }
        .color-dot { transition: transform 0.2s ease, box-shadow 0.2s ease; cursor: pointer; border-radius: 50%; }
        .color-dot:hover { transform: scale(1.15); }
        .shimmer-layer { position: absolute; inset: 0; background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.14) 50%, transparent 65%); background-size: 200% 100%; animation: shimmer 3.5s ease-in-out infinite; pointer-events: none; border-radius: inherit; }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .spec-row { display: flex; align-items: center; gap: 12px; font-size: 14px; color: #9CA3AF; font-weight: 500; }
        .arrow-circle { display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 50%; background: #111827; color: #fff; font-size: 16px; transition: transform 0.25s ease; }
        .view-all-btn:hover .arrow-circle { transform: translateX(4px); }
        .tab-pill { border: none; cursor: pointer; font-weight: 700; font-size: 15px; padding: 10px 28px; border-radius: 99px; transition: all 0.25s ease; font-family: inherit; }
        .carousel-arrow { position: absolute; right: 0; top: 33%; transform: translateY(-50%); width: 56px; height: 56px; background: rgba(17,17,17,0.4); backdrop-filter: blur(8px); border: none; cursor: pointer; color: #fff; border-top-left-radius: 99px; border-bottom-left-radius: 99px; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.25s ease, background 0.2s ease; }
        .cards-outer:hover .carousel-arrow { opacity: 1; }
        .carousel-arrow:hover { background: rgba(17,17,17,0.65) !important; }
      `}</style>
      <div className="max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24">

        {/* ── Header ── */}
        <div
          style={{ display: "flex", flexDirection: "column", marginBottom: 64, padding: "0 24px" }}
        >
          <h2
            style={{
              fontSize: "clamp(34px, 4vw, 48px)",
              fontWeight: 700,
              color: "#111827",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: "0 0 40px 0",
              textAlign: "center",
            }}
          >
            Design Your NFC Business Card
          </h2>

          {/* Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className="tab-pill"
                onClick={() => setActiveTab(i)}
                style={{
                  background: activeTab === i ? "#005AD1" : "#F5F5F5",
                  color: activeTab === i ? "#ffffff" : "#374151",
                  boxShadow:
                    activeTab === i ? "0 8px 24px rgba(0,102,255,0.3)" : "none",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="cards-outer" style={{ position: "relative" }}>
          <div
            ref={scrollRef}
            className="no-scrollbar cards-container"
          >
            {cards.map((card) => {
              const selColor = activeColors[card.id] ?? 0;
              const currentVariant = card.variants[selColor] || card.variants[0];
              return (
                <div
                  key={card.id}
                  className="card-wrap"
                >
                  <div
                    className="gray-box"
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      background: "#F2F2F2",
                      borderRadius: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "clamp(20px, 10vw, 40px)",
                      marginBottom: 32,
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      className="biz-card"
                      style={{
                        width: "100%",
                        aspectRatio: "1.58/1",
                        borderRadius: 12,
                        background: currentVariant.bgCard,
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.20)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "clamp(12px, 5vw, 24px)",
                        boxSizing: "border-box",
                      }}
                    >
                      <div className="shimmer-layer" />

                      {card.woodGrain && (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            pointerEvents: "none",
                            backgroundImage:
                              "repeating-linear-gradient(88deg, transparent, transparent 4px, rgba(0,0,0,0.035) 4px, rgba(0,0,0,0.035) 5px)",
                          }}
                        />
                      )}

                      {card.id === "parallels" && (
                        <svg
                          style={{
                            position: "absolute",
                            inset: 0,
                            pointerEvents: "none",
                            width: "100%",
                            height: "100%",
                            opacity: 0.15,
                          }}
                          preserveAspectRatio="none"
                          viewBox="0 0 100 100"
                        >
                          <line x1="50" y1="0" x2="100" y2="100" stroke="#D4AF37" strokeWidth="1" />
                          <line x1="0" y1="100" x2="50" y2="0" stroke="#D4AF37" strokeWidth="1" />
                        </svg>
                      )}

                      {card.isCustom && (
                        <div
                          style={{
                            position: "absolute",
                            top: 14,
                            right: 14,
                            fontSize: 10,
                            fontWeight: 900,
                            color: "#ffffff",
                            fontStyle: "italic",
                          }}
                        >
                          Connecxa
                        </div>
                      )}

                      <div
                        style={{
                          textAlign: "center",
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 900,
                            fontSize: "clamp(14px, 4vw, 18px)",
                            color: currentVariant.textColor,
                            letterSpacing: "0.2em",
                          }}
                        >
                          {card.title}
                        </div>
                        <div
                          style={{
                            fontSize: "clamp(7px, 2vw, 9px)",
                            fontWeight: 700,
                            color: currentVariant.subColor,
                            letterSpacing: "0.3em",
                            marginTop: 5,
                            textTransform: "uppercase",
                            opacity: 0.8,
                          }}
                        >
                          {card.sub}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                      marginBottom: 24,
                    }}
                  >
                    {card.variants.map((v, ci) => (
                      <div
                        key={ci}
                        className="color-dot"
                        onClick={() =>
                          setActiveColors((prev) => ({
                            ...prev,
                            [card.id]: ci,
                          }))
                        }
                        style={{
                          width: 24,
                          height: 24,
                          background: v.dot,
                          border: v.hasBorder
                            ? "2px solid #E5E7EB"
                            : "2px solid transparent",
                          boxShadow:
                            selColor === ci
                              ? `0 0 0 2px #fff, 0 0 0 4px #22c55e`
                              : "0 1px 3px rgba(0,0,0,0.15)",
                        }}
                      />
                    ))}
                  </div>

                  <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <h3
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#111827",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {card.name}
                    </h3>
                    <p
                      style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: "#9CA3AF",
                        margin: 0,
                      }}
                    >
                      {card.price}
                    </p>
                  </div>

                  <div
                    style={{
                      paddingTop: 24,
                      borderTop: "1px solid #F3F4F6",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div className="spec-row">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                      {card.material}
                    </div>
                    <div className="spec-row">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                      {card.printing}
                    </div>
                    <div className="spec-row" style={{ opacity: 0.8 }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      Lifetime Usage
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 48, display: "flex", justifyContent: "center", padding: "0 24px" }}>
          <Link href="/shop/products" style={{ textDecoration: "none" }}>
            <button
              className="view-all-btn"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: "#111827",
              }}
            >
              View All Products →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
