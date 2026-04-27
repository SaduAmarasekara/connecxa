"use client";

import React from "react";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import CorporateCTA from "@/components/CorporateCTA";

export default function NFCEventsPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── Events Hero ── */}
      <section className="w-full flex justify-center py-6 md:py-12 bg-white">
        <div className="w-full max-w-[1600px] px-6">
          <div className="relative flex flex-col lg:flex-row items-stretch bg-[#005AD1] rounded-[48px] min-h-[700px] overflow-hidden shadow-[0_32px_80px_rgba(0,90,209,0.25)] border-[8px] border-white text-white">
            
            {/* Subtle bg art */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content */}
            <div className="relative z-10 flex-1 lg:flex-[0_0_50%] flex flex-col justify-center p-12 md:p-14 lg:pl-[80px] lg:pr-[40px] lg:py-[80px]">
              <div className="text-[13px] font-bold tracking-[0.12em] text-white/70 uppercase mb-8">
                LIVE EVENT ACTIVATIONS
              </div>
              <h1 className="text-[52px] md:text-[68px] lg:text-[84px] font-black text-white leading-[1.02] mb-8">
                NFC Live Printing.<br />Real-time Impact.
              </h1>
              <p className="text-[20px] text-white/80 leading-[1.6] mb-12 max-w-[520px] font-medium">
                Personalise and print custom NFC cards for your guests instantly at any event. The ultimate networking experience for modern trade shows and conferences.
              </p>
              
              <button className="flex items-center gap-[15px] bg-[#FF5C00] text-white text-[20px] font-black rounded-[50px] px-10 py-5 shadow-[0_16px_48px_rgba(255,92,0,0.3)] hover:shadow-[0_24px_56px_rgba(255,92,0,0.5)] hover:-translate-y-1 transition-all w-fit cursor-pointer outline-none border-none">
                Book for Event
                <span className="text-[24px] leading-none">→</span>
              </button>
            </div>

            {/* Right Mockup (Placeholder/Image) */}
            <div className="relative z-10 flex-1 flex items-center justify-center p-8 lg:p-12">
              <div className="relative w-full aspect-[4/3] max-w-[650px] rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-white/20 group">
                <Image
                  src="/nfc-live-printing.jpeg"
                  alt="NFC Live Printing at Event"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Row ── */}
      <section className="py-24 max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#005AD1]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">High Security</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Encrypted NFC chips ensure data privacy and secure connections for all your guests.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#005AD1]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Real-time Data</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Track event networking success with live analytics and connection heatmaps.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#005AD1]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22v-5" />
                <path d="M9 18V5a3 3 0 0 1 6 0v13" />
                <path d="M12 13V2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Custom Branding</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Every card is printed with your event's branding and guest's professional details.
            </p>
          </div>
        </div>
      </section>

      <div className="py-20">
        <CorporateCTA />
      </div>

      <div className="py-20">

        <FAQ />
      </div>
    </div>
  );
}
