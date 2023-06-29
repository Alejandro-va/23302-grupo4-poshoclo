//REDUX
import { useDispatch, useSelector } from "react-redux";

//del carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carrousel from "./Carrousel";
import Search from "../search";



export default function ListMovies() {
  const selectPopularMovie = useSelector((state) => state.storeMovie.popularMovies);
  const selectTrendingMovie = useSelector((state) => state.storeMovie.trendingMovies);
  const selectTopRatedMovie = useSelector((state) => state.storeMovie.topRatedMovies);
  const selectActionMovie = useSelector((state) => state.storeMovie.actionMovies);
  const selectComedyMovie = useSelector((state) => state.storeMovie.comedyMovies);
  const selectDramaMovie = useSelector((state) => state.storeMovie.dramaMovies);
  const selectScienceFictionMovie = useSelector((state) => state.storeMovie.scienceFictionMovies);
  console.log(selectTopRatedMovie)
  

  return (
    <>
    <Search></Search>
    <Carrousel title="Tendencia" movies={selectTrendingMovie}></Carrousel>
    <Carrousel title="Más votadas" movies={selectTopRatedMovie}></Carrousel>
    <Carrousel title="Populares" movies={selectPopularMovie}></Carrousel>
    <Carrousel title="Películas de acción" movies={selectActionMovie}></Carrousel>
    <Carrousel title="Comedias" movies={selectComedyMovie}></Carrousel>
    <Carrousel title="Películas dramáticas" movies={selectDramaMovie}></Carrousel>
    <Carrousel title="Películas de ciencia ficción" movies={selectScienceFictionMovie}></Carrousel>


    </>
  );
}
