import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure this is imported somewhere

// Helper component for the column content
const GridCol = ({ children, size }) => (
  // The 'p-3' adds padding, 'border' adds a border, and 'text-center' centers the text.
  // 'bg-light' is a light gray background.
  <Col md={size} className="p-3 border border-secondary text-center bg-light">
    {children}
  </Col>
);

const GridTest = () => {
  return (
    // The main container limits the width of the content
    <Container className="my-5"> 
      
      {/* --- JUMBOTRON-like Header (Light Gray Box) --- */}
      <div className="bg-light p-5 mb-4 border rounded">
        <h2>Let's test the grid!</h2>
      </div>

      {/* --- GRID LAYOUT --- */}
      <Container fluid className="border border-secondary p-0"> 
        
        {/* ROW 1: Split into 1/3 and 2/3 */}
        <Row className="g-0"> {/* g-0 removes gutter (gap) between columns */}
          {/* First col: 4 out of 12 columns */}
          <GridCol size={4}>First col</GridCol>
          {/* Second col: 8 out of 12 columns */}
          <GridCol size={8}>Second col</GridCol>
        </Row>
        
        {/* ROW 2: Split into 1/4, 1/4, and 1/2 */}
        <Row className="g-0">
          {/* col 1: 3 out of 12 columns */}
          <GridCol size={3}>col</GridCol>
          {/* col 2: 3 out of 12 columns */}
          <GridCol size={3}>col</GridCol>
          {/* col 3: 6 out of 12 columns */}
          <GridCol size={6}>col</GridCol>
        </Row>

        {/* ROW 3: Split into 1/6, 1/6, 1/6, 1/6, 1/6, 1/6 (6 equal columns) */}
        <Row className="g-0">
          {/* Each col is 2 out of 12 columns (1/6) */}
          <GridCol size={2}>col</GridCol>
          <GridCol size={2}>col</GridCol>
          <GridCol size={2}>col</GridCol>
          <GridCol size={2}>col</GridCol>
          <GridCol size={2}>col</GridCol>
          <GridCol size={2}>col</GridCol>
        </Row>

      </Container>
    </Container>
  );
};

export default GridTest;