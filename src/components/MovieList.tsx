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
  const filteredMovies = moviesArray.filter(movie => movie.poster_path);

  return (
    <div className='ml-2 md:ml-8'>    
      <h1 className='mt-4 font-semibold text-lg text-white md:text-3xl md:font-bold'>{title}</h1>
      <div className='flex overflow-x-scroll hide-scrollbar'>
        {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movies={movie} />
          ))}
      </div>
    </div>
  ) 
}

export default MovieList
