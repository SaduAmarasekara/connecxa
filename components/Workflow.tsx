"use client";

import Image from "next/image";

const features = [
  {
    id: "digital-card",
    bgColor: "#E8D5F5", // soft lavender/purple
    imageSrc: "/workflow-digital-card.png",
    title: "Digital Business Cards",
    description:
      "Make every impression count with a sleek, modern digital business card.",
    link: "#",
  },
  {
    id: "crm",
    bgColor: "#C8DFF8", // soft blue
    imageSrc: "/workflow-crm.png",
    title: "CRM Deal Manager",
    description:
      "Track every deal in one visual pipeline, stay organised and never miss a follow-up.",
    link: "#",
  },
  {
    id: "contacts",
    bgColor: "#FFF3C4", // soft yellow
    imageSrc: "/workflow-contacts.png",
    title: "Contact Manager",
    description:
      "Keep your contacts organised with up-to-date details, easily accessible anytime.",
    link: "#",
  },
];

export default function Workflow() {
  return (
    <section
      className="py-16 md:py-24 lg:py-[100px]"
      style={{
        background: "#F4F4F4",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        marginLeft: "50px",
         marginRight: "50px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700&display=swap');

        .wf-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .wf-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.13);
        }
        .wf-img-panel {
          width: 100%;
          aspect-ratio: 16/11;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wf-img-panel img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .wf-card:hover .wf-img-panel img {
          transform: scale(1.03);
        }
        .wf-learn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          padding-bottom: 1px;
          transition: border-color 0.2s ease, gap 0.2s ease;
        }
        .wf-learn:hover {
          border-color: #111827;
          gap: 10px;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-5 md:px-16 lg:px-24">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: "0 0 16px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            Power Your Daily Workflow
            <span style={{ fontSize: "0.85em" }}>⚡</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 19px)",
              color: "#6B7280",
              fontWeight: 500,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Modern tools to help professionals stay connected and scale smarter.
          </p>
        </div>

        {/* ── Feature Cards Grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
        >
          {features.map((feature) => (
            <div key={feature.id} className="wf-card">

              {/* Colored image panel */}
              <div
                className="wf-img-panel"
                style={{ background: feature.bgColor }}
              >
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  fill
                  className=""
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Text content */}
              <div style={{ padding: "28px 32px 36px" }}>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#111827",
                    margin: "0 0 10px 0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#6B7280",
                    fontWeight: 400,
                    margin: "0 0 24px 0",
                    lineHeight: 1.65,
                  }}
                >
                  {feature.description}
                </p>
                <a href={feature.link} className="wf-learn">
                  Learn More <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}