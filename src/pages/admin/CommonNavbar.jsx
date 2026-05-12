import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sun, 
  Bell, 
  Globe, 
  ChevronDown, 
  User, 
  Settings, 
  LogOut,
  ChevronRight,
  Menu
} from "lucide-react";

const CommonNavbar = ({ open, setOpen }) => {
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-[100] flex items-center justify-between w-full py-3 md:py-4 px-4 md:px-6 bg-[#161616]/80 backdrop-blur-md border-b border-[#1A1A1A]"
    >
      {/* Left Section: Greeting & Mobile Toggle */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Mobile Sidebar Toggle */}
        <button 
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 text-[#A1A1A1] hover:text-[#E8AC43] transition-colors bg-[#1A1A1A] rounded-lg"
        >
          <Menu size={20} />
        </button>

        <div className="bg-[#E8AC43]/10 p-2 rounded-xl hidden xs:flex">
          <Sun className="text-[#E8AC43]" size={22} />
        </div>
        <div className="hidden sm:block">
          <h2 className="text-white text-base md:text-lg font-bold flex items-center gap-2 leading-none mb-0.5 md:mb-1">
            Good Morning, Kabir <span className="text-lg">👋</span>
          </h2>
          <p className="text-[#A1A1A1] text-[10px] md:text-xs font-medium uppercase tracking-wider">Play Smarter With AI.</p>
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Notifications */}
        <button className="relative p-2 text-[#A1A1A1] hover:text-white transition-colors">
          <Bell size={22} />
          <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-[#161616]">
            1
          </span>
        </button>

        {/* Language Dropdown */}
        <div className="relative">
          <button 
            onClick={() => {
              setLangOpen(!langOpen);
              setUserOpen(false);
            }}
            className="flex items-center gap-2 px-2 md:px-3 py-2 bg-[#1A1A1A] rounded-xl text-white text-xs md:text-sm font-medium hover:bg-[#262626] transition-all border border-transparent hover:border-[#333333]"
          >
            <Globe size={18} className="text-[#A1A1A1]" />
            <span className="hidden xs:block">English</span>
            <ChevronDown size={14} className={`text-[#A1A1A1] transition-transform ${langOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {langOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-40 bg-[#1A1A1A] border border-[#333333] rounded-xl shadow-2xl z-[300] overflow-hidden"
              >
                <button className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#262626] transition-colors">English</button>
                <button className="w-full text-left px-4 py-2 text-sm text-[#A1A1A1] hover:bg-[#262626] transition-colors">Spanish</button>
                <button className="w-full text-left px-4 py-2 text-sm text-[#A1A1A1] hover:bg-[#262626] transition-colors">French</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => {
              setUserOpen(!userOpen);
              setLangOpen(false);
            }}
            className="flex items-center gap-2 md:gap-3 pl-2 pr-1 py-1 bg-[#1A1A1A]/40 rounded-2xl hover:bg-[#1A1A1A] transition-all group"
          >
            <div className="text-left hidden lg:block">
              <p className="text-white text-xs font-bold leading-tight">Kabir Nishat</p>
              <p className="text-[#4ADE80] text-[10px] font-medium leading-tight">Premium Member</p>
            </div>
            <ChevronDown size={14} className={`text-[#A1A1A1] transition-transform ${userOpen ? 'rotate-180' : ''}`} />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#E8AC43] to-[#AF7523] flex items-center justify-center text-[#0D0D0D] font-bold text-xs md:text-sm shadow-lg">
              KN
            </div>
          </button>

          <AnimatePresence>
            {userOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-56 bg-[#1A1A1A] border border-[#333333] rounded-xl shadow-2xl z-[300] overflow-hidden"
              >
                <div className="p-4 border-b border-[#333333]">
                  <p className="text-white text-sm font-bold">Kabir Nishat</p>
                  <p className="text-[#A1A1A1] text-xs">kabir.nishat@example.com</p>
                </div>
                <div className="p-2">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#A1A1A1] hover:text-white hover:bg-[#262626] rounded-lg transition-all group">
                    <User size={18} />
                    <span>My Profile</span>
                    <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#A1A1A1] hover:text-white hover:bg-[#262626] rounded-lg transition-all group">
                    <Settings size={18} />
                    <span>Settings</span>
                    <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <div className="h-[1px] bg-[#333333] my-1 mx-2"></div>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all">
                    <LogOut size={18} />
                    <span>Log Out</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default CommonNavbar;
