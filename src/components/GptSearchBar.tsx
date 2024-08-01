import React, { useRef } from 'react';
import lang, { LangKey } from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../utils/appStore';
import { addGptMovieResults } from '../utils/gptSlice';
import { GptSearch } from '../utils/gptSearch';

const GptSearchBar: React.FC = () => {
  const langKey = useSelector((store: RootState) => store.config.lang) as LangKey;
  const searchText = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const gpt = async () => {
    if (searchText.current?.value) {
      const results = await GptSearch(searchText.current.value);
      dispatch(addGptMovieResults({ moviesNames: results.gptMovies, movieResults: results.tmbdResults }));
    }
  };

  return (
    <div className="relative max-[768px]:top-28 top-20 mx-auto w-full max-w-2xl p-4">
      <form
        className="max-[380px]:w-full w-full bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 p-4 m-4 mr-1 rounded-md"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          className="col-span-3 p-2 mx-1 mr-4 my-4 bg-red-600 text-white rounded-md font-semibold text-lg"
          onClick={gpt}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
