import React, {useState , useEffect} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import movieApi from "../../common/api/movieApi";


const DetailMovies = () => {
  const { id } = useParams();
  console.log(id);

  const [detailMovie, setDetailMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  
  useEffect (() =>{
    (movieApi.get(`3/movie/${id}`))
    .then(response => setDetailMovie(response.data))
  }, [id]) 

  
  useEffect (() =>{
    (movieApi.get(`3/movie/${id}/videos`))
    .then(response => setVideos(response.data.results))
  }, [id]) 

  if (!detailMovie) return <div>carganding...</div>;

  
  const trailer=videos.find(video=> video.type=="Trailer")



  return (
    <div>
      <h1>{detailMovie.title}</h1>
      <h5>{detailMovie.tagline}</h5>
      

      <img src={"https://image.tmdb.org/t/p/w500/" +  detailMovie.poster_path } height={"200px"} alt="" />
      <div>
        {/* 
        quizas podemos poner botones o tipo playlist con todos los demas videos...
                
        {videos.map(video => 
        // <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + video.key} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        ) } */}
        {
          trailer ?  <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailer.key} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> : undefined
        }
  

      </div>
    </div>
  );
};

export default DetailMovies;
