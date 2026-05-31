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
      className="bg-[#161616] border border-Primary/20 hover:border-Primary/50 transition-all duration-300 rounded-[20px] xl:rounded-3xl p-4 lg:p-5 xl:p-6 h-full"
    >
      <div className="flex items-center gap-2 mb-4 xl:mb-6">
        <Brain className='text-Green w-4 h-4 xl:w-6 xl:h-6'/>
        <h3 className="text-[10px] xl:text-sm font-bold uppercase tracking-wider">AI Analysis</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-8 items-center">
        <div className="relative flex justify-center">
          {/* Circular Progress (Gauge) */}
          <div className="relative w-28 h-28 xl:w-36 xl:h-36">
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
                className="text-white text-xl xl:text-3xl font-bold "
              >
                {percentage}%
              </motion.span>
              <span className="text-Green text-[8px] xl:text-[10px] font-bold uppercase">Optimized</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 xl:space-y-6">
          <div>
            <div className="flex items-center gap-2 text-red-500 mb-1.5 xl:mb-3">
              <Flame className='w-4 h-4 xl:w-6 xl:h-6'/>
              <span className="text-[10px] xl:text-base font-bold">Hot Numbers</span>
            </div>
            <div className="flex gap-1.5 md:gap-2">
              {hotNumbers.map((num, i) => (
                <span key={i} className="w-6 h-6 xl:w-8 xl:h-8 rounded-full bg-[#1A1A1A] border border-[#79050E] flex items-center justify-center text-white text-[9px] xl:text-sm font-bold">
                  {num < 10 ? `0${num}` : num}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-blue-400 mb-1.5 xl:mb-3">
              <Snowflake className='w-4 h-4 xl:w-6 xl:h-6'/>
              <span className="text-[10px] xl:text-base font-bold">Cold Numbers</span>
            </div>
            <div className="flex gap-1.5 md:gap-2">
              {coldNumbers.map((num, i) => (
                <span key={i} className="w-6 h-6 xl:w-8 xl:h-8 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-white text-[9px] xl:text-sm font-bold">
                  {num < 10 ? `0${num}` : num}
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
