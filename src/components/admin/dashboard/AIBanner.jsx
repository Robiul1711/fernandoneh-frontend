import React from 'react';
import { Sparkles } from 'lucide-react';

const AIBanner = ({ botImage }) => {
  return (
    <div className="bg-[#161616] border border-[#1A1A1A] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8AC43]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <div className="flex-1 z-10">
        <div className="flex items-center gap-2 text-[#4ADE80] mb-4">
          <Sparkles size={16} />
          <span className="text-[10px] font-bold uppercase tracking-widest">AI Powered Picks</span>
        </div>
        
        <h2 className="text-white text-2xl font-bold mb-3">
          Generate winning number with the power of AI
        </h2>
        <p className="text-[#A1A1A1] text-sm mb-8">
          Smart. Fast. Accurate.
        </p>
        
        <div className="flex flex-wrap items-center gap-6">
          <button className="flex items-center gap-3 bg-[#1B7D31] hover:bg-[#23923c] text-white px-8 py-3 rounded-xl font-bold transition-all group">
            <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
            <span>GENERATE WINNING NUMBERS</span>
          </button>
          
          <div className="flex items-center gap-3">
            <span className="text-[#A1A1A1] text-xs">AI Confidence Score</span>
            <div className="bg-[#1A1A1A] px-3 py-1.5 rounded-lg border border-[#333333]">
              <span className="text-[#E8AC43] font-bold">96%</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-48 md:w-64">
        <img 
          src={botImage} 
          alt="AI Bot" 
          className="w-full h-auto drop-shadow-[0_0_30px_rgba(232,172,67,0.2)]"
        />
      </div>
    </div>
  );
};

export default AIBanner;
