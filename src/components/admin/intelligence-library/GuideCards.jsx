import React from 'react';
import { Link } from 'react-router-dom';
import l1 from '@/assets/images/l1.png';
import l2 from '@/assets/images/l2.png';
import l3 from '@/assets/images/l3.png';
import l4 from '@/assets/images/l4.png';
import l5 from '@/assets/images/l5.png';

const GuideCards = () => {
  const guides = [
    {
      id: 1,
      title: "Beginner's Guide",
      description: "Learn how to use every tool",
      image: l1,
      link: "/dashboard/intelligence-library/beginner-guide"
    },
    {
      id: 2,
      title: "Hot & Cold Numbers",
      description: "Understanding lottery number trends",
      image: l2,
      link: "/dashboard/intelligence-library/hot-cold-numbers"
    },
    {
      id: 3,
      title: "Lottery Myths vs Facts",
      description: "Separating fiction from reality",
      image: l3,
      link: "/dashboard/intelligence-library/myths-vs-facts"
    },
    {
      id: 4,
      title: "Responsible Play Guide",
      description: "Play smart. Stay in control.",
      image: l4,
      link: "/dashboard/intelligence-library/responsible-play"
    },
    {
      id: 5,
      title: "Smart Picks Handbook",
      description: "Smarter strategies for smarter players",
      image: l5,
      link: "/dashboard/intelligence-library/smart-picks"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
      {guides.map((guide) => (
        <div 
          key={guide.id}
          className="bg-[#0D0D0D] hover:bg-[#A3A3A3]/10 border border-Primary/20 hover:border-[#C5A358]/40 transition-all duration-300 rounded-[20px] p-6 flex items-start gap-4 min-h-[140px] group"
          style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
        >
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl group-hover:bg-[#C5A358]/10 transition-colors">
            <img src={guide.image} alt={guide.title} className="w-8 h-8 object-contain" />
          </div>
          <div className="flex-grow">
            <h3 className="text-white text-lg font-semibold mb-1 group-hover:text-[#C5A358] transition-colors">{guide.title}</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">{guide.description}</p>
            <Link 
              to={guide.link}
              className="text-[#4ADE80] text-sm font-semibold hover:text-[#22C55E] flex items-center gap-1 transition-colors"
            >
              Explore Guide 
              <span className="text-lg leading-none mt-0.5">›</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuideCards;
