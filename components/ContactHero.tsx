"use client";

import React from "react";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="w-full flex justify-center py-6 md:py-12 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1600px] px-6">
        <div className="relative flex flex-col lg:flex-row items-stretch bg-[#FDE68A] rounded-[48px] min-h-[700px] overflow-hidden shadow-[0_32px_80px_rgba(253,230,138,0.25)] border-[8px] border-white">
          
          {/* Subtle bg art */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 flex-1 lg:flex-[0_0_50%] flex flex-col justify-center p-12 md:p-14 lg:pl-[80px] lg:pr-[40px] lg:py-[80px] mt-48" style={{margin: "0 60px"}}>
            <div className="text-[13px] font-bold tracking-[0.12em] text-[#111] uppercase mb-8">
              Smart Contact Management
            </div>
            <h1 className="text-[52px] md:text-[68px] lg:text-[84px] font-black text-[#111] leading-[1.02] mb-8 ">
              Your Contact Book<br />Just Got Smarter
            </h1>
            <p className="text-[20px] text-[#222] leading-[1.6] mb-12 max-w-[520px] font-medium opacity-90">
              Built for modern professionals - fast, organised, and always in sync. A cleaner, clearer way to manage relationships.
            </p>
            
            <button className="flex items-center gap-[15px] bg-white text-[#111] text-[20px] font-black rounded-[50px] px-10 py-5 shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_56px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all w-fit cursor-pointer outline-none border-none">
              Get Started
              <span className="text-[24px] leading-none">→</span>
            </button>
          </div>

          {/* Right Mockup */}
          <div className="relative z-10 flex-1 flex items-center justify-center p-8 lg:p-12">
            <div className="relative w-full aspect-[4/3] max-w-[600px] rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.14)] border border-white/50 group">
              <Image
                src="/contact-book-mockup.png"
                alt="Contact Book Mockup"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Subtle glare overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
