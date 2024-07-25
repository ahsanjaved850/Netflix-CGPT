import { createSlice } from '@reduxjs/toolkit';

interface genres {
  id: number,
  name: string
}
interface MovieResult {
    title: string;
    vote_average: number
    tagline: string
    runtime: number
    genres:  genres[]; 
    overview: string;
    poster_path: string
  }

interface MoviesState {
  showMoviePage: boolean;
  selectedMovie: MovieResult | null;
}

const initialState: MoviesState = {
  showMoviePage: false,
  selectedMovie: null,
};

const moviePageSlice = createSlice({
  name: 'moviePage',
  initialState,
  reducers: {
    toggleMoviePage(state) {
      state.showMoviePage = !state.showMoviePage;
    },
    setSelectedMovie(state, action) {
      state.selectedMovie = action.payload;
    },
     removeMovieData: () => {
      return initialState;
    }
  },
});

export const { toggleMoviePage, setSelectedMovie, removeMovieData } = moviePageSlice.actions;
export default moviePageSlice.reducer;