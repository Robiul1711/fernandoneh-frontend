import React from 'react';
import { Sparkles, RotateCcw, ArrowRight, Flame, Moon, TrendingUp } from 'lucide-react';

const GeneratedNumbers = ({ logo }) => {
  const numberSets = [
    [12, 23, 24, 27, 89, 12],
    [12, 23, 24, 27, 89, 12],
    [12, 23, 24, 27, 89, 12],
  ];

  return (
    <div className="bg-[#161616] border border-[#1A1A1A] rounded-3xl p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2 text-[#E8AC43] mb-1">
            <Sparkles size={16} />
            <h3 className="text-sm font-bold uppercase tracking-wider">Your Generated Numbers</h3>
          </div>
          <p className="text-[#A1A1A1] text-[10px]">Showing 3 of 10 generated sets</p>
        </div>
        <img src={logo} alt="Powerball" className="h-8 object-contain opacity-80" />
      </div>

      <div className="flex-1 space-y-3 mb-8">
        {numberSets.map((set, setIndex) => (
          <div key={setIndex} className="flex gap-2">
            {set.map((num, i) => (
              <span 
                key={i} 
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border transition-colors ${
                  i === set.length - 1 
                  ? 'bg-[#1B7D31]/10 border-[#1B7D31] text-[#4ADE80]' 
                  : 'bg-transparent border-[#333333] text-white'
                }`}
              >
                {num}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#1A1A1A] border border-[#333333] rounded-2xl p-4">
          <p className="text-[#A1A1A1] text-[10px] mb-3">Based on:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] text-white font-medium">
              <Flame size={12} className="text-red-500" />
              <span>Hot Numbers</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-white font-medium">
              <Moon size={12} className="text-[#E8AC43]" />
              <span>Overdue Numbers</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-white font-medium">
              <TrendingUp size={12} className="text-blue-500" />
              <span>Frequency Numbers</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 flex flex-col">
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#E8AC43] text-[#E8AC43] rounded-xl text-xs font-bold hover:bg-[#E8AC43] hover:text-[#0D0D0D] transition-all">
            <span>View All Generated Numbers</span>
            <ArrowRight size={14} />
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#333333] text-white rounded-xl text-xs font-bold hover:bg-[#262626] transition-all">
            <RotateCcw size={14} />
            <span>Generate Again</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedNumbers;
