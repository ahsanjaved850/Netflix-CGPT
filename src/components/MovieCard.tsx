import React from 'react';
import { IMAGE_URL } from '../utils/constants';
import '../utils/style.css';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;  
}

interface MovieCardProps {
    movies: Movie[] | null;
}

const MovieCard: React.FC<MovieCardProps> = ({ movies }) => {
    if (!movies) return null;
    return (
        <div className='flex overflow-x-scroll hide-scrollbar'>
            {movies.map((movie) => (
                <img 
                    key={movie.id}
                    className='mt-6 mx-2 p-1 w-52 h-52 bg-gray-200 rounded-lg hover:bg-gray-400'
                    src={IMAGE_URL + movie.poster_path}
                    alt={movie.title}
                />
            ))}
        </div>
    );
}

export default MovieCard;