import React from 'react';
import { Ticket } from 'lucide-react';

// Sub-components
import LotteryBanner from './LotteryBanner';
import JackpotCard from '../dashboard/JackpotCard';
import LotteryGameCard from './LotteryGameCard';

// Assets
import PowerballLogo from '@/assets/images/powerball.png';
import MegaMillionsLogo from '@/assets/images/megamillion.png';
import MassCashLogo from '@/assets/images/mashcash.png';
import FloridaLotteryLogo from '@/assets/images/floridalottery.png';
import Fantasy5Logo from '@/assets/images/fantasy.png';
import NumbersGameLogo from '@/assets/images/numbergame.png';

const LotteryGames = () => {
  const featuredGames = [
    {
      title: "POWER BALL",
      logo: PowerballLogo,
      jackpot: 87,
      drawCloses: "Tomorrow, 09:59 PM ET",
      nextDrawing: "Tomorrow, 10:59 PM ET",
      winningNumbers: [7, 12, 23, 31, 2],
      date: "Mon, 04/27/26",
      timer: [
        { label: "Hrs", value: 21 },
        { label: "Mins", value: 45 },
        { label: "Secs", value: 32 }
      ]
    },
    {
      title: "MEGA MILLIONS",
      logo: MegaMillionsLogo,
      jackpot: 87,
      drawCloses: "Tomorrow, 09:59 PM ET",
      nextDrawing: "Tomorrow, 10:59 PM ET",
      winningNumbers: [7, 12, 23, 31, 2],
      date: "Mon, 04/27/26",
      timer: [
        { label: "Hrs", value: 21 },
        { label: "Mins", value: 45 },
        { label: "Secs", value: 32 }
      ]
    }
  ];

  const popularGames = [
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
      title: "THE NUMBERS GAME",
      logo: NumbersGameLogo,
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
    }
  ];

  return (
    <div className="p-4 md:p-6 space-y-8 bg-[#0D0D0D] min-h-screen">
      <LotteryBanner />

      {/* Featured Games Section */}
      <div className="grid grid-cols-1 xlg:grid-cols-2 gap-6">
        {featuredGames.map((game, i) => (
          <JackpotCard key={i} {...game} />
        ))}
      </div>

      {/* Popular Games Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-[#E8AC43]">
          <div className="bg-[#E8AC43]/10 p-2 rounded-lg">
            <Ticket size={20} />
          </div>
          <h3 className="text-white text-lg font-bold uppercase tracking-wider">Play the most popular lottery games</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-6">
          {popularGames.map((game, i) => (
            <LotteryGameCard key={i} {...game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LotteryGames;
