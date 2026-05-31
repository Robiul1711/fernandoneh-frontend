import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBanner = ({ botImage }) => {
  return (
    <div className="bg-[#161616] border border-Primary/20 hover:border-Primary/50 transition-all duration-300 rounded-[20px] xl:rounded-3xl p-5 lg:p-6 xl:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full justify-between overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left flex-1"
      >
        <div className="flex items-center justify-center lg:justify-start gap-2 text-[#4ADE80] mb-2 xl:mb-4">
          <Sparkles size={12} />
          <span className="text-[9px] xl:text-[10px] font-bold uppercase tracking-widest">AI Powered Picks</span>
        </div>
        
        <h2 className="text-white text-lg lg:text-xl xl:text-2xl font-bold mb-2 xl:mb-3 leading-tight">
          Generate winning number with the power of AI
        </h2>
        <p className="text-[11px] xl:text-base mb-4 lg:mb-6 xl:mb-8 text-[#A1A1A1] font-medium">
          Smart. Fast. Accurate.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-3 lg:gap-4 w-full lg:w-auto"
      >
        <Link to="/dashboard/generate-picks" className="w-full lg:w-auto flex items-center justify-center gap-2 lg:gap-3 bg-[#1B7D31] hover:bg-[#23923c] text-white px-5 lg:px-6 xl:px-8 py-2.5 lg:py-3 rounded-xl font-bold transition-all group shadow-[0_0_20px_rgba(27,125,49,0.3)] hover:shadow-[0_0_30px_rgba(27,125,49,0.5)]">
          <Sparkles size={14} className="group-hover:rotate-12 transition-transform" />
          <span className="text-[9px] lg:text-[10px] xl:text-sm">GENERATE WINNING NUMBERS</span>
        </Link>
        
        <div className="flex items-center gap-2.5">
          <span className="text-[#A1A1A1] text-[9px] xl:text-sm">AI Confidence Score</span>
          <div className="bg-[#1A1A1A] px-2 py-0.5 rounded-lg border border-[#333333]">
            <span className="text-[#E8AC43] text-[10px] xl:text-sm font-bold">96%</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10 w-24 lg:w-32 xl:w-44 mt-4 lg:mt-0 flex-shrink-0"
      >
        <img 
          src={botImage} 
          alt="AI Bot" 
          className="w-full h-auto drop-shadow-[0_0_25px_rgba(232,172,67,0.25)]"
        />
      </motion.div>
    </div>
  );
};

export default AIBanner;
