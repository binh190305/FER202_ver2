import React from "react";
import { Carousel, Badge } from "react-bootstrap";

const HomeCarousel = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Avengers: Endgame",
      genre: "Action",
      image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      title: "La La Land",
      genre: "Romance",
      image: "https://m.media-amazon.com/images/I/81QlrEo1g-L._AC_SL1500_.jpg",
    },
  ];

  return (
    <Carousel fade interval={3000} className="shadow-lg rounded overflow-hidden">
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            src={movie.image}
            alt={movie.title}
            className="d-block w-100"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h5 className="fw-bold">{movie.title}</h5>
            <Badge bg="info" text="dark">
              {movie.genre}
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
