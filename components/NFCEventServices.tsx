"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  desc: string;
  image: string;
}

const ServiceCard = ({ title, desc, image }: ServiceCardProps) => {
  return (
    <div className="relative flex flex-col flex-1 min-w-[280px] max-lg:!ml-0" style={{ marginLeft: 50 }}>
      <div className="bg-white rounded-[20px] md:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col h-full">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col flex-grow items-center text-center lg:items-start lg:text-left">
          <h3 className="text-[22px] md:text-[28px] font-[900] text-[#111827] mb-3 md:mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-gray-500 text-[15px] md:text-[17px] font-medium leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function NFCEventServices() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const services = [
    {
      title: "Live-Printed NFC Cards",
      desc: "Instantly create personalised NFC cards on-site, ready for guests to use within seconds.",
      image: "/nfc-service-printing.png"
    },
    {
      title: "Corporate Customisation",
      desc: "Showcase your brand with customised NFC cards that impress guests and keep you top of mind.",
      image: "/nfc-service-customisation.png"
    },
    {
      title: "On-site Live Support",
      desc: "Dedicated event support to give your attendees a seamless, hassle-free experience.",
      image: "/nfc-service-support.png"
    }
  ];

  return (
    <section className="services-section w-full bg-white relative z-10">
      <style>{`
        .services-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .services-header {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto 64px;
          text-align: center;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .services-inner-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .services-inner {
          width: 100%;
          display: flex;
          flex-direction: row;
          gap: 48px;
        }

        .carousel-arrow {
          position: absolute;
          top: 45%; 
          transform: translateY(-50%);
          width: 48px; 
          height: 48px;
          background: rgba(17,17,17,0.6); 
          backdrop-filter: blur(8px);
          border: none; 
          cursor: pointer; 
          color: #fff;
          display: none; 
          align-items: center; 
          justify-content: center;
          z-index: 50; 
          transition: all 0.2s ease;
        }
        .arrow-right { right: 0; border-top-left-radius: 99px; border-bottom-left-radius: 99px; }
        .arrow-left  { left: 0;  border-top-right-radius: 99px; border-bottom-right-radius: 99px; }
        .carousel-arrow:hover { background: rgba(17,17,17,0.8); }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @media (max-width: 1024px) {
          .services-section {
            padding: 64px 0;
          }
          .services-header {
            margin-bottom: 40px;
          }
          .services-inner {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 20px;
            padding: 0 20px 40px;
            -webkit-overflow-scrolling: touch;
          }
          .service-card-wrap {
            width: 88vw;
            flex-shrink: 0;
            scroll-snap-align: center;
          }
          .carousel-arrow {
            display: flex;
            top: 35%;
          }
        }

        @media (max-width: 600px) {
          .services-section {
            padding: 48px 0;
          }
          .services-inner {
            padding: 0 20px 40px;
            gap: 16px;
          }
          .service-card-wrap {
            width: 90vw;
          }
          .carousel-arrow {
            width: 40px;
            height: 40px;
            top: 35%;
          }
        }
      `}</style>

      {/* Header Section */}
      <div className="services-header">
        <h2 className="text-[32px] md:text-[56px] lg:text-[68px] font-[900] text-[#111827] leading-[1.1] mb-4 md:mb-6 tracking-tight">
          All-in-One Service
        </h2>
        <p className="text-gray-500 text-[16px] md:text-[22px] font-medium max-w-4xl mx-auto leading-relaxed">
          From live printing to on-site manpower support - we've got you covered.
        </p>
      </div>

      <div className="services-inner-wrapper">
        <div ref={scrollRef} className="services-inner no-scrollbar">
          {services.map((service, index) => (
            <div key={index} className="service-card-wrap flex flex-col">
              <div className="bg-white rounded-[24px] md:rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col flex-grow items-center text-center lg:items-start lg:text-left">
                  <h3 className="text-[24px] md:text-[30px] font-[900] text-[#111827] mb-4 md:mb-5 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[16px] md:text-[18px] font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-arrow arrow-left" 
          onClick={() => scrollRef.current?.scrollBy({ left: -window.innerWidth * 0.7, behavior: "smooth" })} 
          aria-label="Scroll left"
        >
          <span style={{ fontSize: 24, fontWeight: 300, marginRight: -4 }}>‹</span>
        </button>
        <button 
          className="carousel-arrow arrow-right" 
          onClick={() => scrollRef.current?.scrollBy({ left: window.innerWidth * 0.7, behavior: "smooth" })} 
          aria-label="Scroll right"
        >
          <span style={{ fontSize: 24, fontWeight: 300, marginLeft: -4 }}>›</span>
        </button>
      </div>
    </section>
  );
}
