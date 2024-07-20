import React, { useRef } from 'react'
import lang, { LangKey } from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../utils/appStore';
import { addGptMovieResults } from '../utils/gptSlice';
import { GptSearch } from '../hooks/gptSearch';


const GptSearchBar: React.FC = () => {
    const langKey = useSelector((store : RootState) => store.config.lang) as  LangKey
    const searchText = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch<AppDispatch>()

    const gpt = async () => {
    if (searchText.current?.value) {
      const results = await GptSearch(searchText.current.value);
      dispatch(addGptMovieResults({ moviesNames: results.gptMovies, movieResults: results.tmbdResults }));
    }
  };
  

  return (
    <div className='relative top-2 ml-[550px]'>
        <form className='w-[600px] bg-black grid grid-cols-12 rounded-3xl'
        onSubmit={(e) => e.preventDefault()}
        >
            <input
                ref={searchText}
                type='text'
                className='p-4 m-4 mr-1 col-span-10 rounded-lg'
                placeholder={lang[langKey].searchPlaceholder}
            />
            <button className='font-semibold text-lg col-span-2 p-2 mx-1 mr-4 my-4 bg-red-600 text-white rounded-lg'
              onClick={gpt}
            >
                {lang[langKey].search}
            </button>
      </form>
    </div>
  )
}

export default GptSearchBar;