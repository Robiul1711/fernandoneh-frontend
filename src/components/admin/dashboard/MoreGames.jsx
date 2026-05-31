import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Bookmark, ChevronRight, MoreVertical, Pin } from 'lucide-react';
import GameDetailsModal from './GameDetailsModal';
import { LotteryGameCardSkeleton } from '@/components/shared/Skeleton';

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
import { Link } from 'react-router-dom';
import useClient from '@/hooks/useClient';
import useMutationClient from '@/hooks/useMutationClient';

const MoreGamesCard = ({ logo_url, id,name, next_draw_at, draw_closes_at, jackpot, multiplier, special_number, latest_numbers, onClick, is_pinned, is_saved, isPinned, isSaved}) => {
  const [menuOpen, setMenuOpen] = useState(false);
    const isPinnedGame = is_pinned || isPinned;
  const isSavedGame = is_saved || isSaved;
  
  const { mutate: saveLottery } = useMutationClient({
    url: "/lotteries/save",
    isPrivate: true,
    invalidateKeys: [["lotterygames"], ["lotteriessaved"]],
  });

  const { mutate: unsaveLottery } = useMutationClient({
    method: "delete",
    isPrivate: true,
    invalidateKeys: [["lotterygames"], ["lotteriessaved"]],
  });

  const handleSaveClick = () => {
    saveLottery({ data: { lottery_id: id } });
    setMenuOpen(false);
  };

  const handleUnsaveClick = () => {
    unsaveLottery({ url: `/lotteries/save/${id}` });
    setMenuOpen(false);
  };

  const { mutate: pinLottery } = useMutationClient({
    url: "/lotteries/pin",
    isPrivate: true,
    invalidateKeys: [["lotterygames"], ["lotteriespinned"]],
  });

  const { mutate: unpinLottery } = useMutationClient({
    method: "delete",
    isPrivate: true,
    invalidateKeys: [["lotterygames"], ["lotteriespinned"]],
  });

  const handlePinClick = () => {
    pinLottery({ data: { lottery_id: id } });
    setMenuOpen(false);
  };

  const handleUnpinClick = () => {
    unpinLottery({ url: `/lotteries/pin/${id}` });
    setMenuOpen(false);
  };



    const formatJackpot = (value) => {
    if (!value) return "$0";

    // Remove all non-numeric character except dot
    const numericValue = Number(String(value).replace(/[^0-9.]/g, ""));

    if (isNaN(numericValue)) return "$0";

    // Million format
    if (numericValue >= 1000000) {
      return `$${(numericValue / 1000000).toFixed(0)}M`;
    }

    return `$${numericValue.toLocaleString()}`;
  };
  return (
   <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-xl md:rounded-3xl p-4  group hover:border-[#E8AC43]/20 transition-all duration-300"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Row: Logo and Winning Numbers */}
<div className="flex justify-between items-start gap-3 mb-6">
  {/* Logo */}
  <div className="flex-shrink min-w-0">
    <img
      src={logo_url}
      alt={name}
      className="h-10 max-w-[120px] w-auto object-contain"
    />
  </div>

  {/* Right Section */}
  <div className="flex items-start gap-2 flex-shrink-0">
    <div className="flex flex-col">
      <div className="flex gap-1.5 mb-2 flex-wrap justify-end">
        {latest_numbers?.map((num, i) => (
          <div
            key={i}
            className="w-7 h-7 flex items-center justify-center text-[10px] font-bold rounded-[134.403px] border-[1.5px] border-white bg-[#E8EBEE] text-[#111111] shadow-[inset_4.032px_4.032px_9.408px_rgba(136,150,163,0.58),inset_-4.032px_-4.032px_9.408px_#FFF]"
          >
            {num}
          </div>
        ))}

        {special_number && (
          <div className="w-7 h-7 rounded-full bg-[#E93737] text-white flex items-center justify-center shadow-[inset_0_5.376px_5.376px_rgba(255,248,248,0.51)]">
            {special_number}
          </div>
        )}
      </div>

      <p className="text-[#A1A1A1] text-[9px] font-medium text-right">
        Winning Numbers
        <span className="">{draw_closes_at}</span>
      </p>
    </div>

    {/* Menu */}
    <div className="relative flex-shrink-0">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className=" text-[#A1A1A1] hover:text-white hover:bg-white/5 rounded-lg transition-all"
      >
        <MoreVertical size={18} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute right-0 top-full mt-2 w-40 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl z-20 overflow-hidden"
            >
              {/* Menu items */}
                <button
                      onClick={() =>
                        isPinnedGame ? handleUnpinClick() : handlePinClick()
                      }
                      className="w-full flex items-center gap-3 px-4 py-3 text-xs text-[#A1A1A1] hover:text-white hover:bg-white/5 transition-all text-left"
                    >
                      <Pin
                        size={14}
                        className={
                          isPinnedGame ? "fill-[#E8AC43] text-[#E8AC43]" : ""
                        }
                      />
                      <span>
                        {isPinnedGame ? "Unpin the lottery" : "Pin the lottery"}
                      </span>
                    </button>
                    <button
                      onClick={() =>
                        isSavedGame ? handleUnsaveClick() : handleSaveClick()
                      }
                      className="w-full flex items-center gap-3 px-4 py-3 text-xs text-[#A1A1A1] hover:text-white hover:bg-white/5 transition-all text-left border-t border-white/5"
                    >
                      <Bookmark
                        size={14}
                        className={
                          isSavedGame ? "fill-[#E8AC43] text-[#E8AC43]" : ""
                        }
                      />
                      <span>
                        {isSavedGame ? "Unsave lottery" : "Save lottery"}
                      </span>
                    </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  </div>
</div>

      <div className="w-full h-[1px] bg-white/5 mb-6"></div>

      {/* Info Grid */}
      <di v className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[#E8AC43] text-[12px] font-medium uppercase tracking-wider mb-1">
            Estimated Jackpot
          </p>

          <div className="flex flex-col">
            <span className="bg-[linear-gradient(90deg,_#F2DC94_0%,_#FFF2D7_43%,_#FFC15D_100%)] bg-clip-text text-transparent text-3xl font-bold leading-tight">
              {formatJackpot(jackpot)}
            </span>

            <span className="text-[#E8AC43] text-[10px] font-black uppercase tracking-widest leading-none mt-1">
              Estimated Jackpot
            </span>
          </div>
        </div>

        <div className="border-l border-[#E8AC43]/20 pl-4 flex flex-col justify-center gap-3">
          <div>
            <p className="text-[#E8AC43] text-[12px] font-bold mb-0.5">
              Draw Closes
            </p>
            <p className="text-[#A1A1A1] text-[10px] font-medium leading-tight">
              {draw_closes_at}
            </p>
          </div>
          <div>
            <p className="text-[#E8AC43] text-[12px] font-bold mb-0.5">
              Next Drawing
            </p>
            <p className="text-[#A1A1A1] text-[10px] font-medium leading-tight">
              {next_draw_at}
            </p>
          </div>
        </div>
      </di>
    </motion.div>

  );
};

const MoreGames = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: lotteryGames, isLoading, isError } = useClient({
    queryKey: ["lotterygames"],
    url: "/lotteries/games",
    isPrivate: true,
  });
  console.log(lotteryGames)
  const handleCardClick = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };



  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-white text-xl font-bold">More games to play</h3>
        <Link to="/dashboard/lottery-games" className="flex items-center gap-1 text-[#E8AC43] hover:text-white transition-colors text-sm font-medium">
          <span>View All Lotteries</span>
          <ChevronRight size={16} />
        </Link>
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
          className="!py-1"
        >
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <SwiperSlide key={i}>
                  <LotteryGameCardSkeleton />
                </SwiperSlide>
              ))
            : lotteryGames?.data?.map((game, i) => (
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

export default MoreGames;
