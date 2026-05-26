import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info } from "lucide-react";

const InsightBox = ({
  isGenerated,
  pickType,
  hotNumbers,
  hotPowerball,
  overdueNumbers,
  overduePowerball,
  insight,
  insights,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-[#161616] border  border-Primary/20 hover:border-Primary/50 transition-all duration-300 rounded-[32px] p-6 md:p-8 flex flex-col justify-center min-h-[400px]"
    >
      <AnimatePresence mode="wait">
        {!isGenerated ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Info className="text-[#A1A1A1]" size={32} />
            </div>
            <h3 className="text-white text-xl font-medium leading-relaxed">
              No data available yet. Generate your first Pick to see AI-powered
              number insights.
            </h3>
          </motion.div>
        ) : pickType === "smart" ? (
          <motion.div
            key="smart-insights"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <h3 className="text-white text-lg font-medium leading-relaxed mb-6">
              {insights && typeof insights === 'object' && !Array.isArray(insights) && insights.title ? "" : "The Smart Pick Combos are generated with the following numbers:"}
            </h3>

            {Array.isArray(insights) ? (
              <div className="space-y-4 mb-6">
                {insights.map((ins, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <h4 className="text-[#E8AC43] text-sm font-bold mb-1">{ins.title}</h4>
                    <p className="text-[#A1A1A1] text-xs leading-relaxed">{ins.description}</p>
                  </div>
                ))}
              </div>
            ) : insights && typeof insights === 'object' && insights.title && insights.description ? (
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mb-6">
                <h4 className="text-[#E8AC43] text-sm font-bold mb-1">{insights.title}</h4>
                <p className="text-[#A1A1A1] text-xs leading-relaxed">{insights.description}</p>
              </div>
            ) : null}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[#E8AC43] text-xs font-bold uppercase tracking-widest">
                  Top 8 hot numbers:
                </p>
                <div className="flex flex-wrap gap-2">
                  {hotNumbers.map((num, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-[23.699px] border-[0.878px] border-[rgba(34,0,0,0)] bg-[rgba(233,55,55,0.08)] flex items-center justify-center text-xs font-bold text-white shadow-[inset_0_3.511px_3.511px_rgba(255,248,248,0.51)]"
                    >
                      {num < 10 ? `0${num}` : num}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[#E8AC43] text-xs font-bold uppercase tracking-widest">
                  Top 3 hot Power Ball numbers:
                </p>
                <div className="flex flex-wrap gap-2">
                  {hotPowerball.map((num, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-[23.699px] border-[0.878px] border-[rgba(34,0,0,0)] bg-[rgba(233,55,55,0.08)] flex items-center justify-center text-xs font-bold text-white shadow-[inset_0_3.511px_3.511px_rgba(255,248,248,0.51)]"
                    >
                      {num < 10 ? `0${num}` : num}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[#E8AC43] text-xs font-bold uppercase tracking-widest">
                  Top 8 overdue numbers:
                </p>
                <div className="flex flex-wrap gap-2">
                  {overdueNumbers.map((num, i) => (
                    <div
                      key={i}
                   className="w-8 h-8 rounded-[87.775px] border-[1.756px] border-white bg-[rgba(232,235,238,0.08)] flex items-center justify-center text-xs font-bold text-white shadow-[inset_2.633px_2.633px_6.144px_rgba(136,150,163,0.58),inset_-2.633px_-2.633px_6.144px_rgba(255,255,255,0.50)]"
>
                      {num < 10 ? `0${num}` : num}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[#E8AC43] text-xs font-bold uppercase tracking-widest">
                  Top 3 overdue Power Ball numbers:
                </p>
                <div className="flex flex-wrap gap-2">
                  {overduePowerball.map((num, i) => (
                    <div
                      key={i}
                className="w-8 h-8 rounded-[87.775px] border-[1.756px] border-white bg-[rgba(232,235,238,0.08)] flex items-center justify-center text-xs font-bold text-white shadow-[inset_2.633px_2.633px_6.144px_rgba(136,150,163,0.58),inset_-2.633px_-2.633px_6.144px_rgba(255,255,255,0.50)]"
>
                      {num < 10 ? `0${num}` : num}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="quick-insights"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <h3 className="text-white text-2xl font-bold">{insight?.title || "Quick Pick:"}</h3>
            <p className="text-[#A1A1A1] leading-relaxed text-sm md:text-base">
              {insight?.description || "Powerball is a lottery game which chooses 5 winning numbers from 69 numbers and choose a Power Ball number from a separate set of numbers. Use our Quick Pick Combo Generator to discover potentially successful combinations. The generator provides you with random combinations and it is fast and easy to use."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InsightBox;
