import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const GridCol = ({ children, size }) => (
  
  <Col md={size} className="p-3 border border-secondary text-center bg-light">
    {children}
  </Col>
);

const GridTest = () => {
  return (
    
    <Container className="my-5"> 
      
      
      <div className="bg-light p-5 mb-4 border rounded">
        <h2>Let's test the grid!</h2>
      </div>

     
      <Container fluid className="border border-secondary p-0"> 
        
        
        <Row className="g-0"> 
         
          <GridCol size={4}>First col</GridCol>
          
          <GridCol size={8}>Second col</GridCol>
        </Row>
        

        <Row className="g-0">
         
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