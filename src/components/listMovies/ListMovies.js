import React, { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../feactures/movies/moviesSlice";

const ListMovies = () => {
  const dispatch = useDispatch();
  const selectorMovie = useSelector((state) => state.storeMovie.stateMovies);

  selectorMovie.map((el) => console.log(el));

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>LisMovies</h1>
      {selectorMovie.map((el) => (
        <div>{el.Title}</div>
      ))}
    </div>
  );
};

export default ListMovies;