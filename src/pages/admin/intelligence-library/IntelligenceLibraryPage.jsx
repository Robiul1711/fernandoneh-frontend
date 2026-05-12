import React from 'react';
import LibraryBanner from '@/components/admin/intelligence-library/LibraryBanner';
import GuideCards from '@/components/admin/intelligence-library/GuideCards';

const IntelligenceLibraryPage = () => {
  return (
    <div className="p-6 space-y-8">
      <LibraryBanner />
      <GuideCards />
    </div>
  );
};

export default IntelligenceLibraryPage;
