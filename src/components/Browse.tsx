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
      <div className="relative">
          <div className="relative max-[575px]:top-[140px] top-[100px] md:top-0">
            <MainContainer />
          </div>
          <div className="absolute top-[650px] left-0 right-0 max-[1160px]:top-[600px] max-[1075px]:top-[420px]">
            <SecondContainer />
          </div>
        </div>
    )}
  </div>
  );
};

export default Browse