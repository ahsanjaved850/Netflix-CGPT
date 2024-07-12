import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';
import useMovieVideo from '../hooks/useMovieVideo';

interface Movie {
    id: number,
    title: string;
    overview: string;
    poster_path: string;  
  }

const MainContainer: React.FC = () => {
    
    const movies = useSelector((store: RootState) => store.movies?.nowPlayingMovies) as Movie[] | undefined;

    // Call useMovieVideo hook with a default value or an initial check
    const mainMovie = movies ? movies[0] : null;
    const id = mainMovie ? mainMovie.id : -1;
    const key = useMovieVideo(id);

    if (!movies) return;

    const { title, overview } = mainMovie!;
   
    return (
            <div>
                <div>
                <iframe
                    className='w-full aspect-video absolute'
                    src={"https://www.youtube.com/embed/" + key + "?&autoplay=1&mute=1"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                >
                </iframe>
                </div>
                <div className='p-4 w-1/2 my-96 px-10 absolute bg-gradient-to-r from-black text-white'>
                    <p className='font-bold text-3xl'>{title}</p>
                    <p className='text-lg w-full py-4'>{overview}</p>
                    <button className='cursor-pointer  bg-gray-200 text-black font-bold px-5 py-1 rounded-md hover:bg-opacity-80'>Play</button>
                    <button className='cursor-pointer ml-1 bg-gray-500 text-white px-5 py-1 rounded-md hover:bg-opacity-80'>More info</button>
                </div>
            </div>
    );
}

export default MainContainer;