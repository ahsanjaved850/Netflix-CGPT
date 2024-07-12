import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;  
  }

// Define the initial state type
interface MoviesState {
    nowPlayingMovies: Movie[] | null;
  }

  // Define the initial state
const initialState: MoviesState = {
    nowPlayingMovies: null,
  };
  

const moviesSlice = createSlice ({
    name: "movies",
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
            state.nowPlayingMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies } = moviesSlice.actions

export default moviesSlice.reducer;