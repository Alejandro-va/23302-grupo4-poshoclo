import React, {useState , useEffect} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//boostrap
import Card from 'react-bootstrap/Card';


//iconos
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const CardMovies = (params) => {
  const { movie } = params;
  const genres = useSelector((state) => state.genres.genres.filter(movieGenre=>movie?.genre_ids.includes(movieGenre.id)));

  if (!movie){
    return null
  }
  

return (
  
   <Card style={{ width: '' }} bg="dark" text="white" className="card">
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path } />
      <Card.Body>
        <Card.Subtitle className="iconosCard">
          <div className="juntos">
            <Link to={`/detailMovies/${movie.id}`} ><PlayCircleIcon fontSize="large"/></Link>
            <AddCircleOutlineIcon fontSize="large"/>
          </div>
          <div className="solo">
            <Link to={`/detailMovies/${movie.id}`} ><ExpandCircleDownIcon fontSize="large"/></Link>
          </div>        
        </Card.Subtitle>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-success"><FavoriteBorderOutlinedIcon fontSize="small"/> {movie.vote_average}</Card.Subtitle>
        <h6>
          <ul className="generos"> {genres.map(genre=><li className=" genero"  key={genre.id}>{genre.name}</li>)}</ul>
      {/* <p>{movie.overview}</p> */}
        </h6>
        
      </Card.Body>
    </Card>


    
  );
};

export default CardMovies;




