"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";

const navLinks = [
  { label: "Shop", href: "/shop", hasDropdown: false },
  {
    label: "Features",
    hasDropdown: true,
    dropdown: [
      {
        title: "Digital Business Cards",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sub-icon">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="9" cy="10" r="2" />
            <path d="M15 8h2" />
            <path d="M15 12h2" />
            <path d="M7 16h10" />
          </svg>
        ),
        href: "/features/digital-business-cards"
      },
      {
        title: "Contact Manager",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sub-icon">
            <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z" />
            <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M6 21v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
          </svg>
        ),
        href: "/features/contact-manager"
      },
      {
        title: "CRM Deal Manager",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sub-icon">
            <path d="M11 17l2 2 4-4" />
            <path d="M18 10h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1" />
            <path d="M17.94 11a5 5 0 0 0-5.44-5h-.1l-1.35 2.7a2 2 0 0 1-1.8 1.1h-1a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a2 2 0 0 0-.31-.96z" />
          </svg>
        ),
        href: "/features/crm-deal-manager"
      },
      {
        title: "Centralised Team Dashboard",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sub-icon">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        href: "/features/team-dashboard"
      }
    ]
  },
  {
    label: "Solutions",
    hasDropdown: true,
    dropdown: [
      {
        title: "For Individuals",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sub-icon">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ),
        href: "/for-companies/individuals"
      },
      {
        title: "For Teams",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sub-icon">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="16" y1="11" x2="22" y2="11" />
          </svg>
        ),
        href: "/for-companies/teams"
      },
      {
        title: "Corporate Gifting",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sub-icon">
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        ),
        href: "/for-companies/corporate-gifting"
      }
    ]
  },
  { label: "Contact Us", href: "/contact-us", hasDropdown: false },
  {
    label: "Resources",
    hasDropdown: true,
    dropdown: [

      {
        title: "FAQs",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sub-icon">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M9 8h.01" />
            <path d="M12 8h.01" />
            <path d="M15 8h.01" />
          </svg>
        ),
        href: "/resources/faqs"
      },
      {
        title: "Blogs",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005AD1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sub-icon">
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
            <path d="M2 10h20" />
          </svg>
        ),
        href: "/resources/blogs"
      }
    ]
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const { count: cartCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset dropdown when mobile menu closes
  useEffect(() => {
    if (!mobileOpen) {
      setActiveMobileDropdown(null);
    }
  }, [mobileOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        
        .navbar-root { font-family: 'DM Sans', 'Helvetica Neue', sans-serif; }

        /* Nav wrapper */
        .nav-wrapper {
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          transition: box-shadow 0.3s ease, background 0.3s ease, padding 0.3s ease;
        }
        .nav-wrapper.scrolled {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06);
        }
        .nav-wrapper.top {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Dropdown */
        .dropdown-panel {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
          padding: 10px;
          width: 280px;
          animation: dropdownSlide 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        @keyframes dropdownSlide {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px;
          border-radius: 12px;
          transition: all 0.25s ease;
          text-decoration: none;
          cursor: pointer;
        }

        .dropdown-item:hover {
          background: #F8FAFF;
          transform: translateX(4px);
        }

        .icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #F3F4F6;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .dropdown-item:hover .icon-box {
          background: #005AD1;
          box-shadow: 0 6px 15px rgba(0, 90, 209, 0.2);
        }

        .dropdown-item:hover .sub-icon {
          stroke: #ffffff;
        }

        .item-title {
          font-size: 14.5px;
          font-weight: 700;
          color: #111827;
          transition: color 0.2s ease;
        }

        .dropdown-item:hover .item-title {
          color: #005AD1;
        }

        .sub-icon {
          transition: stroke 0.2s ease;
        }

        @media (min-width: 768px) {
          .nav-inner { padding: 14px 20px; }
          .nav-inner.scrolled { padding: 8px 20px; }
        }
        @media (min-width: 1200px) {
          .nav-inner { padding: 14px 40px; }
          .nav-inner.scrolled { padding: 8px 40px; }
        }
        @media (min-width: 1600px) {
          .nav-inner { padding: 14px 60px; }
          .nav-inner.scrolled { padding: 8px 60px; }
        }

        /* Logo */
        .logo-wrap {
          position: relative;
          height: 65px;
          width: 280px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          margin-top: 0px;
          margin-left: -25px;
        }


        /* Desktop links */
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        @media (min-width: 1400px) {
          .desktop-links { gap: 12px; }
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          cursor: pointer;
          transition: background 0.18s ease, color 0.18s ease;
          white-space: nowrap;
          text-decoration: none;
          border: none;
          background: none;
          font-family: inherit;
        }
        .nav-link:hover { background: #f3f4f6; color: #005AD1; }
        .nav-link .chevron {
          font-size: 10px;
          opacity: 0.45;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .nav-link:hover .chevron { opacity: 0.8; transform: translateY(1px); }

        /* Divider */
        .nav-divider {
          width: 1px;
          height: 20px;
          background: #e5e7eb;
          margin: 0 8px;
          flex-shrink: 0;
        }

        /* Action buttons */
        .actions { display: flex; align-items: center; gap: 12px; }

        .btn-demo {
          font-family: inherit;
          font-size: 16px;
          font-weight: 700;
          color: #005AD1;
          background: transparent;
          border: 2px solid #005AD1;
          border-radius: 99px;
          padding: 10px 24px;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .btn-demo:hover {
          background: #005AD1;
          color: #ffffff;
          box-shadow: 0 6px 24px rgba(0,102,255,0.3);
          transform: translateY(-1px);
        }
        .btn-demo:active { transform: scale(0.97); }

        .btn-login {
          font-family: inherit;
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          background: #005AD1;
          border: none;
          border-radius: 99px;
          padding: 10px 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0,102,255,0.3);
        }
        .btn-login:hover {
          background: #0052cc;
          box-shadow: 0 8px 28px rgba(0,102,255,0.4);
          transform: translateY(-1px);
        }
        .btn-login:active { transform: scale(0.97); }
        .btn-login .arrow { transition: transform 0.22s ease; }
        .btn-login:hover .arrow { transform: translateX(3px); }

        /* Cart button */
        .cart-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          color: #374151;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .cart-btn:hover { background: #eff6ff; border-color: #bfdbfe; color: #005AD1; }
        .cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #FF5C00;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #fff;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .hamburger:hover { background: #eff6ff; border-color: #bfdbfe; }
        .ham-line {
          width: 22px;
          height: 2px;
          background: #374151;
          border-radius: 2px;
          transition: all 0.25s ease;
        }
        .hamburger.open .ham-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open .ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open .ham-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #ffffff;
          z-index: 49;
          display: flex;
          flex-direction: column;
          padding: 120px 32px 40px;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.23,1,0.32,1);
          overflow-y: auto;
        }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-nav-link {
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          padding: 16px 0;
          border-bottom: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .mobile-nav-link:hover { color: #005AD1; }

        @media (max-width: 1250px) { 
          .desktop-links { display: none; } 
          .nav-divider { display: none; } 
          .hamburger { display: flex; }
          .logo-wrap { width: 240px; height: 70px; margin-left: -20px; }
        }
        @media (max-width: 1100px) {
          .btn-demo { display: none; }
        }
        @media (max-width: 900px) {
          .btn-login { display: none; }
        }
        @media (max-width: 640px) { 
          .nav-inner { padding: 10px 16px; gap: 12px; } 
          .nav-inner.scrolled { padding: 8px 16px; } 
          .logo-wrap { width: 180px; height: 60px; margin-left: -12px; } 
          .actions { gap: 8px; }
          .nav-divider { display: none; }
        }
        @media (max-width: 380px) {
          .logo-wrap { width: 150px; height: 55px; margin-left: -8px; }
          .cart-btn { width: 38px; height: 38px; }
          .hamburger { padding: 6px; }
        }
      `}</style>

      <div className="navbar-root">
        {/* ── Nav ── */}
        <div className={`nav-wrapper ${scrolled ? "scrolled" : "top"}`}>
          <div className={`nav-inner ${scrolled ? "scrolled" : ""}`} style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'nowrap' }}>
            {/* Left: Logo + Links */}
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <Link href="/" className="logo-wrap" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/correct logo .png"
                  alt="Connecxa Logo"
                  style={{ width: 'clamp(180px, 18vw, 260px)', maxWidth: '100%', height: 'auto', maxHeight: 'clamp(60px, 9vw, 80px)', objectFit: 'contain', transform: 'scale(1.1)' }}
                />
              </Link>


              <div className="desktop-links">
                {navLinks.map((link) => (
                  <div key={link.label} className="group relative">
                    {link.href && !link.hasDropdown ? (
                      <Link href={link.href} className="nav-link" style={{ textDecoration: 'none' }}>
                        {link.label}
                      </Link>
                    ) : (
                      <button className="nav-link">
                        {link.label}
                        {link.hasDropdown && <span className="chevron">▼</span>}
                      </button>
                    )}
                    {link.dropdown && (
                      <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-[100]">
                        <div className="dropdown-panel">
                          {link.dropdown.map((item, i) => (
                            <Link href={item.href} key={i} className="dropdown-item">
                              <div className="icon-box">
                                {item.icon}
                              </div>
                              <div className="item-title">{item.title}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="actions">
              <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                <button className="btn-demo">Get a Demo</button>
              </Link>

              <button className="btn-login" onClick={() => window.open(`${process.env.NEXT_PUBLIC_APP_URL}/login`, '_blank')}>
                Log In
                <span className="arrow">→</span>
              </button>

              <div className="nav-divider" />

              {/* Cart */}
              <Link href="/cart" style={{ textDecoration: 'none' }}>
                <button className="cart-btn" aria-label="Shopping cart">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  {cartCount > 0 && (
                    <span className="cart-badge">{cartCount}</span>
                  )}
                </button>
              </Link>

              {/* Hamburger */}
              <div
                className={`hamburger ${mobileOpen ? "open" : ""}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <div className="ham-line" />
                <div className="ham-line" />
                <div className="ham-line" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              marginBottom: 40,
            }}
          >
            {!activeMobileDropdown ? (
              navLinks.map((link) => (
                link.href && !link.hasDropdown ? (
                  <Link href={link.href} key={link.label} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ) : (
                  <div
                    key={link.label}
                    className="mobile-nav-link"
                    onClick={() => setActiveMobileDropdown(link.label)}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <span style={{ fontSize: 13, opacity: 0.4 }}>▶</span>
                    )}
                  </div>
                )
              ))
            ) : (
              <>
                <div
                  className="mobile-nav-link"
                  style={{ color: '#005AD1', borderBottom: '2px solid #005AD1', marginBottom: 20 }}
                  onClick={() => setActiveMobileDropdown(null)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 18 }}>←</span>
                    <span style={{ fontWeight: 800 }}>{activeMobileDropdown}</span>
                  </div>
                </div>
                {navLinks.find(l => l.label === activeMobileDropdown)?.dropdown?.map((item, i) => (
                  <Link
                    href={item.href}
                    key={i}
                    onClick={() => {
                      setMobileOpen(false);
                      setActiveMobileDropdown(null);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      padding: '16px 0',
                      borderBottom: '1px solid #f3f4f6',
                      textDecoration: 'none'
                    }}
                  >
                    <div style={{
                      width: 40,
                      height: 40,
                      backgroundColor: '#F3F4F6',
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <span style={{ fontSize: 16, fontWeight: 700, color: '#111827' }}>{item.title}</span>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginTop: "auto",
            }}
          >
            <Link href="/contact-us" style={{ textDecoration: 'none', width: '100%' }}>
              <button
                style={{
                  fontFamily: "inherit",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#005AD1",
                  background: "transparent",
                  border: "2px solid #005AD1",
                  borderRadius: 99,
                  padding: "14px 28px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Get a Demo
              </button>
            </Link>
            <button
              style={{
                fontFamily: "inherit",
                fontSize: 16,
                fontWeight: 700,
                color: "#ffffff",
                background: "#005AD1",
                border: "none",
                borderRadius: 99,
                padding: "14px 28px",
                cursor: "pointer",
                width: "100%",
                boxShadow: "0 6px 24px rgba(0,102,255,0.3)",
              }}
              onClick={() => window.open(`${process.env.NEXT_PUBLIC_APP_URL}/login`, '_blank')}
            >
              Log In →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
