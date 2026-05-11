import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShieldCheck, Menu, X } from "lucide-react";
import Logo from "../../assets/images/logo.png";

const SideBar = ({ sidebar, open, setOpen }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="xl:hidden fixed top-4 left-4 z-[250] p-2 bg-[#1A1A1A] rounded-lg text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden z-[200] ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar Container */}
      <aside
        className={`fixed xl:static top-0 left-0 h-screen w-80 bg-[#0D0D0D] border-r border-[#1A1A1A] flex flex-col transition-transform duration-300 z-[210] ${
          open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
        }`}
      >
        {/* Logo Section */}
        <div className="p-8 flex flex-col items-center text-center">
          <Link to="/" className="flex flex-col items-center">
            <img
              src={Logo}
              alt="AI Lottery App Logo"
              className="w-24 xl:w-28 h-auto"
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-2 overflow-y-auto custom-scrollbar">
          <ul className="space-y-1">
            {sidebar.map((item, index) => {
              if (item.type === 'divider') {
                return (
                  <li key={`divider-${index}`} className="py-4 px-4">
                    <div className="h-[1px] bg-[#1A1A1A] w-full"></div>
                  </li>
                );
              }

              const active = isActive(item.path);

              return (
                <li key={item.id || index}>
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      active
                        ? "bg-[#1B7D31] text-white"
                        : "text-[#A1A1A1] hover:bg-[#1A1A1A] hover:text-white"
                    }`}
                  >
                    <span className={`transition-colors ${active ? "text-white" : "text-[#A1A1A1] group-hover:text-white"}`}>
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Security Box */}
        <div className="p-4 mt-auto">
          <div className="bg-[#1A1A1A]/40 border border-[#1B7D31]/20 rounded-2xl p-5 flex items-start gap-4">
            <div className="bg-[#1B7D31]/10 p-2 rounded-xl">
              <ShieldCheck className="text-[#1B7D31]" size={24} />
            </div>
            <div>
              <h4 className="text-[#1B7D31] text-xs font-bold uppercase tracking-wider mb-1">Secure & Private</h4>
              <p className="text-[#A1A1A1] text-[10px] leading-relaxed">
                Your data is always safe and never shared
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
