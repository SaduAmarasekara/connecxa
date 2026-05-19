"use client";

import React from "react";
import Image from "next/image";

export default function HowToCreateCard() {
  const avatars = [
    { src: "/profile-classic.png", alt: "Classic Profile", style: { left: "8%", bottom: "25%", width: "56px", height: "56px" } },
    { src: "/contact-hero-1.png", alt: "Contact 1", style: { left: "16%", bottom: "48%", width: "64px", height: "64px" } },
    { src: "/profile-creative.png", alt: "Creative Profile", style: { left: "26%", bottom: "66%", width: "72px", height: "72px" } },
    { src: "/profile-minimalist.png", alt: "Minimalist Profile", style: { left: "38%", bottom: "76%", width: "52px", height: "52px" } },
    { src: "/profile-corporate.png", alt: "Corporate Profile", style: { right: "8%", bottom: "25%", width: "56px", height: "56px" } },
    { src: "/contact-hero-2.png", alt: "Contact 2", style: { right: "16%", bottom: "48%", width: "64px", height: "64px" } },
    { src: "/profile-modern.png", alt: "Modern Profile", style: { right: "26%", bottom: "66%", width: "72px", height: "72px" } },
    { src: "/profile-professional.png", alt: "Professional Profile", style: { right: "38%", bottom: "76%", width: "52px", height: "52px" } },
  ];

  return (
    <section className="w-full pt-16 pb-20 flex flex-col items-center z-10 relative overflow-hidden bg-transparent">
      {/* Container */}
      <div className="w-full max-w-[1280px] px-6 sm:px-10 lg:px-16 flex flex-col items-center">
        
        {/* ── Title & Header ── */}
        <div className="text-center mb-12 max-w-[850px] z-20">
          <h2 className="text-[36px] md:text-[52px] font-[900] text-[#111827] leading-[1.08] mb-6 tracking-tight">
            On brand from day one.
          </h2>
          <p className="text-[17px] md:text-[20px] text-[#4B5563] max-w-[700px] mx-auto font-medium leading-relaxed opacity-95">
            Whether you are a realtor, freelancer, or consultant, create a virtual profile that looks professionally designed.
          </p>

          <button
            onClick={() => window.open(`${process.env.NEXT_PUBLIC_APP_URL || '#'}/login`, "_blank")}
            className="mt-8 font-bold text-[16px] md:text-[17px] text-white"
            style={{
              background: "#005AD1",
              border: "none",
              borderRadius: "999px",
              padding: "14px 36px",
              cursor: "pointer",
              boxShadow: "0 8px 30px rgba(0, 90, 209, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 12px 36px rgba(0, 90, 209, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.background = "#004bb1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 90, 209, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.background = "#005AD1";
            }}
          >
            Get started for free
          </button>
        </div>

        {/* ── Orbit Graphic Showcase ── */}
        <div 
          className="relative w-full flex justify-center items-end"
          style={{
            height: "560px",
            marginTop: "-20px",
            maxWidth: "1000px",
          }}
        >
          {/* Subtle curved connecting arc (SVG) */}
          <div className="absolute inset-0 z-0 flex justify-center items-end pointer-events-none">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1000 560" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.7 }}
            >
              {/* Main connecting path */}
              <path 
                d="M 120,440 C 200,240, 800,240, 880,440" 
                stroke="rgba(0, 90, 209, 0.15)" 
                strokeWidth="2.5" 
                strokeDasharray="6 8" 
              />
              
              {/* Subtle animated/glow indicator dots on arc */}
              <circle cx="210" cy="336" r="3.5" fill="#005AD1" className="glow-dot" />
              <circle cx="340" cy="275" r="3.5" fill="#005AD1" className="glow-dot" />
              <circle cx="500" cy="254" r="3.5" fill="#005AD1" className="glow-dot" />
              <circle cx="660" cy="275" r="3.5" fill="#005AD1" className="glow-dot" />
              <circle cx="790" cy="336" r="3.5" fill="#005AD1" className="glow-dot" />
            </svg>
          </div>

          {/* ── Stacked Backing Cards (Fanned out) ── */}
          <div className="absolute z-10 flex justify-center items-end" style={{ width: "280px", height: "430px", bottom: "0px" }}>
            {/* Green fanned card */}
            <div 
              className="absolute w-full h-full rounded-[32px] pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                transform: "rotate(-10deg) translate(-28px, -4px)",
                opacity: 0.85,
                transformOrigin: "bottom center",
                boxShadow: "-8px 12px 30px rgba(0,0,0,0.06)",
                zIndex: 1,
              }}
            />
            {/* Orange/Peach fanned card */}
            <div 
              className="absolute w-full h-full rounded-[32px] pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                transform: "rotate(-5deg) translate(-14px, -2px)",
                opacity: 0.9,
                transformOrigin: "bottom center",
                boxShadow: "-4px 10px 24px rgba(0,0,0,0.06)",
                zIndex: 2,
              }}
            />
            {/* Pink/Magenta fanned card */}
            <div 
              className="absolute w-full h-full rounded-[32px] pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #EC4899 0%, #D946EF 100%)",
                transform: "rotate(5deg) translate(14px, -2px)",
                opacity: 0.9,
                transformOrigin: "bottom center",
                boxShadow: "4px 10px 24px rgba(0,0,0,0.06)",
                zIndex: 3,
              }}
            />
            {/* Purple/Blue fanned card */}
            <div 
              className="absolute w-full h-full rounded-[32px] pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
                transform: "rotate(10deg) translate(28px, -4px)",
                opacity: 0.85,
                transformOrigin: "bottom center",
                boxShadow: "8px 12px 30px rgba(0,0,0,0.06)",
                zIndex: 0,
              }}
            />

            {/* ── Main Foreground Phone Mockup Card ── */}
            <div 
              className="absolute w-full h-full bg-white rounded-[32px] border border-gray-100 flex flex-col overflow-hidden z-20"
              style={{
                boxShadow: "0 30px 70px -15px rgba(0, 90, 209, 0.18), 0 15px 35px -10px rgba(0, 0, 0, 0.08)",
                transform: "translateY(-4px)",
              }}
            >
              {/* Card top banner with soft blue sky gradient */}
              <div 
                className="w-full relative flex flex-col items-center justify-end"
                style={{
                  height: "145px",
                  background: "linear-gradient(180deg, #60A5FA 0%, #D5E6FE 100%)",
                }}
              >
                {/* Profile Pic Wrapper */}
                <div 
                  className="relative overflow-hidden rounded-full border-4 border-white bg-white shadow-md"
                  style={{
                    width: "88px",
                    height: "88px",
                    marginBottom: "-40px",
                    zIndex: 2,
                  }}
                >
                  <Image 
                    src="/profile-elegant.png"
                    alt="Elise Parker profile picture"
                    fill
                    className="object-cover"
                    sizes="88px"
                  />
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex flex-col items-center pt-12 px-6 flex-grow">
                <h3 className="text-[20px] font-extrabold text-[#111827] leading-none mb-1">
                  Elise Parker
                </h3>
                <p className="text-[13px] text-[#4B5563] font-semibold mb-2">
                  Ops Lead
                </p>
                
                {/* Location */}
                <div className="flex items-center gap-1 text-[11px] text-[#9CA3AF] font-medium mb-6">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Boston · Meridian</span>
                </div>

                {/* Connect CTA Button */}
                <button 
                  className="w-full font-bold text-[14px] text-white rounded-full py-3 mb-6"
                  style={{
                    background: "#3B82F6",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(59, 130, 246, 0.35)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2563EB";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#3B82F6";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Exchange Contact
                </button>

                {/* Profile Contact Info Fields */}
                <div className="w-full flex flex-col gap-3">
                  {/* Email Field */}
                  <div className="w-full bg-[#F3F4F6] rounded-xl px-4 py-2.5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#3B82F6] shadow-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] text-[#9CA3AF] font-bold leading-tight">Email</span>
                      <span className="text-[11px] text-[#1F2937] font-bold leading-tight select-all">elise.parker@meridian.co</span>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="w-full bg-[#F3F4F6] rounded-xl px-4 py-2.5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#3B82F6] shadow-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] text-[#9CA3AF] font-bold leading-tight">Mobile phone</span>
                      <span className="text-[11px] text-[#1F2937] font-bold leading-tight select-all">+1 (617) 555-0184</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Orbiting Avatars ── */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {avatars.map((avatar, idx) => (
              <div 
                key={idx}
                className="absolute overflow-hidden rounded-full border-2 border-white bg-white pointer-events-auto cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
                style={{
                  ...avatar.style,
                  transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.18) translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    className="object-cover"
                    sizes="72px"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ── Keyframe styles ── */}
      <style jsx global>{`
        .glow-dot {
          animation: dotGlow 3s ease-in-out infinite alternate;
        }
        @keyframes dotGlow {
          0% { r: 3.5; opacity: 0.6; fill: #005AD1; filter: drop-shadow(0 0 1px rgba(0,90,209,0.3)); }
          100% { r: 4.5; opacity: 1; fill: #60A5FA; filter: drop-shadow(0 0 5px rgba(96,165,250,0.8)); }
        }

        /* ── Responsive adaptation for Mobile ── */
        @media (max-width: 768px) {
          /* Scale down orbit section to fit smaller screens */
          div[style*="height: 560px"] {
            transform: scale(0.85);
            transform-origin: bottom center;
            height: 480px !important;
            margin-top: -60px !important;
            margin-bottom: 20px;
          }
          /* Hide outer avatars on very small screens to fit cleanly */
          @media (max-width: 480px) {
            div[style*="height: 560px"] {
              transform: scale(0.68);
              height: 380px !important;
              margin-top: -90px !important;
            }
            /* Hide far-left/far-right avatars */
            div[style*="left: 8%"], div[style*="right: 8%"],
            div[style*="left: 16%"], div[style*="right: 16%"] {
              display: none !important;
            }
          }
        }
      `}</style>
    </section>
  );
}
