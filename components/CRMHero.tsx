"use client";

import React from "react";
import Image from "next/image";

import Link from "next/link";

export default function CRMHero() {
  return (
    <section className="w-full flex flex-col items-center pb-8 lg:pb-16 overflow-x-hidden" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <div className="w-full max-w-[1600px] px-5 md:px-16 lg:px-24">

        {/* CRM Hero Card */}
        <div
          className="relative flex flex-col lg:flex-row items-center lg:items-center overflow-hidden bg-white text-[#111827] rounded-[32px] md:rounded-[48px] w-full shadow-2xl"
          style={{
            minHeight: "auto",
            paddingTop: "clamp(25px,4vw,60px)",
            paddingLeft: "clamp(20px,5vw,80px)",
            paddingRight: "clamp(20px,5vw,80px)",
            background: "linear-gradient(180deg, #FFFFFF 0%, #D2E4FC 100%)",
          }}
        >

          {/* Background effects */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#005AD1]/3 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#005AD1]/3 rounded-full blur-[120px] pointer-events-none" />

          {/* ── Left Column ── */}
          <div className="z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-[clamp(320px,42%,580px)] shrink-0 pb-12 lg:pb-20 lg:pr-0">

            <div className="flex flex-col gap-6 md:gap-10 items-center lg:items-start w-full">
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#005AD1]/10 rounded-full px-5 py-2 text-[13px] font-bold tracking-[0.12em] uppercase text-[#005AD1] mb-6 shadow-sm" style={{ marginBottom: "10px" }}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#005AD1] animate-pulse" />
                CRM DEAL MANAGEMENT
              </div>

              <div className="space-y-4 md:space-y-6 w-full flex flex-col items-center lg:items-start">
                <h1
                  style={{
                    fontSize: "clamp(22px,3.5vw,60px)",
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "0.01em",
                    color: "#111827",
                    marginBottom: 24,
                  }}
                >
                  Modern Sales Tools.
                  <br className="hidden lg:block" />{" "}
                  Always Ready.
                </h1>
                <p
                  style={{
                    fontSize: "clamp(15px,1.4vw,20px)",
                    color: "#4B5563",
                    lineHeight: 1.65,
                    fontWeight: 500,
                    maxWidth: 460,
                    marginBottom: 10,
                  }}
                >
                  Designed for sales on the move - manage deals and pipelines anywhere, with seamless sync across mobile and desktop.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <button
                    onClick={() => window.open(`${process.env.NEXT_PUBLIC_APP_URL}/login`, "_blank")}
                    style={{
                      background: "#005AD1",
                      color: "#fff",
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
                      boxShadow: "0 8px 28px rgba(0,90,209,0.25)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 14px 36px rgba(0,90,209,0.35)";
                      e.currentTarget.style.background = "#0048A5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 28px rgba(0,90,209,0.25)";
                      e.currentTarget.style.background = "#005AD1";
                    }}
                  >
                    Get Started <span style={{ fontSize: 20 }}>→</span>
                  </button>
              </div>
            </div>
          </div>

          {/* ── Right Column — Image ── */}
          <div className="flex-1 relative w-full z-10 flex items-center justify-center lg:justify-end mt-12 lg:mt-0 min-h-[360px] md:min-h-[480px] lg:min-h-0">
            <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[580px] scale-[0.9] lg:scale-[0.8] origin-center transition-transform duration-700 ease-out hover:scale-[0.82] lg:translate-y-[-40px]">
              <Image
                src="/crm-deal-manager-mockup.png"
                alt="CRM Sales Pipeline Mockup"
                fill
                className="object-contain object-center drop-shadow-[0_45px_65px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
