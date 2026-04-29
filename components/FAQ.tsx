"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does Connecxa work?",
    answer:
      "Each card comes with a physical NFC business card that has a built-in wireless chip that transmits your digital name card to the receiver's devices via Near-Field Communication (NFC).",
  },
  {
    question: "Why should I use connecxa?",
    answer:
      "Connecxa offers robust networking features, built-in CRM, and is certified cyber-compliant by the CSA.",
  },
  {
    question: "What can I display on my Digital Name Card?",
    answer:
      "You can display contact details, social media links, credentials, web links, files, and visual assets.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "It is a one-time payment that comes with a personalised NFC card and lifetime usage of the digital name card.",
  },
  {
    question: "Are bulk discounts available for companies?",
    answer:
      "Yes, we offer additional corporate discounts for companies looking to transition to Smart Digital Name Cards.",
  },
];

export default function FAQ({ dark = false }: { dark?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full flex flex-col items-center bg-white py-24 lg:py-32" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>
      <div className="w-full max-w-[1200px] px-6 lg:px-12">
        {/* Main Box */}
        <div
          className={`rounded-[24px] md:rounded-[15px] px-5 py-16  lg:px-[10px] lg:py-[120px] text-white flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 shadow-2xl transition-colors duration-500 ${dark ? 'bg-[#111111]' : 'bg-[#005AD1]'
            }`}
        >

          {/* Left Column */}
          <div className="w-full lg:w-[35%] flex flex-col shrink-0 text-left">
            <h2 className="text-[clamp(40px,10vw,76px)] font-bold tracking-tight leading-none mb-6">
              FAQs
            </h2>
            <a
              href="#"
              className="text-[17px] font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform w-fit opacity-90 hover:opacity-100"
            >
              See all FAQs
              <span className="text-[20px] leading-none -mt-0.5">→</span>
            </a>
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full lg:flex-1 flex flex-col border-t border-white/25 border-b">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-white/25 last:border-b-0 w-full"
              >
                <button
                  className="w-full py-7 md:py-8 flex items-center justify-between text-left focus:outline-none group"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-[17px] md:text-[20px] font-medium leading-snug pr-6 group-hover:opacity-90 transition-opacity tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`transform transition-transform duration-300 flex-shrink-0 flex items-center justify-center ${openIndex === index ? "rotate-90" : ""
                      }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </button>

                {/* Animated Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${openIndex === index
                      ? "max-h-[300px] pb-10 opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-[16px] text-white/80 leading-relaxed font-medium md:max-w-[90%]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
