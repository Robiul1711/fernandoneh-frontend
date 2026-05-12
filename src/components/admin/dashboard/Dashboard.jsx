import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import JackpotCard from './JackpotCard';
import AIBanner from './AIBanner';
import GeneratedNumbers from './GeneratedNumbers';
import AIAnalysis from './AIAnalysis';
import MoreGames from './MoreGames';

// Import the generated bot image
import BotImage from '@/assets/images/winingnumber.png';
import PowerballLogo from '@/assets/images/powerball.png';
import MegaMillionsLogo from '@/assets/images/megamillion.png';

const Dashboard = () => {
  const topGames = [
    {
      title: "Powerball",
      logo: PowerballLogo, 
      winningNumbers: [7, 12, 23, 31, 2],
      jackpot: 87,
      drawCloses: "Tomorrow, 09:59 PM ET",
      nextDrawing: "Tomorrow, 10:59 PM ET",
      timer: [
        { label: "HRS", value: "21" },
        { label: "MINS", value: "45" },
        { label: "SECS", value: "32" }
      ]
    },
    {
      title: "Mega Millions",
      logo: MegaMillionsLogo,
      winningNumbers: [7, 12, 23, 31, 2],
      jackpot: 87,
      drawCloses: "Tomorrow, 09:59 PM ET",
      nextDrawing: "Tomorrow, 10:59 PM ET",
      timer: [
        { label: "HRS", value: "21" },
        { label: "MINS", value: "45" },
        { label: "SECS", value: "32" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 md:p-6 space-y-6 md:space-y-8 bg-[#0D0D0D] min-h-screen"
    >
      {/* Top Section: Main Jackpot Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {topGames.map((game, i) => (
          <JackpotCard key={i} {...game} />
        ))}
      </motion.div>

      {/* AI Banner Section */}
      <motion.div variants={itemVariants}>
        <AIBanner botImage={BotImage} />
      </motion.div>

      {/* Middle Section: Numbers & Analysis */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <GeneratedNumbers logo={PowerballLogo} />
        <AIAnalysis />
      </motion.div>

      {/* Bottom Section: More Games */}
      <motion.div variants={itemVariants}>
        <MoreGames />
      </motion.div>

      {/* Footer Meta */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#1A1A1A] gap-4"
      >
        <p className="text-[#A1A1A1] text-[10px]">
          Lottery games are based on chance. Play responsibly.
        </p>
        <div className="flex items-center gap-2 text-[#A1A1A1] text-[10px]">
          <ShieldCheck size={14} />
          <span>Data provided by official lottery sources.</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
