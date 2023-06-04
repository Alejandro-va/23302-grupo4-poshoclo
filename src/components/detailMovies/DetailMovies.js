import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailMovies = () => {
  const { id } = useParams();
  console.log(id);
  const movies = useSelector((state) => state.storeMovie.stateMovies);
  const detailMovie = movies.find((item) => item.id == id);
  console.log(movies);

  if (!detailMovie) return <div>carganding...</div>;

  return (
    <div>
      DetailMovies
      <span>--{id}</span>
      <img src={"https://image.tmdb.org/t/p/w500/" +  detailMovie.poster_path} alt="" />
      <h1>{detailMovie.title}</h1>
    </div>
  );
};

export default DetailMovies;
