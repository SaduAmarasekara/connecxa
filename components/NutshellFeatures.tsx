import React from 'react';

const NutshellFeatures = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
      {/* Header Section */}
      <div className="text-center mb-16 md:mb-24 space-y-4">
        <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 text-sm font-bold tracking-wider uppercase mb-2 animate-fade-in">
          Powerful Features
        </div>
        <h2 className="text-[40px] md:text-[64px] font-[900] text-[#111827] tracking-tight leading-[1.05]">
          Better networking, <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">in a nutshell.</span>
        </h2>
        <p className="text-gray-500 text-[18px] md:text-[24px] font-medium max-w-3xl mx-auto leading-relaxed pt-2">
          The smarter way to connect. Designed for professionals who value efficiency, branding, and results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: One-Tap to Share */}
        <div className="group md:col-span-1 bg-gradient-to-br from-[#F0F7FF] to-[#E0EFFF] rounded-[48px] p-12 relative overflow-hidden h-[420px] flex flex-col items-center text-center border border-white shadow-[0_10px_40px_-15px_rgba(0,87,255,0.1)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(0,87,255,0.2)]">
          <div className="z-10 flex flex-col items-center">
            <h3 className="text-[#1C5996] text-[28px] font-extrabold mb-4 leading-tight">One-Tap <br/>to Share</h3>
            <p className="text-[#1C5996]/80 text-[17px] font-semibold leading-relaxed max-w-[90%]">
              Tap any NFC smartphone to share instantly — no apps, no friction.
            </p>
          </div>
          
          <div className="mt-auto opacity-40 transform group-hover:scale-110 transition-transform duration-700 pb-4">
             <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="#1C5996" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <circle cx="12" cy="20" r="1" fill="currentColor" />
             </svg>
          </div>
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 blur-[60px] rounded-full"></div>
        </div>

        {/* Card 2: Custom Profile Templates */}
        <div className="group md:col-span-2 bg-gradient-to-br from-[#1C5996] to-[#0A3D6B] rounded-[48px] p-12 relative overflow-hidden h-[420px] flex flex-col items-center text-center border border-white/10 shadow-[0_20px_50px_-12px_rgba(10,61,107,0.4)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_70px_-12px_rgba(10,61,107,0.5)]">
          <div className="z-10 flex flex-col items-center">
            <h3 className="text-white text-[28px] font-extrabold mb-4">Custom Profile Templates</h3>
            <p className="text-white/80 text-[17px] font-medium mb-10 max-w-[70%] leading-relaxed">
              Fully customise your digital presence to match your personal brand and professional tone.
            </p>
          </div>
          
          {/* Mockup UI: Designer Interface - Centered */}
          <div className="mt-auto bg-white/10 backdrop-blur-2xl rounded-t-[40px] p-8 shadow-2xl h-[180px] w-full max-w-[500px] border-x border-t border-white/20 z-10 flex flex-col transition-transform duration-500 group-hover:translate-y-[-10px]">
             <div className="flex justify-between items-center mb-6">
               <div className="text-[14px] font-bold text-white tracking-wide uppercase opacity-60">Design Studio</div>
               <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
               </div>
             </div>
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-400 to-cyan-300 shadow-inner flex-shrink-0 border-2 border-white/30"></div>
                <div className="flex-1 space-y-3">
                   <div className="h-3 w-[100%] bg-white/20 rounded-full"></div>
                   <div className="h-3 w-[70%] bg-white/10 rounded-full"></div>
                   <div className="flex gap-3 pt-1">
                      <div className="px-4 py-2 bg-white/10 rounded-xl text-[12px] text-white/70 font-bold border border-white/10">#0057FF</div>
                      <div className="px-4 py-2 bg-blue-500/50 rounded-xl text-[12px] text-white font-bold border border-blue-400/30">Apply Style</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Card 3: Direct Lead Generation */}
        <div className="group md:col-span-2 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-[48px] p-12 relative overflow-hidden h-[420px] flex flex-col items-center text-center border border-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
          <div className="z-10 flex flex-col items-center">
            <h3 className="text-[#1C5996] text-[28px] font-extrabold mb-4">Direct Lead Generation</h3>
            <p className="text-[#1C5996]/70 text-[17px] font-semibold mb-12 max-w-[75%] leading-relaxed">
              Capture leads in real-time. Turn every handshake into a data-driven opportunity.
            </p>
          </div>
          
          {/* Mockup Notification: Centered */}
          <div className="mt-auto bg-white/80 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.1)] w-full max-w-[550px] flex items-center gap-6 z-10 relative border border-white group-hover:translate-y-[-10px] transition-transform duration-500">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-xl shadow-blue-200">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                 <circle cx="8.5" cy="7" r="4" />
                 <line x1="20" y1="8" x2="20" y2="14" />
                 <line x1="23" y1="11" x2="17" y2="11" />
               </svg>
             </div>
             <div className="flex-1 text-left">
                <div className="flex justify-between items-center mb-1.5">
                  <div className="font-[900] text-gray-900 text-[18px]">New Lead Captured</div>
                  <div className="text-[12px] text-blue-600 font-black bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter">Just Now</div>
                </div>
                <div className="text-[15px] text-gray-500 font-medium leading-relaxed">
                  Sarah Thompson sent a contact request via your card.
                </div>
             </div>
          </div>
        </div>

        {/* Card 4: Live Profile Analytics */}
        <div className="group md:col-span-1 bg-gradient-to-br from-[#1E40AF] to-[#1C5996] rounded-[48px] p-12 relative overflow-hidden h-[420px] flex flex-col items-center text-center border border-white/10 shadow-[0_20px_50px_-12px_rgba(30,64,175,0.4)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_70px_-12px_rgba(30,64,175,0.5)]">
          <div className="z-10 flex flex-col items-center">
            <h3 className="text-white text-[28px] font-extrabold mb-4 leading-tight">Live Profile <br/>Analytics</h3>
            <p className="text-white/80 text-[16px] font-medium leading-relaxed max-w-[90%]">
              Track your impact with real-time insights and engagement data.
            </p>
          </div>
          
          {/* Mockup Chart: Centered */}
          <div className="bg-white rounded-t-[40px] absolute bottom-0 left-10 right-10 h-[200px] p-8 flex flex-col shadow-2xl border-x border-t border-white/20 transition-transform duration-500 group-hover:translate-y-[-10px]">
            <div className="flex justify-between items-start mb-8">
               <div className="space-y-1 text-left">
                  <div className="text-[12px] font-black text-gray-400 uppercase tracking-widest">Growth</div>
                  <div className="text-[22px] font-[1000] text-gray-900">+124%</div>
               </div>
               <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
               </div>
            </div>
            
            {/* Minimalist Bars */}
            <div className="flex-1 flex items-end justify-between gap-3 pb-2">
                {[45, 70, 40, 90, 60, 85].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xl transition-all duration-700"
                    style={{ 
                      height: `${h}%`,
                      opacity: 0.3 + (i * 0.12)
                    }}
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutshellFeatures;


