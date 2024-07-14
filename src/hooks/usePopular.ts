import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/appStore";
import { addPopularMovie } from "../utils/moviesSlice";

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}
interface popularResponse {
  results: Movie[];
}

const usePopular = () => {
  const dispatch = useDispatch<AppDispatch>()
    const popular = async () => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
            const json: popularResponse = await data.json()
            dispatch(addPopularMovie(json.results))
            // console.log(json.results)
        }catch(error){
            console.log(error)
        }
    }
  useEffect(() => {
    popular();
  }, [])
}
export default usePopular;