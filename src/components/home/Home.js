import React, { useEffect } from "react";
import ListMovies from "../listMovies/ListMovies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovies from "../detailMovies/DetailMovies";
import Portada from "../portada";

import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies,fetchTrendingMovies, fetchTopRatedMovies, fetchActionMovies, fetchComedyMovies, fetchDramaMovies, fetchScienceFictionMovies } from "../../feactures/movies/moviesSlice";
import { fetchGenres } from "../../feactures/genres/genresSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTrendingMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchActionMovies());
    dispatch(fetchComedyMovies());
    dispatch(fetchDramaMovies());
    dispatch(fetchScienceFictionMovies());
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/peliculas" element={<ListMovies />} />
          <Route path="/detailMovies/:id" element={<DetailMovies />} />
          <Route path="/" element={<Portada/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
