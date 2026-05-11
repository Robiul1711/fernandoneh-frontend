import React from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import JackpotCard from './JackpotCard';
import AIBanner from './AIBanner';
import GeneratedNumbers from './GeneratedNumbers';
import AIAnalysis from './AIAnalysis';

// Import the generated bot image
import BotImage from '@/assets/images/winingnumber.png';
import PowerballLogo from '@/assets/images/powerball.png';
import MegaMillionsLogo from '@/assets/images/megamillion.png';

const Dashboard = () => {
  const topGames = [
    {
      title: "Powerball",
      logo: PowerballLogo, // Mocked text logo
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

  const moreGames = [
    { title: "MASS CASH", jackpot: 87 },
    { title: "FLORIDA LOTTERY", jackpot: 87 },
    { title: "FANTASY 5", jackpot: 87 },
    { title: "THE NUMBERS GAME", jackpot: 87 }
  ];

  return (
    <div className="p-6 space-y-8 bg-[#0D0D0D] min-h-screen">
      {/* Top Section: Main Jackpot Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {topGames.map((game, i) => (
          <JackpotCard key={i} {...game} />
        ))}
      </div>

      {/* AI Banner Section */}
      <AIBanner botImage={BotImage} />

      {/* Middle Section: Numbers & Analysis */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <GeneratedNumbers logo="POWERBALL" />
        <AIAnalysis />
      </div>

      {/* Bottom Section: More Games */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-xl font-bold">More games to play</h3>
          <button className="flex items-center gap-1 text-[#A1A1A1] hover:text-white transition-colors text-sm font-medium">
            <span>View All Lotteries</span>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreGames.map((game, i) => (
            <JackpotCard 
              key={i} 
              title={game.title}
              logo={game.title}
              winningNumbers={[7, 12, 23, 31, 2]}
              jackpot={game.jackpot}
              drawCloses="Tomorrow, 09:59 PM ET"
              nextDrawing="Tomorrow, 10:59 PM ET"
              timer={[
                { label: "HRS", value: "21" },
                { label: "MINS", value: "45" },
                { label: "SECS", value: "32" }
              ]}
            />
          ))}
        </div>
      </div>

      {/* Footer Meta */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#1A1A1A] gap-4">
        <p className="text-[#A1A1A1] text-[10px]">
          Lottery games are based on chance. Play responsibly.
        </p>
        <div className="flex items-center gap-2 text-[#A1A1A1] text-[10px]">
          <ShieldCheck size={14} />
          <span>Data provided by official lottery sources.</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
