"use client";

import React from 'react';
import SmarterConnect from "@/components/SmarterConnect";
import ProfilesShowcase from "@/components/ProfilesShowcase";
import FeatureGrid from "@/components/FeatureGrid";
import SecuritySection from "@/components/SecuritySection";
import ProductShowcase from "@/components/ProductShowcase";
import FAQ from '@/components/FAQ';

export default function DigitalBusinessCards() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-12" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        .hero-bg-circle {
          position: absolute;
          top: -12%;
          right: -6%;
          width: 600px;
          height: 600px;
          background: rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          pointer-events: none;
        }

        .art-blob {
          position: absolute;
        }

        .art-blob-1 {
          top: -15px;
          right: -15px;
          width: 140px;
          height: 140px;
          background: rgba(210, 100, 60, 0.35);
          border-radius: 60% 40% 70% 30%;
        }

        .art-blob-2 {
          bottom: -25px;
          left: 5px;
          width: 100px;
          height: 100px;
          background: rgba(180, 130, 80, 0.3);
          border-radius: 40% 60% 30% 70%;
        }

        .art-blob-3 {
          top: 10px;
          left: 40px;
          width: 80px;
          height: 80px;
          background: rgba(230, 180, 100, 0.25);
          border-radius: 50%;
        }

        .art-blob-4 {
          top: 30px;
          right: 60px;
          width: 50px;
          height: 50px;
          background: rgba(190, 80, 40, 0.2);
          border-radius: 30% 70% 50% 50%;
        }

        .float-pill {
          position: absolute;
          top: 50%;
          right: -118px;
          transform: translateY(-50%) rotate(-90deg);
          background: rgba(255, 255, 255, 0.92);
          padding: 7px 18px;
          border-radius: 10px 10px 0 0;
          font-size: 11px;
          font-weight: 700;
          color: #666;
          border: 0.5px solid #ddd;
          white-space: nowrap;
          backdrop-filter: blur(6px);
        }

        @media (max-width: 900px) {
          .float-pill {
            display: none;
          }
        }
      `}</style>

      {/* Hero Section Container (With Max Width) */}
      <div className="w-full max-w-[1600px] px-6">
        {/* ── Hero ── */}
        <div className="relative flex flex-col lg:flex-row items-stretch bg-[#DCC8F0] rounded-[48px] min-h-[700px] overflow-hidden shadow-[0_32px_80px_rgba(180,140,220,0.25)]">
          <div className="hero-bg-circle"></div>

          {/* Left Content */}
          <div className="relative z-10 flex-1 lg:flex-[0_0_50%] flex flex-col justify-center p-12 md:p-14 lg:pl-[72px] lg:pr-[56px] lg:py-[64px]" style={{ marginLeft: "60px" }}>
            <div className="text-[12px] font-bold tracking-[0.12em] text-[#3a3a3a] uppercase mb-6">
              Digital Business Card
            </div>
            <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-black text-[#111] leading-[1.04] mb-6">
              Ditch the Paper.<br />Go Fully Digital.
            </h1>
            <p className="text-[19px] text-[#4a4a4a] leading-[1.65] mb-10 max-w-[480px]">
              Make every impression count with a sleek, modern digital business card — no apps, no limits, just your brand at its best.
            </p>
           <button className="flex items-center gap-[15px] bg-white text-[#111] text-[30px] font-black rounded-[50px] px-12 py-5 shadow-[0_16px_48px_rgba(0,0,0,0.10)] hover:shadow-[0_24px_56px_rgba(0,0,0,0.16)] hover:-translate-y-1 transition-all w-fit cursor-pointer outline-none border-none mt-20">
  Get Started
  <span className="text-[25px] leading-none">→</span>
</button>
          </div>

          {/* Right Mockup */}
          <div className="relative z-10 flex-1 flex items-center justify-center p-12 md:p-14 lg:pl-[24px] lg:pr-[72px] lg:py-[48px]">
            <div className="relative bg-white rounded-[32px] w-full max-w-[320px] shadow-[0_40px_100px_rgba(0,0,0,0.14)] border-[0.5px] border-white/50">
              <div className="float-pill">Get 10% off</div>

              <div className="rounded-[32px] overflow-hidden">
                {/* Card Header */}
                <div className="h-[160px] bg-gradient-to-br from-[#f5e6d0] via-[#e8c4a8] to-[#d4a574] relative overflow-hidden">
                  <div className="art-blob art-blob-1"></div>
                  <div className="art-blob art-blob-2"></div>
                  <div className="art-blob art-blob-3"></div>
                  <div className="art-blob art-blob-4"></div>
                </div>

                {/* Profile Area */}
                <div className="flex flex-col items-center -mt-[52px] px-5 pb-4">
                  <div className="w-[104px] h-[104px] rounded-full border-[5px] border-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] bg-[#e8d0b8] shrink-0">
                    <svg viewBox="0 0 104 104" xmlns="http://www.w3.org/2000/svg">
                      <rect width="104" height="104" fill="#e8d0b8"/>
                      <circle cx="52" cy="38" r="22" fill="#d4b896"/>
                      <ellipse cx="52" cy="90" rx="38" ry="24" fill="#c9a882"/>
                    </svg>
                  </div>

                  <div className="text-[22px] font-extrabold text-[#111] mt-3 text-center">Jamie Smith</div>
                  <div className="text-[13px] color-[#999] font-medium mt-[3px] text-center">Creative Illustrator</div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4.5">
                    {[
                      { icon: <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16"/></svg> },
                      { icon: <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                      { icon: <svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> }
                    ].map((btn, i) => (
                      <div key={i} className="w-[44px] h-[44px] rounded-full bg-[#f5f5f5] border-[0.5px] border-[#eee] flex items-center justify-center cursor-pointer hover:bg-[#eee] transition-colors">
                        <div className="w-[17px] h-[17px] stroke-[#555] fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round">
                          {btn.icon}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Info List */}
                  <div className="w-full mt-4 flex flex-col gap-[7px]">
                    {[
                      { icon: <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, text: "jamiesmith@mail.com" },
                      { icon: <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, text: "Jamie Smith Creative Portfolio", arrow: true },
                      { icon: <svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>, text: "www.jamiesmith.com", arrow: true }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between p-[11px_14px] bg-[#f8f8f8] rounded-[14px] border-[0.5px] border-[#eee] cursor-pointer hover:bg-[#f0f0f0] transition-colors">
                        <div className="flex items-center gap-2.5">
                          <div className="w-[15px] h-[15px] stroke-[#3b82f6] fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round shrink-0">
                            {row.icon}
                          </div>
                          <span className="text-[12.5px] font-semibold text-[#444] whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">{row.text}</span>
                        </div>
                        {row.arrow && (
                          <svg className="w-[13px] h-[13px] stroke-[#bbb] fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round shrink-0" viewBox="0 0 24 24">
                            <path d="M9 18l6-6-6-6"/>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-3 gap-[7px] px-[14px] pb-[18px]">
                  <div className="h-[60px] rounded-[10px] bg-gradient-to-br from-[#667eea] to-[#764ba2]"></div>
                  <div className="h-[60px] rounded-[10px] bg-gradient-to-br from-[#f093fb] to-[#f5576c]"></div>
                  <div className="h-[60px] rounded-[10px] bg-gradient-to-br from-[#4facfe] to-[#00f2fe]"></div>
                </div>
              </div>
            </div>

            {/* Floating Icon Row */}
            <div className="absolute bottom-[11%] right-[6%] bg-white/72 backdrop-blur-[10px] rounded-[18px] p-[7px] flex gap-[6px] border-[0.5px] border-white/50 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hidden lg:flex">
              <div className="w-9 h-9 rounded-[9px] flex items-center justify-center bg-[#ede9fe]">
                <svg className="w-[15px] h-[15px] fill-none stroke-[#7c3aed] stroke-[2.2] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="w-9 h-9 rounded-[9px] flex items-center justify-center bg-[#dbeafe]">
                <svg className="w-[15px] h-[15px] fill-none stroke-[#2563eb] stroke-[2.2] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <div className="w-9 h-9 rounded-[9px] flex items-center justify-center bg-[#ffedd5]">
                <svg className="w-[15px] h-[15px] fill-none stroke-[#ea580c] stroke-[2.2] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </div>
              <div className="w-9 h-9 rounded-[9px] flex items-center justify-center bg-[#dcfce7]">
                <svg className="w-[15px] h-[15px] fill-none stroke-[#16a34a] stroke-[2.2] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SmarterConnect Section - Truly Full Width */}
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
