import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#0f172a] text-white py-2.5 px-4 text-center text-[13px] font-semibold flex items-center justify-center gap-2 w-full z-[60]">
        <span>🌍 Free Worldwide Shipping for orders above S$100 🚀</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-7 max-w-[1600px] mx-auto w-full sticky top-0 bg-white/95 backdrop-blur-md z-50 transition-all">
        <div className="flex items-center gap-12">
          {/* Logo Area */}
          <Link href="/" className="relative h-20 w-72 block transform hover:scale-[1.02] transition-transform">
            <Image
              src="/logo.jpeg"
              alt="OneGoodCard / Connecxa Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-10 text-[16px] font-bold text-gray-800 tracking-tight">
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-brand-blue transition-colors">
              Shop <span className="text-[11px] mt-0.5 opacity-60">▼</span>
            </div>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-brand-blue transition-colors">
              Features <span className="text-[11px] mt-0.5 opacity-60">▼</span>
            </div>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-brand-blue transition-colors">
              For Companies <span className="text-[11px] mt-0.5 opacity-60">▼</span>
            </div>
            <div className="cursor-pointer hover:text-brand-blue transition-colors">Contact Us</div>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-brand-blue transition-colors">
              Resources <span className="text-[11px] mt-0.5 opacity-60">▼</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-[15px] font-black text-brand-blue border-2 border-brand-blue rounded-full px-9 py-3.5 hover:bg-brand-blue hover:text-white transition-all shadow-sm active:scale-95">
            Get a Demo
          </button>
          <button className="bg-brand-blue text-white text-[15px] font-black rounded-full px-9 py-3.5 flex items-center gap-2.5 hover:bg-brand-blue/90 transition-all shadow-[0_10px_25px_-5px_rgba(0,87,255,0.4)] active:scale-95">
            Log In <span className="text-lg">→</span>
          </button>
          <div className="relative cursor-pointer text-gray-700 hover:text-brand-blue transition-all ml-2 scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
        </div>
      </nav>
    </>
  );
}
