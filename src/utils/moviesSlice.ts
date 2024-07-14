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
    topRatedMovies: Movie[] | null;
    popularMovie: Movie[] | null
  }

  // Define the initial state
const initialState: MoviesState = {
    nowPlayingMovies: null,
    topRatedMovies: null,
    popularMovie: null,
  };
  

const moviesSlice = createSlice ({
    name: "movies",
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
            state.nowPlayingMovies = action.payload
        },
        addTopRated: (state, action: PayloadAction<Movie[]>) => {
          state.topRatedMovies = action.payload
        },
        addPopularMovie: (state, action: PayloadAction<Movie[]>) => {
          state.popularMovie = action.payload
        }
    }
})

export const { addNowPlayingMovies, addTopRated, addPopularMovie } = moviesSlice.actions

export default moviesSlice.reducer;