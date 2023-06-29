import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const CardMovies = (params) => {
  const { movie } = params;
  const genres = useSelector((state) => state.genres.genres.filter(movieGenre=>movie?.genre_ids.includes(movieGenre.id)));
  if (!movie){
    return null
  }
  
return (
    <div className="resumen">
      <h4>{movie.title}</h4>
      <h5 className="resumenFecha">Fecha: {movie.release_date}</h5>
      <h5>Puntaje : {movie.vote_average}</h5>
      <button className="resumenButton">
      <Link to={`/detailMovies/${movie.id}`} className="link">VER</Link>
      </button>
      <ul className="generos">{genres.map(genre=><li className="genero" key={genre.id}>{genre.name}</li>)}</ul>
      <p>{movie.overview}</p>
    </div>
  );
};

export default CardMovies;
