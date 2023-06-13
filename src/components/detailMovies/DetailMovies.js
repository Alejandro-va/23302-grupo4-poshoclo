import React, {useState , useEffect} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import movieApi from "../../common/api/movieApi";


const DetailMovies = () => {
  const { id } = useParams();
  console.log(id);
  const movies = useSelector((state) => state.storeMovie.stateMovies);
  const detailMovie = movies.find((item) => item.id == id);
  console.log(movies);
  const [videos, setVideos] = useState([]);
  // const videoKey= {`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}append_to_response=videos`

  
  useEffect (() =>{
    (movieApi.get(`3/movie/${id}/videos`))
    .then(response => setVideos(response.data.results))
  }, [id]) 

  if (!detailMovie) return <div>carganding...</div>;
  
  // Youtube: https://www.youtube.com/watch?v=hzfvYSIIgyc
  // Vimeo: https://vimeo.com/282875052


  return (
    <div>
      DetailMovies
      <span>--{id}</span>
      <img src={"https://image.tmdb.org/t/p/w500/" +  detailMovie.poster_path} alt="" />
      <div>
        {videos.map(video => 
          // video.key  
        <a href={"https://www.youtube.com/watch?v=" + video.key}> ir</a>
        ) }
      {/* {`https://api.themoviedb.org/3/movie/`+ detailMovie.video} */}
      eN7eA3_Hn_g
      </div>
      <h1>{detailMovie.title}</h1>
    </div>
  );
};

export default DetailMovies;
