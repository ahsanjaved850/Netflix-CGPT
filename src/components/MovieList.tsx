import React from 'react'
import MovieCard from './MovieCard';


interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;  
}

interface MovieListProps {
    movies: Movie[];
    title: string
}

const MovieList : React.FC<MovieListProps> = ({title ,movies }) => {
    if(!movies) return;
  return (
    <div className='ml-8'>    
        <h1 className='mt-4 font-bold text-3xl text-white overflow-hidden'>{title}</h1>
        <div>
            <MovieCard movies={movies}/>
        </div>
    </div>
  ) 
}

export default MovieList