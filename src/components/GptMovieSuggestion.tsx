import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../utils/appStore'
import MovieList from './MovieList'

const GptMovieSuggestion : React.FC = () => {

  const gpt = useSelector((store : RootState) => store.gpt)
  const { movieResults, moviesNames } = gpt
  if (!moviesNames || !movieResults) return null

  return (
    <div className='absolute p-4 pb-6 m-6 bg-black text-white'>
      <div>
        {
          moviesNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestion
