"use client";

import React from "react";
import Image from "next/image";
import { styleText } from "util";

const features = [
  {
    title: "Centralised Team Dashboard",
    desc: "Easily manage your team's cards, users, and branding from one central dashboard.",
    link: "/features/team-dashboard",
    bg: "#C5E8E8",
    accent: "#0D9488",
    image: "/team-dashboard-mockup.png"
  },
  {
    title: "CRM Deal Manager",
    desc: "Track every deal in one visual pipeline - stay organised and never miss a follow-up.",
    link: "/features/crm-deal-manager",
    bg: "#C0D6F0",
    accent: "#2563EB",
    image: "/crm-deal-manager-mockup.png"
  },
  {
    title: "Contact Manager",
    desc: "Keep your contacts organised with up-to-date details, easily accessible anytime.",
    link: "/features/contact-manager",
    bg: "#FDE68A",
    accent: "#B45309",
    image: "/contact-manager-mockup.png"
  }
];

export default function FeatureGrid() {
  return (
    <section className="w-full py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif", marginLeft: 40 }}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[44px] md:text-[56px] font-black text-[#111] leading-tight mb-4 flex items-center justify-center gap-4">
            Explore More Powerful Tools
            <span className="text-[40px]">⭐</span>
          </h2>
          <p className="text-[19px] text-gray-500 font-medium">
            Discover more ways to network smarter with connecxa
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col rounded-[40px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
              style={{ background: feature.bg }}
            >
              <div className="p-10 pb-8 text-center flex flex-col items-center">
                <h3 className="text-[26px] font-black text-[#111] mb-3">{feature.title}</h3>
                <p className="text-[16px] text-gray-600 font-medium leading-relaxed max-w-[320px]">
                  {feature.desc}
                </p>
              </div>

              {/* Mockup Area */}
              <div className="relative h-[340px] mx-8 mt-auto rounded-t-3xl overflow-hidden shadow-2xl border-x border-t border-white/50">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
