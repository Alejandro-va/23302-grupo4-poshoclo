import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import movieApi from "../../common/api/movieApi";

//boostrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DetailMovies = () => {
  const { id } = useParams();
  console.log(id);

  const [detailMovie, setDetailMovie] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    movieApi
      .get(`3/movie/${id}?&language=es`)
      .then((response) => setDetailMovie(response.data));
  }, [id]);
  console.log("hola", detailMovie);

  useEffect(() => {
    movieApi
      .get(`3/movie/${id}/videos`)
      .then((response) => setVideos(response.data.results));
  }, [id]);

  if (!detailMovie) return <div>carganding...</div>;

  const trailer = videos.find((video) => video.type == "Trailer");

  return (
    <Container
      data-bs-theme="dark"
      className="detalle"
      
    >
      <Row>
        <Col>
          {trailer ? (
            <iframe
              width="100%"
              height="315"
              src={"https://www.youtube.com/embed/" + trailer.key}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : undefined}
        </Col>
      </Row>

      <Row>
        <Col sm={8}>
          <h2>{detailMovie.title} </h2>
          <h5>"{detailMovie.tagline}"</h5>
          <p>{detailMovie.overview}</p>

          <Row>
            <Col sm>
              Puntuación: <br />
              {detailMovie.vote_average}
            </Col>
            <Col sm>
              Fecha de estreno:
              <br />
              {detailMovie.release_date}
            </Col>
            <Col sm>
              Duración: <br />
              {detailMovie.runtime}min
            </Col>
          </Row>
        </Col>
        <Col sm={4}>
          <img
            src={"https://image.tmdb.org/t/p/w500/" + detailMovie.poster_path}
            width={"100%"}
            alt=""
          />
        </Col>
      </Row>

      {/* 
        quizas podemos poner botones o tipo playlist con todos los demas videos...
                
        {videos.map(video => 
        // <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + video.key} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        ) } */}
    </Container>
  );
};

export default DetailMovies;
