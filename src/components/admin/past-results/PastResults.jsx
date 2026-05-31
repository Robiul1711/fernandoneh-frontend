import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BarChart3,
  ChevronDown,
  CalendarDays,
  X,
  Filter,
} from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/style.css";

// Import assets
import pattern from "@/assets/images/pattern.png";
import useClient from "@/hooks/useClient";

/* -------------------------------------------------------------------------- */
/*  Inline calendar popover styles (scoped to .rdp-dark-theme)                */
/* -------------------------------------------------------------------------- */
const calendarStyles = `
  .rdp-dark-theme {
    --rdp-accent-color: #E8AC43;
    --rdp-background-color: #1a1a1a;
    font-family: inherit;
  }
  .rdp-dark-theme .rdp-root {
    background: #161616;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 16px;
    color: #fff;
  }
  .rdp-dark-theme .rdp-day_button {
    color: #d1d5db;
    border-radius: 8px;
  }
  .rdp-dark-theme .rdp-day_button:hover {
    background: rgba(232,172,67,0.15);
    color: #E8AC43;
  }
  .rdp-dark-theme .rdp-selected .rdp-day_button {
    background: #E8AC43;
    color: #111;
    font-weight: 700;
  }
  .rdp-dark-theme .rdp-range_start .rdp-day_button,
  .rdp-dark-theme .rdp-range_end .rdp-day_button {
    background: #E8AC43 !important;
    color: #111 !important;
    font-weight: 700;
  }
  .rdp-dark-theme .rdp-range_middle .rdp-day_button {
    background: rgba(232,172,67,0.18);
    color: #E8AC43;
  }
  .rdp-dark-theme .rdp-nav button {
    color: #E8AC43;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .rdp-dark-theme .rdp-nav button:hover {
    background: rgba(232,172,67,0.15);
    border-radius: 8px;
  }
  .rdp-dark-theme .rdp-month_caption {
    color: #fff;
    font-weight: 600;
    font-size: 0.9rem;
  }
  .rdp-dark-theme .rdp-weekday {
    color: #6b7280;
    font-size: 0.72rem;
    font-weight: 600;
  }
  .rdp-dark-theme .rdp-outside .rdp-day_button {
    color: #3f3f3f;
  }
  .rdp-dark-theme .rdp-today:not(.rdp-selected) .rdp-day_button {
    border: 1px solid #E8AC43;
    color: #E8AC43;
  }
`;

