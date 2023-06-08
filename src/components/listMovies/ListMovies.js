import { Link } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";

//del carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


export default function ListMovies() {
  const selectorMovie = useSelector((state) => state.storeMovie.stateMovies);
  console.log(selectorMovie)

  return (
    <>
    <h1>LisMovies</h1>
      <Swiper
        slidesPerView={10}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          
      {selectorMovie.map((el) => (
          <SwiperSlide> 
            <Link to={`/detailMovies/${el.id}`}> 
              {el.title} 
              <img src={"https://image.tmdb.org/t/p/w500/" + el.poster_path} width="100px" alt="" />
            </Link>
            
          </SwiperSlide>
      ))}
        
      </Swiper>
    </>
  );
}
