import React from 'react';
import { Pin } from 'lucide-react';

const JackpotCard = ({ title, logo, winningNumbers, jackpot, drawCloses, nextDrawing, timer }) => {
  return (
    <div className="bg-[#161616] border border-[#1A1A1A] rounded-3xl p-6 relative overflow-hidden group hover:border-[#E8AC43]/30 transition-all duration-300">
      <div className="absolute top-4 right-4 text-[#A1A1A1] group-hover:text-[#E8AC43] transition-colors">
        <Pin size={18} className="rotate-45" />
      </div>
      
      <div className="flex justify-between items-start mb-8">
        <div className="h-10">
          {typeof logo === 'string' ? (
            <img src={logo} alt={title} className="h-full object-contain" />
          ) : (
            logo
          )}
        </div>
        <div className="text-right">
          <div className="flex gap-1.5 mb-1 justify-end">
            {winningNumbers.map((num, i) => (
              <span 
                key={i} 
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  i === winningNumbers.length - 1 ? 'bg-red-500 text-white' : 'bg-[#333333] text-white'
                }`}
              >
                {num}
              </span>
            ))}
          </div>
          <p className="text-[#A1A1A1] text-[10px]">Winning Numbers <span className="block">Mon, 04/27/26</span></p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 items-end">
        <div>
          <p className="text-[#A1A1A1] text-[10px] uppercase tracking-wider mb-1">Estimated Jackpot</p>
          <div className="flex items-baseline gap-1">
            <span className="text-[#E8AC43] text-4xl font-bold">${jackpot}</span>
            <span className="text-[#E8AC43] text-sm font-bold uppercase">Million</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-start border-l border-[#333333] pl-4">
            <div>
              <p className="text-white text-[10px] font-bold">Draw Closes</p>
              <p className="text-[#A1A1A1] text-[9px]">{drawCloses}</p>
            </div>
          </div>
          <div className="flex justify-between items-start border-l border-[#333333] pl-4">
            <div>
              <p className="text-white text-[10px] font-bold">Next Drawing</p>
              <p className="text-[#A1A1A1] text-[9px]">{nextDrawing}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        {timer.map((t, i) => (
          <div key={i} className="flex-1 bg-[#1A1A1A] border border-[#333333] rounded-xl py-2 text-center">
            <p className="text-white text-xl font-bold leading-none mb-1">{t.value}</p>
            <p className="text-[#A1A1A1] text-[8px] uppercase tracking-tighter">{t.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JackpotCard;
