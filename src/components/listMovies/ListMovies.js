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



export default function ListMovies() {
  const selectorMovie = useSelector((state) => state.storeMovie.stateMovies);
  console.log(selectorMovie)

  const [idSeleccionado, setIdSeleccionado] = useState();

   

  return (
    <>
    <img src="/logo1.PNG"/>
    <h3>Populares</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
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
          
      {selectorMovie.map((el) => (
          <SwiperSlide onMouseEnter={()=>setIdSeleccionado(el.id)} onMouseLeave={()=>setIdSeleccionado(undefined)}> 
              
              {/* {el.title}
               */}
              {idSeleccionado === el.id ? <CardMovies id={idSeleccionado}></CardMovies> : <img  src={"https://image.tmdb.org/t/p/w500/" + el.poster_path} width="100%" alt="" />}
          </SwiperSlide>
      ))}
              
      </Swiper>
    </>
  );
}
