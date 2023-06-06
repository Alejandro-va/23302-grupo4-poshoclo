import React, { useEffect } from "react";

import { Link } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";

import { Carousel } from '@trendyol-js/react-carousel';



const ListMovies = () => {
  
  
  const selectorMovie = useSelector((state) => state.storeMovie.stateMovies);
  console.log(selectorMovie)
   

  return (
    <div>
      <h1>LisMovies</h1>
      <Carousel show={3.5} slide={3} swiping={true}>
        {selectorMovie.map((el) => (
          <div key={el.id}>
            <ul>
            <li>
              <Link to={`/detailMovies/${el.id}`}> {el.title}</Link>
              <img src={"https://image.tmdb.org/t/p/w500/" + el.poster_path} alt="" />
              
            </li>
          </ul>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ListMovies;


