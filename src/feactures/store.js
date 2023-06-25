import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./movies/moviesSlice";
import genresSlice from "./genres/genresSlice";

export const store = configureStore({
  reducer: { storeMovie: moviesSlice, genres: genresSlice },
});
