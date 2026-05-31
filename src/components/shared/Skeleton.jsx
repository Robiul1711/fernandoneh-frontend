/**
 * Shared skeleton / shimmer components.
 * Import { Skeleton, LotteryGameCardSkeleton, JackpotCardSkeleton } from here.
 */
import React, { useEffect } from "react";
import pattern from "@/assets/images/pattern.png";

/* ------------------------------------------------------------------ */
/*  Inject shimmer CSS once into <head>                                */
/* ------------------------------------------------------------------ */
const shimmerCSS = `
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }
  .skeleton-shimmer {
    background: linear-gradient(
      90deg,
      #1a1a1a 25%,
      #262626 50%,
      #1a1a1a 75%
    );
    background-size: 600px 100%;
    animation: shimmer 1.6s infinite linear;
  }
`;

function injectShimmerCSS() {
  if (typeof document !== "undefined" && !document.getElementById("skeleton-style")) {
    const tag = document.createElement("style");
    tag.id = "skeleton-style";
    tag.textContent = shimmerCSS;
    document.head.appendChild(tag);
  }
}
injectShimmerCSS();

/* ------------------------------------------------------------------ */
/*  Base Skeleton primitive                                             */
/*  Usage: <Skeleton className="h-4 w-32 rounded" />                  */
/* ------------------------------------------------------------------ */
export const Skeleton = ({ className = "" }) => (
  <div className={`skeleton-shimmer ${className}`} />
);

/* ------------------------------------------------------------------ */
/*  LotteryGameCard skeleton                                            */
/* ------------------------------------------------------------------ */
export const LotteryGameCardSkeleton = () => (
  <div
    className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-xl md:rounded-3xl p-4"
    style={{
      backgroundImage: `url(${pattern})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Top row */}
    <div className="flex justify-between items-start gap-3 mb-6">
      <Skeleton className="h-10 w-28 rounded-lg" />
      <div className="flex gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="w-7 h-7 rounded-full" />
        ))}
      </div>
    </div>

    {/* Divider */}
    <div className="w-full h-[1px] bg-white/5 mb-6" />

    {/* Info grid */}
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Skeleton className="h-3 w-24 rounded" />
        <Skeleton className="h-8 w-20 rounded" />
        <Skeleton className="h-2 w-16 rounded" />
      </div>
      <div className="border-l border-white/5 pl-4 space-y-4">
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-20 rounded" />
          <Skeleton className="h-2 w-28 rounded" />
        </div>
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-20 rounded" />
          <Skeleton className="h-2 w-28 rounded" />
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  JackpotCard skeleton (larger featured card)                         */
/* ------------------------------------------------------------------ */
export const JackpotCardSkeleton = () => (
  <div
    className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-[20px] xl:rounded-[32px] p-4 lg:p-5 xl:p-8"
    style={{
      backgroundImage: `url(${pattern})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Top row */}
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 xl:mb-10 gap-3 xl:gap-6">
      <Skeleton className="h-8 lg:h-10 xl:h-12 w-36 rounded-lg" />
      <div className="flex gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="w-6 h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9 rounded-full" />
        ))}
      </div>
    </div>

    {/* Bottom grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 xl:gap-8 items-end">
      {/* Jackpot amount */}
      <div className="lg:col-span-3 space-y-2">
        <Skeleton className="h-3 w-28 rounded" />
        <Skeleton className="h-10 xl:h-14 w-24 xl:w-32 rounded" />
        <Skeleton className="h-4 w-16 rounded" />
      </div>

      {/* Separator */}
      <div className="hidden lg:block lg:col-span-1" />

      {/* Draw info */}
      <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4 lg:gap-3 xl:gap-5">
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-20 rounded" />
          <Skeleton className="h-2 w-32 rounded" />
        </div>
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-24 rounded" />
          <Skeleton className="h-2 w-32 rounded" />
        </div>
      </div>

      {/* Separator */}
      <div className="hidden lg:block lg:col-span-1" />

      {/* Timer boxes */}
      <div className="lg:col-span-4 flex gap-1.5 xl:gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton
            key={i}
            className="flex-1 aspect-square rounded-lg xl:rounded-2xl"
          />
        ))}
      </div>
    </div>
  </div>
);
