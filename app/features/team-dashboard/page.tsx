"use client";

import React from 'react';
import TeamDashboardHero from "@/components/TeamDashboardHero";
import TeamDashboardShowcase from "@/components/TeamDashboardShowcase";
import SecuritySection from "@/components/SecuritySection";
import FAQ from "@/components/FAQ";
import FeatureGrid from '@/components/FeatureGrid';

export default function TeamDashboard() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <TeamDashboardHero />
  <div className="w-full h-24 lg:h-32 bg-white" />
      <TeamDashboardShowcase />
  <div className="w-full h-24 lg:h-32 bg-white" />
     

        <SecuritySection />
        <div className="w-full h-24 lg:h-32 bg-white" />
        <FAQ />
        <div className="w-full h-24 lg:h-32 bg-white" />
        <FeatureGrid />
        <div className="w-full h-24 lg:h-32 bg-white" />
  
    </main>
  );
}
