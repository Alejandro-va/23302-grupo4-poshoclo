import React from "react";
import { useParams } from "react-router-dom";

const DetailMovies = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      DetailMovies
      <span>{id}</span>
    </div>
  );
};

export default DetailMovies;
