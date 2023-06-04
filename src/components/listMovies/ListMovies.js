import React, { useEffect } from "react";

import { Link } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../feactures/movies/moviesSlice";

const ListMovies = () => {
  
  const selectorMovie = useSelector((state) => state.storeMovie.stateMovies);

 
  

  return (
    <div>
      <h1>LisMovies</h1>
      {selectorMovie.map((el) => (
        <ul>
          <li>
            <Link to={`/detailMovies/${el.id}`}> {el.title}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ListMovies;
