"use client";

import React from "react";
import NFCEventHero from "@/components/NFCEventHero";
import OccasionsSection from "@/components/OccasionsSection";
import FAQ from "@/components/FAQ";
import LivePrintingFeatures from "@/components/LivePrintingFeatures";
import NFCEventServices from "@/components/NFCEventServices";
import NFCEventSteps from "@/components/NFCEventSteps";


export default function NFCEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NFCEventHero />
          <div className="w-full h-24 lg:h-32 bg-white" />
      <LivePrintingFeatures />
          <div className="w-full h-24 lg:h-32 bg-white" />
      <NFCEventServices />
          <div className="w-full h-24 lg:h-32 bg-white" />
      <NFCEventSteps />
      
      <div className="w-full h-24 lg:h-32 bg-white" />
      
      <OccasionsSection />
      
      <div className="w-full h-24 lg:h-32 bg-white" />
      
      <div className="py-20">
        <FAQ />
        </div>
      <div className="w-full h-24 lg:h-32 bg-white" />
      
    
      <div className="w-full h-24 lg:h-32 bg-white" />
    </div>
  );
}
