import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bookmark, Ticket, Hash, Trash2, Pin, ChevronLeft, ChevronRight, Layers, Cpu } from 'lucide-react';

// Sub-components
import LotteryGameCard from '../lottery-games/LotteryGameCard';
import useClient from '@/hooks/useClient';
import { LotteryGameCardSkeleton } from '@/components/shared/Skeleton';

// Updated Row Component to display total_sets and mode
const SavedNumberRow = ({ lottery_name, logo_url, mode, total_sets, generated_numbers, index, created_at }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr.replace(' ', 'T')).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  };

  // Helper to format string modes like 'smart_system' into 'Smart System'
  const formatMode = (modeString) => {
    if (!modeString) return '';
    return modeString
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-[#0D0D0D] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[#E8AC43]/20 transition-all group w-full"
    >
      <div className="space-y-4 w-full md:w-auto flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between md:justify-start gap-3 w-full">
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="font-semibold text-[20px] text-white">
              {index + 1}. {lottery_name}
            </p>
            
            {/* Mode Badge */}
            <span className="inline-flex items-center gap-1 bg-[#E8AC43]/10 border border-[#E8AC43]/20 text-[#E8AC43] text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize">
              <Cpu size={12} />
              {formatMode(mode)}
            </span>

            {/* Total Sets Badge */}
            <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 text-[#A1A1A1] text-xs font-semibold px-2.5 py-0.5 rounded-full">
              <Layers size={12} />
              {total_sets} {total_sets === 1 ? 'Set' : 'Sets'}
            </span>
          </div>
          
          <span className="text-[#A1A1A1] text-xs sm:text-right md:hidden">{formatDate(created_at)}</span>
        </div>

        {/* Loop through each set inside generated_numbers array */}
        <div className="space-y-3">
          {generated_numbers?.map((set, setIdx) => (
            <div key={setIdx} className="flex flex-wrap gap-2 items-center bg-white/5 p-2 rounded-xl md:bg-transparent md:p-0">
              {set?.main_numbers?.map((num, i) => (
                <div 
                  key={i} 
                  className="w-9 h-9 rounded-full bg-[#E8EBEE] text-[#111111] flex items-center justify-center font-bold text-sm shadow-[inset_4px_4px_9px_rgba(136,150,163,0.58),inset_-4px_-4px_9px_#FFF]"
                >
                  {num < 10 ? `0${num}` : num}
                </div>
              ))}
              {/* API response shows individual "special_number" field per set */}
              {set?.special_number !== undefined && (
                <div className="w-9 h-9 rounded-full bg-[#E93737] text-white flex items-center justify-center font-bold text-sm shadow-[inset_0_5px_5px_rgba(255,248,248,0.51)]">
                  {set.special_number < 10 ? `0${set.special_number}` : set.special_number}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:flex-col items-end justify-between w-full md:w-auto gap-4 flex-shrink-0 self-stretch md:self-center">
        <span className="text-[#A1A1A1] text-xs hidden md:block">{formatDate(created_at)}</span>
        {logo_url ? (
          <img src={logo_url} alt="Lottery Logo" className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity ml-auto" />
        ) : (
          <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 text-xs ml-auto">No Img</div>
        )}
      </div>
    </motion.div>
  );
};

const MyLottery = () => {
  const [activeTab, setActiveTab] = useState('tickets'); // 'tickets' or 'numbers'
  const [ticketsPage, setTicketsPage] = useState(1);
  const [numbersPage, setNumbersPage] = useState(1);

  // 1. Saved Lotteries Query
  const { data: savedLotteries, isLoading: savedLoading } = useClient({
    queryKey: ["lotteriessaved", ticketsPage],
    url: `/lotteries/saved?page=${ticketsPage}`,
    isPrivate: true,
  });

  // 2. Saved Numbers Query
  const { data: savedPicks, isLoading: savedPicksLoading } = useClient({
    queryKey: ["lotteriessavedpicks", numbersPage],
    url: `/lotteries/picks/saved?page=${numbersPage}`,
    isPrivate: true,
  });

  const ticketsPagination = savedLotteries?.data; 
  const ticketsList = savedLotteries?.data || [];

  const numbersPagination = savedPicks?.data;
  const numbersList = savedPicks?.data?.data || [];

  return (
    <div className="p-4 md:p-6 space-y-8 bg-[#0D0D0D] min-h-screen text-white">
      {/* Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 text-[#E8AC43] mb-6"
      >
        <Bookmark size={20} className="fill-[#E8AC43]" />
        <h2 className="text-white text-xs font-bold uppercase tracking-widest">SEE ALL YOUR SAVED LOTTERIES HERE</h2>
      </motion.div>

      {/* Tabs System */}
      <div className="border-b border-white/5">
        <div className="flex gap-8 md:gap-12">
          <button 
            onClick={() => setActiveTab('tickets')}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === 'tickets' ? 'text-white' : 'text-[#A1A1A1] hover:text-white/80'
            }`}
          >
            My Saved lotteries
            {activeTab === 'tickets' && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E8AC43]" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('numbers')}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === 'numbers' ? 'text-white' : 'text-[#A1A1A1] hover:text-white/80'
            }`}
          >
            All Saved Numbers
            {activeTab === 'numbers' && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E8AC43]" />
            )}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        {activeTab === 'tickets' ? (
          <motion.div 
            key="tickets"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {savedLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <LotteryGameCardSkeleton key={i} />
                ))}
              </div>
            ) : ticketsList.length === 0 ? (
              <div className="text-center py-12 text-[#A1A1A1]">No saved lotteries found.</div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ticketsList.map((ticket, i) => (
                    <LotteryGameCard key={ticket.id || i} {...ticket} />
                  ))}
                </div>

                {/* Tickets Footer Pagination Controls */}
                {ticketsPagination && ticketsPagination.last_page > 1 && (
                  <PaginationControls 
                    currentPage={ticketsPage} 
                    lastPage={ticketsPagination.last_page} 
                    onPageChange={setTicketsPage} 
                  />
                )}
              </>
            )}
          </motion.div>
        ) : (
          <motion.div 
            key="numbers"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="bg-[#161616] border border-white/5 hover:border-white/10 transition-all duration-300 rounded-[24px] md:rounded-[32px] p-6 md:p-8">
              {savedPicksLoading ? (
                <div className="text-center py-12 text-[#A1A1A1]">Loading saved numbers...</div>
              ) : numbersList.length === 0 ? (
                <div className="text-center py-12 text-[#A1A1A1]">No saved numbers found.</div>
              ) : (
                <div className="space-y-4">
                  {numbersList.map((row, i) => (
                    <SavedNumberRow key={row.id || i} index={i} {...row} />
                  ))}
                </div>
              )}
            </div>

            {/* Numbers Footer Pagination Controls */}
            {numbersPagination && numbersPagination.last_page > 1 && (
              <PaginationControls 
                currentPage={numbersPage} 
                lastPage={numbersPagination.last_page} 
                onPageChange={setNumbersPage} 
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Sub-Component for Pagination Controls
const PaginationControls = ({ currentPage, lastPage, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-white/5">
      <button
        onClick={() => onPageChange(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-xl border border-white/10 text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-white/5 transition-colors"
      >
        <ChevronLeft size={18} />
      </button>
      
      <div className="flex gap-1">
        {[...Array(lastPage)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-9 h-9 rounded-xl font-medium text-sm transition-all ${
                currentPage === pageNum 
                  ? 'bg-[#E8AC43] text-black font-bold' 
                  : 'border border-white/10 text-[#A1A1A1] hover:text-white hover:bg-white/5'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(prev => Math.min(prev + 1, lastPage))}
        disabled={currentPage === lastPage}
        className="p-2 rounded-xl border border-white/10 text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-white/5 transition-colors"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default MyLottery;