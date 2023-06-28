import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//KEY y URL para la api
import movieApi from "../../common/api/movieApi";


const initialState = { genres: [] };

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
  },
});

export default genresSlice.reducer;

export const fetchGenres = createAsyncThunk("genres/get", async () => {
  const response = await movieApi.get(`3/genre/movie/list?&language=es`);
  return response.data.genres;
});
