import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  CircleDollarSign,
  Users,
  AlertTriangle,
  Calendar,
  Heart,
  MessageCircle,
  LifeBuoy,
  TrendingDown,
  Brain,
} from "lucide-react";
import librarybg from "@/assets/images/librarybg.png";

const ResponsiblePlayPage = () => {
  const navigate = useNavigate();

  const budgetRef = useRef(null);
  const emotionRef = useRef(null);
  const habitsRef = useRef(null);

  const quickLinks = [
    { name: "BUDGET SETTING", ref: budgetRef },
    { name: "EMOTIONAL DISCIPLINE", ref: emotionRef },
    { name: "HEALTHY HABITS", ref: habitsRef },
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
            RESPONSIBLE PLAY GUIDE
          </h1>
          <h2 className="text-base md:text-xl text-white font-medium mb-4 uppercase">
            PLAY SMART. STAY IN CONTROL.
          </h2>
          <p className="text-[#F6E7B7]/60 text-[10px] md:text-xs tracking-widest uppercase font-semibold">
            DISCIPLINE • BALANCE • ENJOYMENT
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
            {/* Why Responsible Play Matters Section */}
            <div className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl p-5 md:p-10 mb-8 md:mb-12 shadow-xl">
              <h3 className="text-xl md:text-4xl font-bold text-[#C8A74B] mb-4 md:mb-6">
                Why Responsible Play Matters
              </h3>
              <div className="w-full h-px bg-[#C8A74B]/20 mb-6 md:mb-8"></div>

              <div className="space-y-4 md:space-y-6 text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl">
                <p>
                  Lottery games are one of the most popular forms of entertainment in the world. Played responsibly, they offer excitement, community, and the thrill of possibility. Played without boundaries, they can become a source of stress and financial pressure.
                </p>
                <p>
                  This guide was created for AI Lottery App users who want a smarter, more organized, and more enjoyable approach to lottery entertainment — one built on discipline, not luck.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
                {[
                  {
                    value: "$100",
                    label: "AVG. MONTHLY SPEND FOR CASUAL PLAYERS",
                  },
                  {
                    value: "80%",
                    label: "OF PLAYERS STAY WITHIN THEIR BUDGET",
                  },
                  {
                    value: "1",
                    label: "SIMPLE RULE: PLAY WHAT YOU CAN LOSE",
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

              {/* Core Rule Box */}
              <div className="mt-8 md:mt-10 flex rounded-2xl overflow-hidden border border-[#C8A74B]/30">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-[10px] md:text-xs p-4 md:p-6 flex items-center justify-center text-center leading-tight w-24 md:w-32 flex-shrink-0 uppercase">
                  CORE RULE
                </div>
                <div className="bg-[#F6E7B7]/20 p-4 md:p-6 text-xs md:text-sm text-gray-800 flex-grow leading-relaxed italic">
                  Never play with money that is budgeted for rent, groceries, utilities, or savings. Lottery entertainment money is money you would otherwise spend on dining out, movies, or hobbies — not essentials.
                </div>
              </div>
            </div>

            {/* Section 1: Set a Budget */}
            <div
              ref={budgetRef}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  1
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  SET A BUDGET
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8">
                  Know Your Number Before You Play
                </h4>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  The single most important responsible play habit is setting a budget before you buy your first ticket. Not while you're at the store. Not after you check the jackpot size. Before.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      num: "1",
                      title: "DECIDE YOUR MONTHLY AMOUNT",
                      desc: "Choose a fixed dollar amount you're comfortable spending on lottery entertainment each month. This should feel like discretionary spending — something you'd enjoy even if you won nothing."
                    },
                    {
                      num: "2",
                      title: "DIVIDE IT ACROSS DRAWS",
                      desc: "If your budget is $40/month and there are 8 draws, that's $5 per draw. Knowing your per-draw number prevents overspending on big-jackpot weeks when emotions run high."
                    },
                    {
                      num: "3",
                      title: "STOP WHEN IT'S GONE",
                      desc: "When you've spent your monthly allocation, stop — even if the jackpot is $500 million. The discipline to stop is what separates entertainment from a problem."
                    },
                    {
                      num: "4",
                      title: "NEVER BORROW TO PLAY",
                      desc: "If you're considering borrowing money, using a credit card, or dipping into savings to buy tickets, that's a clear sign to stop and reassess your relationship with the game."
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

                {/* Budget Tip Box */}
                <div className="mt-8 flex rounded-xl overflow-hidden border border-[#C8A74B]/30">
                  <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-xs p-4 flex items-center justify-center text-center leading-tight w-24 flex-shrink-0 uppercase tracking-widest">
                    BUDGET TIP
                  </div>
                  <div className="bg-[#F6E7B7]/20 p-4 text-sm text-gray-800 flex-grow">
                    Write your monthly lottery budget in your phone notes or budgeting app alongside your other entertainment expenses. Treating it like any other hobby budget keeps it in perspective.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Emotional Discipline */}
            <div
              ref={emotionRef}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  2
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  EMOTIONAL DISCIPLINE
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8">
                  Don't Let Emotions Drive Your Play
                </h4>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  Two emotions drive most irresponsible lottery spending: excitement and desperation. A giant jackpot announcement creates excitement that feels like urgency. A losing streak creates desperation that feels like momentum. Neither is real — but both are powerful.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Don't Chase Losses",
                      desc: "The lottery is a form of entertainment with a small chance of a very large reward. Budget for it the same way you budget for movies, sports, or dining out — money you're happy to spend regardless of the outcome."
                    },
                    {
                      title: "Don't Overspend on Big Jackpots",
                      desc: "Decide your weekly or monthly lottery budget before you play — not while you're at the counter. Once that amount is spent, stop. Never use bill money, savings, or borrowed funds for lottery tickets."
                    },
                    {
                      title: "Take Breaks When Needed",
                      desc: "If you find yourself thinking about the lottery more than feels healthy, or spending more than your budget allows, take a week — or a month — off entirely. The game will still be there when you return."
                    },
                    {
                      title: "Play Smarter, Not More",
                      desc: "Organization and discipline matter more than volume. Using AI Lottery App's tools to play thoughtfully with consistent, budgeted picks is a better approach than impulsive high-volume buying."
                    }
                  ].map((card, idx) => (
                    <div key={idx} className="border border-[#C8A74B]/20 rounded-2xl overflow-hidden flex flex-col shadow-sm">
                      <div className="bg-[#143D2E] px-6 py-3 flex items-center gap-3">
                        <Brain className="text-[#C8A74B]" size={18} />
                        <span className="text-[#F6E7B7] font-bold uppercase text-xs tracking-widest">{card.title}</span>
                      </div>
                      <div className="bg-white p-6 text-gray-700 text-sm leading-relaxed flex-grow">
                        {card.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Healthy Habits */}
            <div
              ref={habitsRef}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  3
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  HEALTHY HABITS
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8">
                  Building a Sustainable Play Routine
                </h4>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  The most satisfied lottery players treat it like any other hobby: scheduled, budgeted, and kept in perspective alongside everything else in their lives. Here's what that looks like in practice.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Calendar className="text-[#C8A74B]" size={24} />,
                      title: "Play on a Schedule",
                      desc: "Pick your numbers once a week or once per draw cycle — not every time you walk past a lottery counter. A consistent routine prevents impulse purchases and keeps spending predictable."
                    },
                    {
                      icon: <Heart className="text-[#C8A74B]" size={24} />,
                      title: "Entertainment First, Always",
                      desc: "The moment you start viewing lottery winnings as expected income — or counting on a jackpot to solve a financial problem — it's time to step back. Lottery is a game. It cannot be a financial plan."
                    },
                    {
                      icon: <MessageCircle className="text-[#C8A74B]" size={24} />,
                      title: "Talk About It Openly",
                      desc: "Healthy lottery play is something you can talk about freely. If you find yourself hiding how much you spend from a partner or family member, that's an important signal to reassess."
                    },
                    {
                      icon: <LifeBuoy className="text-[#C8A74B]" size={24} />,
                      title: "Know When to Seek Help",
                      desc: "If gambling is affecting your finances, relationships, or mental health, the National Problem Gambling Helpline (1-800-522-4700) provides free, confidential support 24/7."
                    }
                  ].map((card, idx) => (
                    <div key={idx} className="bg-[#143D2E] border border-[#C8A74B]/20 rounded-2xl overflow-hidden flex flex-col shadow-lg">
                      <div className="p-6 flex items-center gap-4 border-b border-white/5">
                        <div className="bg-white/10 p-3 rounded-xl border border-white/5">
                          {card.icon}
                        </div>
                        <h5 className="font-bold text-[#F6E7B7] uppercase text-sm tracking-wide">{card.title}</h5>
                      </div>
                      <div className="p-6 text-white/70 text-sm leading-relaxed flex-grow">
                        {card.desc}
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

export default ResponsiblePlayPage;