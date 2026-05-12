import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronDown, Shuffle } from 'lucide-react';

const GenerateForm = ({ 
  selectedGame, 
  setSelectedGame, 
  numSuggestions, 
  setNumSuggestions, 
  pickType, 
  setPickType, 
  handleGenerate 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[#161616] border border-Primary/20 hover:border-Primary/50 transition-all duration-300 rounded-[32px] p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <label className="text-[#A1A1A1] text-xs font-bold uppercase tracking-wider ml-1">Choose a lottery game</label>
          <div className="relative group">
            <select 
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl px-4 py-3.5 text-white text-sm font-medium appearance-none focus:outline-none focus:border-[#E8AC43]/50 transition-all cursor-pointer"
            >
              <option>Power Ball</option>
              <option>Mega Millions</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A1A1] pointer-events-none group-focus-within:rotate-180 transition-transform" size={18} />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[#A1A1A1] text-xs font-bold uppercase tracking-wider ml-1">Number of Generated Suggestions</label>
          <div className="relative group">
            <select 
              value={numSuggestions}
              onChange={(e) => setNumSuggestions(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl px-4 py-3.5 text-white text-sm font-medium appearance-none focus:outline-none focus:border-[#E8AC43]/50 transition-all cursor-pointer"
            >
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10 (Default)</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A1A1] pointer-events-none group-focus-within:rotate-180 transition-transform" size={18} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button 
          onClick={() => setPickType('smart')}
          className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 ${
            pickType === 'smart' 
            ? 'bg-[#E8AC43]/5 border-[#E8AC43] shadow-[0_0_20px_rgba(232,172,67,0.1)]' 
            : 'bg-[#0D0D0D] border-white/10 hover:border-white/20'
          }`}
        >
          <Sparkles className={`mb-2 ${pickType === 'smart' ? 'text-[#E8AC43]' : 'text-[#A1A1A1]'}`} size={24} />
          <span className={`text-sm font-bold ${pickType === 'smart' ? 'text-white' : 'text-[#A1A1A1]'}`}>Smart Pick</span>
          <span className="text-[10px] text-[#A1A1A1] mt-1">AI-analyzed numbers</span>
        </button>

        <button 
          onClick={() => setPickType('quick')}
          className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 ${
            pickType === 'quick' 
            ? 'bg-[#E8AC43]/5 border-[#E8AC43] shadow-[0_0_20px_rgba(232,172,67,0.1)]' 
            : 'bg-[#0D0D0D] border-white/10 hover:border-white/20'
          }`}
        >
          <Shuffle className={`mb-2 ${pickType === 'quick' ? 'text-[#E8AC43]' : 'text-[#A1A1A1]'}`} size={24} />
          <span className={`text-sm font-bold ${pickType === 'quick' ? 'text-white' : 'text-[#A1A1A1]'}`}>Quick Pick</span>
          <span className="text-[10px] text-[#A1A1A1] mt-1">Random generation</span>
        </button>
      </div>

      <div className="space-y-4">
        <button 
          onClick={handleGenerate}
          className="w-full bg-gradient-to-r from-[#E8EBEE] to-[#CFD4D9] hover:from-white hover:to-[#E8EBEE] text-[#0D0D0D] font-black text-sm py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-all active:scale-[0.98]"
        >
          <Sparkles size={18} />
          <span>GENERATE WINNING NUMBERS</span>
        </button>
        <p className="text-center text-[#A1A1A1] text-xs font-medium">
          {pickType === 'smart' ? 'Based on hot, cold, and overdue number patterns' : 'Ready for the next draw?'}
        </p>
      </div>
    </motion.div>
  );
};

export default GenerateForm;
