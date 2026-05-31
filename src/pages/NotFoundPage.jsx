import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Compass, Ticket, BarChart3 } from "lucide-react";

const QUICK_LINKS = [
  { icon: <Home size={16} />, label: "Dashboard", to: "/dashboard" },
  { icon: <Ticket size={16} />, label: "Generate Picks", to: "/dashboard/generate-picks" },
  { icon: <BarChart3 size={16} />, label: "Past Results", to: "/dashboard/past-results" },
  { icon: <Compass size={16} />, label: "Lottery Games", to: "/dashboard/lottery-games" },
];

// Animated number ball row
const NumberBalls = () => {
  const nums = [4, 0, 4];
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {nums.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.12, type: "spring", stiffness: 200 }}
          whileHover={{ y: -8, scale: 1.08 }}
          className={`w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center text-4xl md:text-5xl font-black select-none ${
            i === 1
              ? "bg-[#E93737] text-white shadow-[inset_0_8px_8px_rgba(255,248,248,0.35)] shadow-[#E93737]/30"
              : "bg-[#E8EBEE] text-[#111111] shadow-[inset_4px_4px_12px_rgba(136,150,163,0.5),inset_-4px_-4px_12px_#FFF]"
          }`}
        >
          {n}
        </motion.div>
      ))}
    </div>
  );
};

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(id);
          window.location.href = "/dashboard";
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center relative overflow-hidden px-6 py-16">
      {/* Background ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#E8AC43]/4 blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E93737]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#4A90E2]/5 blur-[80px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#E8AC43 1px, transparent 1px), linear-gradient(90deg, #E8AC43 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-xl text-center">
        {/* Number balls acting as "404" */}
        <NumberBalls />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8AC43]/10 border border-[#E8AC43]/20 mb-5"
        >
          <Compass size={13} className="text-[#E8AC43]" />
          <span className="text-[#E8AC43] text-xs font-bold uppercase tracking-widest">
            Page Not Found
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-2xl md:text-3xl font-bold mb-3"
        >
          Oops! This ticket is a loser.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="text-[#A1A1A1] text-sm leading-relaxed mb-10 max-w-sm mx-auto"
        >
          The page you're looking for doesn't exist or has been moved. Don't
          worry — your lucky numbers are waiting on the dashboard.
        </motion.p>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72 }}
          className="grid grid-cols-2 gap-3 mb-8"
        >
          {QUICK_LINKS.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className="flex items-center gap-3 bg-[#111111] border border-white/8 rounded-2xl px-4 py-3.5 text-sm font-medium text-white hover:border-[#E8AC43]/40 hover:text-[#E8AC43] transition-all group"
            >
              <span className="text-[#E8AC43] group-hover:scale-110 transition-transform">
                {link.icon}
              </span>
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-3"
        >
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#E8AC43] text-[#111111] font-bold text-sm hover:brightness-110 transition-all"
          >
            <Home size={16} /> Take Me Home
          </Link>
        </motion.div>

        {/* Countdown */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[#444] text-xs mt-8"
        >
          Auto-redirecting to dashboard in{" "}
          <span className="text-[#E8AC43] font-bold">{countdown}s</span>…
        </motion.p>
      </div>
    </div>
  );
};

export default NotFoundPage;
