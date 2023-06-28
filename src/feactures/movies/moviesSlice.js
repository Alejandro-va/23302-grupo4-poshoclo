import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//KEY y URL para la api
import movieApi from "../../common/api/movieApi";


const initialState = { popularMovies: [], trendingMovies: [], topRatedMovies: [], actionMovies:[], comedyMovies:[], dramaMovies:[],scienceFictionMovies: [] };

export const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state, action) => {
        console.log("...loading");
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {    
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trendingMovies = action.payload;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
      })
      .addCase(fetchActionMovies.fulfilled, (state, action) => {
        state.actionMovies = action.payload;
      })
      .addCase(fetchComedyMovies.fulfilled, (state, action) => {
        state.comedyMovies = action.payload;
      })
      .addCase(fetchDramaMovies.fulfilled, (state, action) => {
        state.dramaMovies = action.payload;
      })
      .addCase(fetchScienceFictionMovies.fulfilled, (state, action) => {
        state.scienceFictionMovies = action.payload;
      })
      ;

  },
});

export default moviesSlice.reducer;

export const fetchPopularMovies = createAsyncThunk("popular/get", async () => {
  const response = await movieApi.get(`3/movie/popular`);
  return response.data.results;
});

export const fetchTrendingMovies = createAsyncThunk("trending/get", async () => {
  const response = await movieApi.get(`3/trending/movie/week`);
  return response.data.results;
});

export const fetchTopRatedMovies = createAsyncThunk("top/get", async () => {
  const response = await movieApi.get(`3/movie/top_rated`);
  return response.data.results;
});

export const fetchActionMovies = createAsyncThunk("action/get", async () => {
  const response = await movieApi.get(`/3/discover/movie?&with_genres=28`);
  return response.data.results;
});

export const fetchComedyMovies = createAsyncThunk("comedy/get", async () => {
  const response = await movieApi.get(`/3/discover/movie?&with_genres=35`);
  return response.data.results;
});

export const fetchDramaMovies = createAsyncThunk("drama/get", async () => {
  const response = await movieApi.get(`/3/discover/movie?&with_genres=18`);
  return response.data.results;
});

export const fetchScienceFictionMovies = createAsyncThunk("sf/get", async () => {
  const response = await movieApi.get(`/3/discover/movie?&with_genres=878`);
  return response.data.results;
});

// MOVIE GENRE CODE
// Adventure       12
// Animation       16
// Crime           80
// Documentary     99
// Family          10751
// Fantasy         14
// History         36
// Horror          27
// Music           10402
// Mystery         9648
// Romance         10749
// TV Movie        10770
// Thriller        53
// War             10752
// Western         37