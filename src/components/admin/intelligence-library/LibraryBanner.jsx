import React from 'react';
import { motion } from 'motion/react';
import libraryBannerImg from '@/assets/images/librarynewbg.png';

const LibraryBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full rounded-lg md:rounded-xl xl:rounded-[32px]  overflow-hidden shadow-2xl sm:mb-5 md:mb-8 lg:mb-10"
    >
      {/* The image serves as the entire background/content based on the provided design */}
      <img 
        src={libraryBannerImg} 
        alt="Intelligence Library Banner" 
        className="w-full h-auto object-cover"
      />
      
      {/* Text overlay for the left side if the image doesn't already contain it */}
      <div className="absolute inset-0 flex items-center px-8 md:px-12 pointer-events-none">
        <div className="max-w-[40%] hidden md:block">
             <h1 className='text-4xl font-bold text-black  mb-2'>Everything you need to play smarter</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default LibraryBanner;