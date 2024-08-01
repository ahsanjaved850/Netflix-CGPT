import { API_OPTIONS } from "./constants";

interface genres {
  id: number;
  name: string;
}

interface MovieResult {
  title: string;
  vote_average: number;
  tagline: string;
  runtime: number;
  genres: genres[];
  overview: string;
  poster_path: string;
}

const movieInfo = async (id: number): Promise<MovieResult | undefined> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default movieInfo;
