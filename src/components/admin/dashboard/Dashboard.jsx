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
import useClient from '@/hooks/useClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Dashboard = () => {
        const { data:pinnedLotteries, isLoading:pinnedLoading, isError:pinnedError } = useClient({
    queryKey: ["lotteriespinned" ],
    url: "/lotteries/pinned",
    isPrivate: true,
  });

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
      <motion.div variants={itemVariants}>
        {pinnedLotteries?.data?.length > 2 ? (
          <div className="relative group">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-jackpot-next',
                prevEl: '.swiper-jackpot-prev',
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2 },
              }}
              className="!py-1"
            >
              {pinnedLotteries?.data?.map((game, i) => (
                <SwiperSlide key={i}>
                  <JackpotCard {...game} />
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <button className="swiper-jackpot-prev absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#1A1A1A] border border-[#E8AC43]/30 rounded-full flex items-center justify-center text-[#E8AC43] opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <button className="swiper-jackpot-next absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#1A1A1A] border border-[#E8AC43]/30 rounded-full flex items-center justify-center text-[#E8AC43] opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden">
              <ChevronRight size={20} />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xlg:grid-cols-2 gap-6">
            {pinnedLotteries?.data?.map((game, i) => (
              <JackpotCard key={i} {...game} />
            ))}
          </div>
        )}
      </motion.div>

      {/* AI Banner Section */}
      <motion.div variants={itemVariants}>
        <AIBanner botImage={BotImage} />
      </motion.div>

      {/* Middle Section: Numbers & Analysis */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 xlg:grid-cols-2 gap-6">
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
