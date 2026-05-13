import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBanner = ({ botImage }) => {
  return (
    <div className="bg-[#161616] border border-Primary/20 hover:border-Primary/50 transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full justify-between overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-2 text-[#4ADE80] mb-2 md:mb-4">
          <Sparkles size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">AI Powered Picks</span>
        </div>
        
        <h2 className="text-white text-xl md:text-2xl font-bold mb-2 md:mb-3 leading-tight">
          Generate winning number with the power of AI
        </h2>
        <p className="text-xs md:text-xl mb-6 md:mb-8 text-[#A1A1A1]">
          Smart. Fast. Accurate.
        </p>
      </motion.div>
      
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-auto"
        >
          <Link to="/dashboard/generate-picks" className="w-full md:w-auto flex items-center justify-center gap-2 md:gap-3 bg-[#1B7D31] hover:bg-[#23923c] text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all group shadow-[0_0_20px_rgba(27,125,49,0.3)] hover:shadow-[0_0_30px_rgba(27,125,49,0.5)]">
            <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
            <span className="text-[10px] md:text-sm lg:text-base">GENERATE WINNING NUMBERS</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <span className="text-[#A1A1A1] text-[10px] md:text-base">AI Confidence Score</span>
            <div className="bg-[#1A1A1A] px-2.5 py-1 rounded-lg border border-[#333333]">
              <span className="text-[#E8AC43] text-xs md:text-base font-bold">96%</span>
            </div>
          </div>
        </motion.div>
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10 w-32 md:w-64 mt-4 md:mt-0"
      >
        <img 
          src={botImage} 
          alt="AI Bot" 
          className="w-full h-auto drop-shadow-[0_0_30px_rgba(232,172,67,0.2)]"
        />
      </motion.div>

    </div>
  );
};

export default AIBanner;
