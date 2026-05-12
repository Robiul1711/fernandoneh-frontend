import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const AIBanner = ({ botImage }) => {
  return (
    <div className="bg-[#161616] border border-Primary/20 hover:border-Primary/50 transition-all duration-300 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8  w-full justify-between">

      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className=""
      >
        <div className="flex items-center gap-2 text-[#4ADE80] mb-4">
          <Sparkles size={16} />
          <span className="text-[10px] font-bold uppercase tracking-widest">AI Powered Picks</span>
        </div>
        
        <h2 className="text-white text-2xl font-bold mb-3">
          Generate winning number with the power of AI
        </h2>
        <p className=" text-sm md:text-base lg:text-xl mb-8 text-[#A1A1A1]">
          Smart. Fast. Accurate.
        </p>
      </motion.div>
      
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <button className="flex items-center gap-3 bg-[#1B7D31] hover:bg-[#23923c] text-white px-8 py-3 rounded-xl font-bold transition-all group shadow-[0_0_20px_rgba(27,125,49,0.3)] hover:shadow-[0_0_30px_rgba(27,125,49,0.5)]">
            <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
            <span>GENERATE WINNING NUMBERS</span>
          </button>
          
          <div className="flex items-center gap-3">
            <span className="text-[#A1A1A1] text-xs lg:text-base">AI Confidence Score</span>
            <div className="bg-[#1A1A1A] px-3 py-1.5 rounded-lg border border-[#333333]">
              <span className="text-[#E8AC43] font-bold">96%</span>
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
        className="relative z-10 w-48 md:w-64"
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
