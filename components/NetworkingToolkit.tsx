"use client";


export default function NetworkingToolkit() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", textAlign: "center", marginLeft: "20px" }}>
      <div className="w-full max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24">

        {/* ── Header ── */}
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-[38px] md:text-[50px] font-extrabold text-[#111827] tracking-tight leading-tight mb-4 flex items-center justify-center gap-3">
            Explore The Networking Toolkit
            <span className="text-[0.9em] text-yellow-400">🌟</span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#6B7280] font-medium max-w-2xl mx-auto">
            Built for the modern professional, ready for every connection.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16 mb-20 md:mb-32">

          {/* Card 1: Multi-Profile Display */}
          <div className="flex flex-col group">
            {/* Visual Area */}
            <div className="w-full h-[280px] rounded-[32px] bg-[#f8f9fb] flex items-center justify-center relative overflow-hidden mb-6 group-hover:-translate-y-2 transition-transform duration-300">
              {/* Pill 1 */}
              <div className="absolute top-[20%] left-[15%] w-[180px] h-[64px] bg-[#FDE2E4] rounded-2xl shadow-lg border border-white/50 flex items-center px-4 gap-3 transform -rotate-3 group-hover:-rotate-6 transition-transform">
                <div className="w-10 h-10 rounded-full bg-[#FA9A9A] flex items-center justify-center text-white font-bold">B</div>
                <div className="text-[#D35A5A] font-bold text-[18px]">Brand</div>
              </div>
              {/* Pill 2 */}
              <div className="absolute top-[40%] left-[25%] w-[190px] h-[64px] bg-[#E2F0CB] rounded-2xl shadow-xl border border-white/50 flex items-center px-4 gap-3 transform rotate-1 group-hover:rotate-3 transition-transform z-10">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#A8D08D] overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-gray-200"></div>
                </div>
                <div className="text-[#6D9F51] font-bold text-[18px]">Freelance</div>
              </div>
              {/* Pill 3 */}
              <div className="absolute top-[60%] left-[35%] w-[210px] h-[72px] bg-[#D4E4FD] rounded-2xl shadow-2xl border border-white flex items-center px-4 gap-3 transform -rotate-1 group-hover:scale-105 transition-transform z-20">
                <div className="w-12 h-12 rounded-full bg-blue-200 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center text-blue-600 font-bold">K</div>
                <div>
                  <div className="text-[#2B6CB0] font-bold text-[17px] leading-tight">Krystal Lee</div>
                  <div className="text-[#4A5568] text-[12px] font-medium">Marketing</div>
                </div>
              </div>
            </div>
            {/* Text */}
            <h3 className="text-[22px] font-bold text-[#111827] mb-2 tracking-tight">Multi-Profile Display</h3>
            <p className="text-[#6B7280] font-medium leading-relaxed">
              Seamlessly switch between multiple digital business cards
            </p>
          </div>

          {/* Card 2: Scan to Connect */}
          <div className="flex flex-col group">
            <div className="w-full h-[280px] rounded-[32px] bg-[#f8f9fb] flex items-center justify-center relative overflow-hidden mb-6 group-hover:-translate-y-2 transition-transform duration-300">
              {/* Main Card */}
              <div className="w-[200px] h-[240px] bg-white rounded-[24px] shadow-sm border-[4px] border-[#DCE8FF] p-4 flex flex-col items-center">
                <div className="w-full flex justify-between items-start mb-4">
                  <div className="font-bold text-[16px]">Profile</div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold">C</div>
                </div>
                {/* QR Block */}
                <div className="w-[120px] h-[120px] bg-white shadow-md border border-gray-100 rounded-xl mt-2 flex items-center justify-center shrink-0">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </div>
              </div>
              {/* QR icon float */}
              <div className="absolute top-[20%] right-[15%] w-14 h-14 bg-[#C6F6D5] rounded-xl flex items-center justify-center text-green-700 font-bold shadow-lg transform rotate-6 group-hover:rotate-12 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
              </div>
              {/* Share float */}
              <div className="absolute bottom-[10%] left-[15%] w-16 h-16 bg-[#FF5C00] rounded-xl flex items-center justify-center text-white shadow-xl transform -rotate-6 group-hover:-rotate-12 group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /></svg>
              </div>
            </div>
            <h3 className="text-[22px] font-bold text-[#111827] mb-2 tracking-tight">Scan to Connect</h3>
            <p className="text-[#6B7280] font-medium leading-relaxed">
              Built-in digital QR Code to share your e-business card
            </p>
          </div>

          {/* Card 3: OCR Scanner */}
          <div className="flex flex-col group">
            <div className="w-full h-[280px] rounded-[32px] bg-[#f8f9fb] flex items-center justify-center relative overflow-hidden mb-6 group-hover:-translate-y-2 transition-transform duration-300 gap-2">

              <div className="w-[70px] h-[160px] bg-[#FFD028] rounded-l-xl -ml-16"></div>

              {/* Phone Mockup */}
              <div className="w-[180px] h-[260px] bg-[#111] rounded-[32px] border-[6px] border-[#333] flex flex-col items-center justify-center relative shadow-2xl overflow-hidden z-10">
                <div className="absolute top-2 w-[40px] h-[4px] bg-[#333] rounded-full"></div>
                {/* Screen Content */}
                <div className="w-full h-full bg-[#E2E8F0] mt-1 flex flex-col items-center justify-center p-2">
                  <div className="text-[9px] font-bold text-gray-400 mb-2">Scan name card</div>

                  {/* Business card inside phone */}
                  <div className="w-[140px] h-[80px] bg-white rounded-md shadow-md p-2 flex flex-col justify-center relative">
                    {/* Scanner corners */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#005AD1]"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#005AD1]"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#005AD1]"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#005AD1]"></div>

                    <div className="font-bold text-[10px]">Elizabeth Bennet</div>
                    <div className="text-[7px] text-gray-500 mb-1">CEO</div>
                    <div className="text-[6px] text-gray-400">+65 9123 4567</div>
                    <div className="text-[6px] text-gray-400">elizabeth@ceo.com</div>
                  </div>
                </div>
              </div>

              <div className="w-[70px] h-[160px] bg-[#FFD028] rounded-r-xl -mr-16"></div>

            </div>
            <h3 className="text-[22px] font-bold text-[#111827] mb-2 tracking-tight">Built-in OCR Scanner</h3>
            <p className="text-[#6B7280] font-medium leading-relaxed">
              Scan and convert paper business cards into digital contacts
            </p>
          </div>

          {/* Card 4: Networking Insights */}
          <div className="flex flex-col group">
            <div className="w-full h-[280px] rounded-[32px] bg-[#f8f9fb] flex items-center justify-center relative overflow-hidden mb-6 group-hover:-translate-y-2 transition-transform duration-300">
              <div className="w-[240px] h-[170px] bg-white rounded-2xl shadow-xl border-4 border-[#C6F6D5] p-5 flex flex-col relative">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-[15px]">Contact Saves</div>
                </div>
                {/* Bar chart */}
                <div className="flex-1 flex items-end justify-between px-2 gap-3 border-b border-gray-100 pb-1">
                  <div className="w-6 h-[60%] bg-[#005AD1] rounded-t-sm group-hover:scale-y-110 transition-transform origin-bottom"></div>
                  <div className="w-6 h-[40%] bg-[#005AD1] rounded-t-sm group-hover:scale-y-110 transition-transform origin-bottom"></div>
                  <div className="w-6 h-[90%] bg-[#005AD1] rounded-t-sm group-hover:scale-y-110 transition-transform origin-bottom"></div>
                  <div className="w-6 h-[70%] bg-[#005AD1] rounded-t-sm group-hover:scale-y-110 transition-transform origin-bottom relative">
                    {/* Tooltip */}
                    <div className="absolute -top-10 -right-4 w-[100px] h-[30px] bg-white rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 bg-[#005AD1]"></div>
                      <span className="text-[9px] font-bold whitespace-nowrap">Contact Saves 18</span>
                    </div>
                  </div>
                </div>
                {/* xAxis */}
                <div className="flex justify-between px-2 text-[8px] text-gray-400 mt-2 font-medium">
                  <span>Dec 28</span>
                  <span>Jan 03</span>
                  <span>Jan 08</span>
                  <span>Jan 10</span>
                </div>
              </div>
            </div>
            <h3 className="text-[22px] font-bold text-[#111827] mb-2 tracking-tight">Networking Insights</h3>
            <p className="text-[#6B7280] font-medium leading-relaxed">
              Understand your impact with data-driven engagement tracking
            </p>
          </div>

          {/* Card 5: Virtual Connections */}
          <div className="flex flex-col group">
            <div className="w-full h-[280px] rounded-[32px] bg-[#f8f9fb] flex items-center justify-center relative overflow-hidden mb-6 group-hover:-translate-y-2 transition-transform duration-300">
              {/* Back window */}
              <div className="absolute top-[20%] left-[25%] w-[180px] h-[140px] bg-white shadow-sm border border-gray-100 rounded-xl p-3 flex flex-col relative z-0 group-hover:left-[22%] transition-all">
                <div className="text-[12px] font-bold mb-1 border-b border-gray-100 pb-1">New Message</div>
                <div className="text-[10px] text-gray-500 mb-2">Collaboration Opportun..</div>
                <div className="text-[8px] leading-tight text-gray-600">Hey Jane, reaching out to discuss an opportunity.</div>
              </div>
              <div className="absolute bottom-[20%] right-[10%] w-[120px] h-[120px] bg-[#E53E3E] rounded-[32px] opacity-90 z-0"></div>
              <div className="absolute top-[10%] left-[10%] w-[100px] h-[100px] bg-[#3182CE] rounded-full opacity-90 z-0"></div>

              {/* Video call block */}
              <div className="absolute top-[15%] right-[20%] w-[140px] h-[110px] bg-[#E2E8F0] shadow-2xl rounded-2xl border-4 border-white overflow-hidden group-hover:scale-105 transition-transform z-10 flex">
                <div className="flex-1 bg-[#ED64A6] flex items-center justify-center text-white relative">
                  <div className="absolute top-1 left-2 text-[18px] font-bold opacity-30">G</div>
                  <div className="w-14 h-14 rounded-full bg-white opacity-20"></div>
                  <div className="absolute bottom-1 right-1 bg-black/30 rounded text-[6px] px-1 text-white">Shandy</div>
                </div>
              </div>
            </div>
            <h3 className="text-[22px] font-bold text-[#111827] mb-2 tracking-tight">Virtual Connections</h3>
            <p className="text-[#6B7280] font-medium leading-relaxed">
              Integrated e-business card for email and virtual meetings
            </p>
          </div>

          {/* Card 6: Custom Link-in-Bio */}
          <div className="flex flex-col group">
            <div className="w-full h-[280px] rounded-[32px] bg-[#f8f9fb] flex items-center justify-center relative overflow-hidden mb-6 group-hover:-translate-y-2 transition-transform duration-300">

              <div className="absolute w-[60px] h-[60px] bg-blue-600 rounded-2xl left-[10%] top-[40%] flex items-center justify-center text-white font-bold text-[24px] shadow-lg transform -rotate-12 group-hover:-rotate-6 transition-all">f</div>
              <div className="absolute w-[50px] h-[50px] bg-black rounded-xl left-[25%] top-[15%] flex items-center justify-center text-white font-bold text-[18px] shadow-lg transform rotate-6">T</div>
              <div className="absolute w-[50px] h-[50px] bg-[#FFFC00] rounded-xl left-[45%] top-[10%] flex items-center justify-center shadow-lg transform -rotate-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M12 20s-8-4.5-8-10.5a8 8 0 0 1 16 0c0 6-8 10.5-8 10.5z" /></svg>
              </div>
              <div className="absolute w-[70px] h-[30px] bg-black rounded-[10px] right-[10%] top-[30%] flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 rounded-full bg-[#1DB954]"></div>
              </div>

              <div className="absolute w-[100px] h-[36px] bg-[#FF5C00] rounded-xl right-[28%] top-[35%] flex items-center justify-center shadow-xl z-10 transform -rotate-3 group-hover:scale-110 transition-transform">
                <span className="text-white text-[11px] font-black tracking-wide">OneGoodCard</span>
              </div>

              <div className="absolute w-[60px] h-[60px] bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#E1306C] rounded-2xl right-[15%] bottom-[20%] flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="absolute w-[80px] h-[40px] bg-[#111] rounded-[14px] left-[35%] bottom-[20%] flex items-center justify-center text-white text-[16px] font-black shadow-lg">
                𝕏
              </div>

            </div>
            <h3 className="text-[22px] font-bold text-[#111827] mb-2 tracking-tight">Custom Link-in-Bio</h3>
            <p className="text-[#6B7280] font-medium leading-relaxed">
              One profile link to connect and share across all platforms
            </p>
          </div>

        </div>

        {/* ── OGC FOR TEAMS Section ── */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 py-12 lg:pt-16 lg:pb-0">

          {/* Left: Text Content */}
          <div className="flex-1 w-full max-w-[500px]">
            <div className="text-[13px] font-black text-[#005AD1] tracking-[0.1em] mb-4 uppercase">
              OGC For Teams
            </div>
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#111827] leading-[1.1] tracking-tight mb-6">
              Empower your Team&apos;s<br />Digital Identity
            </h2>
            <p className="text-[17px] text-[#6B7280] font-medium leading-[1.6] mb-8">
              Easily manage digital business cards across your team - all from one centralised dashboard. Complete with powerful admin tools and real-time insights.
            </p>
            <button className="bg-[#005AD1] hover:bg-[#0052cc] text-white font-bold py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(0,102,255,0.25)] transition-all transform hover:-translate-y-1 mb-10 flex items-center gap-2 text-[15px]">
              Learn More <span>→</span>
            </button>

            <div className="flex flex-col gap-4 text-[#4B5563] text-[15px] font-medium">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 shrink-0 flex items-center justify-center text-[#005AD1]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                Bulk manage digital name cards for your company
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 shrink-0 flex items-center justify-center text-[#005AD1]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                </div>
                Gain insights into the performance of team members
              </div>
            </div>
          </div>

          {/* Right: Mockup Dashboard */}
          <div className="flex-1 w-full max-w-[650px] aspect-[1.4/1] bg-[#1F2021] rounded-[24px] rounded-br-[0px] lg:rounded-[32px] overflow-hidden p-3 md:p-4 shadow-2xl relative">
            <div className="w-full h-full bg-[#f8f9fb] rounded-[16px] md:rounded-[24px] overflow-hidden flex shadow-inner relative">
              {/* Sidebar */}
              <div className="w-[80px] md:w-[130px] bg-white border-r border-gray-100 flex flex-col items-center py-6">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-[#005AD1] rounded-lg md:rounded-2xl text-white font-bold flex items-center justify-center text-[18px] md:text-[24px] mb-4">G</div>
                <div className="hidden md:block font-bold text-[12px] mb-8 text-center px-2">Connecxa Team<br /><span className="text-[9px] text-gray-400 font-normal">Team · OGT-1234</span></div>

                <div className="w-full flex flex-col gap-1 px-3">
                  <div className="w-full h-8 bg-gray-50 rounded text-gray-400 flex items-center justify-center md:justify-start md:px-3 text-[10px] font-bold"><span className="hidden md:block">Home</span></div>
                  <div className="w-full h-8 bg-[#005AD1] rounded text-white shadow-sm flex items-center justify-center md:justify-start md:px-3 text-[10px] font-bold"><span className="hidden md:block">Business Cards</span></div>
                  <div className="w-full h-8 bg-transparent text-gray-400 flex items-center justify-center md:justify-start md:px-3 text-[10px] font-bold"><span className="hidden md:block">CRM</span></div>
                  <div className="w-full h-8 bg-transparent text-gray-400 flex items-center justify-center md:justify-start md:px-3 text-[10px] font-bold"><span className="hidden md:block">Employees</span></div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-4 md:p-6 overflow-hidden flex flex-col">
                <h3 className="text-[18px] md:text-[22px] font-bold mb-4">Business Cards</h3>

                {/* Horizontal boxes */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 h-24 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
                    <div className="h-2/3 w-full bg-gray-100 rounded-t-xl" />
                    <div className="h-1/3 flex items-center justify-center"><div className="w-6 h-6 rounded-full bg-white -mt-4 shadow border border-gray-100"></div></div>
                  </div>
                  <div className="flex-1 h-24 bg-white rounded-xl border border-blue-100 shadow-sm flex flex-col overflow-hidden">
                    <div className="h-2/3 w-full bg-gradient-to-tr from-blue-400 to-blue-200" />
                    <div className="h-1/3 flex items-center justify-center bg-[#005AD1]"><div className="w-6 h-6 rounded-full bg-white -mt-4 shadow border border-gray-100"></div></div>
                  </div>
                  <div className="flex-1 h-24 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden opacity-50">
                    <div className="h-2/3 w-full bg-pink-100" />
                    <div className="h-1/3 flex items-center justify-center"><div className="w-6 h-6 rounded-full bg-white -mt-4 shadow border border-gray-100"></div></div>
                  </div>
                </div>

                {/* Table Mockup */}
                <div className="w-full h-10 border-b border-gray-200 flex items-center text-[10px] font-bold text-gray-400 px-2 gap-4">
                  <div className="w-4 h-4 rounded-sm border border-gray-300"></div>
                  <div className="flex-1">Name</div>
                  <div className="flex-1 hidden md:block">Designation</div>
                  <div className="flex-1 hidden md:block">Group</div>
                </div>

                <div className="flex-1 flex flex-col gap-2 pt-2">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="w-full h-12 bg-white rounded-lg border border-gray-50 flex items-center px-2 gap-4 shadow-sm">
                      <div className="w-4 h-4 rounded-sm border border-blue-200 bg-blue-50 flex items-center justify-center"><div className="w-2 h-2 bg-blue-500 rounded-xs"></div></div>
                      <div className="flex-1 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 shrink-0"></div>
                        <div className="flex flex-col">
                          <div className="w-20 h-2 bg-gray-800 rounded-sm mb-1"></div>
                          <div className="w-24 h-1.5 bg-gray-400 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="flex-1 hidden md:block">
                        <div className="w-16 h-2 bg-gray-400 rounded-sm"></div>
                      </div>
                      <div className="flex-1 hidden md:flex">
                        <div className="px-2 py-1 bg-pink-50 text-pink-500 text-[8px] font-bold rounded-full">Marketing</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Overlapping Chart Widget */}
                <div className="absolute top-[10%] right-[5%] w-[180px] h-[140px] bg-white rounded-xl shadow-2xl border border-gray-100 p-3 flex flex-col z-10 transform scale-100 md:scale-110 md:origin-top-right">
                  <div className="font-bold text-[11px] mb-2">Profile Views</div>
                  <div className="flex-1 flex items-end justify-between px-1 gap-2 pb-1 border-b border-gray-50">
                    <div className="w-4 h-[70%] bg-[#005AD1] rounded-t-sm"></div>
                    <div className="w-4 h-[40%] bg-[#005AD1] rounded-t-sm"></div>
                    <div className="w-4 h-[100%] bg-[#005AD1] rounded-t-sm relative">
                      <div className="absolute -top-6 -right-2 bg-gray-900 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center gap-1 font-bold shadow-lg whitespace-nowrap">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Profile Views 101
                      </div>
                    </div>
                    <div className="w-4 h-[80%] bg-[#005AD1] rounded-t-sm"></div>
                  </div>
                  <div className="flex justify-between text-[7px] text-gray-400 mt-1 font-bold">
                    <span>Dec 28</span><span>Jan 03</span><span>Jan 08</span><span>Jan 10</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
