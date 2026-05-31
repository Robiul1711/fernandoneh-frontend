import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShieldCheck, ChevronDown, ArrowLeft, Lock, Eye, Database, UserCheck } from "lucide-react";

const sections = [
  {
    id: "overview",
    icon: <Eye size={18} className="text-[#E8AC43]" />,
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us when you register for an account, subscribe to our service, or contact us for support. This includes your name, email address, payment information, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our Platform, including IP address, browser type, operating system, referring URLs, and pages visited.`,
  },
  {
    id: "usage",
    icon: <Database size={18} className="text-[#E8AC43]" />,
    title: "2. How We Use Your Information",
    content: `We use the information we collect to provide, maintain, and improve our services; process transactions and send related information including purchase confirmations and invoices; send promotional communications, such as information about products, features, and events offered by Fernandoneh; respond to your comments, questions, and requests; and monitor and analyze trends, usage, and activities in connection with our Platform.`,
  },
  {
    id: "sharing",
    icon: <UserCheck size={18} className="text-[#E8AC43]" />,
    title: "3. Information Sharing",
    content: `We do not share, sell, or rent your personal information to third parties for their marketing purposes without your explicit consent. We may share your information with third-party vendors and service providers that perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services. These third parties are bound by contractual obligations to keep personal information confidential.`,
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking Technologies",
    content: `We use cookies and similar tracking technologies to track activity on our Platform and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our Platform may not function properly.`,
  },
  {
    id: "security",
    icon: <Lock size={18} className="text-[#E8AC43]" />,
    title: "5. Data Security",
    content: `We take the security of your personal data seriously and use appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing and against accidental loss, destruction, or damage. We use industry-standard encryption (SSL/TLS) to protect your data in transit. However, no method of transmission over the Internet is 100% secure.`,
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: `We retain personal information we collect from you where we have an ongoing legitimate business need to do so (for example, to provide you with a service you have requested or to comply with applicable legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.`,
  },
  {
    id: "rights",
    title: "7. Your Rights",
    content: `You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain types of processing, and to data portability. To exercise any of these rights, please contact us at support@fernandoneh.com. We will respond to your request within 30 days. We may need to verify your identity before fulfilling your request.`,
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: `Our Platform is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions to remove that information from our servers.`,
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes are effective when they are posted on this page.`,
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us at: support@fernandoneh.com. We take all privacy inquiries seriously and will respond within a reasonable timeframe.`,
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
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <div className="flex items-center gap-3">
          {section.icon && <span className="flex-shrink-0">{section.icon}</span>}
          <span className="text-white font-semibold text-sm md:text-base group-hover:text-[#E8AC43] transition-colors">
            {section.title}
          </span>
        </div>
        <ChevronDown
          size={18}
          className={`text-[#E8AC43] flex-shrink-0 ml-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Hero */}
      <div className="relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#4A90E2]/5 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 py-16 ">
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
            <div className="w-12 h-12 rounded-2xl bg-[#4A90E2]/10 border border-[#4A90E2]/20 flex items-center justify-center">
              <ShieldCheck size={22} className="text-[#4A90E2]" />
            </div>
            <div>
              <p className="text-[#4A90E2] text-xs font-bold uppercase tracking-widest">
                Legal
              </p>
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
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
            Your privacy matters to us. This policy explains how Fernandoneh
            collects, uses, and protects your personal information when you use
            our platform.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          >
            {[
              { icon: <Lock size={18} />, label: "End-to-End Encrypted" },
              { icon: <Eye size={18} />, label: "No Data Selling" },
              { icon: <Database size={18} />, label: "GDPR Compliant" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#111111] border border-white/8 rounded-xl px-4 py-3"
              >
                <span className="text-[#4A90E2]">{item.icon}</span>
                <span className="text-white text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {sections.map((section, i) => (
          <AccordionItem key={section.id} section={section} index={i} />
        ))}
      </div>

      {/* Footer note */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="border border-[#4A90E2]/20 bg-[#4A90E2]/5 rounded-2xl p-6 flex items-start gap-4">
          <ShieldCheck size={20} className="text-[#4A90E2] flex-shrink-0 mt-0.5" />
          <p className="text-[#A1A1A1] text-sm leading-relaxed">
            Questions about your privacy?{" "}
            <a href="mailto:support@fernandoneh.com" className="text-[#4A90E2] hover:underline">
              Contact our privacy team
            </a>{" "}
            and we'll get back to you within 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
