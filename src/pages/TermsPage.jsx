import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ScrollText, ChevronDown, ArrowLeft, Shield } from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using Fernandoneh ("the Platform"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access the Platform. These terms apply to all visitors, users, and others who access or use the service.`,
  },
  {
    id: "use",
    title: "2. Use of the Platform",
    content: `You agree to use Fernandoneh solely for lawful purposes. You must not use this Platform in any way that breaches any applicable local, national, or international law or regulation; that is fraudulent, unlawful, or harmful; or to transmit unsolicited commercial communications. You are responsible for ensuring your use of the Platform complies with all applicable laws.`,
  },
  {
    id: "account",
    title: "3. Account Registration",
    content: `To access certain features you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for maintaining the confidentiality of your password and account, and for all activities under your account. Notify us immediately of any unauthorized use of your account.`,
  },
  {
    id: "subscription",
    title: "4. Subscription & Payments",
    content: `Certain features of the Platform are available only through a paid subscription. By subscribing, you authorize us to charge the applicable fees to your chosen payment method. All fees are non-refundable except as required by law. We reserve the right to change subscription fees upon reasonable notice. Your subscription will automatically renew unless cancelled before the renewal date.`,
  },
  {
    id: "ip",
    title: "5. Intellectual Property",
    content: `All content on the Platform, including but not limited to text, graphics, logos, icons, images, audio clips, data compilations, and software, is the property of Fernandoneh or its content suppliers and is protected by international copyright laws. You may not reproduce, duplicate, copy, sell, or exploit any portion of the Platform without our express written permission.`,
  },
  {
    id: "disclaimer",
    title: "6. Disclaimer of Warranties",
    content: `The Platform is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Fernandoneh does not warrant that the Platform will be uninterrupted, error-free, or free of viruses or other harmful components. Lottery number predictions are for entertainment purposes only. We make no guarantee of winning.`,
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    content: `To the maximum extent permitted by law, Fernandoneh shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, or goodwill, arising out of or in connection with your use of the Platform, even if we have been advised of the possibility of such damages.`,
  },
  {
    id: "termination",
    title: "8. Termination",
    content: `We reserve the right to suspend or terminate your account and access to the Platform at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or for any other reason. Upon termination, your right to use the Platform will immediately cease.`,
  },
  {
    id: "governing",
    title: "9. Governing Law",
    content: `These Terms shall be governed and construed in accordance with applicable law, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.`,
  },
  {
    id: "changes",
    title: "10. Changes to Terms",
    content: `We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the date at the top of this page. Your continued use of the Platform after changes constitutes your acceptance of the new Terms. Please review these Terms periodically for changes.`,
  },
];

const AccordionItem = ({ section, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="border border-white/8 rounded-2xl overflow-hidden bg-[#111111] hover:border-[#E8AC43]/20 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-5 text-left group"
      >
        <span className="text-white font-semibold text-sm md:text-base group-hover:text-[#E8AC43] transition-colors">
          {section.title}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#E8AC43] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-[#A1A1A1] text-sm leading-relaxed">
          {section.content}
        </p>
      </motion.div>
    </motion.div>
  );
};

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Hero */}
      <div className="relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8AC43]/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E8AC43]/5 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#A1A1A1] hover:text-[#E8AC43] transition-colors text-sm mb-8"
          >
            <ArrowLeft size={16} /> Back to Register
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E8AC43]/10 border border-[#E8AC43]/20 flex items-center justify-center">
              <ScrollText size={22} className="text-[#E8AC43]" />
            </div>
            <div>
              <p className="text-[#E8AC43] text-xs font-bold uppercase tracking-widest">
                Legal
              </p>
              <h1 className="text-3xl md:text-4xl font-bold">
                Terms &amp; Conditions
              </h1>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-[#A1A1A1] text-sm mt-4"
          >
            Last updated: <span className="text-white">May 31, 2026</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#A1A1A1] text-sm leading-relaxed mt-4 max-w-2xl"
          >
            Please read these Terms and Conditions carefully before using
            Fernandoneh. By using our platform you agree to these terms in full.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {sections.map((section, i) => (
          <AccordionItem key={section.id} section={section} index={i} />
        ))}
      </div>

      {/* Footer note */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="border border-[#E8AC43]/20 bg-[#E8AC43]/5 rounded-2xl p-6 flex items-start gap-4">
          <Shield size={20} className="text-[#E8AC43] flex-shrink-0 mt-0.5" />
          <p className="text-[#A1A1A1] text-sm leading-relaxed">
            If you have questions about these Terms, please{" "}
            <a href="mailto:support@fernandoneh.com" className="text-[#E8AC43] hover:underline">
              contact our support team
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
