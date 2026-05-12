import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Pin, Bookmark } from 'lucide-react';
import pattern from '@/assets/images/pattern.png';

const GameDetailsModal = ({ isOpen, onClose, game }) => {
  if (!game) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#111111] border border-[#E8AC43]/30 rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(232,172,67,0.1)]"
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Action Buttons */}
            <div className="absolute top-6 right-6 flex gap-3 z-10">
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1A1] hover:text-[#E8AC43] hover:bg-white/10 transition-all">
                <Pin size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1A1] hover:text-[#E8AC43] hover:bg-white/10 transition-all">
                <Bookmark size={18} />
              </button>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1A1] hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-10 flex flex-col items-center text-center">
              {/* Logo */}
              <div className="mb-8">
                <img src={game.logo} alt={game.title} className="h-16 md:h-20 w-auto object-contain" />
              </div>

              {/* Jackpot */}
              <div className="mb-10">
                <p className="text-[#E8AC43] text-sm font-medium uppercase tracking-[0.2em] mb-2">Estimated Jackpot</p>
                <div className="flex flex-col items-center">
                  <span className="bg-[linear-gradient(90deg,_#F2DC94_0%,_#FFF2D7_43%,_#FFC15D_100%)] bg-clip-text text-transparent text-7xl font-black leading-none py-2">
                    ${game.jackpot}
                  </span>
                  <span className="text-[#E8AC43] text-2xl font-black uppercase tracking-[0.3em]">Million</span>
                </div>
              </div>

              {/* Draw Info */}
              <div className="grid grid-cols-2 gap-12 w-full mb-10 border-b border-white/5 pb-10">
                <div className="text-center">
                  <p className="text-[#E8AC43] text-xs font-bold uppercase tracking-wider mb-2">Draw Closes</p>
                  <p className="text-[#A1A1A1] text-xs font-medium leading-relaxed">{game.drawCloses}</p>
                </div>
                <div className="text-center">
                  <p className="text-[#E8AC43] text-xs font-bold uppercase tracking-wider mb-2">Next Drawing</p>
                  <p className="text-[#A1A1A1] text-xs font-medium leading-relaxed">{game.nextDrawing}</p>
                </div>
              </div>

              {/* Winning Numbers */}
              <div className="w-full">
                <div className="flex justify-center gap-3 mb-6">
                  {game.winningNumbers.map((num, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className={`w-12 h-12 flex items-center justify-center text-lg font-bold ${
                        i === game.winningNumbers.length - 1
                        ? 'rounded-[36.289px] border border-[rgba(34,0,0,0)] bg-[#E93737] text-white shadow-[inset_0_5.376px_5.376px_rgba(255,248,248,0.51)]'
      : 'rounded-[134.403px] border-[2.688px] border-white bg-[#E8EBEE] text-[#111111] shadow-[inset_4.032px_4.032px_9.408px_rgba(136,150,163,0.58),inset_-4.032px_-4.032px_9.408px_#FFF]'
                      }`}
                    >
                      {num < 10 ? `0${num}` : num}
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-[#E8AC43] text-xs font-bold uppercase tracking-widest">Previous Winning Numbers</p>
                  <p className="text-[#A1A1A1] text-[10px] font-medium">{game.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GameDetailsModal;
