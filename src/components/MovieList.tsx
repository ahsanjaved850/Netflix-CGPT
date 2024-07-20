import React from 'react'
import MovieCard from './MovieCard'

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;  
}

interface MovieListProps {
  movies: Movie[] | Movie | null;
  title: string
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
  if (!movies) return null

  const moviesArray = Array.isArray(movies) ? movies : [movies];

  return (
    <div className='ml-8'>    
      <h1 className='mt-4 font-bold text-3xl text-white'>{title}</h1>
      <div>
        <MovieCard movies={moviesArray}/>
      </div>
    </div>
  ) 
}

export default MovieList
