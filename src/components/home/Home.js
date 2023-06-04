import React, { useEffect } from "react";
import ListMovies from "../listMovies/ListMovies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovies from "../detailMovies/DetailMovies";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../feactures/movies/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      Home
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListMovies />} />
          <Route path="/detailMovies/:id" element={<DetailMovies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
