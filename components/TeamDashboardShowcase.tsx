"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SectionProps {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: { icon: React.ReactNode; text: string }[];
  image: string;
  imageLeft?: boolean;
}

const FeatureSection = ({ eyebrow, title, desc, bullets, image, imageLeft = false }: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-8 md:py-12 overflow-hidden bg-white" style={{ fontFamily: "'DM Sans', sans-serif", marginLeft: 60 }}>
      <div className={`max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}>

        {/* Image Column */}
        <div
          className={`w-full lg:w-[40%] transition-all duration-1000 ease-out transform ${isVisible
            ? 'translate-x-0 opacity-100'
            : `${imageLeft ? '-translate-x-12' : 'translate-x-12'} opacity-0`
            }`}
        >
          <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-gray-100 bg-gray-50">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Text Column */}
        <div
          className={`w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ease-out transform delay-200 ${isVisible
            ? 'translate-x-0 opacity-100'
            : `${imageLeft ? 'translate-x-12' : '-translate-x-12'} opacity-0`
            }`}
        >
          <div className="text-[#005AD1] font-bold text-[12px] tracking-[0.12em] uppercase mb-3">
            {eyebrow}
          </div>

          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-[900] text-[#111827] leading-[1.15] tracking-tight mb-5">
            {title}
          </h2>

          <p className="text-gray-500 text-[16px] md:text-[18px] font-medium leading-relaxed mb-6 max-w-[540px]">
            {desc}
          </p>

          <div className="space-y-3 w-full flex flex-col items-center lg:items-start">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-5 h-5 flex items-center justify-center text-[#005AD1] shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="text-gray-600 text-[15px] md:text-[16px] font-medium">
                  {b.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TeamDashboardShowcase() {
  const sections = [
    {
      eyebrow: "DESIGNED FOR ADMINISTRATORS",
      title: "Team Card Management, Streamlined.",
      desc: "Easily create and manage your team’s business cards centrally. Restrict edits, customise layouts, and deploy changes across teams with just a few clicks.",
      image: "/team-card-management-feature.png",
      imageLeft: true,
      bullets: [
        {
          text: "Assign roles with defined access levels for better control",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          )
        },
        {
          text: "Prevent unauthorised edits with built-in restrictions",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
          )
        }
      ]
    },
    {
      eyebrow: "DESIGNED FOR BRAND MANAGERS",
      title: "Strengthen Brand Identity and Consistency",
      desc: "Ensure every business card stays on brand with preset templates and controlled design options - perfect for scaling your brand identity across teams.",
      image: "/team-brand-identity-feature.png",
      imageLeft: false,
      bullets: [
        {
          text: "Centralised control over profile widgets and content",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          )
        },
        {
          text: "Create dynamic profile templates tailored for each role",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          )
        }
      ]
    },
    {
      eyebrow: "DESIGNED FOR SALES LEADERS",
      title: "Lead Smarter with Performance Insight",
      desc: "Gain visibility into your team’s networking efforts, benchmark success, and identify top performers with visual, data-driven reporting.",
      image: "/team-performance-insight-feature.png",
      imageLeft: true,
      bullets: [
        {
          text: "Real-time performance snapshots",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          )
        },
        {
          text: "Explore performance trends with team leaderboards",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <rect x="7" y="10" width="4" height="7" />
              <rect x="13" y="5" width="4" height="12" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {sections.map((section, index) => (
        <FeatureSection key={index} {...section} />
      ))}
    </div>
  );
}
