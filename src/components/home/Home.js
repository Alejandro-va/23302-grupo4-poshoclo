import React, { useEffect } from "react";
import ListMovies from "../listMovies/ListMovies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovies from "../detailMovies/DetailMovies";
import Portada from "../portada";
import NavbarPelis from "../navbarPelis";

//alert
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchActionMovies,
  fetchComedyMovies,
  fetchDramaMovies,
  fetchScienceFictionMovies,
} from "../../feactures/movies/moviesSlice";
import { fetchGenres } from "../../feactures/genres/genresSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import ProtectedRoute from "../protectedRoute.js/ProtectedRoute";

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
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={1000}
          closeOnClick
          pauseOnHover={false}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavbarPelis />
                <Portada />
              </div>
            }
          />
          <Route
            path="/peliculas"
            element={
              <div>
                <ProtectedRoute>
                  <NavbarPelis />
                  <ListMovies />
                </ProtectedRoute>
              </div>
            }
          />
          <Route
            path="/detailMovies/:id"
            element={
              <div>
                <NavbarPelis />
                <DetailMovies />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                {/* <NavbarPelis /> */}
                <Login />
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div>
                {/* <NavbarPelis /> */}
                <Signup />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
