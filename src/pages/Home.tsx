import React from "react";
import { useSelector } from "react-redux";
import HomePageMovieLists from "../components/HomePageMovieLists";
import HomePageMoviePreview from "../components/HomePageMoviePreview";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import GptSearch from "../pages/GptSearch";
import { RootState } from "../utils/appStore";

const Home: React.FC = () => {
	const showGptSearch = useSelector(
		(store: RootState) => store.gpt?.showGptSearch
	);
	useNowPlayingMovies();
	useTopRated();
	usePopular();

	return (
		<div className="bg-black">
			{showGptSearch ? (
				<GptSearch />
			) : (
				<div className="relative">
					<div className="relative max-[575px]:top-[140px] top-[100px] md:top-0">
						<HomePageMoviePreview />
					</div>
					<div className="absolute top-[650px] left-0 right-0 max-[1160px]:top-[600px] max-[1075px]:top-[420px]">
						<HomePageMovieLists />
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
