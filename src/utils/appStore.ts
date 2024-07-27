import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; 
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"


const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,

  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
