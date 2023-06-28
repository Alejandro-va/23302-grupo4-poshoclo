import React, { useEffect } from "react";
import ListMovies from "../listMovies/ListMovies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovies from "../detailMovies/DetailMovies";
import Portada from "../portada";
import NavbarPelis from "../navbarPelis";


import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies,fetchTrendingMovies, fetchTopRatedMovies, fetchActionMovies, fetchComedyMovies, fetchDramaMovies, fetchScienceFictionMovies } from "../../feactures/movies/moviesSlice";
import { fetchGenres } from "../../feactures/genres/genresSlice";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        
          <Route path="/peliculas" element={<div><NavbarPelis /><ListMovies /></div>} />
          <Route path="/detailMovies/:id" element={<div><NavbarPelis /><DetailMovies /></div>} />
 
          <Route path="/" element={<div><NavbarPelis /><Portada /></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
