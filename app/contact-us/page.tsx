"use client";

import React from "react";
import TestermonialsContact from "@/components/testermonialscontact";
import FAQSectionContact from "@/components/Faqsectioncontact";


export default function ContactUsPage() {
  return (
    <div>
      <style>{`
        .contact-page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          align-items: stretch;
          font-family: var(--font-outfit), sans-serif;
          background: #FAFAF8;
        }

        /* ── LEFT SIDE ── */
        .contact-left {
          padding: 64px 56px 64px 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 92, 0, 0.08);
          border: 1px solid rgba(255, 92, 0, 0.18);
          color: #FF5C00;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
          width: fit-content;
        }

        .eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF5C00;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .contact-heading {
          font-family: var(--font-outfit), sans-serif;
          font-size: 56px;
          font-weight: 800;
          line-height: 1.04;
          color: #0D0D0D;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }

        .contact-heading em {
          font-style: italic;
          color: #FF5C00;
        }

        .contact-subtitle {
          font-size: 19px;
          color: #6B6B6B;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 520px;
          font-weight: 400;
        }

        /* ── FORM ── */
        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field label {
          font-size: 11px;
          font-weight: 700;
          color: #222;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .field label .req {
          color: #FF5C00;
          margin-left: 2px;
        }

        .field input,
        .field select,
        .field textarea {
          width: 100%;
          padding: 13px 16px;
          border: 1.5px solid #E8E8E4;
          border-radius: 12px;
          font-family: var(--font-outfit), sans-serif;
          font-size: 14px;
          color: #111;
          background: #fff;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          -webkit-appearance: none;
          appearance: none;
        }

        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: #FF5C00;
          box-shadow: 0 0 0 4px rgba(255, 92, 0, 0.08);
        }

        .field input::placeholder,
        .field textarea::placeholder {
          color: #B0B0A8;
        }

        .select-wrap {
          position: relative;
        }

        .select-wrap select {
          padding-right: 40px;
          cursor: pointer;
        }

        .select-arrow {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #999;
        }

        .field textarea {
          resize: none;
          line-height: 1.6;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: #FF5C00;
          color: #fff;
          border: none;
          border-radius: 14px;
          font-family: var(--font-outfit), sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: background 0.2s, transform 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 4px;
        }

        .submit-btn:hover {
          background: #E65200;
          transform: translateY(-1px);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .btn-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }

        .legal {
          text-align: center;
          font-size: 11.5px;
          color: #AAAAA4;
          margin-top: 4px;
        }

        .legal a {
          color: #888;
          text-decoration: underline;
        }

        /* ── RIGHT SIDE ── */
        .contact-right {
          padding: 40px 0 40px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
        }

        .image-card {
          width: 100%;
          height: 420px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        .img-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ADE80;
          box-shadow: 0 0 8px rgba(74, 222, 128, 0.8);
          flex-shrink: 0;
        }

        .img-badge span {
          color: #fff;
          font-size: 12px;
          font-weight: 600;
        }

        .img-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
          z-index: 10;
        }

        .testimonial-text {
          color: #fff;
          font-family: var(--font-outfit), sans-serif;
          font-size: 17px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .author-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #FF5C00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          border: 2px solid rgba(255, 255, 255, 0.25);
        }

        .author-name {
          color: #fff;
          font-size: 13px;
          font-weight: 700;
        }

        .author-role {
          color: rgba(255, 255, 255, 0.6);
          font-size: 11.5px;
        }

        /* ── INFO CARDS ── */
        .info-cards {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
        }

        .info-card {
          background: #fff;
          border: 1px solid #EBEBE6;
          border-radius: 16px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .info-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 92, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }

        .info-card-label {
          font-size: 10.5px;
          font-weight: 700;
          color: #AAAAA4;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .info-card-value {
          font-size: 13px;
          font-weight: 600;
          color: #111;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .contact-page {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
          .contact-left {
            padding: 48px 0 32px;
          }
          .contact-right {
            padding: 0 0 48px;
          }
          .contact-heading {
            font-size: 36px;
          }
          .row-2 {
            grid-template-columns: 1fr;
          }
          .info-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="contact-page">
        {/* ── LEFT: Form ── */}
        <div className="contact-left">
          <div className="eyebrow">
            <div className="eyebrow-dot" />
            We&apos;re Online
          </div>

          <h1 className="contact-heading">
            Let&apos;s start a<br />
            <em>conversation</em>
          </h1>

          <p className="contact-subtitle">
            Have something in mind? We&apos;d love to hear from you. Our team
            typically responds within 24 hours.
          </p>

          <div className="form-grid">
            <div className="row-2">
              <div className="field">
                <label>
                  Name <span className="req">*</span>
                </label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="field">
                <label>
                  Email <span className="req">*</span>
                </label>
                <input type="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="row-2">
              <div className="field">
                <label>Phone</label>
                <input type="tel" placeholder="+1 (000) 000-0000" />
              </div>
              <div className="field">
                <label>
                  Preferred Contact <span className="req">*</span>
                </label>
                <div className="select-wrap">
                  <select>
                    <option>Email</option>
                    <option>Phone</option>
                  </select>
                  <div className="select-arrow">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="row-2">
              <div className="field">
                <label>
                  Enquiry Type <span className="req">*</span>
                </label>
                <div className="select-wrap">
                  <select>
                    <option>Bulk Order (10+)</option>
                    <option>General Enquiry</option>
                    <option>Support</option>
                  </select>
                  <div className="select-arrow">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="field">
                <label>Quantity (bulk only)</label>
                <input type="number" defaultValue={1} min={1} />
              </div>
            </div>

            <div className="field">
              <label>
                Message <span className="req">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Tell us what you have in mind..."
              />
            </div>

            <button className="submit-btn" type="button">
              Send Message
              <span className="btn-icon">→</span>
            </button>

            <p className="legal">
              By submitting you agree to our <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* ── RIGHT: Visual ── */}
        <div className="contact-right">
          <div className="image-card">
            {/*
              TO USE YOUR OWN IMAGE instead of the SVG below:
              1. Remove the <svg>...</svg> block
              2. Add: import Image from "next/image";
              3. Replace with:
                  <Image
                    src="/your-image.png"
                    alt="Contact visual"
                    fill
                    className="object-cover"
                    priority
                  />
            */}
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
              viewBox="0 0 560 420"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id="rg1" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#FF7A2E" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#1A0A00" stopOpacity="1" />
                </radialGradient>
                <radialGradient id="rg2" cx="80%" cy="80%" r="60%">
                  <stop offset="0%" stopColor="#FF5C00" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <rect width="560" height="420" fill="url(#rg1)" />
              <rect width="560" height="420" fill="url(#rg2)" />
              <circle
                cx="420"
                cy="80"
                r="140"
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1"
              />
              <circle
                cx="420"
                cy="80"
                r="100"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
              <circle
                cx="420"
                cy="80"
                r="60"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
              <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
                {[70, 140, 210, 280, 350].map((y) => (
                  <line key={`h${y}`} x1="0" y1={y} x2="560" y2={y} />
                ))}
                {[80, 160, 240, 320, 400, 480].map((x) => (
                  <line key={`v${x}`} x1={x} y1="0" x2={x} y2="420" />
                ))}
              </g>
              <rect
                x="60"
                y="50"
                width="80"
                height="80"
                rx="16"
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              <rect
                x="100"
                y="90"
                width="80"
                height="80"
                rx="16"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
              <rect
                x="180"
                y="100"
                width="220"
                height="140"
                rx="16"
                fill="rgba(255,255,255,0.1)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <rect
                x="198"
                y="118"
                width="60"
                height="36"
                rx="6"
                fill="rgba(255,255,255,0.15)"
              />
              <rect
                x="198"
                y="162"
                width="100"
                height="8"
                rx="4"
                fill="rgba(255,255,255,0.2)"
              />
              <rect
                x="198"
                y="178"
                width="70"
                height="6"
                rx="3"
                fill="rgba(255,255,255,0.1)"
              />
              <circle cx="360" cy="218" r="20" fill="rgba(255,92,0,0.5)" />
              <circle cx="375" cy="218" r="20" fill="rgba(255,92,0,0.3)" />
              <rect
                x="60"
                y="300"
                width="130"
                height="10"
                rx="5"
                fill="rgba(255,255,255,0.12)"
              />
              <rect
                x="60"
                y="320"
                width="90"
                height="8"
                rx="4"
                fill="rgba(255,255,255,0.07)"
              />
            </svg>

            {/* Online badge */}
            <div className="img-badge">
              <div className="badge-dot" />
              <span>Always available</span>
            </div>

            {/* Testimonial */}
            <div className="img-bottom">
              <p className="testimonial-text">
                &ldquo;Connecxa shows that we&apos;re thinking ahead — always
                finding innovative ways to make experiences better.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">DJ</div>
                <div>
                  <div className="author-name">Daniel Joshua L.</div>
                  <div className="author-role">
                    Creative Director · We Are One
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5C00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="info-card-label">Email us</div>
              <div className="info-card-value">hello@connecxa.com</div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5C00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.38 2 2 0 0 1 3.62 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.81-1.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                </svg>
              </div>
              <div className="info-card-label">Call us</div>
              <div className="info-card-value">+1 800 000 000</div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5C00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="info-card-label">Response</div>
              <div className="info-card-value">Within 24 hours</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-24 lg:h-32 bg-white" />
      <TestermonialsContact />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <FAQSectionContact />
      <div className="w-full h-24 lg:h-32 bg-white" />
    </div>
  );
}
