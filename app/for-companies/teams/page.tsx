"use client";

import TeamHero from "@/components/TeamHero";
import TeamFeatureSections from "@/components/TeamFeatureSections";
import FAQ from "@/components/FAQ";


export default function TeamsPage() {
  return (
    <div>
     
      <TeamHero />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <TeamFeatureSections />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <FAQ />
      <div className="w-full h-24 lg:h-32 bg-white" />
    </div>
  );
}
