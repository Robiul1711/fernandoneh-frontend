import React from 'react';
import { Brain, Flame, Snowflake } from 'lucide-react';

const AIAnalysis = () => {
  const hotNumbers = [12, 23, 34, 45, 56];
  const coldNumbers = [12, 23, 34, 45, 56];

  return (
    <div className="bg-[#161616] border border-[#1A1A1A] rounded-3xl p-6 h-full">
      <div className="flex items-center gap-2 text-[#4ADE80] mb-8">
        <Brain size={18} />
        <h3 className="text-sm font-bold uppercase tracking-wider">AI Analysis</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative flex justify-center">
          {/* Circular Progress (Gauge) */}
          <div className="relative w-40 h-40">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                className="text-[#1A1A1A]"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="10"
                strokeDasharray={440}
                strokeDashoffset={440 - (440 * 96) / 100}
                strokeLinecap="round"
                fill="transparent"
                className="text-[#1B7D31]"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white text-3xl font-bold">96%</span>
              <span className="text-[#4ADE80] text-[10px] font-bold uppercase">Optimized</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-red-500 mb-3">
              <Flame size={14} />
              <span className="text-sm font-bold">Hot Numbers</span>
            </div>
            <div className="flex gap-2">
              {hotNumbers.map((num, i) => (
                <span key={i} className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-white text-xs font-bold">
                  {num}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-blue-400 mb-3">
              <Snowflake size={14} />
              <span className="text-sm font-bold">Cold Numbers</span>
            </div>
            <div className="flex gap-2">
              {coldNumbers.map((num, i) => (
                <span key={i} className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-white text-xs font-bold">
                  {num}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysis;
