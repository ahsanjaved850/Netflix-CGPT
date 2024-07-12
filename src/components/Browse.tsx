import React from "react"
import Header from "./Header"
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse: React.FC = () => {
  useNowPlayingMovies()
  
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  )
}

export default Browse