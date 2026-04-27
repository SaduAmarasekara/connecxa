"use client";

import React from "react";
import Image from "next/image";

export default function TeamDashboardHero() {
  return (
    <section className="w-full flex justify-center py-6 md:py-12 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1600px] px-6">  
        <div className="relative flex flex-col lg:flex-row items-stretch bg-[#90CAD9] rounded-[48px] min-h-[600px] md:min-h-[700px] overflow-hidden shadow-[0 32px 80px rgba(144,202,217,0.25)] border-[8px] border-white">

          {/* Subtle bg art */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 flex-1 lg:flex-[0_0_50%] flex flex-col justify-center p-12 md:p-14 lg:pl-[80px] lg:pr-[40px] lg:py-[80px]" style={{ marginLeft: 50 }} >
            <div className="text-[13px] font-bold tracking-[0.12em] text-[#005AD1] uppercase mb-8">
              CENTRALISED TEAM MANAGEMENT
            </div>
            <h1 className="text-[52px] md:text-[68px] lg:text-[84px] font-black text-[#111] leading-[1.02] mb-8">
              Run Everything.<br />From One Place.
            </h1>
            <p className="text-[20px] text-[#222] leading-[1.6] mb-12 max-w-[540px] font-medium opacity-90">
              Simplify team-wide digital business card management with your centralised control panel. Built for smarter team operations.
            </p>
            
            <button 
              style={{
                background: "#fff",
                color: "#005AD1",
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
                boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.12)";
              }}
            >
              Get Started
              <span style={{ fontSize: 20, marginLeft: 8 }}>→</span>
            </button>
          </div>

          {/* Right Mockup */}
          <div className="relative z-10 flex-1 flex items-center justify-center p-8 lg:p-12">
            <div className="relative w-full aspect-[16/10] max-w-[750px] group">
              <Image
                src="/team-dashboard-mockup.png"
                alt="Team Dashboard Central Control Panel"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
