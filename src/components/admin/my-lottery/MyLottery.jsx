import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bookmark, Ticket, Hash, Trash2, Pin } from 'lucide-react';

// Sub-components
import LotteryGameCard from '../lottery-games/LotteryGameCard';

// Assets
import PowerballLogo from '@/assets/images/powerball.png';
import MegaMillionsLogo from '@/assets/images/megamillion.png';
import MassCashLogo from '@/assets/images/mashcash.png';
import FloridaLotteryLogo from '@/assets/images/floridalottery.png';
import Fantasy5Logo from '@/assets/images/fantasy.png';
import NumbersGameLogo from '@/assets/images/numbergame.png';
import useClient from '@/hooks/useClient';

const SavedNumberRow = ({ title, logo, numbers, powerball, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-[#0D0D0D] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 hover:border-[#E8AC43]/20 transition-all group"
    >
      <div className="space-y-4 w-full md:w-auto">
        <p className="text-[#A1A1A1] text-sm font-medium">{title}</p>
        <div className="flex flex-wrap gap-3">
          {numbers.map((num, i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-[#E8EBEE] text-[#111111] flex items-center justify-center font-bold shadow-[inset_4.032px_4.032px_9.408px_rgba(136,150,163,0.58),inset_-4.032px_-4.032px_9.408px_#FFF]">
              {num < 10 ? `0${num}` : num}
            </div>
          ))}
          {powerball && (
            <div className="w-10 h-10 rounded-full bg-[#E93737] text-white flex items-center justify-center font-bold shadow-[inset_0_5.376px_5.376px_rgba(255,248,248,0.51)]">
              {powerball < 10 ? `0${powerball}` : powerball}
            </div>
          )}
        </div>
      </div>
      <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
        <img src={logo} alt="Lottery Logo" className="h-10 md:h-12 w-auto object-contain" />
      </div>
    </motion.div>
  );
};

const MyLottery = () => {
  const [activeTab, setActiveTab] = useState('tickets'); // 'tickets' or 'numbers'
      const { data:pinnedLotteries, isLoading:pinnedLoading, isError:pinnedError } = useClient({
    queryKey: ["lotteriespinned" ],
    url: "/lotteries/pinned",
    isPrivate: true,
  });
  // console.log(pinnedLotteries)
      const { data:savedLotteries, isLoading:savedLoading, isError:savedError } = useClient({
    queryKey: ["lotteriessaved" ],
    url: "/lotteries/saved",
    isPrivate: true,
  });
// console.log(savedLotteries)

  const savedNumbers = [
    { title: "Powerball Smart Pick #2", logo: PowerballLogo, numbers: [1, 2, 4, 6, 8], powerball: 6 },
    { title: "Powerball Smart Pick #2", logo: PowerballLogo, numbers: [1, 2, 4, 6, 8], powerball: 6 },
    { title: "Powerball Smart Pick #2", logo: PowerballLogo, numbers: [1, 2, 4, 6, 8], powerball: 6 },
  ];

  return (
    <div className="p-4 md:p-6 space-y-8 bg-[#0D0D0D]  min-h-screen">
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
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E8AC43]"
              />
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
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E8AC43]"
              />
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
            className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-6"
          >
            {savedLotteries?.data?.map((ticket, i) => (
              <LotteryGameCard key={i} {...ticket} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="numbers"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#161616] border border border-Primary/20 hover:border-Primary/50 transition-all duration-3005 rounded-[24px] md:rounded-[32px] p-6 md:p-8"
          >
            <div className="flex justify-end mb-6">
              <p className="text-[#A1A1A1] text-xs font-medium">05/03/2026</p>
            </div>
            <div className="space-y-4">
              {savedNumbers.map((row, i) => (
                <SavedNumberRow key={i} index={i} {...row} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyLottery;
