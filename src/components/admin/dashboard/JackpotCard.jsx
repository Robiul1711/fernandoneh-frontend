import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Pin } from 'lucide-react';
import pattern from '@/assets/images/pattern.png';

const calculateTimeLeft = (targetDate) => {
  if (!targetDate) return 0;
  const parsed = new Date(targetDate);
  if (isNaN(parsed.getTime())) return 0;
  const difference = parsed.getTime() - Date.now();
  return difference > 0 ? Math.floor(difference / 1000) : 0;
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "2-digit",
    day: "2-digit",
    year: "2-digit"
  });
};

const formatDateTime = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
};

const formatJackpotDisplay = (value) => {
  if (value === undefined || value === null) return "$0";
  
  const strValue = String(value).trim();
  
  // Remove duplicate dollar signs at the start
  let cleanValue = strValue.replace(/^\$+/, "");
  
  // If it already ends with "Million" or "M" (e.g. "87 Million", "87M", "87.5 Million")
  if (cleanValue.toLowerCase().includes("million")) {
    const match = cleanValue.match(/[\d.]+/);
    if (match) {
      return `$${match[0]}`;
    }
  }
  
  if (cleanValue.toLowerCase().endsWith("m")) {
    const match = cleanValue.match(/[\d.]+/);
    if (match) {
      return `$${match[0]}`;
    }
  }

  // If it's a full large number like 87000000 or 87500000
  const numValue = Number(cleanValue.replace(/,/g, ""));
  if (!isNaN(numValue) && numValue >= 1000000) {
    const millions = numValue / 1000000;
    // Format to 1 decimal place if there is a decimal part, e.g. 87.5, otherwise no decimal
    const formattedMillions = millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1);
    return `$${formattedMillions}`;
  }

  // Otherwise, if it's already a short number like 87 or 87.5
  return `$${cleanValue}`;
};

