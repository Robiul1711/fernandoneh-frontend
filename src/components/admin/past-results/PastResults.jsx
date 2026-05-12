import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  ChevronDown, 
  Calendar, 
  CalendarDays,
  Filter
} from 'lucide-react';

// Import assets
import PowerballLogo from '@/assets/images/powerball.png';
import pattern from '@/assets/images/pattern.png';

const PastResultCard = ({ logo, date, numbers, multiplier, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-[24px] p-6 group hover:border-[#E8AC43]/20 transition-all duration-300"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6 h-12 flex items-center justify-center">
          <img src={logo} alt="Lottery Logo" className="h-full w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-6"></div>

        {/* Date */}
        <div className="flex items-center gap-2 text-[#A1A1A1] mb-6">
          <CalendarDays size={16} className="text-[#E8AC43]" />
          <span className="text-xs font-medium tracking-wide">{date}</span>
        </div>

        {/* Numbers */}
        <div className="flex items-center gap-2">
          {numbers.map((num, i) => (
            <div
              key={i}
              className={`w-9 h-9 flex items-center justify-center text-sm font-bold ${
                i === numbers.length - 1
                  ? 'rounded-full bg-[#E93737] text-white shadow-[inset_0_5.376px_5.376px_rgba(255,248,248,0.51)]'
                  : 'rounded-full bg-[#E8EBEE] text-[#111111] shadow-[inset_4.032px_4.032px_9.408px_rgba(136,150,163,0.58),inset_-4.032px_-4.032px_9.408px_#FFF]'
              }`}
            >
              {num < 10 ? `0${num}` : num}
            </div>
          ))}
          <span className="text-[#E8AC43] text-sm font-bold ml-1">{multiplier}</span>
        </div>
      </div>
    </motion.div>
  );
};

const PastResults = () => {
  const [selectedGame, setSelectedGame] = useState('Power Ball');
  const [timeFilter, setTimeFilter] = useState('This week');

  const results = [
    { date: "Mon, Apr 23, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
    { date: "Mon, Apr 24, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
    { date: "Mon, Apr 25, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
    { date: "Mon, Apr 27, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
    { date: "Mon, Apr 27, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
    { date: "Mon, Apr 27, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
    { date: "Mon, Apr 27, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
    { date: "Mon, Apr 27, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
    { date: "Mon, Apr 27, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
    { date: "Mon, Apr 27, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
    { date: "Mon, Apr 27, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
    { date: "Mon, Apr 27, 2026", numbers: [1, 2, 4, 6, 8, 6], multiplier: "3x" },
  ];

  return (
    <div className="p-4 md:p-6 space-y-8 bg-[#0D0D0D] min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#E8AC43]">
            <BarChart3 size={24} />
            <h1 className="text-xl md:text-2xl font-bold uppercase tracking-tight">Past Results</h1>
          </div>
          
          <div className="space-y-2">
            <label className="text-[#A1A1A1] text-[10px] font-bold uppercase tracking-widest ml-1">Choose a lottery game</label>
            <div className="relative group min-w-[240px]">
              <select 
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
                className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-medium appearance-none focus:outline-none focus:border-[#E8AC43]/50 transition-all cursor-pointer"
              >
                <option>Power Ball</option>
                <option>Mega Millions</option>
                <option>Florida Lottery</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A1A1] pointer-events-none group-focus-within:rotate-180 transition-transform" size={16} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group">
            <select 
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="bg-[#161616] border border-white/10 rounded-xl pl-10 pr-10 py-3 text-white text-sm font-medium appearance-none focus:outline-none focus:border-[#E8AC43]/50 transition-all cursor-pointer"
            >
              <option>This week</option>
              <option>This month</option>
              <option>Past 3 months</option>
            </select>
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E8AC43]" size={16} />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A1A1] pointer-events-none group-focus-within:rotate-180 transition-transform" size={16} />
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {results.map((result, idx) => (
          <PastResultCard 
            key={idx}
            index={idx}
            logo={PowerballLogo}
            {...result}
          />
        ))}
      </div>
    </div>
  );
};

export default PastResults;
