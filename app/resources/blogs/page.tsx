"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "How Connecxa's CRM Integration Boosts Your Sales Performance",
    date: "April 22, 2026",
    excerpt: "Discover how syncing your digital business card contacts directly with your CRM can streamline your sales pipeline and improve conversion rates.",
    author: "Jems swin",
    image: "/blog/crm-integration.png",
    bgColor: "bg-[#EBF5FF]", // Light Blue
  },
  {
    id: 2,
    title: "Scanning Paper Cards into Digital Contacts with OCR Scanner",
    date: "April 17, 2026",
    excerpt: "Say goodbye to manual data entry. Our high-precision OCR scanner converts any paper business card into a digital contact in seconds.",
    author: "Jie Yeu Teoh",
    image: "/blog/ocr-scanning.png",
    bgColor: "bg-[#FEF9C3]", // Light Yellow
  },
  {
    id: 3,
    title: "The Future of Networking: Introducing Connecxa Splash Screen",
    date: "April 13, 2026",
    excerpt: "Make a lasting first impression with custom splash screens for your digital profile. Personalise your brand's intro before your profile loads.",
    author: "Jie Yeu Teoh",
    image: "/blog/nfc-tap.png",
    bgColor: "bg-[#F3E8FF]", // Light Purple
  },
  {
    id: 4,
    title: "NFC Live Printing: Elevating Your Corporate Events Experience",
    date: "March 26, 2026",
    excerpt: "Learn how real-time NFC card printing can transform your exhibitions and corporate events into interactive, tech-forward experiences.",
    author: "hello swin",
    image: "/blog/live-printing.png",
    bgColor: "bg-[#F0FDFA]", // Light Mint
  },
  {
    id: 5,
    title: "Centralised Team Management: Scaling Your Company Networking",
    date: "March 24, 2026",
    excerpt: "Admin tools for company-wide management. See how the Team Dashboard helps you maintain brand consistency across all employee profiles.",
    author: "Jie Yeu Teoh",
    image: "/blog/team-dashboard.png",
    bgColor: "bg-[#FFF7ED]", // Light Coral
  },
  {
    id: 6,
    title: "Connecxa in 2026: A Year of Digital Innovation in Review",
    date: "December 30, 2025",
    excerpt: "A look back at our journey in 2025 and what's coming next for digital business cards, CRM pipelines, and multi-profile support.",
    author: "russian dhawath",
    image: "/blog/future-networking.png",
    bgColor: "bg-[#EEF2FF]", // Light Indigo
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 font-sans flex flex-col items-center">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <h1 className="text-[52px] font-[900] text-[#111] text-center tracking-tight font-outfit leading-tight" style={{ marginBottom: 20 }}>
          Connecxa Blog - Digitalization, Networking, Sustainability
        </h1>

        {/* Sub-navigation */}
        <div className="flex items-center justify-center gap-6 mb-16" style={{ marginBottom: 20 }}>
          <Link href="/resources/help-center" className="text-[16px] font-semibold text-gray-500 hover:text-[#005AD1] transition-colors">Help Center</Link>
          <Link href="/resources/blogs" className="text-[16px] font-semibold text-[#111] border-b-2 border-[#111] pb-0.5">Blog</Link>
          <Link href="/resources/case-studies" className="text-[16px] font-semibold text-gray-500 hover:text-[#005AD1] transition-colors">Case Studies</Link>
          <div className="text-gray-500 hover:text-[#005AD1] cursor-pointer transition-colors ml-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"style={{ marginBottom: 20 }}>
          {blogPosts.map((post) => (
            <Link
              href={`/resources/blogs/${post.id}`}
              key={post.id}
              className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1 text-center"
            >
              <div className={`aspect-[16/10] w-full rounded-xl overflow-hidden relative mb-6 flex items-center justify-center ${post.bgColor}`}>
                <div className="relative w-full h-full p-8 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>
              <h2 className="text-[24px] font-bold text-[#111] leading-[1.3] mb-3 group-hover:text-[#005AD1] transition-colors">
                {post.title}
              </h2>
              <div className="text-[14px] font-semibold text-[#111] mb-2.5">{post.date}</div>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="text-[14px] font-bold text-[#111] mt-auto">
                {post.author}
              </div>
            </Link>
          ))}
          <div className="w-full h-5 lg:h-15 bg-white" />
        </div>
      </div>
    </main>
  );
}


