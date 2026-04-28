"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Getting Started",
      desc: "New to Connecxa? Explore step-by-step guides on setting up your profile, sharing your card, and importing contacts to start networking fast.",
      count: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
          <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
        </svg>
      )
    },
    {
      title: "Account",
      desc: "Manage your account email and password here. Learn how to update your personal information and subscription settings.",
      count: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      title: "NFC Card & Hardware",
      desc: "Find guides on activating your NFC business card, fixing tap issues on iPhone or Android, and ordering or customising your card.",
      count: 5,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      )
    },
    {
      title: "Digital Name Card",
      desc: "Learn how to customise your Connecxa profile with themes, colours, and layouts. Step-by-step guide to personalising your digital business card for a professional look.",
      count: 19,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: "CRM & Analytics",
      desc: "Discover how to track profile views, export contacts, and use Connecxa's CRM tools to manage leads and grow your network.",
      count: 8,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </svg>
      )
    },
    {
      title: "Connecxa for Teams",
      desc: "Learn all about centralised teams dashboard, assign cards to members, and view team-wide analytics for smarter business networking.",
      count: 7,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    }
  ];

  return (
    <div className="help-center-page" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <style>{`
        .help-center-page {
          background: #fff;
          min-height: 100vh;
        }

        /* ── Hero Section ── */
        .hc-hero {
          padding: 120px 40px 80px;
          text-align: center;
          background: #fff;
        }

        .hc-title {
          font-size: 56px;
          font-weight: 800;
          color: #0D0D0D;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }

        .hc-subtitle {
          font-size: 24px;
          font-weight: 600;
          color: #111;
          margin-bottom: 40px;
        }

        .search-container {
          max-width: 720px;
          margin: 0 auto 32px;
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 18px 24px 18px 56px;
          border-radius: 99px;
          border: 1px solid #E8E8E4;
          font-size: 16px;
          color: #111;
          background: #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .search-input:focus {
          outline: none;
          border-color: #005AD1;
          box-shadow: 0 8px 30px rgba(0,90,209,0.08);
        }

        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }

        .popular-tags {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .popular-label {
          font-size: 14px;
          font-weight: 600;
          color: #666;
        }

        .tag-pill {
          padding: 8px 20px;
          border-radius: 99px;
          border: 1px solid #E8E8E4;
          font-size: 14px;
          font-weight: 500;
          color: #111;
          background: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tag-pill:hover {
          background: #f8f8f8;
          border-color: #ddd;
        }

        /* ── Categories Section ── */
        .hc-categories {
          max-width: 1280px;
          margin: 0 auto;
          padding: 60px 40px 100px;
        }

        .browse-label {
          font-size: 14px;
          font-weight: 600;
          color: #005AD1;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 32px;
          display: block;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 24px;
        }

        .cat-card {
          padding: 40px;
          background: #fff;
          border: 1px solid #F0F0EE;
          border-radius: 24px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .cat-card:hover {
          border-color: #005AD1;
          box-shadow: 0 12px 40px rgba(0,0,0,0.06);
          transform: translateY(-4px);
        }

        .cat-icon-wrap {
          width: 52px;
          height: 52px;
          background: #F0F7FF;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .cat-title {
          font-size: 20px;
          font-weight: 800;
          color: #111;
          margin-bottom: 12px;
        }

        .cat-desc {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .cat-meta {
          font-size: 14px;
          font-weight: 600;
          color: #999;
        }

        /* ── Still Need Help Section ── */
        .hc-footer {
          max-width: 1100px;
          margin: 0 auto 100px;
          padding: 60px;
          background: #F8FAFC;
          border-radius: 40px;
          text-align: center;
        }

        .footer-title {
          font-size: 32px;
          font-weight: 800;
          color: #111;
          margin-bottom: 12px;
        }

        .footer-desc {
          font-size: 16px;
          color: #666;
          margin-bottom: 32px;
        }

        .btn-contact {
          display: inline-block;
          padding: 14px 40px;
          background: #005AD1;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          border-radius: 99px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(0,90,209,0.3);
        }

        .btn-contact:hover {
          background: #0046a3;
          box-shadow: 0 8px 24px rgba(0,90,209,0.4);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hc-title { font-size: 40px; }
          .categories-grid { grid-template-columns: 1fr; }
          .hc-categories { padding: 40px 20px; }
          .hc-hero { padding: 80px 20px 40px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hc-hero">
        <h1 className="hc-title">Help Center</h1>
        <p className="hc-subtitle">Hi there, how may we help you?</p>
        
        <div className="search-container">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search for articles..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="popular-tags">
          <span className="popular-label">Popular</span>
          <button className="tag-pill">Activate Your Connecxa Products</button>
          <button className="tag-pill">Save Contact with Connecxa</button>
          <button className="tag-pill">What is Connecxa for Teams</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="hc-categories">
        <span className="browse-label">Browse by category</span>
        
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <div key={i} className="cat-card">
              <div className="cat-icon-wrap">
                {cat.icon}
              </div>
              <h3 className="cat-title">{cat.title}</h3>
              <p className="cat-desc">{cat.desc}</p>
              <div className="cat-meta">{cat.count} articles</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <section className="hc-footer">
        <h2 className="footer-title">Still need help?</h2>
        <p className="footer-desc">Our team usually replies within 1-3 business days.</p>
        <Link href="/contact-us" className="btn-contact">
          Contact support
        </Link>
      </section>
    </div>
  );
}
