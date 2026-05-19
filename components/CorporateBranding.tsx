"use client";

import React from "react";
import Link from "next/link";

const Counter = ({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = target;
          const totalFrames = Math.round(duration / 16);
          const increment = end / totalFrames;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  return <span ref={countRef}>{formatNumber(count)}{suffix}</span>;
};

const CorporateBranding = () => {
  return (
    <>
      <style>{`
        .corp-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .corp-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 64px;
        }

        .corp-left {
          flex: 1;
          min-width: 0;
        }

        .corp-right {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .corp-title {
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 800;
          color: #111827;
          line-height: 1.2;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }

        .corp-subtitle {
          font-size: clamp(15px, 1.6vw, 18px);
          color: #6b7280;
          font-weight: 500;
          line-height: 1.65;
          margin: 0 0 32px 0;
          max-width: 520px;
        }

        .corp-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .corp-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: #005AD1;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(0, 90, 209, 0.25);
          transition: all 0.25s ease;
        }

        .corp-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0, 90, 209, 0.35);
        }

        .corp-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: transparent;
          color: #005AD1;
          font-size: 15px;
          font-weight: 700;
          border: 2px solid #005AD1;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .corp-btn-secondary:hover {
          background: #eff6ff;
          transform: translateY(-2px);
        }

        .corp-stats {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }

        .corp-stat {
          display: flex;
          flex-direction: column;
        }

        .corp-stat-num {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 900;
          color: #005AD1;
          line-height: 1;
          margin-bottom: 6px;
        }

        .corp-stat-label {
          font-size: 13px;
          color: #9ca3af;
          font-weight: 500;
        }

        /* Globe illustration wrapper */
        .corp-globe-container {
          position: relative;
          width: 100%;
          max-width: 540px;
          aspect-ratio: 1;
        }

        .corp-image-wrapper {
          position: relative;
          width: 100%;
          animation: corpFloat 6s ease-in-out infinite;
        }

        @keyframes corpFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .corp-inner {
            gap: 40px;
          }
          .corp-stats {
            gap: 32px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .corp-section {
            padding: 56px 16px;
          }
          .corp-inner {
            flex-direction: column;
            gap: 48px;
          }
          .corp-left {
            text-align: center;
          }
          .corp-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .corp-buttons {
            justify-content: center;
          }
          .corp-stats {
            justify-content: center;
          }
          .corp-globe-container {
            max-width: 360px;
          }
        }
      `}</style>

      <section className="corp-section">
        <div className="corp-inner">
          {/* Left: Content */}
          <div className="corp-left">
            <h2 className="corp-title">
              Millions of shares, powered by the digital business card for professionals.
            </h2>
            <p className="corp-subtitle">
              The virtual business card that works anywhere you meet people
            </p>

            <div className="corp-buttons">
              <button 
                onClick={() => window.open(`${process.env.NEXT_PUBLIC_APP_URL}/login`, "_blank")}
                className="corp-btn-primary"
              >
                Get started
              </button>
              <Link href="/for-companies/teams" className="corp-btn-secondary">
                For teams
              </Link>
            </div>

            <div className="corp-stats">
              <div className="corp-stat">
                <span className="corp-stat-num">
                  <Counter target={1000000} suffix="+" />
                </span>
                <span className="corp-stat-label">Shares made with Connecxa</span>
              </div>
              <div className="corp-stat">
                <span className="corp-stat-num">
                  <Counter target={500000} suffix="+" />
                </span>
                <span className="corp-stat-label">Connections created</span>
              </div>
              <div className="corp-stat">
                <span className="corp-stat-num">
                  <Counter target={170} suffix="+" />
                </span>
                <span className="corp-stat-label">Countries using Connecxa</span>
              </div>
            </div>
          </div>

          {/* Right: Globe Illustration */}
          <div className="corp-right">
            <div className="corp-globe-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="corp-image-wrapper" style={{ 
                position: 'relative',
                width: '100%',
                maxWidth: '540px',
                animation: 'corpFloat 6s ease-in-out infinite'
              }}>
                <img 
                  src="/corporate_globe_branding.png" 
                  alt="Connecxa Global Connectivity"
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    filter: 'drop-shadow(0 20px 40px rgba(0, 90, 209, 0.1))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateBranding;
