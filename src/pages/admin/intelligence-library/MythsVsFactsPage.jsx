import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  X,
  Check,
  Zap,
  RotateCcw,
  BarChart3,
  ShieldCheck,
  Film,
  Wallet,
  Target,
  Hash,
} from "lucide-react";
import librarybg from "@/assets/images/librarybg.png";

const MythsVsFactsPage = () => {
  const navigate = useNavigate();

  const myth1Ref = useRef(null);
  const myth2Ref = useRef(null);
  const responsibleRef = useRef(null);

  const quickLinks = [
    { name: "MYTH: QUICK PICKS NEVER WIN", ref: myth1Ref },
    { name: "PATTERNS, STREAKS & MORE TICKETS", ref: myth2Ref },
    { name: "RESPONSIBLE PLAY", ref: responsibleRef },
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
            LOTTERY MYTHS VS FACTS
          </h1>
          <h2 className="text-base md:text-xl text-white font-medium mb-4 uppercase">
            SMARTER PLAY THROUGH REALITY
          </h2>
          <p className="text-[#F6E7B7]/60 text-[10px] md:text-xs tracking-widest uppercase font-semibold">
            DEBUNK MYTHS • UNDERSTAND ODDS • PLAY RESPONSIBLY
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
            {/* About This Guide Section */}
            <div className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl p-5 md:p-10 mb-8 md:mb-12 shadow-xl">
              <h3 className="text-xl md:text-4xl font-bold text-[#C8A74B] mb-4 md:mb-6">
                About This Guide
              </h3>
              <div className="w-full h-px bg-[#C8A74B]/20 mb-6 md:mb-8"></div>

              <div className="space-y-4 md:space-y-6 text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl">
                <p>
                  Lottery players are surrounded by myths — passed down through family, friends, and the internet. Some seem logical. Most are simply wrong. This guide was created for AI Lottery App users who want a smarter, cleaner, and more fact-based approach to lottery entertainment.
                </p>
                <p>
                  Understanding the difference between myth and reality won't change your odds, but it will change how you play — and how you feel about the game.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
                {[
                  {
                    value: "70%",
                    label: "OF JACKPOTS WON WITH QUICK PICKS",
                  },
                  {
                    value: "1 in 292M",
                    label: "POWERBALL JACKPOT ODDS — EVERY DRAW",
                  },
                  {
                    value: "100%",
                    label: "OF DRAWS ARE INDEPENDENT EVENTS",
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

              {/* Remember Box */}
              <div className="mt-8 md:mt-10 flex rounded-2xl overflow-hidden border border-[#C8A74B]/30">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-[10px] md:text-xs p-4 md:p-6 flex items-center justify-center text-center leading-tight w-24 md:w-32 flex-shrink-0 uppercase">
                  REMEMBER
                </div>
                <div className="bg-[#F6E7B7]/20 p-4 md:p-6 text-xs md:text-sm text-gray-800 flex-grow leading-relaxed italic">
                  Every lottery draw is a completely independent random event. What happened last week, last month, or last year has zero mathematical effect on tonight's draw.
                </div>
              </div>
            </div>

            {/* Section 1: Quick Picks & Lucky Numbers */}
            <div
              ref={myth1Ref}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  1
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  QUICK PICKS & LUCKY NUMBERS
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8">
                  The Numbers Don't Care How You Picked Them
                </h4>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <div className="space-y-8">
                  {[
                    {
                      myth: "Quick Picks Never Win",
                      fact: "Fact: Most major jackpots are won with Quick Picks",
                      content: "Studies of major lottery jackpots consistently show that the majority — often 70-80% — are won by players who used Quick Picks. This makes sense statistically: most tickets sold are Quick Picks, so most winners naturally come from that pool. Your machine-generated numbers have exactly the same probability of winning as any hand-chosen combination."
                    },
                    {
                      myth: "My Lucky Numbers Are More Likely to Win",
                      fact: "Fact: All number combinations have identical odds",
                      content: "1-2-3-4-5-6 has the exact same probability as any other combination. The lottery drawing machine has no awareness of what numbers feel significant to you. Birthdays, anniversaries, and \"lucky\" numbers are perfectly fine to play — just know that they carry no statistical advantage whatsoever. The only practical downside: popular numbers mean more split jackpots if you do win."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-[#C8A74B]/20 rounded-2xl overflow-hidden shadow-sm">
                      <div className="bg-[#8B0000] p-4 flex items-center gap-3">
                        <X className="text-white" size={20} />
                        <span className="text-white font-bold uppercase text-sm tracking-wide">MYTH: {item.myth}</span>
                      </div>
                      <div className="bg-[#143D2E] p-4 flex items-center gap-3 border-y border-white/10">
                        <Check className="text-[#83ED59]" size={20} />
                        <span className="text-[#F6E7B7] font-bold text-sm tracking-wide uppercase">{item.fact}</span>
                      </div>
                      <div className="bg-white p-6 text-gray-700 text-sm leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Smart Play Box */}
                <div className="mt-8 flex rounded-xl overflow-hidden border border-[#C8A74B]/30">
                  <div className="bg-[#C8A74B] text-[#143D2E] font-bold text-xs p-4 flex items-center justify-center text-center leading-tight w-24 flex-shrink-0 uppercase">
                    SMART PLAY
                  </div>
                  <div className="bg-[#F6E7B7]/20 p-4 text-sm text-gray-800 flex-grow">
                    If you enjoy choosing your own numbers, great — keep doing it. If you use Quick Picks, equally great. Neither method changes the odds. Focus your energy on playing within your budget, not on which numbers to pick.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Patterns, Streaks & More Tickets */}
            <div
              ref={myth2Ref}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  2
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  PATTERNS, STREAKS & MORE TICKETS
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8">
                  Understanding Randomness
                </h4>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <div className="space-y-6">
                  {[
                    {
                      myth: "Overdue Numbers Are \"Due\" to Hit",
                      fact: "Fact: Past results have zero influence on future draws",
                      content: "This is the Gambler's Fallacy — one of the most common errors in probability thinking. If the number 17 hasn't appeared in 30 draws, it is NOT more likely to appear in draw 31. Each draw resets completely. The lottery balls have no memory. Tracking \"overdue\" numbers can be an entertaining hobby, but it carries no predictive power."
                    },
                    {
                      myth: "More Tickets Guarantee a Win",
                      fact: "Fact: More tickets improve odds slightly — never guarantee anything",
                      content: "Buying 10 tickets instead of 1 improves your odds by 10x — which sounds great until you realize 10x a 1-in-292 million chance is still a 1-in-29-million chance. You are spending 10x more money for an outcome that remains extraordinarily unlikely. Buying more tickets is a personal entertainment choice, not a winning strategy."
                    },
                    {
                      myth: "Patterns Never Matter",
                      fact: "Fact: Patterns are entertainment tools — not prediction tools",
                      content: "Some players genuinely enjoy studying frequency charts, hot/cold numbers, and draw history. AI Lottery App is built for exactly that kind of analytical play. Studying trends makes the game more engaging and organized — just remember that no pattern can predict a random outcome. Use data for fun and structure, not as a guarantee."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-[#C8A74B]/20 rounded-2xl overflow-hidden shadow-sm">
                      <div className="bg-[#8B0000] p-4 flex items-center gap-3">
                        <X className="text-white" size={20} />
                        <span className="text-white font-bold uppercase text-sm tracking-wide">MYTH: {item.myth}</span>
                      </div>
                      <div className="bg-[#143D2E] p-4 flex items-center gap-3 border-y border-white/10">
                        <Check className="text-[#83ED59]" size={20} />
                        <span className="text-[#F6E7B7] font-bold text-sm tracking-wide uppercase">{item.fact}</span>
                      </div>
                      <div className="bg-white p-6 text-gray-700 text-sm leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Responsible Play */}
            <div
              ref={responsibleRef}
              className="bg-white/80 backdrop-blur-md border border-[#C8A74B]/20 rounded-3xl overflow-hidden shadow-xl mb-12 scroll-mt-6"
            >
              <div className="bg-[#143D2E] flex">
                <div className="bg-[#C8A74B] text-[#143D2E] font-bold px-6 py-2 flex items-center justify-center">
                  3
                </div>
                <div className="text-[#F6E7B7] text-xs font-bold px-6 py-2 uppercase tracking-widest flex items-center">
                  RESPONSIBLE PLAY
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h4 className="text-3xl md:text-5xl font-bold text-[#C8A74B] mb-8">
                  Play Smart. Stay in Control.
                </h4>
                <div className="w-full h-px bg-[#C8A74B]/20 mb-8"></div>

                <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  Now that you know the myths, here's what actually matters: how you approach the game. Responsible play isn't about playing less — it's about playing smarter.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Film className="text-[#C8A74B]" size={24} />,
                      title: "Treat It as Entertainment",
                      desc: "The lottery is a form of entertainment with a small chance of a very large reward. Budget for it the same way you budget for movies, sports, or dining out — money you're happy to spend regardless of the outcome."
                    },
                    {
                      icon: <Wallet className="text-[#C8A74B]" size={24} />,
                      title: "Set a Hard Budget",
                      desc: "Decide your weekly or monthly lottery budget before you play — not while you're at the counter. Once that amount is spent, stop. Never use bill money, savings, or borrowed funds for lottery tickets."
                    },
                    {
                      icon: <RotateCcw className="text-[#C8A74B]" size={24} />,
                      title: "Don't Chase Losses",
                      desc: "If you didn't win this week, next week's ticket is not \"payback.\" Each draw is independent. Chasing losses leads to overspending and frustration. Stick to your budget no matter what happened last time."
                    },
                    {
                      icon: <BarChart3 className="text-[#C8A74B]" size={24} />,
                      title: "Use Data for Fun, Not Faith",
                      desc: "AI Lottery App's trend tools, hot/cold numbers, and historical analysis are designed to make your play more organized and enjoyable — not to guarantee outcomes. Use them to play smarter, not to predict the unpredictable."
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

export default MythsVsFactsPage;