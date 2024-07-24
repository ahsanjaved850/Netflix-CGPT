import { openai } from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';

interface MovieResult {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string
}

const searchMovie = async (movie: string): Promise<MovieResult[]> => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
  const json = await data.json();
  return json.results;
};

export const GptSearch = async (searchText: string): Promise<{ gptMovies: string[], tmbdResults: MovieResult[[]] }> => {
  // API to GPT
  const gptQuery = `Act as a movie recommendation system and suggest some movies for the query ${searchText}. Only give me the name of 5 movies, comma separated like the example result given ahead. Example Result: Sholay, Don, Don 2, Koi mil gaya, Golmaal`;

  const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });

  const gptMovies = gptResults?.choices[0]?.message?.content?.split(',').map((movie) => movie.trim()) || [];

  // Search each movie from the TMDB API
  const dataPromises = gptMovies.map((movie) => searchMovie(movie));
  // Wait for all promises to resolve
  const tmbdResults = await Promise.all(dataPromises);

  return { gptMovies, tmbdResults };
}