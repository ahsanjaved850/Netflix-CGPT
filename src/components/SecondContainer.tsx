import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const SecondContainer: React.FC = () => {
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies,
  ) as Movie[];
  const topRated = useSelector(
    (store: RootState) => store.movies?.topRatedMovies,
  ) as Movie[];
  const popularMovies = useSelector(
    (store: RootState) => store.movies?.popularMovie,
  ) as Movie[];
  return (
    <div className="bg-black">
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Top Rated"} movies={topRated} />
      <MovieList title={"Popular"} movies={popularMovies} />
    </div>
  );
};

export default SecondContainer;
