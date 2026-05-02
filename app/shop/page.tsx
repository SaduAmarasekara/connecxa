"use client";

import CardShowcase from "@/components/CardShowcase";
import NutshellFeatures from "@/components/NutshellFeatures";
import FAQ from "@/components/FAQ";
import PurchaseSteps from "@/components/PurchaseSteps";
import CorporateBranding from "@/components/CorporateBranding";

export default function ShopPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <main className="w-full flex flex-col items-center py-6 lg:py-8">
        <div className="w-full max-w-[1600px] px-6 lg:px-12">
          {/* Blue Hero Card */}
          <div
            className="relative flex flex-col lg:flex-row items-center lg:items-stretch overflow-hidden bg-[#005AD1] text-white rounded-[32px] md:rounded-[48px] shadow-[0_20px_60px_rgba(28,89,150,0.3)] w-full"
            style={{
              minHeight: "auto",
              paddingTop: "clamp(40px,5vw,80px)",
              paddingLeft: "clamp(20px,5vw,80px)",
              paddingRight: "clamp(20px,5vw,80px)",
            }}
          >
            {/* Background effects */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "45%",
                background:
                  "linear-gradient(to bottom,rgba(255,255,255,0.05),transparent)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "35%",
                background:
                  "linear-gradient(to top,rgba(10,40,80,0.5),transparent)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: -120,
                right: -80,
                width: 500,
                height: 500,
                borderRadius: "50%",
                background: "rgba(37,115,194,0.18)",
                filter: "blur(80px)",
                pointerEvents: "none",
              }}
            />

            {/* ── Left Column ── */}
            <div className="z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-[clamp(320px,42%,580px)] shrink-0 pb-12 lg:pb-20 lg:pr-0">
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: 20,
                }}
              >
                NFC Business Cards
              </div>

              <h1
                style={{
                  fontSize: "clamp(42px,4.5vw,72px)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  marginBottom: 24,
                }}
              >
                Your Smartest
                <br className="hidden lg:block" />
                Business Card Yet
              </h1>

              <p
                style={{
                  fontSize: "clamp(15px,1.4vw,20px)",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.65,
                  fontWeight: 500,
                  maxWidth: 460,
                  marginBottom: 40,
                }}
              >
                Modernise your networking with a single tap - share socials,
                links, and contacts instantly.
              </p>

              <button
                style={{
                  background: "#fff",
                  color: "#111827",
                  fontSize: 18,
                  fontWeight: 800,
                  borderRadius: 50,
                  padding: "16px 36px",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  width: "fit-content",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 36px rgba(0,0,0,0.22)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(0,0,0,0.18)";
                }}
              >
                Customise Now <span style={{ fontSize: 20 }}>→</span>
              </button>
            </div>

            {/* ── Right Column ── */}
            <div className="flex-1 relative flex items-end justify-center z-10 w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] mt-10 lg:mt-0 lg:pr-0 pb-10 lg:pb-0 scale-[0.8] sm:scale-100 origin-bottom">
              {/* ── Phone Shell ── */}
              <div
                style={{
                  position: "relative",
                  width: 272,
                  height: 560,
                  background: "#141414",
                  borderRadius: 44,
                  border: "7px solid #282828",
                  boxShadow:
                    "0 40px 90px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.07)",
                  overflow: "hidden",
                  zIndex: 20,
                  flexShrink: 0,
                  marginBottom: 0,
                }}
              >
                {/* Dynamic island */}
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 88,
                    height: 22,
                    background: "#000",
                    borderRadius: 20,
                    zIndex: 30,
                  }}
                />

                {/* Screen */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#111",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Hero photo — coffee shop */}
                  <div
                    style={{
                      width: "100%",
                      height: 168,
                      position: "relative",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    {/* Warm coffee-shop background */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(135deg,#c8a070 0%,#9a6b38 40%,#6b3f1a 100%)",
                      }}
                    />
                    {/* Wall/board detail */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "55%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "12px 14px 12px 8px",
                        gap: 5,
                      }}
                    >
                      {[
                        "FILTER COFFEE",
                        "ESPRESSO",
                        "SINGLE ORIGIN COFFEE  A..",
                        "MACCHIATO",
                        "FLAT WHITE",
                        "CAPPUCCINO",
                        "LATTE",
                      ].map((t, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              height: 2.5,
                              flex: 1,
                              background: "rgba(255,255,255,0.55)",
                              borderRadius: 2,
                            }}
                          />
                          <div
                            style={{
                              height: 2.5,
                              width: 16,
                              background: "rgba(255,255,255,0.4)",
                              borderRadius: 2,
                              flexShrink: 0,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Photo overlay gradient */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg,rgba(0,0,0,0.05) 0%,rgba(0,0,0,0.45) 100%)",
                      }}
                    />
                    {/* QR button top-right */}
                    <div
                      style={{
                        position: "absolute",
                        top: 36,
                        right: 12,
                        width: 34,
                        height: 34,
                        background: "rgba(255,255,255,0.92)",
                        borderRadius: 9,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 5,
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#111"
                        strokeWidth="2"
                      >
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="3" height="3" />
                        <rect x="18" y="14" width="3" height="3" />
                        <rect x="14" y="18" width="3" height="3" />
                        <rect x="18" y="18" width="3" height="3" />
                      </svg>
                    </div>
                  </div>

                  {/* Profile strip */}
                  <div
                    style={{
                      background: "#1a1a1a",
                      padding: "0 14px 10px",
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    {/* Avatar */}
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#d4a070,#996030)",
                        border: "3px solid #1a1a1a",
                        position: "absolute",
                        top: -30,
                        left: 14,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        zIndex: 5,
                      }}
                    >
                      {/* Silhouette face */}
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <circle cx="25" cy="18" r="10" fill="rgba(0,0,0,0.4)" />
                        <ellipse
                          cx="25"
                          cy="42"
                          rx="18"
                          ry="14"
                          fill="rgba(0,0,0,0.35)"
                        />
                      </svg>
                    </div>

                    <div style={{ paddingTop: 34 }}>
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 800,
                          color: "#fff",
                          marginBottom: 2,
                        }}
                      >
                        Gerald P.
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "rgba(255,255,255,0.45)",
                          fontWeight: 600,
                        }}
                      >
                        Entrepreneur | Coffee Roaster
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                      {[
                        <svg
                          key="phone"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16" />
                        </svg>,
                        <svg
                          key="mail"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>,
                      ].map((icon, i) => (
                        <div
                          key={i}
                          style={{
                            width: 38,
                            height: 38,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                          }}
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Menu list items */}
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      padding: "6px 8px 0",
                      overflow: "hidden",
                    }}
                  >
                    {[
                      {
                        emoji: "📋",
                        label: "Monthly Specials Menu",
                        arrow: true,
                      },
                      { emoji: "🔗", label: "Reserve a table", arrow: true },
                    ].map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          background: "#2a2a2a",
                          borderRadius: 11,
                          padding: "10px 12px",
                          gap: 8,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <span style={{ fontSize: 12 }}>{item.emoji}</span>
                          <span
                            style={{
                              fontSize: 11,
                              color: "#fff",
                              fontWeight: 600,
                            }}
                          >
                            {item.label}
                          </span>
                        </div>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="rgba(255,255,255,0.35)"
                          strokeWidth="2.5"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </div>
                    ))}

                    {/* Coffee Roasters with map */}
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          background: "#2a2a2a",
                          borderRadius: "11px 11px 0 0",
                          padding: "10px 12px",
                          gap: 8,
                        }}
                      >
                        <span style={{ fontSize: 12 }}>📍</span>
                        <span
                          style={{
                            fontSize: 11,
                            color: "#fff",
                            fontWeight: 600,
                          }}
                        >
                          Coffee Roasters
                        </span>
                      </div>
                      {/* Map tile */}
                      <div
                        style={{
                          height: 68,
                          background: "#2a3d2a",
                          borderRadius: "0 0 11px 11px",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 260 68"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          <rect width="260" height="68" fill="#3a5040" />
                          {/* Streets */}
                          <path
                            d="M0 34 L260 34"
                            stroke="#4a6a50"
                            strokeWidth="6"
                          />
                          <path
                            d="M80 0 L80 68"
                            stroke="#4a6a50"
                            strokeWidth="4"
                          />
                          <path
                            d="M170 0 L170 68"
                            stroke="#4a6a50"
                            strokeWidth="4"
                          />
                          <path
                            d="M0 18 L260 18"
                            stroke="#4a6a50"
                            strokeWidth="2"
                            strokeDasharray="6 5"
                          />
                          <path
                            d="M0 50 L260 50"
                            stroke="#4a6a50"
                            strokeWidth="2"
                            strokeDasharray="6 5"
                          />
                          {/* Street labels */}
                          <rect
                            x="10"
                            y="6"
                            width="55"
                            height="8"
                            rx="2"
                            fill="rgba(255,255,255,0.13)"
                          />
                          <rect
                            x="90"
                            y="38"
                            width="65"
                            height="8"
                            rx="2"
                            fill="rgba(255,255,255,0.11)"
                          />
                          <rect
                            x="180"
                            y="8"
                            width="70"
                            height="8"
                            rx="2"
                            fill="rgba(255,255,255,0.11)"
                          />
                          <rect
                            x="185"
                            y="38"
                            width="60"
                            height="8"
                            rx="2"
                            fill="rgba(255,255,255,0.09)"
                          />
                          {/* Pin */}
                          <circle
                            cx="130"
                            cy="34"
                            r="8"
                            fill="#FF5C00"
                            stroke="#fff"
                            strokeWidth="2"
                          />
                          <circle cx="130" cy="34" r="3" fill="#fff" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Home bar */}
                  <div
                    style={{
                      width: 56,
                      height: 4,
                      background: "rgba(255,255,255,0.18)",
                      borderRadius: 2,
                      margin: "8px auto",
                    }}
                  />
                </div>
              </div>

              {/* Side buttons */}
              <div
                style={{
                  position: "absolute",
                  right: "calc(50% - 156px)",
                  top: 130,
                  width: 4,
                  height: 38,
                  background: "#282828",
                  borderRadius: 2,
                  zIndex: 19,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "calc(50% - 156px)",
                  top: 120,
                  width: 4,
                  height: 28,
                  background: "#282828",
                  borderRadius: 2,
                  zIndex: 19,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "calc(50% - 156px)",
                  top: 158,
                  width: 4,
                  height: 28,
                  background: "#282828",
                  borderRadius: 2,
                  zIndex: 19,
                }}
              />

              {/* ── Floating Orange NFC Card ── */}
              <div
                className="absolute right-4 lg:right-[clamp(30px,6%,80px)] bottom-[50px] lg:bottom-[70px] w-[200px] sm:w-[248px] h-[130px] sm:h-[158px] rounded-[20px] shadow-[0_24px_60px_rgba(0,0,0,0.55)] p-4 z-30 flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 hover:scale-105"
                style={{
                  background: "linear-gradient(145deg,#e8632a 0%,#c84e18 100%)",
                }}
              >
                {/* NFC waves */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 14,
                    opacity: 0.5,
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111"
                    strokeWidth="2"
                  >
                    <path d="M4.9 19.1C3.1 17.3 2 14.8 2 12c0-2.8 1.1-5.3 2.9-7.1" />
                    <path d="M8.4 15.6c-.9-.9-1.5-2.2-1.5-3.6 0-1.4.6-2.7 1.5-3.6" />
                    <path d="M12 12h.01" />
                    <path d="M15.6 15.6c.9-.9 1.5-2.2 1.5-3.6 0-1.4-.6-2.7-1.5-3.6" />
                    <path d="M19.1 19.1c1.8-1.8 2.9-4.3 2.9-7.1 0-2.8-1.1-5.3-2.9-7.1" />
                  </svg>
                </div>

                {/* Circular logo */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 106,
                      height: 106,
                      borderRadius: "50%",
                      border: "2px solid rgba(0,0,0,0.3)",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 7,
                        fontSize: 7,
                        fontWeight: 900,
                        color: "rgba(0,0,0,0.55)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      · TAMBRAUW ·
                    </div>
                    {/* Bean / plant icon */}
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 60 60"
                      fill="none"
                      stroke="rgba(0,0,0,0.5)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M14 42 C14 22, 46 22, 46 42" />
                      <path d="M20 52 C28 44, 32 44, 40 52" />
                      <path d="M30 32 L26 20 M30 32 L34 18 M30 32 L29 40" />
                    </svg>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 8,
                        fontSize: 7,
                        fontWeight: 900,
                        color: "rgba(0,0,0,0.55)",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      COFFEE
                    </div>
                    {/* Tick marks around circle */}
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          width: i % 6 === 0 ? 2 : 1.5,
                          height: i % 6 === 0 ? 5 : 3,
                          background: `rgba(0,0,0,${i % 6 === 0 ? 0.4 : 0.2})`,
                          borderRadius: 1,
                          top: "50%",
                          left: "50%",
                          transformOrigin: "0 -50px",
                          transform: `translate(-50%,-50%) rotate(${i * 15}deg) translateY(-50px)`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "rgba(0,0,0,0.4)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  PREMIUM QUALITY
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="w-full h-24 lg:h-32 bg-white" />
      <NutshellFeatures />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <CardShowcase />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <PurchaseSteps />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <CorporateBranding />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <FAQ />
      <div className="w-full h-24 lg:h-32 bg-white" />
    </div>
  );
}