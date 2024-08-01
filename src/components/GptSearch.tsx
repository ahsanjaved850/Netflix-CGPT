import React from 'react';
import GptSearchBar from './GptSearchBar';
import { BACKGROUND_URL } from '../utils/constants';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearch: React.FC = () => {
  return (
    <div>
      <div className='fixed bottom-0 top-0 right-0 left-0'>
        <img className="w-full h-full object-cover" src={BACKGROUND_URL} alt="background" />
      </div>
        <div>
          <GptSearchBar />
          <GptMovieSuggestion />
        </div>
    </div>
  );
};

export default GptSearch;