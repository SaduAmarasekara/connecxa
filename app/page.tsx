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
      <main className="w-full flex flex-col items-center py-8 lg:py-12">
        <div className="w-full max-w-[1600px] px-5 md:px-16 lg:px-24">

          {/* Blue Hero Card */}
          <div className="bg-[#005AD1] rounded-[32px] md:rounded-[48px] px-6 py-12 md:px-14 md:pt-14 lg:px-20 lg:pt-16 text-white relative overflow-hidden flex flex-col lg:flex-row min-h-[auto] lg:min-h-[660px] items-stretch">

            {/* ── Left Column ── */}
            <div className="flex-1 z-10 flex flex-col justify-between w-full lg:max-w-[600px] pb-16">

              {/* Headline + Sub + CTA */}
              <div className="flex flex-col gap-10">
                {/* Eyebrow tag */}
                <div className="inline-flex w-fit items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-[12px] font-bold tracking-[0.15em] uppercase text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-pulse" />

                </div>

                <div className="space-y-5 px-0 md:px-5" >
                  <h1 className="text-[32px] md:text-[55px] xl:text-[64px] font-extrabold leading-[1.1] md:leading-[1.04] tracking-[-0.03em] mb-6 md:mb-[25px]">
                    Modern Networking<br className="hidden md:block" />
                    <span className="">for Professionals</span>
                  </h1>
                  <p className="text-[16px] md:text-[19px] text-white/80 leading-[1.7] font-normal max-w-[520px] mb-8 md:mb-[35px]">
                    Connect smarter with the all-in-one digital business card, CRM, and contact manager. Built for Professionals. Powered for Teams.
                  </p>
                </div>

                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 px-0 md:px-5">
                  <Link href="/shop/products" style={{ textDecoration: 'none' }}>
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
                      <span style={{ fontSize: 20, marginLeft: 5 }}>→</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Stats Row — anchored to bottom */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-14 pt-8 border-t border-white/15 w-full text-center lg:text-left">
                <div className="space-y-1.5">
                  <div className="text-[40px] md:text-[48px] font-extrabold tracking-tight leading-none">2M+</div>
                  <div className="text-[11px] font-bold text-white/55 uppercase tracking-[0.14em] leading-snug">
                    Taps, scans &<br />shares
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="text-[40px] md:text-[48px] font-extrabold tracking-tight leading-none">200K+</div>
                  <div className="text-[11px] font-bold text-white/55 uppercase tracking-[0.14em] leading-snug">
                    Users &<br />teams globally
                  </div>
                </div>
                <div className="hidden lg:flex items-center gap-3">
                  <div className="w-11 h-11 bg-white/10 rounded-xl border border-white/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" fill="white" fillOpacity="0.9" />
                    </svg>
                  </div>
                  <div className="text-[11px] font-bold leading-snug uppercase tracking-[0.12em] opacity-75">
                    Cyber-certified<br />Partner
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column — Mockup image ── */}
            <div className="flex-1 relative w-full z-10 flex items-end justify-center lg:justify-end mt-10 lg:mt-0 lg:ml-12 min-h-[300px] md:min-h-[380px] lg:min-h-0">
              <div className="relative w-full h-full min-h-[360px] md:min-h-[420px] lg:min-h-[600px] lg:scale-[1.08] lg:translate-x-8 lg:translate-y-2 origin-bottom-right">
                <Image
                  src="/hero-mockup.png"
                  alt="Connecxa App Mockup"
                  fill
                  className="object-contain object-bottom lg:object-right-bottom drop-shadow-[0_40px_50px_rgba(0,0,0,0.35)]"
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