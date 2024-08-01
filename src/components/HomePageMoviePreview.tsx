import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import useMovieVideo from "../hooks/useMovieVideo";

interface Movie {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
}
const num: number = Math.floor(Math.random() * 20);

const HomePageMoviePreview: React.FC = () => {
	const movies = useSelector(
		(store: RootState) => store.movies?.nowPlayingMovies
	) as Movie[] | undefined;

	const mainMovie = movies ? movies[num] : null;
	const id = mainMovie ? mainMovie.id : -1;
	const key = useMovieVideo(id);

	if (!movies) return;

	const { title, overview } = mainMovie!;

	return (
		<div>
			<div className="relative w-full pb-[56.25%] h-0">
				<iframe
					className="absolute left-0 w-full h-full max-[750px]:top-[60px]"
					src={
						"https://www.youtube.com/embed/" +
						key +
						"?&autoplay=1&mute=1"
					}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					referrerPolicy="strict-origin-when-cross-origin"
				></iframe>
			</div>
			<div className="p-4 w-1/2 md:h-4/12 mx-auto bg-gradient-to-r from-black text-white absolute md:pl-10 md:p-4 top[150px] max-[1300px]:top-[150px] md:top-[280px]">
				<p className="font-semibold text-md md:font-bold md:text-2xl">
					{title}
				</p>
				<p className="max-[1100px]:hidden inline-block text-justify text-lg w-full py-4">
					{overview}
				</p>
				<button className="max-[1100px]:hidden inline-block cursor-pointer bg-gray-200 text-black font-bold px-5 py-1 rounded-md hover:bg-opacity-80">
					Play
				</button>
				<button className="max-[1100px]:hidden inline-block cursor-pointer ml-1 bg-gray-500 text-white px-5 py-1 rounded-md hover:bg-opacity-80">
					More info
				</button>
			</div>
		</div>
	);
};

export default HomePageMoviePreview;
