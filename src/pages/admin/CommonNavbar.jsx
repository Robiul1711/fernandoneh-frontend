import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sun, 
  Sunrise,
  Sunset,
  Moon,
  Bell, 
  Globe, 
  ChevronDown, 
  User, 
  Settings, 
  LogOut,
  ChevronRight,
  Menu
} from "lucide-react";
import LanguageArea from "@/components/common/LanguageArea";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useMutationClient from "@/hooks/useMutationClient";
import { clearAuth } from "@/redux/slices/authSlice";

const getGreetingDetails = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return {
      text: "Good Morning",
      Icon: Sunrise,
      colorClass: "text-[#E8AC43]",
      bgClass: "bg-[#E8AC43]/10",
      emoji: "👋",
    };
  } else if (hour >= 12 && hour < 17) {
    return {
      text: "Good Afternoon",
      Icon: Sun,
      colorClass: "text-[#F59E0B]",
      bgClass: "bg-[#F59E0B]/10",
      emoji: "☀️",
    };
  } else if (hour >= 17 && hour < 21) {
    return {
      text: "Good Evening",
      Icon: Sunset,
      colorClass: "text-[#F97316]",
      bgClass: "bg-[#F97316]/10",
      emoji: "🌇",
    };
  } else {
    return {
      text: "Good Night",
      Icon: Moon,
      colorClass: "text-[#A78BFA]",
      bgClass: "bg-[#A78BFA]/10",
      emoji: "🌙",
    };
  }
};

const CommonNavbar = ({ open, setOpen }) => {
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const {user} = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDropdownRef = useRef(null);
  const [greeting, setGreeting] = useState(() => getGreetingDetails());

  useEffect(() => {
    const timer = setInterval(() => {
      setGreeting(getGreetingDetails());
    }, 60000);
    return () => clearInterval(timer);
  }, []);
  const { mutate: logout, isPending } = useMutationClient({
    url: "/logout",
    isPrivate: true,
    successMessage: "Logged out successfully",
  });

  const handleLogout = () => {
    logout(
      {},
      {
        onSuccess: () => {
          dispatch(clearAuth());
          navigate("/login");
        },
      }
    );
  };


  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      userDropdownRef.current &&
      !userDropdownRef.current.contains(event.target)
    ) {
      setUserOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
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
          className="xl:hidden p-2 text-[#A1A1A1] hover:text-[#E8AC43] transition-colors bg-[#1A1A1A] rounded-lg"
        >
          <Menu size={20} />
        </button>

        <div className={`${greeting.bgClass} p-2 rounded-xl hidden xs:flex`}>
          <greeting.Icon className={greeting.colorClass} size={22} />
        </div>
        <div className="hidden sm:block">
          <h2 className="text-white text-sm md:text-lg font-bold flex items-center gap-2 leading-none mb-0.5 md:mb-1">
            {greeting.text}, {user?.name} <span className="text-base md:text-lg">{greeting.emoji}</span>
          </h2>
          <p className="text-[#A1A1A1] text-[9px] md:text-xs font-medium uppercase tracking-wider">Play Smarter With AI.</p>
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button className="relative p-2 text-[#A1A1A1] hover:text-white transition-colors">
          <Bell size={22} />
          <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-[#161616]">
            1
          </span>
        </button>

        {/* Language Selection */}
        <LanguageArea />

        {/* User Profile Dropdown */}
        <div className="relative" ref={userDropdownRef}>
          <button 
            onClick={() => {
              setUserOpen(!userOpen);
              setLangOpen(false);
            }}
            className="flex items-center gap-2 md:gap-3 pl-2 pr-1 py-1 bg-[#1A1A1A]/40 rounded-2xl hover:bg-[#1A1A1A] transition-all group"
          >
            <div className="text-left hidden lg:block">
              <p className="text-white text-xs font-bold leading-tight">{user?.name}</p>
              <p className="text-[#4ADE80] text-[10px] font-medium leading-tight">{user?.role}</p>
            </div>
            <ChevronDown size={14} className={`text-[#A1A1A1] transition-transform ${userOpen ? 'rotate-180' : ''}`} />
             <img src={user?.image} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          
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
                  <p className="text-white text-sm font-bold">{user?.name}</p>
                  <p className="text-[#A1A1A1] text-xs">{user?.email}</p>
                </div>
                <div className="p-2">
                  <Link to="/dashboard/settings" className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#A1A1A1] hover:text-white hover:bg-[#262626] rounded-lg transition-all group">
                    <User size={18} />
                    <span>My Profile</span>
                    <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link to="/dashboard/settings" className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#A1A1A1] hover:text-white hover:bg-[#262626] rounded-lg transition-all group">
                    <Settings size={18} />
                    <span>Settings</span>
                    <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <div className="h-[1px] bg-[#333333] my-1 mx-2"></div>
                  <button 
                    onClick={handleLogout}
                    disabled={isPending}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <LogOut size={18} />
                    <span>{isPending ? "Logging out..." : "Log Out"}</span>
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
