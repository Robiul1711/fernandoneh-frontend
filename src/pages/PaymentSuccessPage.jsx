import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle2, Sparkles, ArrowRight, Home, Ticket } from "lucide-react";

const Particle = ({ style }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-[#E8AC43]"
    style={style}
    animate={{
      y: [0, -120],
      opacity: [1, 0],
      scale: [1, 0.3],
    }}
    transition={{
      duration: 1.8 + Math.random() * 0.8,
      ease: "easeOut",
      repeat: Infinity,
      delay: Math.random() * 1.5,
    }}
  />
);

const PaymentSuccessPage = () => {
  const navigate = useNavigate();

  // Auto-redirect to dashboard after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => navigate("/dashboard/subscription"), 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const particles = Array.from({ length: 16 }).map((_, i) => ({
    left: `${5 + i * 6}%`,
    top: `${40 + Math.sin(i) * 20}%`,
  }));

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center relative overflow-hidden px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1B7D31]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#E8AC43]/5 blur-[80px] pointer-events-none" />

      {/* Confetti particles */}
      {particles.map((style, i) => (
        <Particle key={i} style={style} />
      ))}
      {particles.map((style, i) => (
        <Particle
          key={`b-${i}`}
          style={{
            ...style,
            left: `${10 + i * 5.5}%`,
            background: i % 2 === 0 ? "#1B7D31" : "#E8AC43",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-[#111111] border border-white/8 rounded-[32px] p-10 text-center shadow-2xl">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 14 }}
            className="w-24 h-24 rounded-full bg-[#1B7D31]/15 border-2 border-[#1B7D31]/40 flex items-center justify-center mx-auto mb-6 relative"
          >
            <CheckCircle2 size={44} className="text-[#1B7D31]" />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-[#1B7D31]/30"
            />
          </motion.div>

          {/* Sparkle badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8AC43]/10 border border-[#E8AC43]/20 mb-4"
          >
            <Sparkles size={13} className="text-[#E8AC43]" />
            <span className="text-[#E8AC43] text-xs font-bold uppercase tracking-widest">
              Payment Confirmed
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold mb-3"
          >
            You're all set! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#A1A1A1] text-sm leading-relaxed mb-8"
          >
            Your subscription has been activated successfully. Enjoy full access
            to all premium features of Fernandoneh.
          </motion.p>

          {/* Info grid */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="grid grid-cols-2 gap-3 mb-8"
          >
            {[
              { label: "Status", value: "Active", color: "#1B7D31" },
              { label: "Plan", value: "Premium", color: "#E8AC43" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#0D0D0D] border border-white/6 rounded-2xl p-4"
              >
                <p className="text-[#A1A1A1] text-xs mb-1">{item.label}</p>
                <p className="font-bold text-sm" style={{ color: item.color }}>
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="space-y-3"
          >
            <Link
              to="/dashboard"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#E8AC43] text-[#111111] font-bold text-sm hover:brightness-110 transition-all"
            >
              <Home size={16} /> Go to Dashboard
            </Link>
            <Link
              to="/dashboard/generate-picks"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-transparent border border-white/10 text-white font-semibold text-sm hover:border-[#E8AC43]/40 transition-all"
            >
              <Ticket size={16} /> Generate Picks{" "}
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </motion.div>

          {/* Auto-redirect notice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[#555] text-xs mt-6"
          >
            Redirecting to subscription page in 10 seconds…
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccessPage;
