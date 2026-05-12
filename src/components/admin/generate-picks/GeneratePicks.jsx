import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

// Import sub-components
import GenerateForm from './GenerateForm';
import InsightBox from './InsightBox';
import ResultsBox from './ResultsBox';

const GeneratePicks = () => {
  const [selectedGame, setSelectedGame] = useState('Power Ball');
  const [numSuggestions, setNumSuggestions] = useState('3');
  const [pickType, setPickType] = useState('smart'); // 'smart' or 'quick'
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerated(true);
  };

  // Mock data for insights
  const hotNumbers = [63, 64, 18, 21, 28, 36, 6, 52];
  const hotPowerball = [63, 64, 18];
  const overdueNumbers = [67, 44, 1, 15, 34, 26, 8, 51];
  const overduePowerball = [67, 44, 1];

  // Mock data for generated sets
  const generatedSets = [
    { id: 1, numbers: [1, 2, 4, 6, 8], powerball: 6 },
    { id: 2, numbers: [1, 2, 4, 6, 8], powerball: 6 },
    { id: 3, numbers: [1, 2, 4, 6, 8], powerball: 6 },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6 bg-[#0D0D0D] min-h-screen">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 text-[#E8AC43] mb-1">
          <Sparkles size={20} />
          <h1 className="text-xl md:text-2xl font-bold uppercase tracking-tight">Your Generated Numbers</h1>
        </div>
        <p className="text-[#A1A1A1] text-sm font-medium">Use AI-powered analysis to generate smarter number combinations.</p>
      </motion.div>

      {/* Top Section: Form and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GenerateForm 
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
          numSuggestions={numSuggestions}
          setNumSuggestions={setNumSuggestions}
          pickType={pickType}
          setPickType={setPickType}
          handleGenerate={handleGenerate}
        />
        
        <InsightBox 
          isGenerated={isGenerated}
          pickType={pickType}
          hotNumbers={hotNumbers}
          hotPowerball={hotPowerball}
          overdueNumbers={overdueNumbers}
          overduePowerball={overduePowerball}
        />
      </div>

      {/* Bottom Section: Results */}
      <ResultsBox 
        isGenerated={isGenerated}
        selectedGame={selectedGame}
        pickType={pickType}
        generatedSets={generatedSets}
      />
    </div>
  );
};

export default GeneratePicks;
