"use client";

import React from "react";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <div className="w-16 h-16 bg-[#005AD1]/10 rounded-2xl flex items-center justify-center mb-8">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
          <path d="M2 10h20" />
        </svg>
      </div>
      <h1 className="text-5xl font-black text-[#111] mb-6">Our Blog</h1>
      <p className="text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
        Stay tuned for articles, industry insights, and success stories from the Connecxa community. Coming soon!
      </p>
      <div className="mt-12">
        <a href="/" className="px-8 py-4 bg-[#FF5C00] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          Back to Homepage
        </a>
      </div>
    </main>
  );
}
