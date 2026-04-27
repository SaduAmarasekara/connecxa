"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const crmShowcaseItems = [
  {
    tag: "OPTIMISED FOR ON-THE-GO SALES",
    title: "Work Your Pipeline. Anytime, Anywhere.",
    desc: "Track pipelines, update deals, and follow up faster - whether you're at your desk or in the field. Stay in control in real-time, on any device.",
    list: ["Optimised for mobile and desktop use", "Real-time deal syncing across all devices"],
    image: "/crm-pipeline-anywhere.png",
    imageBg: "#DBEAFE",
    reverse: false
  },
  {
    tag: "SALES ANALYTICS",
    title: "Visualise Your Sales Performance",
    desc: "Get real-time visibility into your sales performance and monitor your pipeline health, conversion trends, and deal outcomes at a glance.",
    list: ["Track real-time growth across pipelines", "Access historical data to compare performance over time"],
    image: "/crm-sales-analytics.png",
    imageBg: "#DBEAFE",
    reverse: true
  },
  {
    tag: "LEAD GENERATION TOOLS",
    title: "Capture Leads Fast. Convert Faster.",
    desc: "Share your contact and capture inbound interest in seconds. Built for real-world networking - no manual entry, just smarter follow-ups.",
    list: ["Capture s instantly with built-in contact tools", "Auto-sync leads directly into your CRM"],
    image: "/crm-lead-gen.png",
    imageBg: "#DBEAFE",
    reverse: false
  }
];

export default function CRMShowcase() {
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
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll(".reveal-section");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" , marginLeft: 40}}>
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col gap-32">
        {crmShowcaseItems.map((item, i) => (
          <div
            key={i}
            data-index={i}
            className={`reveal-section flex flex-col lg:flex-row items-center gap-16 lg:gap-24 transition-all duration-1000 ease-out ${item.reverse ? "lg:flex-row-reverse" : ""
              } ${visibleItems.includes(i)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
              }`}
          >
            {/* Visual Side */}
            <div className="flex-1 w-full lg:w-1/2">
              <div
                className="relative w-full aspect-[4/3] rounded-[48px] overflow-hidden shadow-sm flex items-center justify-center p-8 md:p-12 group"
                style={{ background: item.imageBg }}
              >
                <div className="relative w-full h-full bg-white rounded-[32px] shadow-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="flex-1 w-full lg:w-1/2">
              <div className="text-[13px] font-bold tracking-[0.12em] text-[#005AD1] uppercase mb-6">
                {item.tag}
              </div>
              <h2 className="text-[44px] md:text-[54px] font-black text-[#111] leading-[1.1] mb-8">
                {item.title}
              </h2>
              <p className="text-[19px] text-gray-500 font-medium leading-relaxed mb-10">
                {item.desc}
              </p>

              <ul className="space-y-6">
                {item.list.map((li, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1.5 w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[#005AD1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[17px] font-bold text-gray-800">{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
