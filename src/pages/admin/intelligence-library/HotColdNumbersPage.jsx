import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Flame,
  Snowflake,
  Clock,
  Info,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Search,
} from "lucide-react";
import librarybg from "@/assets/images/librarybg.png";

const HotColdNumbersPage = () => {
  const navigate = useNavigate();

  const hotRef = useRef(null);
  const coldRef = useRef(null);
  const responsibleRef = useRef(null);

  const quickLinks = [
    { name: "What are Hot Numbers and why they matter", ref: hotRef },
    { name: "What are Cold Numbers and how to use them", ref: coldRef },
    { name: "RESPONSIBLE EXPECTATIONS", ref: responsibleRef },
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
            HOT & COLD NUMBERS GUIDE
          </h1>
          <h2 className="text-base md:text-xl text-white font-medium mb-4 uppercase">
            UNDERSTANDING LOTTERY NUMBER TRENDS
          </h2>
          <p className="text-[#F6E7B7]/60 text-[10px] md:text-xs tracking-widest uppercase font-semibold">
            ANALYZE • TRACK • PLAY SMARTER
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
                  <span className="text-xs md:text-sm text-[#F2DC94] font-medium">
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
            {/* Understanding Trends Section */}
            <div className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl p-5 md:p-10 mb-8 md:mb-12 shadow-xl">
              <h3 className="text-xl md:text-4xl font-bold text-[#C8A74B] mb-4 md:mb-6">
                Understanding Number Trends
              </h3>
              <div className="w-full h-px bg-[#C8A74B]/20 mb-6 md:mb-8"></div>

              <div className="space-y-4 md:space-y-6 text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl">
                <p>
                  Hot and cold number analysis is one of the most popular
                  strategies in organized lottery play. It doesn't change the
                  fundamental randomness of the lottery — but it gives players a
                  structured, data-driven framework for making picks rather than
                  relying on gut feeling or purely random selection.
                </p>
                
                <p>
                  This guide explains what hot, cold, and overdue numbers are,
                  how to interpret them, and — most importantly — how to use
                  them responsibly as entertainment tools.
                </p>
              </div>

              {/* Core Definitions Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
                {[
                  {
                    icon: <Flame className="text-[#C8A74B] w-6 h-6"  />,
                    title: "HOT NUMBERS",
                    desc: "DRAWN FREQUENTLY IN RECENT HISTORY",
                  },
                  {
                    icon: <Snowflake className="text-[#C8A74B] w-6 h-6" />,
                    title: "COLD NUMBERS",
                    desc: "DRAWN RARELY IN RECENT HISTORY",
                  },
                  {
                    icon: <Clock className="text-[#C8A74B] w-6 h-6" />,
                    title: "OVERDUE NUMBERS",
                    desc: "NOT DRAWN IN AN UNUSUALLY LONG TIME",
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#143D2E] rounded-2xl p-6 md:p-8 text-center border border-[#C8A74B]/30 shadow-lg group hover:scale-105 transition-transform"
                  >
                    <div className="bg-white/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5 group-hover:bg-white/20 transition-colors">
                      {card.icon}
                    </div>
                    <div className="text-base md:text-lg font-bold text-[#C8A74B] mb-2 tracking-wide uppercase">
                      {card.title}
                    </div>
                    <div className="text-[9px] md:text-[10px] text-white/80 font-bold uppercase tracking-widest leading-tight">
                      {card.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Box */}
              <div className="mt-8 md:mt-10 flex rounded-2xl overflow-hidden border border-[#C8A74B]/30">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-[10px] md:text-xs p-4 md:p-6 flex items-center justify-center text-center leading-tight w-24 md:w-32 flex-shrink-0">
                  IMPORTANT
                </div>
                <div className="bg-[#F6E7B7]/20 p-4 md:p-6 text-xs md:text-sm text-gray-800 flex-grow leading-relaxed italic">
                  Lottery draws are statistically independent events. Hot and
                  cold designations describe past behavior only — they cannot
                  predict future outcomes. Use this data for fun and
                  organization, not as a forecasting tool.
                </div>
              </div>
            </div>

            {/* Section 1: Hot Numbers */}
            <div
              ref={hotRef}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  1
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  HOT NUMBERS
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <Flame className="text-[#C8A74B]" size={40} />
                  <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B]">
                    Numbers on a Streak
                  </h4>
                </div>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  Hot numbers are those that have appeared most frequently in
                  recent lottery draws — typically tracked over the last 30, 60,
                  or 90 draws depending on the analysis window you choose.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "What Makes a Number 'Hot'?",
                      desc: "A number is considered hot when it appears significantly more often than statistical average over a defined period. For example, if a number appears in 15 out of the last 50 Powerball draws (expected: ~7), it qualifies as hot for that window.",
                    },
                    {
                      title: "Why Some Players Favor Hot Numbers",
                      desc: "The logic is simple: if a number has been appearing frequently, some players feel it's 'in a streak' and worth including. While statistically unfounded as prediction, it creates a sense of informed selection that many players find satisfying.",
                    },
                    {
                      title: "How AI Lottery App Tracks Them",
                      desc: "The app calculates hot numbers across multiple time windows (30, 60, and 90 draws) and displays them visually in the Analysis section. You can see both the raw frequency count and how far above average each number has appeared.",
                      fullWidth: true,
                    },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className={`border border-[#C8A74B]/20 rounded-2xl overflow-hidden flex flex-col ${
                        card.fullWidth ? "lg:col-span-2" : ""
                      }`}
                    >
                      <div className="bg-[#143D2E] px-6 py-3 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C8A74B]"></div>
                        <span className="text-[#F6E7B7] font-bold uppercase text-sm tracking-wide">
                          {card.title}
                        </span>
                      </div>
                      <div className="bg-white p-6 text-gray-700 text-sm leading-relaxed flex-grow">
                        {card.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second Important Box */}
                <div className="flex rounded-2xl overflow-hidden border border-[#C8A74B]/30">
                  <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-xs p-6 flex items-center justify-center text-center leading-tight w-32 flex-shrink-0 uppercase">
                    IMPORTANT
                  </div>
                  <div className="bg-[#F6E7B7]/20 p-6 text-sm text-gray-800 flex-grow leading-relaxed italic">
                    A "hot" number is hot because of past draws — not future
                    ones. Each draw resets the probability completely. Hot
                    numbers are a lens for organizing your picks, not a crystal
                    ball.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Cold & Overdue Numbers */}
            <div
              ref={coldRef}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  2
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  COLD & OVERDUE NUMBERS
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <Snowflake className="text-[#C8A74B]" size={40} />
                  <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B]">
                    Numbers That Haven't Shown Up
                  </h4>
                </div>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  Cold numbers are those that have appeared less frequently than
                  average in recent draws. Overdue numbers take this a step
                  further — these are numbers that haven't appeared in an
                  unusually long time, regardless of their long term average.
                </p>

                {/* Comparison Table */}
                <div className="overflow-hidden rounded-2xl border border-[#C8A74B]/20 mb-10 shadow-lg">
                  <div className="grid grid-cols-3 bg-[#143D2E] text-[#C8A74B] font-bold text-xs uppercase tracking-widest p-4">
                    <div>TYPE</div>
                    <div>DEFINITION</div>
                    <div>PLAYER STRATEGY</div>
                  </div>
                  <div className="divide-y divide-[#C8A74B]/10">
                    {[
                      {
                        type: "Hot",
                        icon: <Flame size={14} className="inline mr-2" />,
                        def: "Above-average frequency recently",
                        strategy: 'Include for \"momentum\" plays',
                      },
                      {
                        type: "Cold",
                        icon: <Snowflake size={14} className="inline mr-2" />,
                        def: "Below-average frequency recently",
                        strategy: 'Avoid or include for \"correction\"',
                      },
                      {
                        type: "Overdue",
                        icon: <Clock size={14} className="inline mr-2" />,
                        def: "Long absence from any draw",
                        strategy: 'Watch list for \"due\" plays',
                      },
                      {
                        type: "Average",
                        icon: <TrendingUp size={14} className="inline mr-2" />,
                        def: "Near expected frequency",
                        strategy: "Neutral — baseline selection",
                      },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-3 p-4 bg-white text-sm text-gray-700"
                      >
                        <div className="font-bold flex items-center text-xs sm:text-sm">
                          {row.icon}
                          {row.type}
                        </div>
                        <div className="text-xs sm:text-sm">{row.def}</div>
                        <div className="italic text-gray-500 text-xs sm:text-sm">
                          {row.strategy}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h5 className="text-xl font-bold text-[#143D2E] mb-6 flex items-center gap-3">
                  <div className="w-6 h-1 bg-[#C8A74B] rounded-full"></div>
                  Two Schools of Thought
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "School 1: Avoid Cold Numbers",
                      desc: "Some players avoid cold numbers on the theory that if a number is appearing rarely, it's \"out of favor\" and less likely to appear soon. This is entertainment logic — not statistical logic — but it's a valid organizational preference.",
                    },
                    {
                      title: "School 2: Chase Overdue Numbers",
                      desc: "Others believe overdue numbers are \"due\" to appear. This is the Gambler's Fallacy mathematically, but it's an extremely popular play style. If it makes the game more engaging for you, it's a valid entertainment approach — just not a predictive one.",
                    },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="bg-[#143D2E] border border-[#C8A74B]/20 rounded-2xl p-6 shadow-md"
                    >
                      <h6 className="text-[#C8A74B] font-bold mb-4 uppercase text-sm tracking-widest">
                        {card.title}
                      </h6>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Responsible Expectations */}
            <div
              ref={responsibleRef}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  3
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  RESPONSIBLE EXPECTATIONS
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8">
                  Using Trend Data the Right Way
                </h4>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      num: "1",
                      title: "USE MULTIPLE WINDOWS",
                      desc: "Don't rely on just the last 10 draws. AI Lottery App shows trends across 30, 60, and 90 draw windows. A number that's hot in the last 10 draws but cold over 90 draws tells a very different story.",
                    },
                    {
                      num: "2",
                      title: "COMBINE WITH BALANCE PRINCIPLES",
                      desc: "Use hot/cold data alongside the odd/even and high/low balance principles from the Smart Picks Handbook. Data informed AND balanced picks are the most organized approach.",
                    },
                    {
                      num: "3",
                      title: "STAY WITHIN YOUR BUDGET",
                      desc: "No amount of trend data justifies overspending. The best analysis in the world doesn't change the fundamental randomness of the lottery. Play your budget — not your data.",
                    },
                    {
                      num: "4",
                      title: "ENJOY THE PROCESS",
                      desc: "The real value of hot/cold analysis is engagement. It makes lottery play more like a hobby and less like a coin flip. If you enjoy the research and organization, that's the win — regardless of the draw results.",
                    },
                  ].map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-[#C8A74B]/20 rounded-2xl p-6 flex gap-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#143D2E] text-[#C8A74B] flex items-center justify-center font-bold flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#143D2E] mb-1 uppercase text-sm tracking-wide">
                          {step.title}
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer Box */}
                <div className="flex rounded-xl overflow-hidden border border-[#C8A74B]/30 mt-10 shadow-lg">
                  <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-xs p-4 flex items-center justify-center text-center leading-tight w-32 flex-shrink-0 uppercase tracking-widest">
                    Disclaimer
                  </div>
                  <div className="bg-[#F6E7B7]/20 p-6 text-sm text-gray-800 flex-grow leading-relaxed italic">
                    AI Lottery App is for informational and entertainment
                    purposes only. We do not guarantee winnings or change the
                    official odds of any lottery game. No trend analysis can
                    predict lottery outcomes.
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

export default HotColdNumbersPage;