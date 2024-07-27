import React from 'react';
import { IMAGE_URL } from '../utils/constants';
import '../utils/style.css';
import { useNavigate } from 'react-router-dom';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;  
}

interface MovieCardProps {
    movies: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movies }) => {
    const navigate = useNavigate()
    const handleMovie = () => {
        navigate(`/browse/movie/${movies.id}`)
      };

    if (!movies) return null;
    return (
            <div className='mt-6 mx-1 p-1 bg-gray-200 rounded-lg hover:bg-gray-400 flex-shrink-0 cursor-pointer'>
                <img
                    className='w-44 h-44 hover:bg-gray-400 md:w-[200x] md:h-[200px]' 
                    src={IMAGE_URL + movies.poster_path}
                    alt={movies.title}
                    onClick={handleMovie}
                />
            </div>
    );
}

export default MovieCard;