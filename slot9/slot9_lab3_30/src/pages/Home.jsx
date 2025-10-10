// src/pages/Home.jsx
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { movies } from "../data/movie/movies.js";
import Filter from "../components/Filter";
import MovieCard from "../components/Movie/MovieCard.jsx";
import NavBarHome from "../components/NavBarHome.jsx";

const Home = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = ({ search, yearRange, sortOption, genre }) => {
    let result = [...movies];

    // 1️⃣ Search
    if (search) {
      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(search.toLowerCase()) ||
          m.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 2️⃣ Filter by Year
    if (yearRange === "<=2000") result = result.filter((m) => m.year <= 2000);
    else if (yearRange === "2001-2015")
      result = result.filter((m) => m.year >= 2001 && m.year <= 2015);
    else if (yearRange === ">2015") result = result.filter((m) => m.year > 2015);

    // 3️⃣ Filter by Genre
    if (genre !== "All") result = result.filter((m) => m.genre === genre);

    // 4️⃣ Sort
    switch (sortOption) {
      case "year-asc":
        result.sort((a, b) => a.year - b.year);
        break;
      case "year-desc":
        result.sort((a, b) => b.year - a.year);
        break;
      case "title-asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "duration-asc":
        result.sort((a, b) => a.duration - b.duration);
        break;
      case "duration-desc":
        result.sort((a, b) => b.duration - a.duration);
        break;
      default:
        break;
    }

    setFilteredMovies(result);
  };

  return (
    <div className="container mt-4">
        <NavBarHome />
      <Filter onFilterChange={handleFilterChange} />
      <Row xs={1} md={3} className="g-4">
        {filteredMovies.map((movie) => (
                    <Col key={movie.id}>
        
                  <MovieCard 
                    key={movie.id} 
                    img={movie.poster}
                    title={movie.title}
                    text={movie.description} 
                    genre={movie.genre} 
                  />
                  </Col>
                ))}
      </Row>
    </div>
  );
};

export default Home;
