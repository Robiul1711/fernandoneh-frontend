import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronDown, Shuffle } from 'lucide-react';
import useClient from '@/hooks/useClient';

const GenerateForm = ({ 
  selectedGame, 
  setSelectedGame, 
  numSuggestions, 
  setNumSuggestions, 
  pickType, 
  setPickType, 
  handleGenerate,
  isLoading
}) => {
        const { data, isLoading: isGamesLoading, isError } = useClient({
    queryKey: ["lotterygames" ],
    url: "/lotteries",
    isPrivate: true,
  });
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[#161616] border border-Primary/20 hover:border-Primary/50 transition-all duration-300 rounded-[20px] xl:rounded-[32px] p-5 lg:p-6 xl:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6 mb-6 xl:mb-8">
        <div className="space-y-1.5">
          <label className="text-[#A1A1A1] text-[10px] xl:text-xs font-bold uppercase tracking-wider ml-1">Choose a lottery game</label>
          <div className="relative group">
            <select 
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl xl:rounded-2xl px-3 xl:px-4 py-2.5 xl:py-3.5 text-white text-xs xl:text-sm font-medium appearance-none focus:outline-none focus:border-[#E8AC43]/50 transition-all cursor-pointer"
            >
              {data?.data?.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 xl:right-4 top-1/2 -translate-y-1/2 text-[#A1A1A1] pointer-events-none group-focus-within:rotate-180 transition-transform" size={16} />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[#A1A1A1] text-[10px] xl:text-xs font-bold uppercase tracking-wider ml-1">Number of Generated Suggestions</label>
          <div className="relative group">
            <select 
              value={numSuggestions}
              onChange={(e) => setNumSuggestions(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl xl:rounded-2xl px-3 xl:px-4 py-2.5 xl:py-3.5 text-white text-xs xl:text-sm font-medium appearance-none focus:outline-none focus:border-[#E8AC43]/50 transition-all cursor-pointer"
            >
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10 (Default)</option>
            </select>
            <ChevronDown className="absolute right-3 xl:right-4 top-1/2 -translate-y-1/2 text-[#A1A1A1] pointer-events-none group-focus-within:rotate-180 transition-transform" size={16} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 xl:mb-8">
        <button 
          onClick={() => setPickType('smart')}
          className={`flex flex-col items-center justify-center p-4 xl:p-6 rounded-xl xl:rounded-2xl border transition-all duration-300 ${
            pickType === 'smart' 
            ? 'bg-[#E8AC43]/5 border-[#E8AC43] shadow-[0_0_20px_rgba(232,172,67,0.1)]' 
            : 'bg-[#0D0D0D] border-white/10 hover:border-white/20'
          }`}
        >
          <Sparkles className={`mb-1.5 xl:mb-2 ${pickType === 'smart' ? 'text-[#E8AC43]' : 'text-[#A1A1A1]'}`} size={22} />
          <span className={`text-xs xl:text-sm font-bold ${pickType === 'smart' ? 'text-white' : 'text-[#A1A1A1]'}`}>Smart Pick</span>
          <span className="text-[9px] xl:text-[10px] text-[#A1A1A1] mt-0.5 xl:mt-1">AI-analyzed numbers</span>
        </button>

        <button 
          onClick={() => setPickType('quick')}
          className={`flex flex-col items-center justify-center p-4 xl:p-6 rounded-xl xl:rounded-2xl border transition-all duration-300 ${
            pickType === 'quick' 
            ? 'bg-[#E8AC43]/5 border-[#E8AC43] shadow-[0_0_20px_rgba(232,172,67,0.1)]' 
            : 'bg-[#0D0D0D] border-white/10 hover:border-white/20'
          }`}
        >
          <Shuffle className={`mb-1.5 xl:mb-2 ${pickType === 'quick' ? 'text-[#E8AC43]' : 'text-[#A1A1A1]'}`} size={22} />
          <span className={`text-xs xl:text-sm font-bold ${pickType === 'quick' ? 'text-white' : 'text-[#A1A1A1]'}`}>Quick Pick</span>
          <span className="text-[9px] xl:text-[10px] text-[#A1A1A1] mt-0.5 xl:mt-1">Random generation</span>
        </button>
      </div>

      <div className="space-y-3 xl:space-y-4">
        <button 
          onClick={handleGenerate}
          disabled={isLoading}
          className={`w-full bg-gradient-to-r from-[#E8EBEE] to-[#CFD4D9] hover:from-white hover:to-[#E8EBEE] text-[#0D0D0D] font-black text-xs xl:text-sm py-3 xl:py-4 rounded-lg xl:rounded-xl flex items-center justify-center gap-2 xl:gap-3 shadow-lg transition-all active:scale-[0.98] ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <Sparkles size={17} className={isLoading ? "animate-spin" : ""} />
          <span>{isLoading ? "GENERATING WINNING NUMBERS..." : "GENERATE WINNING NUMBERS"}</span>
        </button>
        <p className="text-center text-[#A1A1A1] text-[10px] xl:text-xs font-medium">
          {pickType === 'smart' ? 'Based on hot, cold, and overdue number patterns' : 'Ready for the next draw?'}
        </p>
      </div>
    </motion.div>
   
  );
};

export default GenerateForm;
