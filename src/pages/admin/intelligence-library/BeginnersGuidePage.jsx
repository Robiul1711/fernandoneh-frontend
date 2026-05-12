import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import librarybg from "@/assets/images/librarybg.png";
const BeginnersGuidePage = () => {
  const navigate = useNavigate();

  const quickLinks = [
    "Dashboard overview and navigation",
    "How to generate AI-powered picks",
    "Reading hot, cold, and trend data",
    "Browsing past results and draw history",
    "Accessing guides and winner resources",
  ];

  return (
    <div className="min-h-screen bg-black text-white py-6">
      {/* Main Container with rounded corners */}
      <div className="mx-4 md:mx-6 relative  rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
        {/* Banner Section */}
        <div className="bg-[#143D2E] p-8 md:p-12 text-center relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A74B] to-transparent opacity-50"></div>
          {/* Back Button */}

          <button
            onClick={() => navigate(-1)}
            className="flex items-center absolute top-4 left-4 gap-2 bg-[#0A0A0A] border border-white/10 px-4 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Library
          </button>
          <h1 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-4 tracking-tight">
            BEGINNER'S GUIDE
          </h1>
          <h2 className="text-lg md:text-xl text-white font-medium mb-4 uppercase">
            LEARN HOW TO USE EVERY TOOL
          </h2>
          <p className="text-[#F6E7B7]/60 text-xs tracking-widest uppercase font-semibold">
            START HERE • LEARN FAST • PLAY SMARTER
          </p>

          {/* Quick Links Box */}
          <div className="mt-8 md:mt-10 max-w-2xl mx-auto border border-[#C5A358]/30 rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm text-[#F2DC94]">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-6 py-4 border-b border-[#C5A358]/20 last:border-0 hover:bg-[#C5A358]/5 transition-colors cursor-pointer group`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#F2DC94]">•</span>
                  <span className="text-sm text-[#F2DC94]">{link}</span>
                </div>
                <ExternalLink
                  size={14}
                  className="text-[#F2DC94] opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content Section with Marble Background */}
        <div
          className="relative p-4 sm:p-8 md:p-16 min-h-[800px]"
          style={{
            backgroundColor: "#FDFCF0",
            backgroundImage: `url('${librarybg}')`,
            backgroundBlendMode: "multiply",
          }}
        >
          {/* Gold Sparkles Overlay (using a CSS pattern) */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #C5A358 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Welcome Section */}
            <div className="bg-white/80 backdrop-blur-md border border-[#C5A358]/20 rounded-3xl p-6 md:p-10 mb-12 shadow-xl">
              <h3 className="text-2xl md:text-4xl font-bold text-[#C5A358] mb-6">
                Welcome to AI Lottery App
              </h3>
              <div className="w-full h-px bg-gray-200 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                AI Lottery App was built for players who want more than just a
                random number generator. It's a full lottery intelligence
                platform — combining real-time jackpot data, historical
                analysis, AI-powered picks, and educational resources in one
                clean, organized dashboard.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This guide walks you through every feature so you can get the
                most out of the app from day one — no experience required.
              </p>

              {/* Stats/Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div className="bg-[#143D2E] rounded-xl p-6 text-center border border-[#C5A358]/20 shadow-lg group hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-[#F6E7B7] mb-2">
                    5
                  </div>
                  <div className="text-[10px] text-white/80 font-bold uppercase tracking-wider leading-tight">
                    CORE TOOLS IN THE DASHBOARD
                  </div>
                </div>
                <div className="bg-[#143D2E] rounded-xl p-6 text-center border border-[#C5A358]/20 shadow-lg group hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-[#F6E7B7] mb-2">
                    AI
                  </div>
                  <div className="text-[10px] text-white/80 font-bold uppercase tracking-wider leading-tight">
                    POWERED NUMBER ANALYSIS ENGINE
                  </div>
                </div>
                <div className="bg-[#143D2E] rounded-xl p-6 text-center border border-[#C5A358]/20 shadow-lg group hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-[#F6E7B7] mb-2">
                    100%
                  </div>
                  <div className="text-[10px] text-white/80 font-bold uppercase tracking-wider leading-tight">
                    FREE TO ACCESS CORE FEATURES
                  </div>
                </div>
              </div>

              {/* First Step Box */}
              <div className="mt-8 flex rounded-xl overflow-hidden border border-[#C5A358]/30">
                <div className="bg-[#C5A358] text-[#143D2E] font-bold text-xs p-4 flex items-center justify-center text-center leading-tight w-24">
                  FIRST STEP
                </div>
                <div className="bg-[#F6E7B7]/20 p-4 text-sm text-gray-800 flex-grow">
                  Start with the Dashboard Overview to get familiar with the
                  layout. Then explore the Generate Picks tool — it's the
                  fastest way to experience the power of AI-assisted lottery
                  play.
                </div>
              </div>
            </div>

            {/* Section 1: Dashboard Overview */}
            <div className="bg-white/80 backdrop-blur-md border border-[#C5A358]/20 rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C5A358] text-[#143D2E] font-bold px-6 py-2">
                  1
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  DASHBOARD OVERVIEW
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C5A358] mb-8">
                  Your Lottery Command Center
                </h4>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The Dashboard is your home base. At a glance, it shows
                  everything you need to stay on top of upcoming draws and
                  current jackpots. Live Jackpot Display
                </p>

                <div className="bg-[#143D2E] rounded-2xl p-6 border border-[#C5A358]/30">
                  <div className="flex items-center gap-3 text-[#F6E7B7] mb-4">
                    <ArrowLeft className="rotate-180" size={20} />
                    <span className="font-bold text-lg">
                      Live Jackpot Display
                    </span>
                  </div>
                  <div className="bg-black/40 rounded-xl h-40 border border-white/5 flex items-center justify-center">
                    <p className="text-gray-500 italic">
                      [Dashboard Screenshot Placeholder]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginnersGuidePage;
