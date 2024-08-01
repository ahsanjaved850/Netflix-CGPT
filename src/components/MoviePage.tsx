import React, { useEffect, useState } from 'react';
import { IMAGE_URL } from '../utils/constants';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import movieInfo from '../utils/movieInfo';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';

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
    const showGptSearch = useSelector((store: RootState) => store.gpt?.showGptSearch)
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
            {showGptSearch ? (
            <GptSearch />
            ) : (
            <div className='absolute top-20 pt-4 w-max-screen h-max-screen md:h-max-screen md:flex bg-black'>
                <div className='w-full md:w-[50%] md:h-screen'>
                    <img className='px-6 md:ml-6 w-full h-[400px] md:h-[80%] md:w-inherit' src={IMAGE_URL + poster_path} alt="poster" />
                </div>
                <div className='text-white px-4 w-full ml-4 md:ml-6 md:w-8/12 md:h-screen'>
                    <div className='grid grid-flow-col col-span-2 w-full md:w-9/12'>
                        <div className='grid-cols-1'>
                            <h1 className='font-semibold text-lg md:font-bold md:text-3xl py-2'>{title}</h1>
                            <h2 className='mt-4 font-sm py-2 md:font-normal text-left'>{overview}</h2>
                        </div>
                        <div className='grid-cols-1 w-fit text-gray-500 font-normal mt-14 ml-10 p-4 border-gray-500 border-l-2'>
                            <h3 className='py-2'>Genres: <span className='text-white'>{genreNames}</span></h3>
                            <h3 className='py-2'>Ratings: <span className='text-white'>{vote_average}</span></h3>
                            <h3 className='py-2'>Tagline: <span className='text-white'>{tagline}</span></h3>
                            <h3 className='py-2'>Runtime: <span className='text-white'>{runtime} mins</span></h3>
                        </div>
                    </div>
                    <button className='bg-red-600 px-6 py-2 mt-10 font-normal text-md hover:bg-red-800 rounded-md' onClick={handleReturn}>Return</button>
                </div>
            </div>)}
         </div>
  );
};

export default MoviePage;