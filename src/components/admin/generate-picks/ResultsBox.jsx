import React from "react";
import { motion } from "motion/react";
import { Bookmark } from "lucide-react";
import PowerballLogo from "@/assets/images/powerball.png";
import MegaMillionsLogo from "@/assets/images/megamillion.png";
import useMutationClient from "@/hooks/useMutationClient";

const ResultsBox = ({ isGenerated, selectedGame, pickType, generatedSets, confidenceScore, image }) => {
  const { mutate, isPending } = useMutationClient({
    url: '/lotteries/picks/save',
    isPrivate: true,
    invalidateKeys: [['lotteriessavedpicks']],
  });
console.log(image)
  const handleSave = () => {
    mutate({
      data: {
        pick_id: image?.pick_id,
      }
    });
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#161616] border border-Primary/20 hover:border-Primary/50 transition-all duration-300 rounded-[20px] xl:rounded-[32px] p-5 lg:p-6 xl:p-8 min-h-[250px] lg:min-h-[300px]"
    >
      {!isGenerated ? (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-3 min-h-[200px]">
          <h3 className="text-base xl:text-xl font-bold text-white">
            Your Generated Lucky Numbers
          </h3>
          <p className="text-[#A1A1A1] text-xs xl:text-sm">Based on AI analysis</p>
          <div className="py-6 xl:py-12">
            <p className="text-[#444444] text-xs xl:text-sm font-medium">
              You haven't generated any numbers yet. Click <br />
              <span className="text-[#666666]">‘Generate My Numbers’</span> to
              get started
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6 xl:space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <h3 className="text-white text-base xl:text-xl font-bold">AI Confidence</h3>
                <span className="bg-[#E8AC43]/10 text-[#E8AC43] text-[9px] xl:text-[10px] font-black px-2 py-0.5 rounded uppercase">
                  {confidenceScore || "High"}
                </span>
              </div>
              <p className="text-[#A1A1A1] text-[10px] xl:text-xs">
                (Based on frequency and overdue number analysis)
              </p>
            </div>
            <button onClick={handleSave} disabled={isPending} className="flex items-center gap-2 bg-[#1B7D31] hover:bg-[#23923c] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg xl:rounded-xl text-[10px] xl:text-xs font-bold transition-all">
              <Bookmark size={15} />
              <span>Save the generated numbers</span>
            </button>
          </div>

          <div className="space-y-4">
            {generatedSets.map((set, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="
relative overflow-hidden
bg-[#0D0D0D]
border border-white/10
rounded-xl xl:rounded-[24px]
p-4 xl:p-6 xl:px-8
flex flex-col sm:flex-row
justify-between items-center
gap-6
transition-all duration-300
cursor-pointer group

hover:border-[#E8AC43]/20

before:absolute
before:inset-0
before:bg-[linear-gradient(90deg,_#D4AF37_0%,_#CCB244_7%,_#C4B44F_14%,_#BCB759_21%,_#B3B962_29%,_#AABB6B_36%,_#A0BD73_43%,_#96BF7A_50%,_#8BC182_57%,_#7FC389_64%,_#72C58F_71%,_#63C796_79%,_#51C89C_86%,_#39CAA3_93%,_#00CBA9_100%)]

before:opacity-0
hover:before:opacity-[0.15]

before:transition-opacity
before:duration-300
"
              >
                <div className="space-y-3 xl:space-y-4 w-full sm:w-auto">
                  <p className="text-[#A1A1A1] text-xs xl:text-sm font-medium group-hover:text-white">
                    {selectedGame} {pickType === "smart" ? "Smart" : "Quick"}{" "}
                    Pick #{idx + 1}
                  </p>
                  <div className="flex flex-wrap gap-2 xl:gap-3">
                    {set.numbers.map((num, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 xl:w-9 xl:h-9 rounded-full bg-[#E8EBEE] text-[#111111] flex items-center justify-center text-[10px] xl:text-sm font-bold shadow-[inset_4.032px_4.032px_9.408px_rgba(136,150,163,0.58),inset_-4.032px_-4.032px_9.408px_#FFF]"
                      >
                        {num < 10 ? `0${num}` : num}
                      </div>
                    ))}
                    <div className="w-7 h-7 xl:w-9 xl:h-9 rounded-full bg-[#E93737] text-white flex items-center justify-center text-[10px] xl:text-sm font-bold shadow-[inset_0_5.376px_5.376px_rgba(255,248,248,0.51)]">
                      {set.powerball < 10 ? `0${set.powerball}` : set.powerball}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                  <img
                    src={image?.logo_url}
                    alt={selectedGame}
                    className="h-8 lg:h-9 xl:h-12 w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      )}
    </motion.div>
  );
};

export default ResultsBox;
