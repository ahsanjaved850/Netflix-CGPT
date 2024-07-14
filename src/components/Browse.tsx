import React from "react"
import Header from "./Header"
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondContainer from "./SecondContainer";
import useTopRated from "../hooks/useTopRated";
import usePopular from "../hooks/usePopular";

const Browse: React.FC = () => {
  useNowPlayingMovies()
  useTopRated()
  usePopular();
  
  return (
    <div className="bg-black">
      <Header />
      <MainContainer />
      <SecondContainer />
    </div>
  )
}

export default Browse