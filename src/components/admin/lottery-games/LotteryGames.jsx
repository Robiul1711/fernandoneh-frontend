import React from 'react';
import { Ticket } from 'lucide-react';

// Sub-components
import LotteryBanner from './LotteryBanner';
import JackpotCard from '../dashboard/JackpotCard';
import LotteryGameCard from './LotteryGameCard';
import { JackpotCardSkeleton } from '@/components/shared/Skeleton';

// Assets
import PowerballLogo from '@/assets/images/powerball.png';
import MegaMillionsLogo from '@/assets/images/megamillion.png';
import MassCashLogo from '@/assets/images/mashcash.png';
import FloridaLotteryLogo from '@/assets/images/floridalottery.png';
import Fantasy5Logo from '@/assets/images/fantasy.png';
import NumbersGameLogo from '@/assets/images/numbergame.png';
import useClient from '@/hooks/useClient';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LotteryGames = () => {

      const { data:lotteryGames, isLoading, isError } = useClient({
    queryKey: ["lotterygames" ],
    url: "/lotteries/games",
    isPrivate: true,
  });
  const {
    data: pinnedLotteries,
    isLoading: pinnedLoading,
    isError: pinnedError,
  } = useClient({
    queryKey: ["lotteriespinned"],
    url: "/lotteries/pinned",
    isPrivate: true,
  });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };



  return (
    <div className="p-4 md:p-6 space-y-8 bg-[#0D0D0D] min-h-screen">
      <LotteryBanner />
      {/* Top Section: Main Jackpot Cards */}
      <motion.div variants={itemVariants}>
        {pinnedLoading ? (
          <div className="grid grid-cols-1 xlg:grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <JackpotCardSkeleton key={i} />
            ))}
          </div>
        ) : pinnedLotteries?.data?.length > 2 ? (
          <div className="relative group">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-jackpot-next",
                prevEl: ".swiper-jackpot-prev",
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
              <JackpotCard key={i} {...game}  />
            ))}
          </div>
        )}
      </motion.div>

      {/* Popular Games Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-[#E8AC43]">
          <div className="bg-[#E8AC43]/10 p-2 rounded-lg">
            <Ticket size={20} />
          </div>
          <h3 className="text-white text-lg font-bold uppercase tracking-wider">Play the most popular lottery games</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <LotteryGameCard key={i} isLoading={true} />
              ))
            : lotteryGames?.data?.map((game, i) => (
                <LotteryGameCard key={i} {...game} isLoading={false} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default LotteryGames;
