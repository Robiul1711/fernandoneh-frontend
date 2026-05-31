import React, { useState } from "react";
import { motion } from "motion/react";
import { Crown, Calendar, CheckCircle2, AlertCircle, X, Loader2 } from "lucide-react";
import useClient from "@/hooks/useClient";
import useMutationClient from "@/hooks/useMutationClient";

const Subscription = () => {
  const [showCancelModal, setShowCancelModal] = useState(false);

  // 1. Fetch active plans from /plan
  const { data: plansData, isLoading: isPlansLoading } = useClient({
    queryKey: ["plans"],
    url: "/plans",
    isPrivate: true,
  });

  // 2. Fetch current subscription from /subscriptions/current
  const { data: currentSubResponse, isLoading: isSubLoading, refetch: refetchSub } = useClient({
    queryKey: ["currentSubscription"],
    url: "/subscriptions/current",
    isPrivate: true,
  });

  const currentSub = currentSubResponse?.data;
  const isPremiumActive = currentSub && currentSub.status === "active";

  // 3. Checkout Mutation to /subscriptions/checkout
  const { mutate: checkoutMutate, isPending: isCheckoutPending } = useMutationClient({
    url: "/subscriptions/checkout",
    method: "post",
    isPrivate: true,
    successMessage: "Redirecting to checkout...",
  });

  // 4. Cancel Mutation to /subscriptions/cancel
  const { mutate: cancelMutate, isPending: isCancelPending } = useMutationClient({
    url: "/subscriptions/cancel",
    isPrivate: true,
    successMessage: "Subscription cancelled successfully!",
    invalidateKeys: [["currentSubscription"]],
  });

  const handlePlanAction = (plan) => {
    console.log("click")
    // Call checkout api for paid plans
    const formData = new FormData();
    formData.append("plan_id", plan.id);

    checkoutMutate(
      { data: formData },
      {
        onSuccess: (res) => {
          const checkoutUrl = res?.data?.checkout_url || res?.checkout_url || res?.data?.data?.checkout_url;
          if (checkoutUrl) {
            window.location.href = checkoutUrl;
          }
        },
      }
    );
  };

  const handleConfirmCancel = () => {
    cancelMutate(
      {},
      {
        onSuccess: () => {
          setShowCancelModal(false);
          refetchSub();
        },
      }
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  const startDate = isPremiumActive ? formatDate(currentSub.starts_at) : "N/A";
  const renewalDate = isPremiumActive ? formatDate(currentSub.ends_at) : "N/A";

  const apiPlans = plansData?.data || [];

  const displayPlans = [
   
    ...apiPlans.map((p) => ({
      id: p.id,
      name: p.name,
      price: parseFloat(p.amount),
      period: `per ${p.interval}`,
      features: p.features || [],
      buttonLabel: isPremiumActive && currentSub.plan_id === p.id ? "Current Plan" : "Upgrade Plan",
      isActive: isPremiumActive && currentSub.plan_id === p.id,
      isFree: false,
    })),
  ];

  if (isPlansLoading || isSubLoading) {
    return (
      <div className="min-h-[80vh] bg-[#0D0D0D] flex items-center justify-center">
        <Loader2 className="text-[#E8AC43] animate-spin" size={36} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        {/* Header */}
        <div className="mb-2">
          <h1 className="text-white text-2xl font-bold">Subscription</h1>
          <p className="text-[#A1A1A1] text-sm mt-1">
            Manage your plan and billing details
          </p>
        </div>

        {/* Current Plan Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#141414] border border-[#2A2A2A] rounded-2xl p-6"
        >
          {/* Plan Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#E8AC43]/15 p-2.5 rounded-xl border border-[#E8AC43]/20">
              <Crown className="text-[#E8AC43]" size={22} />
            </div>
            <div>
              <p className="text-white font-bold text-base">
                {isPremiumActive ? (currentSub?.plan?.name || "Premium") : "Free"}
              </p>
              <p className="text-[#A1A1A1] text-xs">Current plan</p>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Start Date */}
            <div>
              <label className="text-[#A1A1A1] text-xs font-medium mb-2 block">
                Start Date
              </label>
              <div className="flex items-center justify-between bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3">
                <span className="text-white text-sm font-medium">
                  {startDate}
                </span>
                <Calendar className="text-[#A1A1A1]" size={18} />
              </div>
            </div>

            {/* Renewal Date */}
            <div>
              <label className="text-[#A1A1A1] text-xs font-medium mb-2 block">
                Next Renewal Date
              </label>
              <div className="flex items-center justify-between bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3">
                <span className="text-white text-sm font-medium">
                  {renewalDate}
                </span>
                <Calendar className="text-[#A1A1A1]" size={18} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {displayPlans.map((plan, index) => {
            const isSelected = plan.isActive;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.07 }}
                className={`relative bg-[#141414] rounded-2xl p-6 border transition-all duration-300 ${
                  isSelected
                    ? "border-[#E8AC43]/40 shadow-[0_0_24px_rgba(232,172,67,0.08)]"
                    : "border-[#2A2A2A]"
                }`}
              >
                {/* Active Badge */}
                {isSelected && (
                  <span className="absolute top-4 right-4 bg-[#1B7D31] text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                    Active
                  </span>
                )}

                {/* Plan Name */}
                <p className="text-[#A1A1A1] text-sm font-medium mb-2">
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-white text-4xl font-bold">
                    ${plan.price}
                  </span>
                  <span className="text-[#A1A1A1] text-sm">
                    /{plan.period}
                  </span>
                </div>

                {/* Button */}
                <button
                  onClick={() => handlePlanAction(plan)}
                  // disabled={isSelected || isCheckoutPending}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 mb-5 ${
                    isSelected
                      ? "bg-[#1B7D31] text-white cursor-default"
                      : "bg-transparent border border-[#3A3A3A] text-white hover:border-[#E8AC43]/50 hover:bg-[#E8AC43]/5"
                  }`}
                >
                  {isCheckoutPending ? "Processing..." : plan.buttonLabel}
                </button>

                {/* Features */}
                <ul className="space-y-2.5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-[#1B7D31] flex-shrink-0"
                      />
                      <span className="text-white text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Cancel Subscription Section */}
        {isPremiumActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#141414] border border-[#2A2A2A] rounded-2xl p-6"
          >
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="text-[#E05252] flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="text-white font-semibold text-sm">
                  Cancel Subscription
                </h3>
                <p className="text-[#A1A1A1] text-xs mt-1 leading-relaxed">
                  Subscribe to access advanced features and make the most out of
                  your experience.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowCancelModal(true)}
              className="mt-2 bg-[#E05252] hover:bg-[#E05252]/90 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_16px_rgba(224,82,82,0.25)]"
            >
              Cancel Subscription
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#141414] border border-[#2A2A2A] rounded-2xl p-7 max-w-sm w-full shadow-2xl"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">Cancel Plan?</h3>
              <button
                onClick={() => setShowCancelModal(false)}
                className="text-[#A1A1A1] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-[#A1A1A1] text-sm leading-relaxed mb-6">
              Are you sure you want to cancel your Premium subscription? You'll
              lose access to all premium features at the end of your billing
              period.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCancelModal(false)}
                disabled={isCancelPending}
                className="flex-1 py-2.5 rounded-xl border border-[#3A3A3A] text-white text-sm font-semibold hover:border-[#555] transition-all disabled:opacity-50"
              >
                Keep Plan
              </button>
              <button
                onClick={handleConfirmCancel}
                disabled={isCancelPending}
                className="flex-1 py-2.5 rounded-xl bg-[#E05252] hover:bg-[#E05252]/90 text-white text-sm font-semibold transition-all disabled:opacity-50 flex items-center justify-center"
              >
                {isCancelPending ? "Cancelling..." : "Yes, Cancel"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
