"use client";

import Link from "next/link";
import Image from "next/image";
import CardShowcase from "@/components/CardShowcase";
import Workflow from "@/components/Workflow";
import FAQ from "@/components/FAQ";
import ProfilesShowcase from "@/components/ProfilesShowcase";
import NetworkingToolkit from "@/components/NetworkingToolkit";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      {/* ── Hero Section ── */}
      <main className="w-full relative flex flex-col items-center pt-10 pb-16 lg:pt-14 lg:pb-0 overflow-hidden" style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #D2E4FC 100%)",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif"
      }}>
        {/* Subtle background glow effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#005AD1]/3 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#005AD1]/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-[1200px] px-6 flex flex-col items-center text-center z-10">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#005AD1]/10 rounded-full px-5 py-2.5 text-[13px] font-bold tracking-[0.15em] uppercase text-[#005AD1] mb-8 shadow-sm" >
            <span className="w-2.5 h-2.5 rounded-full bg-[#005AD1] animate-pulse" />
            Smart Networking 2.0
          </div>

          <h1 className="text-[42px] md:text-[64px] lg:text-[80px] font-black leading-[1.05] tracking-[-0.04em] text-[#111827] mb-8">
            Smart Networking for Elite Professionals<br className="hidden md:block" />
          </h1>

          <p className="text-[18px] md:text-[21px] text-[#4B5563] leading-[1.6] font-medium max-w-[800px] mb-12">
            The easiest way to exchange contact details, follow up instantly, and remember everyone you meet. Free forever for individuals, trusted by global enterprises.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-16">
            <button
                onClick={() => window.open(`${process.env.NEXT_PUBLIC_APP_URL}/login`, "_blank")}
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
                  marginTop: "20px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,90,209,0.35)";
                  e.currentTarget.style.background = "#0047AB";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,90,209,0.25)";
                  e.currentTarget.style.background = "#005AD1";
                }}
              >
                Get started <span style={{ fontSize: 20 }}>→</span>
              </button>
            <Link href="/for-companies/teams" className="no-underline">
              <button
                style={{
                  background: "transparent",
                  color: "#111827",
                  fontSize: 18,
                  fontWeight: 800,
                  borderRadius: 50,
                  padding: "16px 36px",
                  border: "2px solid #E5E7EB",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  width: "fit-content",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F9FAFB";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Customize Now
              </button>
            </Link>
          </div>

          {/* Centered Mockup */}
          <div className="relative w-full max-w-[850px] aspect-[16/11] flex justify-center items-end">
            <div className="relative w-full h-full animate-float">
              <Image
                src="/images/homehero.png"
                alt="Connecxa Premium Digital Card"
                fill
                className="object-contain object-bottom drop-shadow-[0_40px_70px_rgba(0,0,0,0.1)]"
                priority
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes premium-float {
            0% { transform: translateY(0) rotate(0deg) scale(1); }
            33% { transform: translateY(-15px) rotate(1deg) scale(1.01); }
            66% { transform: translateY(-5px) rotate(-1deg) scale(0.99); }
            100% { transform: translateY(0) rotate(0deg) scale(1); }
          }
          .animate-float {
            animation: premium-float 8s ease-in-out infinite;
          }
        `}</style>
      </main>
    
 <div className="w-full h-20 lg:h-30 bg-white" />
      <TrustedBy />

      {/* ── Sections ── */}
      <div className="w-full h-16 lg:h-24 bg-white" />
      <CardShowcase />

      {/* Spacer between CardShowcase and Workflow */}
      <div className="w-full h-16 lg:h-24 bg-white" />

      <Workflow />

      {/* Spacer between Workflow and ProfilesShowcase */}
      <div className="w-full h-16 lg:h-24 bg-white" />

      <ProfilesShowcase />

      {/* Spacer between ProfilesShowcase and NetworkingToolkit */}
      <div className="w-full h-16 lg:h-24 bg-white" />

      <NetworkingToolkit />

      {/* Spacer between NetworkingToolkit and FAQ */}
      <div className="w-full h-16 lg:h-24 bg-white" />

      <FAQ />

      {/* Spacer between FAQ and Footer */}
      <div className="w-full h-24 lg:h-32 bg-white" />

    </div>
  );
}