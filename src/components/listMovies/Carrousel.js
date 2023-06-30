import { Link } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";

//del carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import CardMovies from "./cardMovie";
import { useState } from "react";



export default function Carrousel(props) {
  const movies = props.movies;
  
  const [idSeleccionado, setIdSeleccionado] = useState();

   

  return (
    <>
      <h4 className="textoCarrousel">{props.title}</h4>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}       
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
          
      {movies.map((el) => (
          <SwiperSlide onMouseEnter={()=>setIdSeleccionado(el.id)} onMouseLeave={()=>setIdSeleccionado(undefined)}> 
              {idSeleccionado === el.id ? <CardMovies movie={el}></CardMovies> : <img  src={"https://image.tmdb.org/t/p/w500/" + el.poster_path} width="100%" alt="" className="poster"/>}
          </SwiperSlide>
      ))}
              
      </Swiper>
    </>
  );
}
