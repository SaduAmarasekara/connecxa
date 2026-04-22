"use client";

export default function PurchaseSteps() {
  return (
    <section
      style={{
        background: "#114FB5", // Vibrant blue from screenshot
        padding: "80px 24px",
        color: "#ffffff",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1600, margin: "0 auto", textAlign: "center", padding: "0 48px" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 800,
            marginBottom: 60,
            letterSpacing: "-0.02em",
          }}
        >
          Getting your Connecxa Card
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 20,
            flexWrap: "nowrap",
            position: "relative",
          }}
        >
          {/* Step 1 */}
          <div style={{ flex: "1 1 0px", minWidth: 200, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginBottom: 32, height: 48, display: "flex", alignItems: "center" }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
                <path d="m7 15 5 5" />
                <path d="m15 7 5 5" />
              </svg>
            </div>
            <h3 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 700, marginBottom: 14 }}>Step 1: Customise</h3>
            <p style={{ fontSize: "clamp(14px, 1.5vw, 17px)", opacity: 0.9, lineHeight: 1.5, maxWidth: 260, fontWeight: 500 }}>
              Select a design and personalise your NFC business card
            </p>
          </div>

          {/* Connector 1 */}
          <div style={{ flex: "0 0 clamp(40px, 8vw, 120px)", height: 2, background: "rgba(255,255,255,0.4)", marginTop: 24 }} className="hidden md:block" />

          {/* Step 2 */}
          <div style={{ flex: "1 1 0px", minWidth: 200, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginBottom: 32, height: 48, display: "flex", alignItems: "center" }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </div>
            <h3 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 700, marginBottom: 14 }}>Step 2: Delivery</h3>
            <p style={{ fontSize: "clamp(14px, 1.5vw, 17px)", opacity: 0.9, lineHeight: 1.5, maxWidth: 260, fontWeight: 500 }}>
              Your order will be shipped directly to your doorstep
            </p>
          </div>

          {/* Connector 2 */}
          <div style={{ flex: "0 0 clamp(40px, 8vw, 120px)", height: 2, background: "rgba(255,255,255,0.4)", marginTop: 24 }} className="hidden md:block" />

          {/* Step 3 */}
          <div style={{ flex: "1 1 0px", minWidth: 200, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginBottom: 32, height: 48, display: "flex", alignItems: "center" }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 8h10" />
                <path d="M7 12h10" />
                <rect width="4" height="4" x="7" y="14" />
                <path d="M13 14h4" />
                <path d="M13 18h4" />
              </svg>
            </div>
            <h3 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 700, marginBottom: 14 }}>Step 3: Activate</h3>
            <p style={{ fontSize: "clamp(14px, 1.5vw, 17px)", opacity: 0.9, lineHeight: 1.5, maxWidth: 260, fontWeight: 500 }}>
              Receive the setup instructions to create your e-business card
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
