"use client";

import Image from "next/image";
import { useRef } from "react";

const profiles = [
  { id: "classic", name: "", src: "/profile-classic.png" },
  { id: "creative", name: "", src: "/profile-creative.png" },
  { id: "professional", name: "", src: "/profile-professional.png" },
  { id: "modern", name: "", src: "/profile-modern.png" },
  { id: "minimalist", name: "", src: "/profile-minimalist.png" },
];

export default function ProfilesShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full py-24 bg-white overflow-hidden" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", marginLeft: "20px" }}>
      
      {/* Header - Centered relative to the 1440px max-width */}
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-16 lg:px-24">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[40px] md:text-[54px] font-bold text-[#111827] tracking-tight leading-tight mb-4 flex items-center justify-center gap-3">
            Fully-Customisable Profiles
            <span className="text-[0.85em]">⚡</span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#4B5563] font-medium max-w-2xl mx-auto">
            Ready-to-use Digital Business Cards for modern professionals and teams. Click to view!
          </p>
        </div>
      </div>

      {/* Carousel Container - No max-width on the right side to remove white space */}
      <div className="relative group pl-5 md:pl-16 lg:pl-24">

        {/* Scroll Buttons - Now visible on mobile too */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center text-gray-800 hover:scale-110 transition-transform md:opacity-0 md:group-hover:opacity-100 border border-gray-100"
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><path d="M15 18l-6-6 6-6" /></svg>
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center text-gray-800 hover:scale-110 transition-transform md:opacity-0 md:group-hover:opacity-100 border border-gray-100"
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><path d="M9 18l6-6-6-6" /></svg>
        </button>

        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 pt-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth'
          }}
        >
          <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`flex-shrink-0 snap-start flex flex-col items-center gap-6 cursor-pointer group/card ${index === profiles.length - 1 ? 'pr-8' : ''}`}
            >
              {/* Device Mockup Wrapper */}
              <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px] rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[#F8F9FA] overflow-hidden border-[8px] border-white group-hover/card:shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover/card:-translate-y-2 transition-all duration-400">
                <Image
                  src={profile.src}
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                />
                {/* Subtle glare effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
              </div>

              {/* Profile Label */}
              <span className="text-[20px] font-bold text-gray-800 tracking-tight group-hover/card:text-[#005AD1] transition-colors">
                {profile.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
