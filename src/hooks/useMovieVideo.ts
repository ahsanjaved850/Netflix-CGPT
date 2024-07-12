import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieVideo = (id: number) => {
    const [key, setKey] = useState<string | null>(null);
    
    const playMovie = async () => {
        try {
            if (id === -1) return;
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
            const json = await data.json();
            const trailers = json.results.filter((trail : {name : string}) => trail.name === "Official Trailer")
            setKey(trailers[0].key)
        } catch (error) {
            console.log(error);
            setKey(null)
        }
    };
    useEffect(() => {
        playMovie();
    }, [id]);
    return key;
};

export default useMovieVideo;
