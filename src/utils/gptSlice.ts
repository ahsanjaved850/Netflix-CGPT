import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

interface GptState {
  showGptSearch: boolean;
  movieResults: Movie[] | Movie[][] | null;
  moviesNames: string[] | null;
}

const initialState: GptState = {
  showGptSearch: false,
  movieResults: null,
  moviesNames: null,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (
      state,
      action: PayloadAction<{ moviesNames: string[]; movieResults: Movie[][] }>,
    ) => {
      state.moviesNames = action.payload.moviesNames;
      state.movieResults = action.payload.movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;

export default gptSlice.reducer;
