"use client";

import React from "react";

const securityFeatures = [
  {
    title: "Private Mode",
    desc: "Toggle advanced privacy and security settings to control the information on your digital business card",
    icon: (
      <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-[#0369A1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      </div>
    )
  },
  {
    title: "Certified Compliant",
    desc: "Audited and certified cyber-safe compliant by the Cybersecurity Agency of Singapore (CSA)",
    icon: (
      <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-[#15803D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
        </svg>
      </div>
    )
  },
  {
    title: "AES-256 Encryption",
    desc: "We employ state-of-the-art AES-256 encryption to ensure that your information stays secure and private.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-[#7E22CE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      </div>
    )
  },
  {
    title: "MFA Protection",
    desc: "Safeguard your account against unauthorised access with additional layers of security and protection",
    icon: (
      <div className="w-12 h-12 rounded-full bg-[#FEF9C3] flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-[#A16207]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M7 7h10v10H7z"/>
        </svg>
      </div>
    )
  }
];

export default function SecuritySection() {
  return (
    <section className="w-full py-24 bg-[#F8FAFC]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[44px] md:text-[56px] font-black text-[#111] leading-tight mb-4 flex items-center justify-center gap-4">
            Secured Connections, Always
            <span className="text-[40px]">🔒</span>
          </h2>
          <p className="text-[19px] text-gray-500 font-medium">
            Build connections and network confidently with built-in security at every layer
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, i) => (
            <div 
              key={i} 
              className="bg-white p-10 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-start transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {feature.icon}
              <h3 className="text-[22px] font-black text-[#111] mb-4">{feature.title}</h3>
              <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
