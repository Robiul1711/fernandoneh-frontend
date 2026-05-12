import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const LotteryBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1B7D31] rounded-2xl p-4 flex items-center gap-3 shadow-[0_0_20px_rgba(27,125,49,0.3)] mb-8"
    >
      <div className="bg-white/20 p-1.5 rounded-lg">
        <Star className="text-[#F2DC94] fill-Secondary" size={20} />
      </div>
      <p className="text-white font-bold text-sm md:text-base">
        Next big winner could be you! Keep playing and good luck!
      </p>
    </motion.div>
  );
};

export default LotteryBanner;
