import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

// Import sub-components
import GenerateForm from './GenerateForm';
import InsightBox from './InsightBox';
import ResultsBox from './ResultsBox';
import useClient from '@/hooks/useClient';
import useMutationClient from '@/hooks/useMutationClient';

const GeneratePicks = () => {
  const [selectedGame, setSelectedGame] = useState('Power Ball');
  const [numSuggestions, setNumSuggestions] = useState('3');
  const [pickType, setPickType] = useState('smart'); // 'smart' or 'quick'
  const [isGenerated, setIsGenerated] = useState(false);
  const [generatedData, setGeneratedData] = useState(null);

  // Fetch games to resolve lottery_id dynamically
  const { data: gamesData } = useClient({
    queryKey: ['lotterygames'],
    url: '/lotteries',
    isPrivate: true,
  });

  const { mutate, isPending } = useMutationClient({
    url: '/lotteries/generate',
    isPrivate: true,
  });

  const handleGenerate = () => {
    const selectedLottery = gamesData?.data?.find(item => item.name === selectedGame);
    const lotteryId = selectedLottery?.id || 2;

    const payload = {
      lottery_id: lotteryId,
      mode: pickType === 'smart' ? 'smart_system' : 'quick',
      total_sets: parseInt(numSuggestions, 10),
    };

    mutate(
      { data: payload },
      {
        onSuccess: (res) => {
          const responseData = res?.data;
          if (responseData?.success) {
            setGeneratedData(responseData.data);
            setIsGenerated(true);
          }
        },
      }
    );
  };


  // Extract number insights from API response, falling back to original mock numbers
  const hotNumbers = generatedData?.insights?.hot_numbers || 
                     generatedData?.insights?.hotNumbers || 
                     [63, 64, 18, 21, 28, 36, 6, 52];

  const hotPowerball = generatedData?.insights?.hot_special_numbers || 
                       generatedData?.insights?.hot_special_number || 
                       generatedData?.insights?.hotPowerball || 
                       generatedData?.insights?.hot_powerballs || 
                       [63, 64, 18];

  const overdueNumbers = generatedData?.insights?.overdue_numbers || 
                         generatedData?.insights?.overdueNumbers || 
                         [67, 44, 1, 15, 34, 26, 8, 51];

  const overduePowerball = generatedData?.insights?.overdue_special_numbers || 
                           generatedData?.insights?.overdue_special_number || 
                           generatedData?.insights?.overduePowerball || 
                           generatedData?.insights?.overdue_powerballs || 
                           [67, 44, 1];

  // Map generated sets if available, otherwise use initial placeholder structure
  const generatedSets = generatedData?.generated_numbers?.map((set, idx) => ({
    id: idx + 1,
    numbers: set.main_numbers,
    powerball: set.special_number
  })) || [
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
          isLoading={isPending}
        />
        
        <InsightBox 
          isGenerated={isGenerated}
          pickType={pickType}
          hotNumbers={hotNumbers}
          hotPowerball={hotPowerball}
          overdueNumbers={overdueNumbers}
          overduePowerball={overduePowerball}
          insight={generatedData?.insight}
          insights={generatedData?.insights}
        />
      </div>

      {/* Bottom Section: Results */}
      <ResultsBox 
        isGenerated={isGenerated}
        selectedGame={selectedGame}
        pickType={pickType}
        generatedSets={generatedSets}
        image={generatedData}
        confidenceScore={generatedData?.confidence_score}
      />
    </div>
  );
};

export default GeneratePicks;
