import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
  {/* Hero Section */}
<main className="w-full flex flex-col items-center py-6">
  <div className="w-full max-w-[1600px] px-4">
    {/* Blue Box - Added extra padding and refined radius */}
    <div className="bg-[#0066FF] rounded-[55px] p-10 md:p-16 lg:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center min-h-[640px] shadow-2xl">
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-40"></div>

      {/* 1. Left Content Area - Limited max-width for balance */}
      <div className="flex-1 z-10 space-y-10 lg:max-w-[550px]">
        <div className="space-y-6">
          {/* Headline - Refined size to match reference */}
          <h1 className="text-5xl md:text-5xl xl:text-6xl  leading-[1.1] tracking-tight">
            Modern Networking <br className="hidden xl:block" /> for Professionals
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium opacity-90">
            Connect smarter with the all-in-one digital business card, CRM, and contact manager. Built for Professionals. Powered for Teams.
          </p>
        </div>
        
        {/* Primary CTA */}
        <div className="pt-4">
          <button className="bg-[#FF5C00] text-white text-lg md:text-xl font-bold rounded-full px-12 py-5 shadow-xl hover:bg-[#e65300] transition-all transform hover:scale-105 active:scale-95">
            Customise Now →
          </button>
        </div>

        {/* Stats Row - Properly positioned lower down */}
        <div className="pt-12 grid grid-cols-2 lg:grid-cols-3 gap-10 border-t border-white/20 mt-12">
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold">2M+</div>
            <div className="text-[11px] font-bold text-white/60 uppercase tracking-widest">taps, scans and shares</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold">200K+</div>
            <div className="text-[11px] font-bold text-white/60 uppercase tracking-widest">users and teams globally</div>
          </div>
          <div className="hidden lg:flex items-center gap-3">
             <div className="px-2 py-1 bg-white/10 rounded border border-white/20 font-bold text-[10px]">CERT</div>
             <div className="text-[12px] font-bold leading-tight uppercase opacity-80">cyber-certified <br /> partner</div>
          </div>
        </div>
      </div>

      {/* 2. Right Visual (Mockup) - Large and Floating */}
      <div className="flex-1 relative w-full h-[450px] lg:h-[600px] z-10 flex justify-center lg:justify-end">
        <div className="relative w-full h-full transform lg:scale-110 lg:translate-x-10">
          <Image
            src="/hero-mockup.png"
            alt="Mockup"
            fill
            className="object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.4)]"
            priority
          />
        </div>
      </div>
    </div>
  </div>
</main>

      {/* Floating UI Elements */}
      {/* 10% Off Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-white text-black text-[13px] font-black py-5 px-2.5 rounded-l-2xl shadow-[0_0_40px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-gray-50 transition-all z-[100] border-y border-l border-gray-100 flex flex-col items-center gap-2" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
        Get 10% off
      </div>

      {/* Flag / Language Switcher */}
      <div className="fixed bottom-10 left-10 z-50">
        <div className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-xl py-2 px-4 flex items-center gap-2.5 text-sm font-black text-gray-700 shadow-2xl cursor-pointer hover:translate-y-[-2px] transition-all">
          <span className="text-lg">🇱🇰</span> LKR <span className="text-[10px] text-gray-400">▼</span>
        </div>
      </div>

      {/* Support / Help Buttons */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-5 z-50">
        <div className="relative group">
          <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-red-500 text-white text-[11px] flex items-center justify-center rounded-full font-black shadow-lg">1</div>
          <button className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all border border-gray-50 text-teal-500 transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12c0 1.1.9 2 2 2h14v-4" /><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" /></svg>
          </button>
        </div>
        <button className="w-16 h-16 bg-brand-orange text-white rounded-full shadow-[0_10px_30px_rgba(255,92,0,0.4)] flex items-center justify-center hover:scale-110 transition-all transform hover:translate-y-[-4px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
        </button>
      </div>
    </div>
  );
}
