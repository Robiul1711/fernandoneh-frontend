import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Scale,
  Expand,
  Cpu,
  Info,
  TrendingDown,
  Layers,
  LayoutGrid,
  Zap,
  RotateCcw,
  BarChart3,
  Search,
} from "lucide-react";
import librarybg from "@/assets/images/librarybg.png";

const SmartPicksPage = () => {
  const navigate = useNavigate();

  const balanceRef = useRef(null);
  const mixRef = useRef(null);
  const aiRef = useRef(null);

  const quickLinks = [
    { name: "Odd vs. Even number balance", ref: balanceRef },
    { name: "High & Low number mix strategies", ref: mixRef },
    { name: "Using AI tools for smarter picks", ref: aiRef },
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white py-6 font-poppins">
      {/* Main Container */}
      <div className="mx-4 md:mx-6 relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
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

          <h1 className="text-2xl md:text-5xl font-bold text-[#C8A74B] mt-8 md:mt-0 mb-4 tracking-tight uppercase">
            SMART PICKS HANDBOOK
          </h1>
          <h2 className="text-base md:text-xl text-white font-medium mb-4 uppercase">
            SMARTER STRATEGIES FOR SMARTER LOTTERY PLAYERS
          </h2>
          <p className="text-[#F6E7B7]/60 text-[10px] md:text-xs tracking-widest uppercase font-semibold">
            ANALYZE • BALANCE • PLAY SMARTER
          </p>

          {/* Quick Links Box */}
          <div className="mt-8 md:mt-10 max-w-2xl mx-auto border border-[#C8A74B]/30 rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm text-[#F2DC94]">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                onClick={() => scrollToSection(link.ref)}
                className={`flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-[#C8A74B]/20 last:border-0 hover:bg-[#C8A74B]/5 transition-colors cursor-pointer group`}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="text-[#F2DC94]">•</span>
                  <span className="text-xs md:text-sm text-[#F2DC94] font-medium uppercase tracking-wide">
                    {link.name}
                  </span>
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
          {/* Gold Sparkles Overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #C8A74B 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* What Is a Smart Pick Section */}
            <div className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl p-5 md:p-10 mb-8 md:mb-12 shadow-xl">
              <h3 className="text-xl md:text-4xl font-bold text-[#C8A74B] mb-4 md:mb-6">
                What Is a Smart Pick?
              </h3>
              <div className="w-full h-px bg-[#C8A74B]/20 mb-6 md:mb-8"></div>

              <div className="space-y-4 md:space-y-6 text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl">
                <p>
                  A Smart Pick isn't about predicting the winning numbers — no system can do that. It's about making more thoughtful, balanced, and organized selections that maximize your enjoyment of the game and potentially reduce the chance of splitting a jackpot with thousands of other players who chose the same popular numbers.
                </p>
                <p>
                  Smart picks combine balanced number selection, trend awareness, and historical review — Instead of pure emotional guessing or repetitive patterns.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
                {[
                  {
                    value: "57%",
                    label: "OF PLAYERS USE BIRTHDAYS ONLY (LIMITS TO 1-31)",
                  },
                  {
                    value: "3–4",
                    label: "IDEAL ODD/EVEN RATIO IN A 5-NUMBER PICK",
                  },
                  {
                    value: "1",
                    label: "IDEAL HIGH/LOW SPLIT FOR MOST LOTTERY FORMATS",
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#143D2E] rounded-2xl p-6 md:p-8 text-center border border-[#C8A74B]/30 shadow-lg group hover:scale-105 transition-transform"
                  >
                    <div className="text-2xl md:text-4xl font-bold text-[#C8A74B] mb-2">
                      {card.value}
                    </div>
                    <div className="text-[9px] md:text-[10px] text-white/80 font-bold uppercase tracking-widest leading-tight">
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Idea Box */}
              <div className="mt-8 md:mt-10 flex rounded-2xl overflow-hidden border border-[#C8A74B]/30">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-[10px] md:text-xs p-4 md:p-6 flex items-center justify-center text-center leading-tight w-24 md:w-32 flex-shrink-0 uppercase tracking-widest">
                  KEY IDEA
                </div>
                <div className="bg-[#F6E7B7]/20 p-4 md:p-6 text-xs md:text-sm text-gray-800 flex-grow leading-relaxed italic">
                  Smart picks do not improve your odds of winning — the mathematics of the lottery are fixed. They do improve the quality and enjoyment of your play, and may reduce jackpot splits if you win.
                </div>
              </div>
            </div>

            {/* Section 1: Odd vs. Even Balance */}
            <div
              ref={balanceRef}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  1
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  ODD VS. EVEN BALANCE
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8 text-balance">
                  Why Balance Your Numbers?
                </h4>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  Historical analysis of lottery draws shows that all-odd or all-even combinations appear far less frequently than balanced mixes. While this doesn't mean balanced picks are more likely to win, it does mean all-odd or all-even results are statistically rarer events.
                </p>

                {/* Frequency Table */}
                <div className="overflow-hidden rounded-2xl border border-[#C8A74B]/20 mb-10 shadow-lg">
                  <div className="grid grid-cols-3 bg-[#143D2E] text-[#C8A74B] font-bold text-xs uppercase tracking-widest p-4">
                    <div>COMBINATION TYPE</div>
                    <div>EXAMPLE (PICK 5)</div>
                    <div>FREQUENCY IN HISTORY</div>
                  </div>
                  <div className="divide-y divide-[#C8A74B]/10 font-medium">
                    {[
                      { type: "All Even", ex: "2, 8, 14, 22, 36", freq: "Less common (~5%)" },
                      { type: "All Odd", ex: "3, 7, 11, 25, 41", freq: "Less common (~5%)" },
                      { type: "3 Odd / 2 Even", ex: "3, 7, 14, 22, 41", freq: "Most common (~33%)" },
                      { type: "2 Odd / 3 Even", ex: "2, 7, 14, 22, 41", freq: "Very common (~33%)" },
                      { type: "4 Odd / 1 Even", ex: "3, 7, 11, 25, 22", freq: "Moderate (~15%)" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-3 p-4 bg-white text-sm text-gray-700">
                        <div className="text-xs sm:text-sm">{row.type}</div>
                        <div className="text-xs sm:text-sm font-mono tracking-tighter sm:tracking-normal">{row.ex}</div>
                        <div className={`text-xs sm:text-sm ${row.freq.includes('Most') ? 'text-[#143D2E] font-bold' : 'text-gray-500'}`}>{row.freq}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <h5 className="text-xl font-bold text-[#143D2E] mb-6 flex items-center gap-3">
                  <div className="w-6 h-1 bg-[#C8A74B] rounded-full"></div>
                  Recommended Approach
                </h5>
                <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl italic">
                  For a 5-number pick (like Powerball's main numbers), aim for either 3 odd / 2 even or 2 odd / 3 even. For a 6 number game, a 3/3 split is the most historically balanced combination.
                </p>

                {/* AI Tool Box */}
                <div className="flex rounded-xl overflow-hidden border border-[#C8A74B]/30 shadow-md">
                  <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-xs p-4 flex items-center justify-center text-center leading-tight w-24 flex-shrink-0 uppercase tracking-widest">
                    AI TOOL
                  </div>
                  <div className="bg-[#F6E7B7]/20 p-4 text-sm text-gray-800 flex-grow">
                    AI Lottery App's Smart Pick generator automatically balances odd/even ratios based on historical draw data — so you don't have to do the math manually.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: High & Low Number Mix */}
            <div
              ref={mixRef}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  2
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  HIGH & LOW NUMBER MIX
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8 text-balance">
                  Spread Across the Full Range
                </h4>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  In Powerball (1–69 main numbers), "low" numbers are typically 1–35 and "high" are 36–69. Many players cluster their picks in the low range — especially those using birthdays, which cap out at 31. This creates crowded patterns that, if they win, lead to more jackpot splits.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <TrendingDown className="text-[#C8A74B]" size={20} />,
                      title: "Why Clustering Low Numbers Hurts",
                      desc: "When millions of players pick from the same low range (1–31), popular combinations become extremely crowded. If those numbers win, the jackpot gets split among hundreds or thousands of tickets. Spreading your picks across the full range makes your combination statistically more unique."
                    },
                    {
                      icon: <Layers className="text-[#C8A74B]" size={20} />,
                      title: "The 50/50 High/Low Strategy",
                      desc: "For a 5-number game with a range of 1–69, aim for roughly 2–3 numbers from 1–34 and 2–3 from 35–69. This mirrors the most common historical distribution and keeps your combination distinct from birthday-based picks."
                    },
                    {
                      icon: <LayoutGrid className="text-[#C8A74B]" size={20} />,
                      title: "Avoid Common Patterns",
                      desc: "Straight lines on the playslip (1,2,3,4,5 or diagonal patterns), multiples of a number (5,10,15,20,25), and all numbers in one decade (21,22,23,24,25) are extremely popular choices. Winning with these means splitting the prize with a very large group.",
                      fullWidth: true
                    }
                  ].map((card, idx) => (
                    <div key={idx} className={`border border-[#C8A74B]/20 rounded-2xl overflow-hidden flex flex-col shadow-sm ${card.fullWidth ? 'lg:col-span-2' : ''}`}>
                      <div className="bg-[#143D2E] px-6 py-3 flex items-center gap-3">
                        <div className="bg-white/10 p-2 rounded-lg border border-white/5">
                          {card.icon}
                        </div>
                        <span className="text-[#F6E7B7] font-bold uppercase text-xs tracking-widest">{card.title}</span>
                      </div>
                      <div className="bg-white p-6 text-gray-700 text-sm leading-relaxed flex-grow">
                        {card.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Strategy Box */}
                <div className="mt-8 flex rounded-xl overflow-hidden border border-[#C8A74B]/30 shadow-md">
                  <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-xs p-4 flex items-center justify-center text-center leading-tight w-24 flex-shrink-0 uppercase tracking-widest">
                    STRATEGY
                  </div>
                  <div className="bg-[#F6E7B7]/20 p-4 text-sm text-gray-800 flex-grow">
                    The goal isn't to "outsmart" the lottery — it's to choose combinations that are uniquely yours. If you win, a more unique combination means a larger share of the prize.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Using AI Tools */}
            <div
              ref={aiRef}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  3
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  USING AI TOOLS
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8 text-balance">
                  How AI Lottery App Powers Smarter Picks
                </h4>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      num: "1",
                      title: "HOT & COLD ANALYSIS",
                      desc: "Review which numbers have appeared most and least frequently in recent draws. Use this to inform your picks — not as a guarantee, but as an organized starting point."
                    },
                    {
                      num: "2",
                      title: "AI PICK GENERATOR",
                      desc: "Generate balanced combinations automatically. The AI applies odd/even balance, high/low distribution, and historical frequency data to create picks that go beyond random guessing."
                    },
                    {
                      num: "3",
                      title: "HISTORICAL REVIEW",
                      desc: "Study past draw results to identify patterns, frequency cycles, and number distribution trends. Knowledge of history doesn't predict the future — but it does make you a more informed player."
                    },
                    {
                      num: "4",
                      title: "TICKET TRACKER",
                      desc: "Save your picks, track your tickets, and check results — all in one place. Organization is the foundation of smarter, more disciplined lottery play."
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="bg-white border border-[#C8A74B]/20 rounded-2xl p-6 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
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

                {/* Disclaimer Box */}
                <div className="flex rounded-xl overflow-hidden border border-[#C8A74B]/30 mt-12 shadow-lg">
                  <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-xs p-4 flex items-center justify-center text-center leading-tight w-32 flex-shrink-0 uppercase tracking-widest">
                    Disclaimer
                  </div>
                  <div className="bg-[#F6E7B7]/20 p-6 text-sm text-gray-800 flex-grow leading-relaxed italic">
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

export default SmartPicksPage;
