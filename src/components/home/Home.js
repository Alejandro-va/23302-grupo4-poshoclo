import React from "react";
import ListMovies from "../listMovies/ListMovies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovies from "../detailMovies/DetailMovies";

const Home = () => {
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
