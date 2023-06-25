import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const CardMovies = (params) => {
  const { id } = params;
  console.log(id);
  const movies = useSelector((state) => state.storeMovie.stateMovies);
  const cardMovie = movies.find((item) => item.id == id);
  console.log(movies);
  const genres = useSelector((state) => state.genres.genres.filter(movieGenre=>cardMovie.genre_ids.includes(movieGenre.id)));
  
  
return (
    <div className="card">
      {/* <img src={"https://image.tmdb.org/t/p/w500/" +  cardMovie.poster_path } height={"100px"} alt="" /> */}
      <h4>{cardMovie.title}</h4>
      <h5 className="cardFecha">Fecha: {cardMovie.release_date}</h5>
      <h5>Puntaje : {cardMovie.vote_average}</h5>
      
      <ul className="generos">{genres.map(genre=><li className="genero" key={genre.id}>{genre.name}</li>)}</ul>
     
      <p>{cardMovie.overview}</p>
      <button className="cardButton">
      <Link to={`/detailMovies/${cardMovie.id}`} className="link">VER
             </Link></button>
      
      {/* <img src={"https://image.tmdb.org/t/p/w500/" +  cardMovie.poster_path } height={"200px"} alt="" /> */}
      <div>

      </div>
    </div>
  );
};

export default CardMovies;
