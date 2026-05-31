import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, RotateCcw, ArrowRight, Flame, Moon, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeneratedNumbers = ({ logo }) => {
  const numberSets = [
    [12, 23, 24, 27, 89, 12],
    [12, 23, 24, 27, 89, 12],
    [12, 23, 24, 27, 89, 12],
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#161616] border border-Primary/20 hover:border-Primary/50 transition-all duration-300 rounded-[20px] xl:rounded-3xl p-4 lg:p-5 xl:p-6 h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-4 xl:mb-6">
        <div>
          <div className="flex items-center gap-2 text-[#E8AC43] mb-1">
            <Sparkles className="w-4 h-4 xl:w-5 xl:h-5" />
            <h3 className="text-[10px] xl:text-sm font-bold uppercase tracking-wider">
              Your Generated Numbers
            </h3>
          </div>
          <p className="text-[#A1A1A1] text-[9px] xl:text-sm">Showing 3 of 10 generated sets</p>
        </div>
        <img src={logo} alt="Powerball" className="h-5 lg:h-6 xl:h-10 object-contain" />
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-4 xl:gap-6 flex-1">
        <div className="space-y-2 mb-4 lg:mb-0 w-full lg:w-1/2 flex flex-col justify-center">
          {numberSets.map((set, setIndex) => (
            <motion.div 
              key={setIndex} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: setIndex * 0.1 }}
              className="flex gap-1 xl:gap-2"
            >
              {set.map((num, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ scale: 1.1 }}
                  className={`w-6 h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9 rounded-full flex items-center justify-center text-[9px] lg:text-[10px] xl:text-sm font-bold border transition-colors ${
                    i === set.length - 1 
                    ? 'rounded-full border border-[rgba(34,0,0,0)] bg-[#E93737] text-white shadow-[inset_0_5.376px_5.376px_rgba(255,248,248,0.51)]'
                    : 'rounded-full border-[1.5px] xl:border-[2.688px] border-white bg-[#E8EBEE] text-[#111111] shadow-[inset_4.032px_4.032px_9.408px_rgba(136,150,163,0.58),inset_-4.032px_-4.032px_9.408px_#FFF]'
                  }`}
                >
                  {num < 10 ? `0${num}` : num}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="bg-[#1A1A1A] border w-full lg:w-1/2 border-Primary/10 rounded-xl xl:rounded-2xl p-3 xl:p-4 self-center">
          <p className="text-[#A1A1A1] text-[10px] xl:text-sm mb-2 xl:mb-3">Based on:</p>
          <div className="space-y-1.5 xl:space-y-2">
            <div className="flex items-center gap-2 text-[10px] xl:text-sm text-white font-medium">
              <Flame className="w-3.5 h-3.5 xl:w-5 xl:h-5 text-red-500" />
              <span>Hot Numbers</span>
            </div>

            <div className="flex items-center gap-2 text-[10px] xl:text-sm text-white font-medium">
              <Moon className="w-3.5 h-3.5 xl:w-5 xl:h-5 text-[#E8AC43]" />
              <span>Overdue Numbers</span>
            </div>

            <div className="flex items-center gap-2 text-[10px] xl:text-sm text-white font-medium">
              <TrendingUp className="w-3.5 h-3.5 xl:w-5 xl:h-5 text-blue-500" />
              <span>Frequency Numbers</span>
            </div>
          </div>
        </div>
      </div>
        
      <div className="flex flex-col sm:flex-row gap-3 xl:gap-6 items-center mt-4 xl:mt-6">
        <Link to="/dashboard/lottery-games" className="w-full px-3 py-2 xl:py-3 flex items-center justify-center gap-2 border border-[#E8AC43] text-[#E8AC43] rounded-md text-[9px] xl:text-xs font-bold hover:bg-[#E8AC43] hover:text-[#0D0D0D] transition-all">
          <span>View All Generated Numbers</span>
          <ArrowRight size={12} />
        </Link>
        <Link to="/dashboard/generate-picks" className="w-full px-3 py-2 xl:py-3 flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#333333] text-white rounded-md text-[9px] xl:text-xs font-bold hover:bg-[#262626] transition-all">
          <RotateCcw size={12} />
          <span>Generate Again</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default GeneratedNumbers;
