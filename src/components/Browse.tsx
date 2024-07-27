import React from "react"
import Header from "./Header"
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondContainer from "./SecondContainer";
import useTopRated from "../hooks/useTopRated";
import usePopular from "../hooks/usePopular";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import GptSearch from "./GptSearch";


const Browse: React.FC = () => {
  const showGptSearch = useSelector((store: RootState) => store.gpt?.showGptSearch)
  useNowPlayingMovies()
  useTopRated()
  usePopular();
  
  return (
    <div className="bg-black">
    <Header />
    {showGptSearch ? (
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