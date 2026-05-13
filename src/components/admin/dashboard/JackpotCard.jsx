import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Pin } from 'lucide-react';
import pattern from '@/assets/images/pattern.png';

const JackpotCard = ({ title, logo, winningNumbers, jackpot, drawCloses, nextDrawing, timer: initialTimer }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const hours = parseInt(initialTimer.find(t => t.label === "HRS")?.value || 0);
    const mins = parseInt(initialTimer.find(t => t.label === "MINS")?.value || 0);
    const secs = parseInt(initialTimer.find(t => t.label === "SECS")?.value || 0);
    return hours * 3600 + mins * 60 + secs;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [
      { label: "HRS", value: hrs.toString().padStart(2, '0') },
      { label: "MINS", value: mins.toString().padStart(2, '0') },
      { label: "SECS", value: secs.toString().padStart(2, '0') }
    ];
  };

  const currentTimer = formatTime(timeLeft);

  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-[24px] md:rounded-[32px] p-6 md:p-8 transition-all duration-300 group hover:border-[#E8AC43]/20"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Top Row: Logo and Winning Numbers */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10 gap-4 md:gap-6">
        <div className="flex-shrink-0">
          <img src={logo} alt={title} className="h-10 md:h-12 w-auto" />
        </div>

        <div className="flex flex-col items-start md:items-end w-full md:w-auto">
          <div className="flex items-center gap-2 mb-2 w-full justify-between md:justify-end">
             <div className="flex gap-1.5 md:gap-2">
              {winningNumbers.map((num, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className={`w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-[10px] md:text-sm font-bold ${
                    i === winningNumbers.length - 1
                      ? 'rounded-full border border-[rgba(34,0,0,0)] bg-[#E93737] text-white shadow-[inset_0_5.376px_5.376px_rgba(255,248,248,0.51)]'
                      : 'rounded-full border-[2px] md:border-[2.688px] border-white bg-[#E8EBEE] text-[#111111] shadow-[inset_4.032px_4.032px_9.408px_rgba(136,150,163,0.58),inset_-4.032px_-4.032px_9.408px_#FFF]'
                  }`}
                >
                  {num < 10 ? `0${num}` : num}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Pin size={14} className="text-[#E8AC43] fill-[#E8AC43] md:size-4" />
            <span className="text-[10px] md:text-sm text-Primary font-medium">Winning Numbers</span>
            <span className="text-[10px] md:text-sm ml-1 text-[#A1A1A1]">Mon, 04/27/26</span>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Jackpot, Draw Info, Timer */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
        {/* Estimated Jackpot */}
        <div className="md:col-span-3">
          <p className="text-Primary text-[10px] md:text-sm font-medium uppercase tracking-wider mb-1 md:mb-2">Estimated Jackpot</p>
          <div className="flex flex-col">
            <span className="bg-[linear-gradient(90deg,_#F2DC94_0%,_#FFF2D7_43%,_#FFC15D_100%)] bg-clip-text text-transparent text-4xl md:text-6xl font-bold leading-tight">
              ${jackpot}
            </span>        
            <span className="text-Secondary text-lg md:text-xl font-black uppercase tracking-widest -mt-1">Million</span>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block md:col-span-1 border-l border-Primary h-24 self-center ml-4"></div>

        {/* Draw Info */}
        <div className="md:col-span-3 flex flex-row md:flex-col gap-8 md:gap-5">
          <div>
            <p className="text-Primary text-xs md:text-base font-bold mb-0.5 md:mb-1">Draw Closes</p>
            <p className="text-[#A1A1A1] text-[10px] md:text-xs font-medium">{drawCloses}</p>
          </div>
          <div>
            <p className="text-Primary text-xs md:text-base font-bold mb-0.5 md:mb-1">Next Drawing</p>
            <p className="text-[#A1A1A1] text-[10px] md:text-xs font-medium">{nextDrawing}</p>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block md:col-span-1 border-l border-Primary h-24 self-center ml-4"></div>

        {/* Countdown Timer */}
        <div className="md:col-span-4 flex gap-2 md:gap-3">
          {currentTimer.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex-1 p-2 md:aspect-square flex flex-col items-center justify-center bg-[#161616] border border-[#E8AC43]/20 rounded-xl md:rounded-2xl group-hover:border-[#E8AC43]/40 transition-all"
            >
              <span className="text-[#E8AC43] text-2xl font-bold mb-0.5">{t.value}</span>
              <span className="text-[#E8AC43]/60 text-[10px] font-black tracking-widest">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default JackpotCard;

