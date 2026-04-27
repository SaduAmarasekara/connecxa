"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/corporate/purple.png',
  '/images/corporate/black.png',
  '/images/corporate/white.png'
];

const CorporateBranding = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-24 " style={{ margin: "0 auto" }} >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

        {/* Left Column: Image Carousel */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative aspect-[1.2/1] w-full overflow-hidden rounded-[32px] md:rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-gray-50 border border-gray-100">
            {images.map((img, index) => (
              <div
                key={img}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <Image
                  src={img}
                  alt={`Corporate Branding Mockup ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentImageIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-1/2 flex flex-col text-left">
          <div className="text-[#005AD1] font-black text-sm md:text-base tracking-[0.15em] uppercase mb-4">
            Bulk Corporate Order
          </div>

          <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-[900] text-[#111827] leading-[1.1] tracking-tight mb-6">
            Customise with your <br className="hidden md:block" /> Corporate Branding
          </h2>

          <p className="text-gray-500 text-[17px] md:text-[20px] font-medium leading-relaxed mb-10 max-w-xl">
            Let's elevate your brand presence with customised NFC business cards - made exactly the way you want them.
          </p>

          <button 
            style={{
              background: "#005AD1",
              color: "#fff",
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
              boxShadow: "0 8px 28px rgba(0,90,209,0.25)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,90,209,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,90,209,0.25)";
            }}
          >
            Get in touch
            <span style={{ fontSize: 20, marginLeft: 8 }}>→</span>
          </button>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-700 font-bold text-[15px] md:text-[17px]">
              <div className="w-6 h-6 flex items-center justify-center text-[#005AD1]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              Corporate bulk rates available on request
            </div>

            <div className="flex items-center gap-4 text-gray-700 font-bold text-[15px] md:text-[17px]">
              <div className="w-6 h-6 flex items-center justify-center text-[#005AD1]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="13.5" cy="6.5" r=".5" />
                  <circle cx="17.5" cy="10.5" r=".5" />
                  <circle cx="8.5" cy="7.5" r=".5" />
                  <circle cx="6.5" cy="12.5" r=".5" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.17-.6-1.61-.31-.37-.5-.84-.5-1.35 0-1.1.9-2 2-2h1.6c2.98 0 5.4-2.42 5.4-5.4C22 7.02 17.52 2 12 2z" />
                </svg>
              </div>
              Complimentary card and digital profile design mockups
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateBranding;
