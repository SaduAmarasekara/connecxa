"use client";

import React from "react";

const testimonials = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4ADE80"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 13s1.5 2 4 2 4-2 4-2" />
        <line
          x1="9"
          y1="9"
          x2="9.01"
          y2="9"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="15"
          y1="9"
          x2="15.01"
          y2="9"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    borderColor: "#4ADE80",
    quote:
      "Since using Connecxa, our business introductions have never been more captivating and engaging! Well, goodbye paper cards, hello Connecxa!",
    avatar: "SM",
    avatarBg: "#E8F5E9",
    avatarColor: "#2E7D32",
    name: "Sarah Mitchell",
    title: "Head of Partnerships,",
    company: "BrightPath Digital",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF5C00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    borderColor: "#FF5C00",
    quote:
      "Connecxa made networking at conferences so much easier and fun! With one tap, all my details are instantly saved — it's the smartest card I've ever used.",
    avatar: "JL",
    avatarBg: "#FFF3E0",
    avatarColor: "#E65200",
    name: "James Lim",
    title: "Senior Growth Marketer,",
    company: "Nexora APAC",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1565C0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    ),
    borderColor: "#1565C0",
    quote:
      "Connecxa is the only smart card I carry everywhere. I never have to worry about running out of cards again — it's sustainable, sleek, and always ready.",
    avatar: "AT",
    avatarBg: "#E3F2FD",
    avatarColor: "#1565C0",
    name: "Anika Tan",
    title: "Regional Business Manager,",
    company: "Elevate Ventures",
  },
];

export default function TestermonialsContact() {
  return (
    <>
      <style>{`
        .testimonials-section {
          background: #F5F5F3;
          padding: 80px 40px 90px;
          font-family: var(--font-outfit), sans-serif;
          position: relative;
          overflow: hidden;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 56px;
          position: relative;
        }

        .testimonials-title {
          font-size: 40px;
          font-weight: 800;
          color: #0D0D0D;
          line-height: 1.2;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .title-icon {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .testimonials-subtitle {
          font-size: 17px;
          color: #555;
          font-weight: 400;
        }

        /* Orange quote bubble top-right — decorative */
        .deco-bubble {
          position: absolute;
          top: -10px;
          right: 60px;
          width: 90px;
          height: 90px;
          background: #FF5C00;
          border-radius: 50% 50% 50% 10%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Blue circle left — decorative */
        .deco-arc {
          position: absolute;
          left: -40px;
          top: 50%;
          transform: translateY(-50%);
          color: #005AD1;
          opacity: 0.15;
          z-index: 1;
        }

        /* Cards grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .t-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px 26px 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border: 2.5px solid transparent;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .t-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        }

        .t-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #F8F8F6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .t-card-quote {
          font-size: 16px;
          color: #1a1a1a;
          line-height: 1.65;
          font-weight: 400;
          flex: 1;
        }

        .t-card-author {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 16px;
          border-top: 1px solid #F0F0EC;
        }

        .t-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          flex-shrink: 0;
          border: 2px solid rgba(0,0,0,0.06);
        }

        .t-author-name {
          font-size: 15px;
          font-weight: 700;
          color: #111;
          margin-bottom: 2px;
        }

        .t-author-title {
          font-size: 13px;
          color: #777;
          line-height: 1.4;
        }

        /* Featured on */
        .featured-on {
          text-align: center;
          margin-top: 64px;
          position: relative;
          z-index: 2;
        }

        .featured-on-label {
          font-size: 15px;
          font-weight: 600;
          color: #999;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .featured-logos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .logo-pill {
          background: #fff;
          border: 1.5px solid #E8E8E4;
          border-radius: 100px;
          padding: 10px 22px;
          font-size: 13px;
          font-weight: 700;
          color: #444;
          letter-spacing: 0.02em;
        }

        @media (max-width: 900px) {
          .testimonials-section {
            padding: 60px 20px 70px;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .testimonials-title {
            font-size: 28px;
          }
          .deco-circle {
            display: none;
          }
          .deco-bubble {
            right: 10px;
            width: 64px;
            height: 64px;
          }
        }
      `}</style>

      <section className="testimonials-section">
        {/* Decorative elements */}
        <div className="deco-arc">
          <svg width="240" height="480" viewBox="0 0 240 480" fill="none">
            <circle cx="0" cy="240" r="230" stroke="currentColor" strokeWidth="2" />
            <circle cx="0" cy="240" r="180" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
            <circle cx="0" cy="240" r="130" stroke="currentColor" strokeWidth="2" />
            <circle cx="0" cy="240" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Don&apos;t just hear it from us{" "}
            <span className="title-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#7C3AED" opacity="0.15" />
                <path
                  d="M8 12a4 4 0 0 1 8 0"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="9" cy="10" r="1.2" fill="#7C3AED" />
                <circle cx="15" cy="10" r="1.2" fill="#7C3AED" />
                <path
                  d="M12 17v2"
                  stroke="#7C3AED"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="testimonials-subtitle">
            Hear it from the global community on why they love Connecxa!
          </p>
        </div>

        {/* Cards */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="t-card"
              style={{ borderColor: t.borderColor }}
            >
              <div className="t-card-icon">{t.icon}</div>
              <p className="t-card-quote">{t.quote}</p>
              <div className="t-card-author">
                <div
                  className="t-avatar"
                  style={{ background: t.avatarBg, color: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="t-author-name">{t.name}</div>
                  <div className="t-author-title">
                    {t.title}
                    <br />
                    {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

         
          
    
      </section>
    </>
  );
}
