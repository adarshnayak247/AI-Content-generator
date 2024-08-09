import React from 'react';

function SearchSection({ onSearchInput }: any) {
  return (
    <div className='p-10 flex flex-col justify-center items-center bg-gray-100 rounded-lg '>
      <h2 className='text-4xl font-bold text-gray-800 mb-4'>
        Browse All Templates
      </h2>
      <p className='text-lg text-gray-600 mb-6'>
        What would you like to create today?
      </p>
      <div className='flex justify-center w-full'>
        <div className='flex gap-2 items-center p-2 w-full max-w-lg'>
          <input
            type='text'
            placeholder='Search'
            className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700'
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
