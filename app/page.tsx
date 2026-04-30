"use client";

import Link from "next/link";
import Image from "next/image";
import CardShowcase from "@/components/CardShowcase";
import Workflow from "@/components/Workflow";
import FAQ from "@/components/FAQ";
import ProfilesShowcase from "@/components/ProfilesShowcase";
import NetworkingToolkit from "@/components/NetworkingToolkit";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">

      {/* ── Hero Section ── */}
      <main className="w-full flex flex-col items-center py-8 lg:py-16 ml-5 md:ml-8 lg:ml-[30px]">
        <div className="w-full max-w-[1600px] px-5 md:px-16 lg:px-24">

          {/* Blue Hero Card */}
          <div className="bg-[#005AD1] bg-gradient-to-br from-[#005AD1] to-[#0047AB] rounded-[32px] md:rounded-[48px] px-6 py-12 md:px-14 md:pt-14 lg:px-20 lg:pt-16 text-white relative overflow-hidden flex flex-col lg:flex-row min-h-[auto] lg:min-h-[700px] items-stretch shadow-2xl">

            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

            {/* ── Left Column — Content ── */}
            <div className="flex-1 z-10 flex flex-col justify-center w-full lg:max-w-[700px] pb-10 lg:pb-16 text-center lg:text-left items-center lg:items-start lg:pl-12 xl:pl-20" style={{ marginLeft: "10px" }}>

              {/* Headline + Sub + CTA Container - Centered Vertically */}
              <div className="flex flex-col gap-8 md:gap-10 items-center lg:items-start w-full">
                {/* Eyebrow tag */}
                <div className="inline-flex w-fit items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-[12px] font-bold tracking-[0.15em] uppercase text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#FF5C00] animate-pulse" />
                  Smart Networking 2.0
                </div>

                <div className="space-y-6 w-full">
                  <h1 className="text-[36px] md:text-[56px] xl:text-[72px] font-extrabold leading-[1.05] md:leading-[1.02] tracking-[-0.03em]">
                    Modern Networking <br className="hidden xl:block" />
                    <span className="text-white/90">for Professionals</span>
                  </h1>
                  <p className="text-[17px] md:text-[20px] text-white/80 leading-[1.6] font-medium max-w-[540px] mx-auto lg:mx-0">
                    Connect smarter with the all-in-one digital business card, CRM, and contact manager. Built for high-performing teams.
                  </p>
                </div>

                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 w-full justify-center lg:justify-start mt-6">
                  <Link href="/shop/products" className="no-underline">
                    <button
                      style={{
                        background: "#FF5C00",
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
                        boxShadow: "0 8px 28px rgba(255,92,0,0.25)",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 14px 36px rgba(255,92,0,0.35)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 8px 28px rgba(255,92,0,0.25)";
                      }}
                    >
                      Customise Now
                      <span style={{ fontSize: 20, marginLeft: 8 }}>→</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Stats Row — anchored to bottom area but still part of the flex container */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-16 pt-10 border-t border-white/20 w-full" style={{ marginTop: "20px" }}>
                <div className="flex flex-col gap-2 items-center lg:items-start">
                  <div className="text-[36px] md:text-[48px] font-black tracking-tight leading-none">2M+</div>
                  <div className="text-[12px] font-bold text-white/60 uppercase tracking-[0.12em] leading-snug">
                    Taps, scans &<br />shares
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center lg:items-start">
                  <div className="text-[36px] md:text-[48px] font-black tracking-tight leading-none">200K+</div>
                  <div className="text-[12px] font-bold text-white/60 uppercase tracking-[0.12em] leading-snug">
                    Users &<br />teams globally
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
                    <svg className="w-6 h-6 text-[#FFCC00]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="text-[12px] font-bold leading-tight uppercase tracking-[0.1em] opacity-80 text-left">
                    Certified<br />Cyber Partner
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column — Mockup image ── */}
            <div className="flex-1 relative w-full z-10 flex items-end justify-center lg:justify-end mt-12 lg:mt-0 min-h-[360px] md:min-h-[480px] lg:min-h-0">
              <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[640px] lg:scale-[1.15] lg:translate-x-12 lg:translate-y-4 origin-bottom-right transition-transform duration-700 ease-out hover:scale-[1.18]">
                <Image
                  src="/hero-mockup.png"
                  alt="Connecxa App Mockup"
                  fill
                  className="object-contain object-bottom lg:object-right-bottom drop-shadow-[0_45px_65px_rgba(0,0,0,0.45)]"
                  priority
                />
              </div>
            </div>

          </div>
          {/* End Blue Hero Card */}

        </div>
      </main>

      {/* ── Sections ── */}
      <div className="w-full h-24 lg:h-32 bg-white" />
      <CardShowcase />

      {/* Spacer between CardShowcase and Workflow */}
      <div className="w-full h-24 lg:h-32 bg-white" />

      <Workflow />

      {/* Spacer between Workflow and ProfilesShowcase */}
      <div className="w-full h-24 lg:h-32 bg-white" />

      <ProfilesShowcase />

      {/* Spacer between ProfilesShowcase and NetworkingToolkit */}
      <div className="w-full h-24 lg:h-32 bg-white" />

      <NetworkingToolkit />

      {/* Spacer between NetworkingToolkit and FAQ */}
      <div className="w-full h-24 lg:h-32 bg-white" />

      <FAQ />

      {/* Spacer between FAQ and Footer */}
      <div className="w-full h-24 lg:h-32 bg-white" />

    </div>
  );
}