import CardMovies from "./listMovies/cardMovie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import movieApi from "../common/api/movieApi";
import React, { useEffect} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


export default function Search() {
//   ctraigo la busqueda del store  
  const search = useSelector((state) => state.storeMovie.search);

  //traigo de la api
	const [movies, setMovies] = useState([]);
  
	useEffect (() =>{
		(movieApi.get(`/3/search/movie?query=${search}`))
		.then(response => setMovies(response.data.results))
	}, [search]) 
	console.log(movies.results)

  const [idSeleccionado, setIdSeleccionado] = useState();

  return (
    <>
      <ul className="grilla">
        {movies.map((el) => (
                <li  onMouseEnter={()=>setIdSeleccionado(el.id)} onMouseLeave={()=>setIdSeleccionado(undefined)}> 
                    {idSeleccionado === el.id ? <CardMovies movie={el}></CardMovies> : <img  src={"https://image.tmdb.org/t/p/w500/" + el.poster_path} width="100%" alt="" />}
                </li>))}
	   </ul> 
    </>
  );
}
