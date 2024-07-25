import React from "react"
import Header from "./Header"
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondContainer from "./SecondContainer";
import useTopRated from "../hooks/useTopRated";
import usePopular from "../hooks/usePopular";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import MoviePage from "./MoviePage";

const Browse: React.FC = () => {
  const showGptSearch = useSelector((store: RootState) => store.gpt?.showGptSearch)
  const showMoviePage = useSelector((store : RootState) => store.moviePage?.showMoviePage)
  const selectedMovie = useSelector((store: RootState) => store.moviePage?.selectedMovie);
  useNowPlayingMovies()
  useTopRated()
  usePopular();
  
  return (
    <div className="bg-black">
      <Header />
      {showMoviePage ? (
        selectedMovie ? (
          <MoviePage
            title={selectedMovie.title}
            vote_average={selectedMovie.vote_average}
            tagline={selectedMovie.tagline}
            runtime={selectedMovie.runtime}
            poster_path={selectedMovie.poster_path}
            overview={selectedMovie.overview}
            genres={selectedMovie.genres}
          />
        ) : null
      ): showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};

export default Browse