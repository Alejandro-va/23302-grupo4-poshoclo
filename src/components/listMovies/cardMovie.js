import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const CardMovies = (params) => {
  const { id } = params;
  console.log(id);
  //aca tengo que cambiar el store para bajar las demas
  const movies = useSelector((state) => state.storeMovie.popularMovies);
  const cardMovie = movies.find((item) => item.id == id);
  console.log(movies);
  const genres = useSelector((state) => state.genres.genres.filter(movieGenre=>cardMovie?.genre_ids.includes(movieGenre.id)));
  if (!cardMovie){
    return null
  }
  
return (
    <div className="card">
      <h4>{cardMovie.title}</h4>
      <h5 className="cardFecha">Fecha: {cardMovie.release_date}</h5>
      <h5>Puntaje : {cardMovie.vote_average}</h5>
      <ul className="generos">{genres.map(genre=><li className="genero" key={genre.id}>{genre.name}</li>)}</ul>
      <p>{cardMovie.overview}</p>
      <button className="cardButton">
      <Link to={`/detailMovies/${cardMovie.id}`} className="link">VER</Link>
      </button>
    </div>
  );
};

export default CardMovies;
