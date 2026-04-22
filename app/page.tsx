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
        <div className="w-full max-w-[1600px] px-4 lg:px-8">

          {/* Blue Hero Card */}
          <div className="bg-[#0066FF] rounded-[48px] px-10 pt-12 pb-0 md:px-14 md:pt-14 lg:px-20 lg:pt-16 text-white relative overflow-hidden flex flex-col lg:flex-row min-h-[660px] shadow-[0_32px_80px_rgba(0,102,255,0.35)] items-stretch">

            {/* Subtle radial glow — top-left */}
            <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-white/10 blur-[80px] pointer-events-none" />
            {/* Subtle radial glow — bottom-right */}
            <div className="absolute -bottom-24 right-0 w-[400px] h-[400px] rounded-full bg-[#0044cc]/60 blur-[90px] pointer-events-none" />

            {/* ── Left Column ── */}
            <div className="flex-1 z-10 flex flex-col justify-between w-full lg:max-w-[600px] pb-16">

              {/* Headline + Sub + CTA */}
              <div className="flex flex-col gap-10">
                {/* Eyebrow tag */}
                <div className="inline-flex w-fit items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-[12px] font-bold tracking-[0.15em] uppercase text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-pulse" />

                </div>

                <div className="space-y-5">
                  <h1 className="text-[52px] md:text-[64px] xl:text-[78px] font-extrabold leading-[1.04] tracking-[-0.03em]">
                    Modern Networking<br />
                    <span className="">for Professionals</span>
                  </h1>
                  <p className="text-[17px] md:text-[19px] text-white/80 leading-[1.7] font-normal max-w-[520px]">
                    Connect smarter with the all-in-one digital business card, CRM, and contact manager. Built for Professionals. Powered for Teams.
                  </p>
                </div>

                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <button className="bg-[#FF5C00] text-white text-[30px] font-bold rounded-full px-10 py-5 shadow-[0_8px_30px_rgba(255,92,0,0.45)] hover:bg-[#e65300] hover:shadow-[0_12px_40px_rgba(255,92,0,0.55)] transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-3">
                    Customise Now
                    <span className="text-[20px] leading-none">→</span>
                  </button>
                  <span className="text-white/60 text-[14px] font-medium">
                    No credit card required
                  </span>
                </div>
              </div>

              {/* Stats Row — anchored to bottom */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-14 pt-8 border-t border-white/15">
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
            <div className="flex-1 relative w-full z-10 flex items-end justify-center lg:justify-end mt-10 lg:mt-0 lg:ml-12 min-h-[380px] lg:min-h-0">
              <div className="relative w-full h-full min-h-[420px] lg:min-h-[600px] lg:scale-[1.08] lg:translate-x-8 lg:translate-y-2 origin-bottom-right">
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

      {/* ── Floating UI Elements ── */}





      {/* Action FABs */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* Wallet */}
        <div className="relative group">
          <div className="absolute -top-1.5 -right-1.5 w-[22px] h-[22px] bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full font-extrabold shadow">
            1
          </div>
          <button className="w-[58px] h-[58px] bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 text-teal-500 hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
              <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
              <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
            </svg>
          </button>
        </div>
        {/* Help */}
        <button className="w-[58px] h-[58px] bg-[#FF5C00] text-white rounded-full shadow-[0_8px_24px_rgba(255,92,0,0.4)] flex items-center justify-center hover:scale-105 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </button>
      </div>

      {/* ── Sections ── */}
      <CardShowcase />

      {/* Spacer between CardShowcase and Workflow */}
      <div className="w-full h-24 lg:h-32 bg-white" />

      <Workflow />

      {/* Spacer between Workflow and ProfilesShowcase */}
      <div className="w-full h-24 lg:h-32 bg-[#F4F4F4]" />

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