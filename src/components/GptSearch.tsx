import React from 'react'
import GptSearchBar from './GptSearchBar';
import { BACKGROUND_URL} from '../utils/constants';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearch : React.FC = () => {
  return (
    <div>
      <div className='fixed bottom-0'>
        <img className='w-screen h-screen object-cover' src={BACKGROUND_URL} alt='background'/>
      </div>
      <div>
        <GptSearchBar /> 
        <GptMovieSuggestion />
      </div>
    </div>
  )
}

export default GptSearch;