import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Trophy, Clock, LayoutGrid, Zap, BookOpen, Crown, Bell, User, Hash, Info } from "lucide-react";
import librarybg from "@/assets/images/librarybg.png";
import { useRef } from "react";
const BeginnersGuidePage = () => {
  const navigate = useNavigate();

  const dashboardRef = useRef(null);
  const aiRef = useRef(null);
  const resourcesRef = useRef(null);

  const quickLinks = [
    { name: "Dashboard overview and navigation", ref: dashboardRef },
    { name: "How to generate AI-powered picks", ref: aiRef },
    { name: "RESOURCES & NEXT STEPS", ref: resourcesRef },
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white py-6">
      {/* Main Container with rounded corners */}
      <div className="mx-4 md:mx-6 relative  rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
        {/* Banner Section */}
        <div className="bg-[#143D2E] p-6 md:p-12 text-center relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A74B] to-transparent opacity-50"></div>
          {/* Back Button */}

          <button
            onClick={() => navigate(-1)}
            className="flex items-center absolute top-4 left-4 gap-2 bg-[#0A0A0A] border border-white/10 px-3 py-1.5 rounded-lg text-xs md:text-sm hover:bg-white/5 transition-colors z-20"
          >
            <ArrowLeft size={14} />
            <span className="hidden xs:block">Back to Library</span>
            <span className="xs:hidden">Back</span>
          </button>
          <h1 className="text-2xl md:text-5xl font-bold text-[#C8A74B] mt-8 md:mt-0 mb-4 tracking-tight">
            BEGINNER'S GUIDE
          </h1>
          <h2 className="text-base md:text-xl text-white font-medium mb-4 uppercase">
            LEARN HOW TO USE EVERY TOOL
          </h2>
          <p className="text-[#F6E7B7]/60 text-[10px] md:text-xs tracking-widest uppercase font-semibold">
            START HERE • LEARN FAST • PLAY SMARTER
          </p>

          {/* Quick Links Box */}
          <div className="mt-8 md:mt-10 max-w-2xl mx-auto border border-[#C8A74B]/30 rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm text-[#F2DC94]">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                onClick={() => scrollToSection(link.ref)}
                className={`flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-[#C8A74B]/20 last:border-0 hover:bg-[#C8A74B]/5 transition-colors cursor-pointer group`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#F2DC94]">•</span>
                  <span className="text-xs md:text-sm text-[#F2DC94] text-left">{link.name}</span>
                </div>
                <ExternalLink
                  size={12}
                  className="text-[#F2DC94] opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content Section with Marble Background */}
        <div
          className="relative p-3 sm:p-6 md:p-8 min-h-[800px]"
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
              backgroundImage: `radial-gradient(circle, #C8A74B 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Welcome Section */}
            <div className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl p-5 md:p-10 mb-8 md:mb-12 shadow-xl">
              <h3 className="text-xl md:text-4xl font-bold text-[#C8A74B] mb-4 md:mb-6">
                Welcome to AI Lottery App
              </h3>
              <div className="w-full h-px bg-[#C8A74B]/20 mb-6"></div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                AI Lottery App was built for players who want more than just a
                random number generator. It's a full lottery intelligence
                platform — combining real-time jackpot data, historical
                analysis, AI-powered picks, and educational resources in one
                clean, organized dashboard.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                This guide walks you through every feature so you can get the
                most out of the app from day one — no experience required.
              </p>

              {/* Stats/Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:mt-10">
                <div className="bg-[#143D2E] rounded-xl p-5 md:p-6 text-center border border-[#C8A74B]/20 shadow-lg group hover:scale-105 transition-transform">
                  <div className="text-3xl md:text-4xl font-bold text-[#C8A74B] mb-2">
                    5
                  </div>
                  <div className="text-[9px] md:text-[10px] text-white/80 font-bold uppercase tracking-wider leading-tight">
                    CORE TOOLS IN THE DASHBOARD
                  </div>
                </div>
                <div className="bg-[#143D2E] rounded-xl p-5 md:p-6 text-center border border-[#C8A74B]/20 shadow-lg group hover:scale-105 transition-transform">
                  <div className="text-3xl md:text-4xl font-bold text-[#C8A74B] mb-2">
                    AI
                  </div>
                  <div className="text-[9px] md:text-[10px] text-white/80 font-bold uppercase tracking-wider leading-tight">
                    POWERED NUMBER ANALYSIS ENGINE
                  </div>
                </div>
                <div className="bg-[#143D2E] rounded-xl p-5 md:p-6 text-center border border-[#C8A74B]/20 shadow-lg group hover:scale-105 transition-transform sm:col-span-2 md:col-span-1">
                  <div className="text-3xl md:text-4xl font-bold text-[#C8A74B] mb-2 ">
                    100%
                  </div>
                  <div className="text-[9px] md:text-[10px] text-white/80 font-bold uppercase tracking-wider leading-tight">
                    FREE TO ACCESS CORE FEATURES
                  </div>
                </div>
              </div>

              {/* First Step Box */}
              <div className="mt-8 flex rounded-xl overflow-hidden border border-[#C8A74B]/30">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-[10px] md:text-xs p-3 md:p-4 flex items-center justify-center text-center leading-tight w-20 md:w-24 shrink-0">
                  FIRST STEP
                </div>
                <div className="bg-[#F6E7B7]/20 p-3 md:p-4 text-xs md:text-sm text-gray-800 flex-grow">
                  Start with the Dashboard Overview to get familiar with the
                  layout. Then explore the Generate Picks tool — it's the
                  fastest way to experience the power of AI-assisted lottery
                  play.
                </div>
              </div>
            </div>

            {/* Section 1: Dashboard Overview */}
            <div ref={dashboardRef} className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6">
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2">
                  1
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  DASHBOARD OVERVIEW
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8">
                  Your Lottery Command Center
                </h4>
                        <div className="w-full h-px bg-[#C8A74B]/20 mb-6"></div>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The Dashboard is your home base. At a glance, it shows everything you need to stay on top of upcoming draws and current jackpots.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Dashboard Features */}
                  {[
                    {
                      icon: <Trophy size={20} />,
                      title: "Live Jackpot Display",
                      desc: "See current jackpot amounts for major lotteries — Powerball, Mega Millions, and more — updated in real time. Never miss a massive jackpot because you weren't paying attention."
                    },
                    {
                      icon: <Clock size={20} />,
                      title: "Draw Countdown Timers",
                      desc: "Each lottery shows a live countdown to the next draw. This helps you plan your ticket purchases and never miss a draw you intended to enter."
                    },
                    {
                      icon: <Hash size={20} />,
                      title: "Latest Winning Numbers",
                      desc: "Check the most recent winning numbers for each lottery directly from the dashboard. Quick-check your tickets without leaving the app or visiting another site."
                    },
                    {
                      icon: <LayoutGrid size={20} />,
                      title: "Quick Navigation",
                      desc: "The dashboard links directly to all other features — Generate Picks, AI Analysis, Past Results, and Resources — so you can move through the app efficiently."
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="border border-[#C8A74B]/20 rounded-2xl overflow-hidden flex flex-col">
                      <div className="bg-[#143D2E] px-6 py-3 flex items-center gap-3">
                        <div className="text-[#C8A74B]">{feature.icon}</div>
                        <span className="text-[#F6E7B7] font-bold">{feature.title}</span>
                      </div>
                      <div className="bg-white p-6 text-gray-700 text-sm leading-relaxed flex-grow">
                        {feature.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* TIP Box */}
                <div className="flex rounded-xl overflow-hidden border border-[#C8A74B]/30 mt-8">
                  <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-xs p-4 flex items-center justify-center text-center leading-tight w-24">
                    TIP
                  </div>
                  <div className="bg-[#F6E7B7]/20 p-4 text-sm text-gray-800 flex-grow">
                    Bookmark the dashboard and make it your first stop on draw days. A 60-second check keeps you current on jackpots, upcoming draws, and your saved picks.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Generate Picks & AI Analysis */}
            <div ref={aiRef} className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6">
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2">
                  2
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  GENERATE PICKS & AI ANALYSIS
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8">
                  Let the AI Work for You
                </h4>
                        <div className="w-full h-px bg-[#C8A74B]/20 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      num: "1",
                      title: "Choose Your Lottery",
                      desc: "Select which game you want picks for — Powerball, Mega Millions, your state lottery, or others available in the app."
                    },
                    {
                      num: "2",
                      title: "GENERATE YOUR PICKS",
                      desc: "Tap Generate and the AI engine creates balanced number combinations using historical frequency data, odd/even balance, and high/low distribution. Each set is unique."
                    },
                    {
                      num: "3",
                      title: "REVIEW AI ANALYSIS",
                      desc: "The Analysis section shows you which numbers are currently 'hot' (frequently drawn), 'cold' (rarely drawn), and 'overdue' (not seen in a while). Use this to inform — not dictate — your picks."
                    },
                    {
                      num: "4",
                      title: "SAVE YOUR PICKS",
                      desc: "Save any combination to your Ticket Tracker. The app stores your picks and alerts you to check results after each draw — so nothing slips through the cracks."
                    },
                    {
                      num: "5",
                      title: "EXPLORE PAST RESULTS",
                      desc: "The Past Results section gives you access to draw history. Study number frequency, spot patterns, and build your own understanding of the games.",
                      fullWidth: true
                    }
                  ].map((step, idx) => (
                    <div key={idx} className={`bg-white border border-[#C8A74B]/20 rounded-2xl p-6 flex gap-4 shadow-sm hover:shadow-md transition-shadow ${step.fullWidth ? 'md:col-span-2' : ''}`}>
                      <div className="w-10 h-10 rounded-full bg-[#143D2E] text-[#C8A74B] flex items-center justify-center font-bold flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#143D2E] mb-1 uppercase text-sm tracking-wide">{step.title}</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Resources & Next Steps */}
            <div ref={resourcesRef} className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl scroll-mt-6">
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2">
                  3
                </div>
                <div className="text-[#C8A74B] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  RESOURCES & NEXT STEPS
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8">
                  Everything Else in the App
                </h4>
                        <div className="w-full h-px bg-[#C8A74B]/20 mb-6"></div>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The Dashboard is your home base. At a glance, it shows everything you need to stay on top of upcoming draws and current jackpots.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <BookOpen size={20} />,
                      title: "Resources Section",
                      desc: "Access all of AI Lottery App's educational guides — including this one — directly inside the app. The Responsible Play Guide, Smart Picks Handbook, Myths vs Facts, Hot & Cold Numbers Guide, and the Winner's Playbook are all available here."
                    },
                    {
                      icon: <Crown size={20} />,
                      title: "Winner Resources",
                      desc: "Already won something? The Winner's Playbook — accessible from Resources — walks you through exactly what to do in the first 24 hours, how to protect your privacy, and how to build a professional team to manage your winnings."
                    },
                    {
                      icon: <Bell size={20} />,
                      title: "Notifications & Alerts",
                      desc: "Enable draw reminders and jackpot alerts to stay up to date without having to check manually. The app handles the tracking — you handle the fun."
                    },
                    {
                      icon: <User size={20} />,
                      title: "Account & Preferences",
                      desc: "Set your favorite lotteries, adjust your notification preferences, and customize your experience so the app shows you what matters most to you first."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-[#C8A74B]/20 rounded-2xl overflow-hidden flex flex-col">
                      <div className="bg-[#143D2E] px-6 py-3 flex items-center gap-3">
                        <div className="text-[#C8A74B]">{item.icon}</div>
                        <span className="text-[#F6E7B7] font-bold">{item.title}</span>
                      </div>
                      <div className="bg-white p-6 text-gray-700 text-sm leading-relaxed flex-grow">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer Box */}
                <div className="flex rounded-xl overflow-hidden border border-[#C8A74B]/30 mt-8">
                  <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-xs p-4 flex items-center justify-center text-center leading-tight w-24">
                    Disclaimer
                  </div>
                  <div className="bg-[#F6E7B7]/20 p-4 text-sm text-gray-800 flex-grow">
                    AI Lottery App is for informational and entertainment purposes only. We do not guarantee winnings or change the official odds of any lottery game. Always play responsibly.
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
