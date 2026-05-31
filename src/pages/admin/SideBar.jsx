import React from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { ShieldCheck, Menu, X, Crown } from "lucide-react";
import Logo from "../../assets/images/logo.png";

const SideBar = ({ sidebar, open, setOpen }) => {
  const location = useLocation();


  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden z-[200] ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar Container */}
      <aside
        className={`fixed xl:static top-0 left-0 h-screen w-72 xl:w-80 bg-[#0D0D0D] border-r border-Primary/20 flex flex-col transition-transform duration-300 z-[210] ${
          open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
        }`}
      >
        {/* Logo Section */}
        <div className="p-8 flex flex-col items-center text-center relative">
          <Link to="/" className="flex flex-col items-center">
            <img
              src={Logo}
              alt="AI Lottery App Logo"
              className="w-24 xl:w-32 h-auto"
            />
          </Link>
          <button
            className="xl:hidden absolute top-4 right-4 p-2 text-[#A1A1A1] hover:text-white transition-colors bg-[#1A1A1A]/40 rounded-lg"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-2 overflow-y-auto custom-scrollbar">
          <ul className="space-y-1">
            {sidebar.map((item, index) => {
              if (item.type === "divider") {
                return (
                  <li key={`divider-${index}`} className="py-4 px-4">
                    <div className="h-[1px] bg-[#1A1A1A] w-full"></div>
                  </li>
                );
              }

              const active = item.path === '/dashboard' 
                ? location.pathname === '/dashboard' 
                : location.pathname.startsWith(item.path);
              
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                      active
                        ? "bg-[#E8AC43]/10 text-[#E8AC43]"
                        : "text-[#A1A1A1] hover:bg-[#1A1A1A] hover:text-white"
                    }`}
                  >
                    <div
                      className={`${active ? "text-[#E8AC43]" : "text-[#A1A1A1] group-hover:text-[#E8AC43]"} transition-colors`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold tracking-wide">
                      {item.text}
                    </span>
                    {active && (
                      <motion.div
                        layoutId="active-indicator"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-[#E8AC43] shadow-[0_0_10px_#E8AC43]"
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

<div className="bg-[#1F1F1F] rounded-2xl p-3 m-4">
  <Crown size={20} className="text-[#E7D487] mb-3" />

  <h3 className="text-white text-sm font-semibold mb-1">
    Upgrade to Pro
  </h3>

  <p className="text-[#BDBDBD] text-[11px] leading-4 mb-3">
    Unlock all features
  </p>

  <Link 
    to="/dashboard/subscription"
    onClick={() => setOpen(false)}
    className="w-full bg-[#E7D487] hover:bg-[#E7D487]/90 transition-all rounded-xl py-2 text-xs font-semibold text-black flex items-center justify-center gap-2"
  >
    Upgrade Pro →
  </Link>
</div>
      </aside>
    </>
  );
};

export default SideBar;
