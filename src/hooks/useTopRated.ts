import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/appStore";
import { addTopRated } from "../utils/moviesSlice";

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}
interface topRatedResponse {
  results: Movie[]
}

const useTopRated = () => {
  const dispatch = useDispatch<AppDispatch>()
    
    const topRated = async () => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
            const json: topRatedResponse = await data.json()
            dispatch(addTopRated(json.results))
        }catch(error){
            console.log(error)
        }
    }
  useEffect(() => {
    topRated();
  }, [])
}
export default useTopRated;