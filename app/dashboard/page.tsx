"use client";
import React, { useState } from 'react';
import SearchSection from './_components/SearchSection';
import TemplateListSection from './_components/TemplateListSection';

function Dashboard() {
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <div>
      <SearchSection onSearchInput={(value: string) => setSearchInput(value)} />
      <TemplateListSection userSearchInput={searchInput} />
    </div>
  );
}

export default Dashboard;
