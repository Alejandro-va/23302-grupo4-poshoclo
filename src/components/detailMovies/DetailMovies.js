import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailMovies = () => {
  const { id } = useParams();
  //console.log(id);
  const movie = useSelector((state) => state.storeMovie.stateMovies);
  const detailMovie = movie.find((item) => item.imdbID === id);
  console.log(detailMovie);

  return (
    <div>
      DetailMovies
      <span>--{id}</span>
      <img src={detailMovie.Poster} alt="" />
      <h1>{detailMovie.Title}</h1>
    </div>
  );
};

export default DetailMovies;
