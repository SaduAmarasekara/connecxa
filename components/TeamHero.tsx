"use client";

import React from "react";
import Image from "next/image";

export default function TeamHero() {
  return (
    <section className="w-full flex justify-center py-6 md:py-12 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1600px] px-6">
        <div className="relative flex flex-col lg:flex-row items-stretch bg-[#111111] rounded-[48px] min-h-[700px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)]">

          {/* Subtle bg art */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 flex-1 lg:flex-[0_0_50%] flex flex-col justify-center p-12 md:p-14 lg:pl-[80px] lg:pr-[40px] lg:py-[80px]" style={{ marginLeft: 30, marginBottom: 50 }}>
            <div className="text-[14px] font-bold tracking-[0.2em] text-white/70 uppercase mb-8" style={{ marginBottom: 15  }}>
              FOR TEAMS
            </div>
            <h1 className="text-[52px] md:text-[68px] lg:text-[84px] font-[900] text-white leading-[1.02] mb-8" 
            style={{ marginBottom: 15  }}>
              Modern Tools for <br /> Modern Teams
            </h1>
            <p className="text-[20px] text-white/60 leading-[1.6] mb-12 max-w-[540px] font-medium" style={{ marginBottom: 40 }}>
              From startups to enterprises, manage your team's digital business cards, CRM and leads, all from one central platform.
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
                marginLeft: 50
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.18)";
              }}
            >
              Get Started
              <span style={{ fontSize: 20, marginLeft: 8 }}>→</span>
            </button>
          </div>

          {/* Right Mockup */}
          <div className="relative z-10 flex-1 flex items-center justify-center p-8 lg:p-12">
            <div className="relative w-full aspect-[4/3] max-w-[750px] group">
              <Image
                src="/team-hero-composite.png"
                alt="Team Dashboard Mockup"
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