const JackpotCard = ({ 
  name, 
  title,
  logo_url, 
  logo,
  jackpot, 
  draw_closes_at, 
  drawCloses,
  next_draw_at, 
  nextDrawing,
  special_number, 
  latest_numbers,
  winningNumbers,
  multiplier,
  timer
}) => {
  const displayName = name || title;
  const displayLogo = logo_url || logo;
  const displayDrawCloses = draw_closes_at || drawCloses;
  const displayNextDrawing = next_draw_at || nextDrawing;

  let displayNumbers = latest_numbers || [];
  let displaySpecial = special_number;

  if (!latest_numbers && winningNumbers) {
    displayNumbers = winningNumbers.slice(0, -1);
    displaySpecial = winningNumbers[winningNumbers.length - 1];
  }

  const [timeLeft, setTimeLeft] = useState(() => {
    const initialSeconds = calculateTimeLeft(displayDrawCloses);
    if (initialSeconds > 0) return initialSeconds;

    if (timer && Array.isArray(timer)) {
      const hours = parseInt(timer.find(t => t.label?.toUpperCase() === "HRS" || t.label?.toUpperCase() === "HOUR" || t.label === "Hrs")?.value || 0);
      const mins = parseInt(timer.find(t => t.label?.toUpperCase() === "MINS" || t.label?.toUpperCase() === "MINUTE" || t.label === "Mins")?.value || 0);
      const secs = parseInt(timer.find(t => t.label?.toUpperCase() === "SECS" || t.label?.toUpperCase() === "SECOND" || t.label === "Secs")?.value || 0);
      return hours * 3600 + mins * 60 + secs;
    }
    return 0;
  });

  useEffect(() => {
    const initialSeconds = calculateTimeLeft(displayDrawCloses);
    if (initialSeconds > 0) {
      setTimeLeft(initialSeconds);
    }
  }, [displayDrawCloses]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
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
      className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-[20px] xl:rounded-[32px] p-4 lg:p-5 xl:p-8 transition-all duration-300 group hover:border-[#E8AC43]/20"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Top Row: Logo and Winning Numbers */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 xl:mb-10 gap-3 xl:gap-6">
        <div className="flex-shrink-0">
          <img src={displayLogo} alt={displayName} className="h-8 lg:h-10 xl:h-12 w-auto object-contain" />
        </div>

        <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
          <div className="flex items-center gap-2 mb-2 w-full justify-between lg:justify-end">
             <div className="flex gap-1.5 md:gap-2">
              {displayNumbers?.map((num, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="w-6 h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9 flex items-center justify-center text-[9px] lg:text-[10px] xl:text-sm font-bold rounded-full border-[1.5px] xl:border-[2.688px] border-white bg-[#E8EBEE] text-[#111111] shadow-[inset_4.032px_4.032px_9.408px_rgba(136,150,163,0.58),inset_-4.032px_-4.032px_9.408px_#FFF]"
                >
                  {num < 10 ? `0${num}` : num}
                </motion.div>
              ))}
              
              {displaySpecial !== undefined && displaySpecial !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (displayNumbers?.length || 0) * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="w-6 h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9 flex items-center justify-center text-[9px] lg:text-[10px] xl:text-sm font-bold rounded-full border border-[rgba(34,0,0,0)] bg-[#E93737] text-white shadow-[inset_0_5.376px_5.376px_rgba(255,248,248,0.51)]"
                >
                  {displaySpecial < 10 ? `0${displaySpecial}` : displaySpecial}
                </motion.div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Pin size={12} className="text-[#E8AC43] fill-[#E8AC43] xl:size-4" />
            <span className="text-[9px] xl:text-sm text-Primary font-medium">Winning Numbers</span>
            <span className="text-[9px] xl:text-sm ml-1 text-[#A1A1A1]">{formatDate(displayDrawCloses)}</span>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Jackpot, Draw Info, Timer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 xl:gap-8 items-end">
        {/* Estimated Jackpot */}
        <div className="lg:col-span-3">
          <p className="text-Primary text-[9px] xl:text-sm font-medium uppercase tracking-wider mb-1 xl:mb-2">Estimated Jackpot</p>
          <div className="flex flex-col">
            <span className="bg-[linear-gradient(90deg,_#F2DC94_0%,_#FFF2D7_43%,_#FFC15D_100%)] bg-clip-text text-transparent text-2xl lg:text-3xl xl:text-6xl font-bold leading-tight">
              {formatJackpotDisplay(jackpot)}
            </span>        
            <span className="text-Secondary text-sm lg:text-base xl:text-xl font-black uppercase tracking-widest -mt-0.5 xl:-mt-1">Million</span>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden lg:block lg:col-span-1 border-l border-Primary h-16 xl:h-24 self-center mx-auto"></div>

        {/* Draw Info */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4 lg:gap-3 xl:gap-5">
          <div>
            <p className="text-Primary text-[10px] xl:text-base font-bold mb-0.5 xl:mb-1">Draw Closes</p>
            <p className="text-[#A1A1A1] text-[9px] xl:text-xs font-medium">{formatDateTime(displayDrawCloses)}</p>
          </div>
          <div>
            <p className="text-Primary text-[10px] xl:text-base font-bold mb-0.5 xl:mb-1">Next Drawing</p>
            <p className="text-[#A1A1A1] text-[9px] xl:text-xs font-medium">{formatDateTime(displayNextDrawing)}</p>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden lg:block lg:col-span-1 border-l border-Primary h-16 xl:h-24 self-center mx-auto"></div>

        {/* Countdown Timer */}
        <div className="lg:col-span-4 flex gap-1.5 xl:gap-3">
          {currentTimer.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex-1 p-2  flex flex-col items-center justify-center bg-[#161616] border border-[#E8AC43]/20 rounded-lg  group-hover:border-[#E8AC43]/40 transition-all"
            >
              <span className="text-[#E8AC43] text-sm lg:text-lg xl:text-2xl font-bold mb-0.5">{t.value}</span>
              <span className="text-[#E8AC43]/60 text-[8px] xl:text-[10px] font-black tracking-widest">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default JackpotCard;

