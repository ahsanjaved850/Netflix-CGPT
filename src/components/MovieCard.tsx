import React from "react";
import { IMAGE_URL } from "../utils/constants";
import "../utils/style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { RootState } from "../utils/appStore";

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
  const value = useSelector((store: RootState) => store?.gpt?.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMovie = () => {
    if (value) {
      dispatch(toggleGptSearchView());
    }
    navigate(`/browse/movie/${movies.id}`);
  };

  if (!movies) return null;
  return (
    <div className="mt-6 mx-1 p-1 bg-gray-200 rounded-md hover:bg-black flex-shrink-0 cursor-pointer">
      <img
        className="max-[1200px]:w-36 max-[1200px]:h-36 md:w-48 md:h-52 rounded-md"
        src={IMAGE_URL + movies.poster_path}
        alt={movies.title}
        onClick={handleMovie}
      />
    </div>
  );
};

export default MovieCard;
