import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MoreVertical, Pin, Bookmark } from "lucide-react";
import pattern from "@/assets/images/pattern.png";

const LotteryGameCard = ({
  logo,
  title,
  winningNumbers,
  date,
  jackpot,
  drawCloses,
  nextDrawing,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-xl md:rounded-3xl p-4  group hover:border-[#E8AC43]/20 transition-all duration-300"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Row: Logo and Winning Numbers */}
      <div className="flex justify-between items-start mb-6">
        <img
          src={logo}
          alt={title}
          className="h-10 md:h-16 w-auto object-contain"
        />
        <div className="flex gap-4 ">
          <div className="flex flex-col">
            <div className="flex gap-1.5 mb-2">
              {winningNumbers.map((num, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 flex items-center justify-center text-[10px] font-bold ${
                    i === winningNumbers.length - 1
                      ? "rounded-[36.289px] bg-[#E93737] text-white shadow-[inset_0_5.376px_5.376px_rgba(255,248,248,0.51)]"
                      : "rounded-[134.403px] border-[1.5px] border-white bg-[#E8EBEE] text-[#111111] shadow-[inset_4.032px_4.032px_9.408px_rgba(136,150,163,0.58),inset_-4.032px_-4.032px_9.408px_#FFF]"
                  }`}
                >
                  {num < 10 ? `0${num}` : num}
                </div>
              ))}
            </div>
            <p className="text-[#A1A1A1] text-[9px] font-medium">
              Winning Numbers <span className="ml-1">{date}</span>
            </p>
          </div>
          {/* Menu Toggle */}
          <div className="">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 text-[#A1A1A1] hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              <MoreVertical size={18} />
            </button>

            <AnimatePresence>
              {menuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setMenuOpen(false)}
                  ></div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl z-20 overflow-hidden"
                  >
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-xs text-[#A1A1A1] hover:text-white hover:bg-white/5 transition-all text-left">
                      <Pin size={14} />
                      <span>Pin the lottery</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-xs text-[#A1A1A1] hover:text-white hover:bg-white/5 transition-all text-left border-t border-white/5">
                      <Bookmark size={14} />
                      <span>Save lottery</span>
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/5 mb-6"></div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[#E8AC43] text-[12px] font-medium uppercase tracking-wider mb-1">
            Estimated Jackpot
          </p>
          <div className="flex flex-col">
            <span className="bg-[linear-gradient(90deg,_#F2DC94_0%,_#FFF2D7_43%,_#FFC15D_100%)] bg-clip-text text-transparent text-3xl font-bold leading-tight">
              ${jackpot}
            </span>
            <span className="text-[#E8AC43] text-[10px] font-black uppercase tracking-widest leading-none -mt-1">
              Million
            </span>
          </div>
        </div>

        <div className="border-l border-[#E8AC43]/20 pl-4 flex flex-col justify-center gap-3">
          <div>
            <p className="text-[#E8AC43] text-[9px] font-bold mb-0.5">
              Draw Closes
            </p>
            <p className="text-[#A1A1A1] text-[8px] font-medium leading-tight">
              {drawCloses}
            </p>
          </div>
          <div>
            <p className="text-[#E8AC43] text-[9px] font-bold mb-0.5">
              Next Drawing
            </p>
            <p className="text-[#A1A1A1] text-[8px] font-medium leading-tight">
              {nextDrawing}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LotteryGameCard;
