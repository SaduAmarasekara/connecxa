"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How does Connecxa work?",
    answer:
      "Connecxa is a smart digital business card that uses NFC technology and QR codes. Simply tap your Connecxa card on any smartphone or scan the QR code — your contact details, social links, and portfolio are instantly shared. No app needed on the receiving end.",
  },
  {
    question: "Why should I use Connecxa?",
    answer:
      "Connecxa eliminates the hassle of carrying, printing, and running out of paper cards. It's eco-friendly, always up to date, and makes a lasting impression. Update your details anytime without needing a new card.",
  },
  {
    question: "How is Connecxa better than a traditional business card?",
    answer:
      "Unlike paper cards that get lost or thrown away, Connecxa is reusable, sustainable, and interactive. You can share unlimited information — videos, links, portfolios — and track how many people viewed your profile.",
  },
  {
    question: "What is a Smart Digital Name Card?",
    answer:
      "A Smart Digital Name Card like Connecxa is a physical card embedded with NFC technology. When tapped against a phone, it instantly opens your digital profile — no app or internet required on the recipient's device.",
  },
  {
    question: "What can I display on my Connecxa Card?",
    answer:
      "You can display your name, job title, company, phone number, email, website, social media profiles, portfolio links, videos, and even a payment link — all fully customisable from your Connecxa dashboard.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "Connecxa offers flexible plans for individuals and teams. You pay once for the physical card, and choose a subscription plan for advanced features like analytics, multiple profiles, and team management.",
  },
  {
    question: "How long will it take to receive my Connecxa card?",
    answer:
      "Standard delivery takes 5–7 business days. Express shipping options are available at checkout. For bulk corporate orders, please contact our team for lead times.",
  },
  {
    question: "Are bulk discounts available for companies?",
    answer:
      "Yes! Connecxa offers special pricing for bulk orders of 10 cards and above. Reach out to our team via the Contact Us page and we'll put together a custom quote for your organisation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <style>{`
        .faq-section {
          background: #FAFAF8;
          padding: 90px 40px;
          font-family: var(--font-outfit), sans-serif;
        }

        .faq-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 64px;
          align-items: start;
        }

        /* LEFT */
        .faq-left {
          position: sticky;
          top: 100px;
        }

        .faq-heading {
          font-size: 42px;
          font-weight: 800;
          color: #0D0D0D;
          line-height: 1.15;
          margin-bottom: 0;
        }

        .faq-heading-orange {
          color: #FF5C00;
          display: block;
        }

        .faq-heading-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .faq-see-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 28px;
          font-size: 16px;
          font-weight: 700;
          color: #1565C0;
          text-decoration: none;
          transition: gap 0.2s;
        }

        .faq-see-all:hover {
          gap: 10px;
        }

        .faq-deco {
          margin-top: 48px;
          display: flex;
          align-items: flex-end;
          gap: 0px;
          line-height: 1;
          user-select: none;
        }

        .faq-deco-exclaim {
          font-size: 110px;
          font-weight: 900;
          color: #FF5C00;
          line-height: 1;
          letter-spacing: -8px;
        }

        .faq-deco-question {
          font-size: 110px;
          font-weight: 900;
          color: #FF5C00;
          line-height: 1;
        }

        /* RIGHT */
        .faq-list {
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          border-bottom: 1.5px solid #E8E8E4;
        }

        .faq-item:first-child {
          border-top: 1.5px solid #E8E8E4;
        }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 22px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-outfit), sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0D0D0D;
          transition: color 0.2s;
        }

        .faq-question:hover {
          color: #FF5C00;
        }

        .faq-question.open {
          color: #FF5C00;
        }

        .faq-chevron {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #F0F0EC;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, transform 0.3s;
        }

        .faq-question.open .faq-chevron {
          background: #FF5C00;
          transform: rotate(90deg);
        }

        .faq-chevron svg {
          transition: stroke 0.2s;
        }

        .faq-question.open .faq-chevron svg {
          stroke: #fff;
        }

        .faq-answer {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease, padding 0.2s;
        }

        .faq-answer.open {
          max-height: 300px;
        }

        .faq-answer-inner {
          padding: 0 0 20px;
          font-size: 15px;
          color: #555;
          line-height: 1.7;
          max-width: 580px;
        }

        @media (max-width: 900px) {
          .faq-section {
            padding: 60px 20px;
          }
          .faq-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .faq-left {
            position: static;
          }
          .faq-heading {
            font-size: 32px;
          }
          .faq-deco {
            display: none;
          }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-inner">

          {/* LEFT */}
          <div className="faq-left">
            <h2 className="faq-heading">
             Everything you need,
              <div className="faq-heading-row">
                <span className="faq-heading-orange"> explained</span>
                <span style={{ fontSize: 36 }}> 🙋

</span>
              </div>
            </h2>

            <a href="/faqs" className="faq-see-all">
              See all FAQs →
            </a>

            <div className="faq-deco" aria-hidden="true">
              <span className="faq-deco-exclaim">!</span>
              <span className="faq-deco-question">?</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button
                  className={`faq-question ${openIndex === i ? "open" : ""}`}
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  {faq.question}
                  <div className="faq-chevron">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#555"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </button>
                <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                  <p className="faq-answer-inner">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}