import React, { useEffect, useState } from 'react';
import { IMAGE_URL } from '../utils/constants';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import movieInfo from '../utils/movieInfo';

interface genres {
    id: number,
    name: string
}
interface MovieResult {
  title: string;
  vote_average: number;
  tagline: string;
  runtime: number;
  poster_path: string;
  overview: string;
  genres: genres[];
}

const MoviePage: React.FC = () => {
    const [movie, setMovie] = useState<MovieResult | undefined>(undefined);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate()

    useEffect(() => {
        if(id){
        const fetchMovie = async () => {
            const movieData = await movieInfo(parseInt(id));
            if(movieData){
                setMovie(movieData);
            }
        };
        fetchMovie()
    }
    }, [id]);
   
    if(!movie) return;
    const {title, vote_average, runtime, poster_path, genres, tagline, overview} = movie

    const genreNames = genres.map(genre => genre.name).join(', ');
    const handleReturn = () => {
        navigate("/browse")
    }

    return (
        <div>
            <Header />
            <div className='pt-4 w-max-screen h-min-screen grid grid-flow-col col-span-12 bg-black'>
                <div className='grid-cols-6'>
                    <img className='ml-3 w-cover h-1/2 sm:h-full md:w-3/2 md:h-fit' src={IMAGE_URL + poster_path} alt="poster" />
                </div>
                <div className='text-white grid-cols-6 ml-6 sm:ml-4 md:ml-6'>
                    <h1 className='font-bold text-3xl py-2'>{title}</h1>
                    <h3 className='py-2 font-semibold'>Ratings: {vote_average}</h3>
                    <h3 className='py-2 font-semibold'>Runtime: {runtime} mins</h3>
                    <h3 className='py-2 font-semibold'>Genres: {genreNames}</h3>
                    <h3 className='py-2 font-semibold'>Tagline: {tagline}</h3>
                    <h2 className='w-3/2 md:w-1/2 py-2 font-semibold'>Overview: {overview}</h2>
                    <button className='bg-red-600 px-6 py-2 mt-10 font-semibold text-md hover:bg-red-800' onClick={handleReturn}>Return</button>
                </div>
            </div>
         </div>
  );
};

export default MoviePage;