import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { XCircle, ArrowLeft, RefreshCw, Headphones, AlertTriangle } from "lucide-react";

const PaymentCancelPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center relative overflow-hidden px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E93737]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#E8AC43]/5 blur-[60px] pointer-events-none" />

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
            initial={{ scale: 0, rotate: 20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 14 }}
            className="w-24 h-24 rounded-full bg-[#E93737]/10 border-2 border-[#E93737]/30 flex items-center justify-center mx-auto mb-6 relative"
          >
            <XCircle size={44} className="text-[#E93737]" />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-[#E93737]/20"
            />
          </motion.div>

          {/* Warning badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E93737]/10 border border-[#E93737]/20 mb-4"
          >
            <AlertTriangle size={13} className="text-[#E93737]" />
            <span className="text-[#E93737] text-xs font-bold uppercase tracking-widest">
              Payment Cancelled
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold mb-3"
          >
            Payment Not Completed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#A1A1A1] text-sm leading-relaxed mb-8"
          >
            Your payment was cancelled and no charges were made. You can try again
            anytime or contact our support team if you ran into an issue.
          </motion.p>

          {/* Reason list */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="bg-[#0D0D0D] border border-white/6 rounded-2xl p-5 text-left mb-8"
          >
            <p className="text-[#A1A1A1] text-xs font-semibold uppercase tracking-wider mb-3">
              Common reasons for cancellation
            </p>
            <ul className="space-y-2">
              {[
                "Closed the payment window",
                "Card declined or insufficient funds",
                "Session expired",
                "Changed your mind",
              ].map((reason, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-[#A1A1A1]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E93737] flex-shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="space-y-3"
          >
            <Link
              to="/dashboard/subscription"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#E8AC43] text-[#111111] font-bold text-sm hover:brightness-110 transition-all"
            >
              <RefreshCw size={16} /> Try Again
            </Link>
            <Link
              to="/dashboard"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-transparent border border-white/10 text-white font-semibold text-sm hover:border-[#E8AC43]/40 transition-all"
            >
              <ArrowLeft size={16} /> Back to Dashboard
            </Link>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 flex items-center justify-center gap-2 text-[#555] text-xs"
          >
            <Headphones size={13} />
            <span>
              Need help?{" "}
              <a
                href="mailto:support@fernandoneh.com"
                className="text-[#E8AC43] hover:underline"
              >
                Contact support
              </a>
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentCancelPage;
