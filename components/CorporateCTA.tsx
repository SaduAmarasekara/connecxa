"use client";

import Image from "next/image";

export default function CorporateCTA() {
  return (
    <section className="w-full flex flex-col lg:flex-row overflow-hidden" >
      {/* Left Column: Content with Blue Background */}
      <div className="w-full lg:w-1/2 bg-[#005BD3] p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center">
        <div className="max-w-[600px] mx-auto">
          <span className="text-white/80 font-bold text-sm tracking-[0.2em] uppercase mb-6 block">
            Corporate Solutions
          </span>

          <h2 className="text-[38px] md:text-[54px] font-[800] text-white leading-[1.1] mb-8 tracking-tight">
            Customise With Your <br />Corporate Branding
          </h2>

          <p className="text-white/90 text-[16px] md:text-[18px] font-medium leading-relaxed mb-10 max-w-[420px]" style={{ marginBottom: 30 }}>
            Getting in bulk or looking to get corporate-branded connecxa for your company?
          </p>

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
            Get in touch
            <span style={{ fontSize: 20, marginLeft: 5 }}>→</span>
          </button>
        </div>
      </div>

      {/* Right Column: Lifestyle Image */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[650px]">
        <Image
          src="/corporate_cta_mockup.png"
          alt="Corporate Branding Lifestyle"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
