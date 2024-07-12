import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/appStore";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


// type for a single movie object
interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;  
}

// the response type from the API
interface NowPlayingResponse {
  results: Movie[];
}

const useNowPlayingMovies = () => {
    const dispatch = useDispatch<AppDispatch>()
    

    const getNowPlayingMovies = async () => {
        try {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );
        const json: NowPlayingResponse = await response.json();
        dispatch(addNowPlayingMovies(json.results))
        // console.log(json.results)
        } catch (error) {
        console.error("Error fetching now playing movies:", error);
        }
    }
    useEffect(() => {
        getNowPlayingMovies();
    }, [])  
}

export default useNowPlayingMovies;