"use client";

import React from "react";
import Image from "next/image";
import { Gift } from "lucide-react";

export default function CorporateGiftingHero() {
  return (
    <section className="w-full flex justify-center py-6 md:py-12 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1600px] px-6">
        <div className="relative flex flex-col lg:flex-row items-stretch bg-[#F3F7FA] rounded-[48px] min-h-[700px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.05)] border-[8px] border-white">

          {/* Subtle bg art */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 flex-1 lg:flex-[0_0_50%] flex flex-col justify-center p-12 md:p-14 lg:pl-[clamp(60px,8vw,120px)] lg:pr-[40px] lg:py-[80px]">
            <div className="text-[14px] font-bold tracking-[0.2em] text-[#005AD1] uppercase mb-8">
              CORPORATE GIFTING
            </div>
            <h1 className="text-[52px] md:text-[68px] lg:text-[84px] font-[900] text-[#005AD1] leading-[1.02] mb-8">
              Corporate Gifting <br /> Made Easy
            </h1>
            <p className="text-[20px] text-[#005AD1]/70 leading-[1.6] mb-12 max-w-[540px] font-medium">
              Make gifting effortless with fully customisable NFC products that are practical, memorable, and delivered fast - perfect for any event or occasion.
            </p>

            <button
              style={{
                background: "#FF5C00",
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
                boxShadow: "0 8px 28px rgba(255,92,0,0.25)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(255,92,0,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(255,92,0,0.25)";
              }}
            >
              Get Started
              <span style={{ fontSize: 20, marginLeft: 8 }}>→</span>
            </button>
          </div>

          {/* Right Mockup */}
          <div className="relative z-10 flex-1 flex items-center justify-center p-8 lg:p-12">
            <div className="relative w-full aspect-[4/3] max-w-[700px] rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-white/50 group">
              <Image
                src="/corporate-gifting-hero-composite.png"
                alt="Corporate Gifting Mockup"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Floating Gift Icon */}
              <div className="absolute top-[15%] right-[10%] w-16 h-16 md:w-20 md:h-20 bg-[#005AD1] rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white transform translate-x-4 -translate-y-4">
                <Gift className="w-8 h-8 md:w-10 md:h-10" />
              </div>

              {/* Subtle glare overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
