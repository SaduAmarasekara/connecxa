"use client";

import React from 'react';
import Image from "next/image";
import SmarterConnect from "@/components/SmarterConnect";
import ProfilesShowcase from "@/components/ProfilesShowcase";
import FeatureGrid from "@/components/FeatureGrid";
import SecuritySection from "@/components/SecuritySection";
import ProductShowcase from "@/components/ProductShowcase";
import FAQ from '@/components/FAQ';

export default function DigitalBusinessCards() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-6 md:py-12" style={{ fontFamily: "DM Sans, sans-serif" }}>
      
      {/* Hero Section Container */}
      <div className="w-full max-w-[1600px] px-6">
        {/* ── Hero ── */}
        <div className="relative flex flex-col lg:flex-row items-stretch bg-[#D8C4E0] rounded-[48px] min-h-[700px] overflow-hidden">
          
          {/* Left Content */}
          <div className="relative z-10 flex-1 lg:flex-[0_0_55%] flex flex-col justify-center p-12 md:p-14 lg:pl-[80px] lg:pr-[40px] lg:py-[80px]">
            <div className="text-[14px] font-bold tracking-[0.15em] text-black uppercase mb-6">
              DIGITAL BUSINESS CARD
            </div>
            <h1 className="text-[56px] md:text-[72px] lg:text-[88px] font-black text-black leading-[1.02] mb-8 tracking-[-0.04em]">
              Ditch the Paper.<br />Go Fully Digital.
            </h1>
            <p className="text-[21px] text-black/80 leading-[1.6] mb-12 max-w-[560px] font-medium">
              Make every impression count with a sleek, modern digital business card - no apps, no limits, just your brand at its best.
            </p>
            
            <button 
              style={{
                background: "#fff",
                color: "#000",
                fontSize: 18,
                fontWeight: 800,
                borderRadius: 50,
                padding: "18px 42px",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                width: "fit-content",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
              }}
            >
              Get Started
              <span style={{ fontSize: 22 }}>→</span>
            </button>
          </div>

          {/* Right Mockup */}
          <div className="relative z-10 flex-1 flex items-center justify-center p-8 lg:p-12 lg:pr-[80px]">
            <div className="relative w-full aspect-square max-w-[650px] group">
              {/* Background Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white/20 rounded-full blur-3xl" />
              
              <Image
                src="/digital_card_lavender_mockup_1777364739572.png"
                alt="Digital Business Card Mockup"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_40px_80px_rgba(0,0,0,0.2)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page Sections */}
      <div className="w-full">
        <div className="w-full h-24 lg:h-32 bg-white" />
        <ProfilesShowcase />
        <div className="w-full h-24 lg:h-32 bg-white" />
        
        {/* Product Showcase Section */}
        <ProductShowcase />
        
        <div className="w-full h-24 lg:h-32 bg-white" />
        <SmarterConnect />
        <div className="w-full h-24 lg:h-32 bg-white" />
        
        {/* Explore More Powerful Tools Section */}
        <FeatureGrid />
        
        <div className="w-full h-24 lg:h-32 bg-white" />

        {/* Security Section */}
        <SecuritySection />

        <div className="w-full h-24 lg:h-32 bg-white" />
        <FAQ />
        <div className="w-full h-24 lg:h-32 bg-white" />
      </div>
    </main>
  );
}
