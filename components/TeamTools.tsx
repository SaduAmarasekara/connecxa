"use client";

import React from "react";
import { UserCog, Lock, Repeat, QrCode, UserCircle, BarChart3 } from "lucide-react";

const tools = [
  {
    title: "Admin Permissions",
    desc: "Assign roles and access levels so that the right people stay in control",
    icon: <UserCog className="w-6 h-6" />
  },
  {
    title: "Set Restrictions",
    desc: "Prevent unauthorised edits with built-in access restrictions",
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: "Serial Vault",
    desc: "Manage, assign, transfer and reuse custom NFC cards across your team",
    icon: <Repeat className="w-6 h-6" />
  },
  {
    title: "Branded QR Codes",
    desc: "Generate branded QR codes that link to your digital business cards",
    icon: <QrCode className="w-6 h-6" />
  },
  {
    title: "Virtual Background",
    desc: "Stay on-brand in video calls with custom virtual backgrounds",
    icon: <UserCircle className="w-6 h-6" />
  },
  {
    title: "Track Analytics",
    desc: "Access insights to your member's sharing and engagement metrics",
    icon: <BarChart3 className="w-6 h-6" />
  }
];

export default function TeamTools() {
  return (
    <section className="w-full flex justify-center py-20 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1300px] px-6 text-center" style={{ marginLeft: 40, marginRight: 40 }}>
        <h2 className="text-[36px] md:text-[52px] font-[900] text-[#111827] mb-4">
          Must-have Tools for Teams <span className="inline-block">🛠️</span>
        </h2>
        <p className="text-gray-500 text-[18px] md:text-[20px] font-medium mb-20 max-w-[900px] mx-auto text-center whitespace-nowrap md:whitespace-normal">
          Modern tools to help administrators stay connected and manage smarter
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 text-left" style={{ marginLeft: 50, marginRight: 50 }}>
          {tools.map((tool, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="w-14 h-14 bg-[#EBF3FF] rounded-xl flex items-center justify-center text-[#005AD1] shrink-0 transition-transform group-hover:scale-110">
                {tool.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-[20px] font-bold text-[#111827] mb-2">{tool.title}</h3>
                <p className="text-gray-500 text-[16px] leading-relaxed font-medium">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
