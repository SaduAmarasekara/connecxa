"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const showcaseItems = [
  {
    title: "Design Templates",
    desc: "Explore a variety of digital business card design templates, easily customisable to reflect your brand identity and personal flair",
    image: "/design-templates-mockup.png",
    bg: "#f3f4f6"
  },
  {
    title: "Flexible Widgets",
    desc: "Customise your digital business card with widgets to create the unique digital identity that represents you",
    image: "/flexible-widgets-mockup.png",
    bg: "#f3f4f6"
  },
  {
    title: "Multi-Profile Display",
    desc: "Easily switch between multiple profiles with one account - perfect for showcasing different roles, businesses, or portfolios",
    image: "/multi-profile-mockup.png",
    bg: "#f3f4f6"
  },
  {
    title: "Embed Images and Videos",
    desc: "Elevate your connections with an engaging and dynamic profile - embed images, videos and files directly to your business card",
    image: "/embedded-media-mockup.png",
    bg: "#f3f4f6"
  }
];

export default function ProductShowcase() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".reveal-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-24 bg-white overflow-hidden" 
      style={{ 
        fontFamily: "'DM Sans', sans-serif",
        textAlign: "center"
      }}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col gap-24">
        
        {/* Rows Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
          {showcaseItems.map((item, i) => (
            <div 
              key={i} 
              data-index={i}
              className={`reveal-item flex flex-col transition-all duration-1000 ease-out ${
                visibleItems.includes(i) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${(i % 2) * 200}ms` }}
            >
              <div className="px-4 mb-8">
                <h3 className="text-[32px] font-black text-[#111] tracking-tight">{item.title}</h3>
              </div>
              
              <div 
                className="w-full aspect-[4/3] rounded-[48px] overflow-hidden mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] group"
                style={{ background: item.bg }}
              >
                <div className="relative w-full h-full p-16 md:p-24 lg:p-32">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Subtle glare overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </div>

              <div className="px-4">
                <p className="text-[19px] text-gray-500 font-medium leading-relaxed max-w-[540px] mx-auto">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .reveal-item {
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}
