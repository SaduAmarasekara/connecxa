"use client";

import React from "react";

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <div className="w-16 h-16 bg-[#005AD1]/10 rounded-2xl flex items-center justify-center mb-8">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
      <h1 className="text-5xl font-black text-[#111] mb-6">Help Center</h1>
      <p className="text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
        Our guides and tutorials are currently being updated to provide you with the best possible support experience. Check back soon!
      </p>
      <div className="mt-12 flex gap-4">
        <a href="/" className="px-8 py-4 bg-[#005AD1] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          Return Home
        </a>
        <a href="/contact-us" className="px-8 py-4 bg-gray-100 text-[#111] font-bold rounded-full hover:bg-gray-200 transition-all">
          Contact Support
        </a>
      </div>
    </main>
  );
}
