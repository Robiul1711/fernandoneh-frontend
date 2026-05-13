import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronRight, Pin } from 'lucide-react';
import GameDetailsModal from './GameDetailsModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import assets
import pattern from '@/assets/images/pattern.png';
import MassCashLogo from '@/assets/images/mashcash.png';
import FloridaLotteryLogo from '@/assets/images/floridalottery.png';
import Fantasy5Logo from '@/assets/images/fantasy.png';
import NumbersGameLogo from '@/assets/images/numbergame.png';

const MoreGamesCard = ({ logo, title, winningNumbers, date, jackpot, drawCloses, nextDrawing, onClick }) => {
  return (
    <motion.div 
      onClick={onClick}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="relative overflow-hidden bg-[#111111] border border-[#E8AC43]/30 rounded-[24px] p-6 transition-all duration-300 hover:border-[#E8AC43]/60 h-full cursor-pointer"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Top Row */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex-shrink-0">
          <img src={logo} alt={title} className="h-10 md:h-14 w-auto object-contain" />
        </div>

        <div className="flex flex-col items-end">
          <div className="flex gap-1.5 mb-2">
            {winningNumbers.map((num, i) => (
              <div
                key={i}
                className={`w-7 h-7 flex items-center justify-center text-[10px] font-bold rounded-full ${
                  i === winningNumbers.length - 1
                   ? 'rounded-[36.289px] border border-[rgba(34,0,0,0)] bg-[#E93737] text-white shadow-[inset_0_5.376px_5.376px_rgba(255,248,248,0.51)]'
      : 'rounded-[134.403px] border-[2.688px] border-white bg-[#E8EBEE] text-[#111111] shadow-[inset_4.032px_4.032px_9.408px_rgba(136,150,163,0.58),inset_-4.032px_-4.032px_9.408px_#FFF]'
                }`}
              >
                {num < 10 ? `0${num}` : num}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-[#A1A1A1] text-[10px]">
            <span className="text-[#E8AC43] font-bold">Winning Numbers</span>
            <span>{date}</span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[#E8AC43] text-[10px] font-medium uppercase tracking-wider mb-1">Estimated Jackpot</p>
          <div className="flex flex-col">
            <span className="bg-[linear-gradient(90deg,_#F2DC94_0%,_#FFF2D7_43%,_#FFC15D_100%)] bg-clip-text text-transparent text-4xl font-bold leading-tight">
              ${jackpot}
            </span>
            <span className="text-[#E8AC43] text-sm font-black uppercase tracking-widest -mt-1">Million</span>
          </div>
        </div>

        <div className="flex gap-4 border-l border-[#E8AC43]/30 pl-4">
          <div className="space-y-3">
            <div>
              <p className="text-[#E8AC43] text-[10px] font-bold mb-0.5">Draw Closes</p>
              <p className="text-[#A1A1A1] text-[9px] font-medium leading-tight">{drawCloses}</p>
            </div>
            <div>
              <p className="text-[#E8AC43] text-[10px] font-bold mb-0.5">Next Drawing</p>
              <p className="text-[#A1A1A1] text-[9px] font-medium leading-tight">{nextDrawing}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LotteryGamesToPlay = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const games = [
    {
      title: "MASS CASH",
      logo: MassCashLogo,
      winningNumbers: [7, 12, 23, 31, 2],
      date: "Mon, 04/27/26",
      jackpot: 87,
      drawCloses: "Tomorrow, 09:59 PM ET",
      nextDrawing: "Tomorrow, 10:59 PM ET"
    },
    {
      title: "FLORIDA LOTTERY",
      logo: FloridaLotteryLogo,
      winningNumbers: [7, 12, 23, 31, 2],
      date: "Mon, 04/27/26",
      jackpot: 87,
      drawCloses: "Tomorrow, 09:59 PM ET",
      nextDrawing: "Tomorrow, 10:59 PM ET"
    },
    {
      title: "FANTASY 5",
      logo: Fantasy5Logo,
      winningNumbers: [7, 12, 23, 31, 2],
      date: "Mon, 04/27/26",
      jackpot: 87,
      drawCloses: "Tomorrow, 09:59 PM ET",
      nextDrawing: "Tomorrow, 10:59 PM ET"
    },
    {
      title: "THE NUMBERS GAME",
      logo: NumbersGameLogo,
      winningNumbers: [7, 12, 23, 31, 2],
      date: "Mon, 04/27/26",
      jackpot: 87,
      drawCloses: "Tomorrow, 09:59 PM ET",
      nextDrawing: "Tomorrow, 10:59 PM ET"
    },
    {
      title: "MASS CASH 2",
      logo: MassCashLogo,
      winningNumbers: [7, 12, 23, 31, 2],
      date: "Mon, 04/27/26",
      jackpot: 87,
      drawCloses: "Tomorrow, 09:59 PM ET",
      nextDrawing: "Tomorrow, 10:59 PM ET"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-white text-xl font-bold">More games to play</h3>
        <button className="flex items-center gap-1 text-[#E8AC43] hover:text-white transition-colors text-sm font-medium">
          <span>View All Lotteries</span>
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-4"
        >
          {games.map((game, i) => (
            <SwiperSlide key={i}>
              <MoreGamesCard {...game} onClick={() => handleCardClick(game)} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#1A1A1A] border border-[#E8AC43]/30 rounded-full flex items-center justify-center text-[#E8AC43] opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden">
          <ChevronRight size={20} className="rotate-180" />
        </button>
        <button className="swiper-button-next-custom absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#1A1A1A] border border-[#E8AC43]/30 rounded-full flex items-center justify-center text-[#E8AC43] opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden">
          <ChevronRight size={20} />
        </button>
      </div>

      <GameDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        game={selectedGame} 
      />
    </motion.div>
  );
};

export default LotteryGamesToPlay;
