import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//KEY y URL para la api
import movieApi from "../../common/api/movieApi";


const initialState = { stateMovies: [] };

export const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        console.log("...loading");
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.stateMovies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {});
  },
});

export default moviesSlice.reducer;

export const fetchMovies = createAsyncThunk("movies/get", async () => {
  const response = await movieApi.get(`3/movie/popular`);
  return response.data.results;
});
