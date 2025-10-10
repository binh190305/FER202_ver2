// src/components/Filter.jsx
import React, { useState, useEffect } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import { allGenres } from "../data/movie/movies";

const Filter = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [yearRange, setYearRange] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [genre, setGenre] = useState("All");

  // Gọi callback mỗi khi giá trị thay đổi
  useEffect(() => {
    onFilterChange({ search, yearRange, sortOption, genre });
  }, [search, yearRange, sortOption, genre]);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="mb-3 text-primary fw-bold">
          🎬 Filter & Search
        </Card.Title>

        <Row className="gy-3">
          {/* Search */}
          <Col md={3}>
            <Form.Group>
              <Form.Label>Search (title/description)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form.Group>
          </Col>

          {/* Filter Year */}
          <Col md={3}>
            <Form.Group>
              <Form.Label>Filter by Year</Form.Label>
              <Form.Select
                value={yearRange}
                onChange={(e) => setYearRange(e.target.value)}
              >
                <option value="">All</option>
                <option value="<=2000">Before or in 2000</option>
                <option value="2001-2015">2001–2015</option>
                <option value=">2015">After 2015</option>
              </Form.Select>
            </Form.Group>
          </Col>

          {/* Filter Genre */}
          <Col md={3}>
            <Form.Group>
              <Form.Label>Genre</Form.Label>
              <Form.Select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                {allGenres.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          {/* Sorting */}
          <Col md={3}>
            <Form.Group>
              <Form.Label>Sort by</Form.Label>
              <Form.Select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">None</option>
                <option value="year-asc">Year ↑</option>
                <option value="year-desc">Year ↓</option>
                <option value="title-asc">Title A→Z</option>
                <option value="title-desc">Title Z→A</option>
                <option value="duration-asc">Duration ↑</option>
                <option value="duration-desc">Duration ↓</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Filter;
