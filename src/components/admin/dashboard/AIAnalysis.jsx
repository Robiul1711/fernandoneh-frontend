import React from 'react';
import { motion } from 'motion/react';
import { Brain, Flame, Snowflake } from 'lucide-react';

const AIAnalysis = () => {
  const hotNumbers = [12, 23, 34, 45, 56];
  const coldNumbers = [12, 23, 34, 45, 56];
  const percentage = 80;
  const circumference = 440;
  const offset = circumference - (circumference * percentage) / 100;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#161616] border border-Primary/20 hover:border-Primary/50 transition-all duration-300 rounded-3xl p-5 md:p-6 h-full"
    >
      <div className="flex items-center gap-2 mb-6 md:mb-8">
        <Brain className='text-Green w-5 h-5 md:w-6 md:h-6'/>
        <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider">AI Analysis</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="relative flex justify-center">
          {/* Circular Progress (Gauge) */}
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="16"
                fill="transparent"
                className="text-[#1A1A1A]"
              />
              <motion.circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="16"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset: offset }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                strokeLinecap="round"
                fill="transparent"
                className="text-Green"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center ">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white text-2xl md:text-3xl font-bold "
              >
                {percentage}%
              </motion.span>
              <span className="text-Green text-[8px] md:text-[10px] font-bold uppercase">Optimized</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div>
            <div className="flex items-center gap-2 text-red-500 mb-2 md:mb-3">
              <Flame className='w-5 h-5 md:w-6 md:h-6'/>
              <span className="text-xs md:text-base font-bold">Hot Numbers</span>
            </div>
            <div className="flex gap-1.5 md:gap-2">
              {hotNumbers.map((num, i) => (
                <span key={i} className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#1A1A1A] border border-[#79050E] flex items-center justify-center text-white text-[10px] md:text-base font-bold">
                  {num}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-blue-400 mb-2 md:mb-3">
              <Snowflake className='w-5 h-5 md:w-6 md:h-6'/>
              <span className="text-xs md:text-base font-bold">Cold Numbers</span>
            </div>
            <div className="flex gap-1.5 md:gap-2">
              {coldNumbers.map((num, i) => (
                <span key={i} className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-white text-[10px] md:text-base font-bold">
                  {num}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default AIAnalysis;
