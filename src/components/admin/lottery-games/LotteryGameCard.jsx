import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MoreVertical, Pin, Bookmark } from "lucide-react";
import pattern from "@/assets/images/pattern.png";
import useMutationClient from "@/hooks/useMutationClient";
import { LotteryGameCardSkeleton } from "@/components/shared/Skeleton";

const LotteryGameCard = ({
  logo_url,
  title,
  jackpot,
  draw_closes_at,
  next_draw_at,
  latest_numbers,
  next_draw_datetime,
  multiplier,
  special_number,
  slug,
  name,
  id,
  is_pinned,
  is_saved,
  isPinned,
  isSaved,
  isLoading
}) => {
  // console.log(latest_numbers)
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

  if (isLoading) return <LotteryGameCardSkeleton />;

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
      alt={title}
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

export default LotteryGameCard;
