import React from "react";
import { BACKGROUND_URL } from "../utils/constants";
import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestion from "../components/GptMovieSuggestion";

const GptSearch: React.FC = () => {
	return (
		<div>
			<div className="fixed bottom-0 top-0 right-0 left-0">
				<img
					className="w-full h-full object-cover"
					src={BACKGROUND_URL}
					alt="background"
				/>
			</div>
			<div>
				<GptSearchBar />
				<GptMovieSuggestion />
			</div>
		</div>
	);
};

export default GptSearch;
