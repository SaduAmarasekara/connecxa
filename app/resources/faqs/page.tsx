"use client";

import React from "react";

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <div className="w-16 h-16 bg-[#005AD1]/10 rounded-2xl flex items-center justify-center mb-8">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M9 8h.01" />
          <path d="M12 8h.01" />
          <path d="M15 8h.01" />
        </svg>
      </div>
      <h1 className="text-5xl font-black text-[#111] mb-6">Frequently Asked Questions</h1>
      <p className="text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
        Looking for answers? We are compiling a comprehensive list of FAQs to help you navigate our platform effortlessly.
      </p>
      <div className="mt-12">
        <a href="/" className="px-8 py-4 bg-[#005AD1] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          Explore Features
        </a>
      </div>
    </main>
  );
}
