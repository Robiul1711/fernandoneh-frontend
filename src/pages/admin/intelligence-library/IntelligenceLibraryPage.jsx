import React from 'react';
import LibraryBanner from '@/components/admin/intelligence-library/LibraryBanner';
import GuideCards from '@/components/admin/intelligence-library/GuideCards';

const IntelligenceLibraryPage = () => {
  return (
    <div className="p-4  space-y-4 sm:space-y-8">
      <LibraryBanner />
      <GuideCards />
    </div>
  );
};

export default IntelligenceLibraryPage;