/* -------------------------------------------------------------------------- */
/*  DateRangePicker component                                                  */
/* -------------------------------------------------------------------------- */
const DateRangePicker = ({ startDate, endDate, onRangeChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const range = {
    from: startDate ? new Date(startDate) : undefined,
    to: endDate ? new Date(endDate) : undefined,
  };

  const handleSelect = (selected) => {
    const from = selected?.from ? format(selected.from, "yyyy-MM-dd") : null;
    const to = selected?.to ? format(selected.to, "yyyy-MM-dd") : null;
    onRangeChange(from, to);
    if (from && to) setOpen(false);
  };

  const label =
    startDate && endDate
      ? `${startDate}  →  ${endDate}`
      : startDate
      ? `From ${startDate}`
      : "Select date range";

  const handleClear = (e) => {
    e.stopPropagation();
    onRangeChange(null, null);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 bg-[#111111] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-white hover:border-[#E8AC43]/50 transition-all min-w-[230px] text-left"
      >
        <CalendarDays
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#E8AC43]"
        />
        <span className={startDate ? "text-white" : "text-[#6b7280]"}>
          {label}
        </span>
        {startDate && (
          <X
            size={14}
            className="ml-auto text-[#6b7280] hover:text-white transition-colors"
            onClick={handleClear}
          />
        )}
        {!startDate && (
          <ChevronDown
            size={14}
            className="ml-auto text-[#6b7280]"
          />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-[calc(100%+8px)] z-50 rdp-dark-theme"
          >
            <DayPicker
              mode="range"
              selected={range}
              onSelect={handleSelect}
              numberOfMonths={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  PastResultCard                                                             */
/* -------------------------------------------------------------------------- */
const PastResultCard = ({ logo, date, numbers, specialNumber, jackpot, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-[24px] p-6 group hover:border-[#E8AC43]/20 transition-all duration-300"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6 h-12 flex items-center justify-center">
          <img
            src={logo}
            alt="Lottery Logo"
            className="h-full w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-6" />

        {/* Date */}
        <div className="flex items-center gap-2 text-[#A1A1A1] mb-4">
          <CalendarDays size={16} className="text-[#E8AC43]" />
          <span className="text-xs font-medium tracking-wide">{date}</span>
        </div>

        {/* Jackpot */}
        {jackpot && (
          <div className="mb-5 px-3 py-1 bg-[#E8AC43]/10 border border-[#E8AC43]/20 rounded-full">
            <span className="text-[#E8AC43] text-xs font-bold tracking-wide">
              {jackpot}
            </span>
          </div>
        )}

        {/* Numbers */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {numbers.map((num, i) => (
            <div
              key={i}
              className="w-9 h-9 flex items-center justify-center text-sm font-bold rounded-full bg-[#E8EBEE] text-[#111111] shadow-[inset_4.032px_4.032px_9.408px_rgba(136,150,163,0.58),inset_-4.032px_-4.032px_9.408px_#FFF]"
            >
              {num < 10 ? `0${num}` : num}
            </div>
          ))}
          {specialNumber != null && (
            <div className="w-9 h-9 flex items-center justify-center text-sm font-bold rounded-full bg-[#E93737] text-white shadow-[inset_0_5.376px_5.376px_rgba(255,248,248,0.51)]">
              {String(specialNumber).padStart(2, "0")}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*  PastResults (main)                                                        */
/* -------------------------------------------------------------------------- */
const PastResults = () => {
  const [selectedGameId, setSelectedGameId] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Inject scoped calendar CSS once
  useEffect(() => {
    const styleId = "rdp-dark-theme-styles";
    if (!document.getElementById(styleId)) {
      const tag = document.createElement("style");
      tag.id = styleId;
      tag.textContent = calendarStyles;
      document.head.appendChild(tag);
    }
  }, []);

  // Fetch lottery games list
  const { data: gamesData } = useClient({
    queryKey: ["lotterygames"],
    url: "/lotteries",
    isPrivate: true,
  });

  // Build params for results API
  const params = {};
  if (selectedGameId) params.lottery_id = selectedGameId;
  if (startDate) params.start_date = startDate;
  if (endDate) params.end_date = endDate;

  // Fetch past results (re-fetches automatically when params change)
  const { data: lotteryResults, isLoading, isError } = useClient({
    queryKey: ["lotteryresults"],
    url: "/lotteries/results",
    params,
    isPrivate: true,
  });

  const results = lotteryResults?.data?.data ?? [];

  const handleRangeChange = (from, to) => {
    setStartDate(from);
    setEndDate(to);
  };

  return (
    <div className="p-4 md:p-6 space-y-8 bg-[#0D0D0D] min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Left – title + game selector */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#E8AC43]">
            <BarChart3 size={24} />
            <h1 className="text-xl md:text-2xl font-bold uppercase tracking-tight">
              Past Results
            </h1>
          </div>

          <div className="space-y-2">
            <label className="text-[#A1A1A1] text-[10px] font-bold uppercase tracking-widest ml-1">
              Choose a lottery game
            </label>
            <div className="relative group min-w-[240px]">
              <select
                value={selectedGameId}
                onChange={(e) => setSelectedGameId(e.target.value)}
                className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-medium appearance-none focus:outline-none focus:border-[#E8AC43]/50 transition-all cursor-pointer"
              >
                <option value="">All Games</option>
                {gamesData?.data?.map((game) => (
                  <option key={game.id} value={game.id}>
                    {game.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A1A1] pointer-events-none group-focus-within:rotate-180 transition-transform"
                size={16}
              />
            </div>
          </div>
        </div>

        {/* Right – date range picker */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[#A1A1A1] text-xs font-semibold uppercase tracking-wider">
            <Filter size={14} className="text-[#E8AC43]" />
            Filter by date
          </div>
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onRangeChange={handleRangeChange}
          />
        </div>
      </div>

      {/* Active filters badge */}
      {(startDate || endDate || selectedGameId) && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 flex-wrap"
        >
          <span className="text-[#6b7280] text-xs">Active filters:</span>
          {selectedGameId && (
            <span className="px-3 py-1 bg-[#E8AC43]/10 border border-[#E8AC43]/20 rounded-full text-[#E8AC43] text-xs font-semibold">
              {gamesData?.data?.find((g) => String(g.id) === String(selectedGameId))?.name ?? "Game"}
            </span>
          )}
          {startDate && (
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white text-xs font-semibold">
              From: {startDate}
            </span>
          )}
          {endDate && (
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white text-xs font-semibold">
              To: {endDate}
            </span>
          )}
          <button
            onClick={() => {
              setStartDate(null);
              setEndDate(null);
              setSelectedGameId("");
            }}
            className="px-3 py-1 bg-[#E93737]/10 border border-[#E93737]/20 rounded-full text-[#E93737] text-xs font-semibold hover:bg-[#E93737]/20 transition-colors"
          >
            Clear all
          </button>
        </motion.div>
      )}

      {/* Grid Section */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-white/5 rounded-[24px] p-6 animate-pulse h-52"
            />
          ))}
        </div>
      ) : results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-[#6b7280]">
          <CalendarDays size={40} className="mb-4 text-[#E8AC43]/40" />
          <p className="text-sm">No results found for the selected filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {results.map((result, idx) => (
            <PastResultCard
              key={result.id}
              index={idx}
              logo={result.logo_url}
              date={result.draw_date}
              numbers={result.numbers}
              specialNumber={result.special_number}
              jackpot={result.jackpot}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PastResults;
