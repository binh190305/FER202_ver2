import React from 'react';
import { Container, Row, Col, Nav, Alert } from 'react-bootstrap';
// Giả sử bạn đã import 'bootstrap/dist/css/bootstrap.min.css' trong App.js hoặc index.js

// Helper component cho cột (tái sử dụng từ Câu 1)
const GridCol = ({ children, size }) => (
  <Col md={size} className="p-3 border border-secondary text-center bg-light">
    {children}
  </Col>
);

const Question3 = () => {
  return (
    <Container className="my-5"> 
      
      {/* --- JUMBOTRON-like Header (Light Gray Box) --- */}
      <div className="bg-light p-5 mb-4 border rounded">
        <h2>Let's test the grid!</h2>
      </div>

      {/* --- THANH ĐIỀU HƯỚNG (NAV) --- */}
      <Nav className="mb-4">
        {/* Active Link */}
        <Nav.Item>
          <Nav.Link active href="#">Active</Nav.Link>
        </Nav.Item>
        {/* Normal Links */}
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        {/* Disabled Link */}
        <Nav.Item>
          <Nav.Link disabled href="#">Disabled</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* --- GRID LAYOUT (Tái sử dụng từ Câu 1) --- */}
      <Container fluid className="border border-secondary p-0 mb-5"> 
        
        {/* ROW 1: Split 1/3 and 2/3 */}
        <Row className="g-0">
          <GridCol size={4}>First col</GridCol>
          <GridCol size={8}>Second col</GridCol>
        </Row>
        
        {/* ROW 2: Split 1/4, 1/4, and 1/2 */}
        <Row className="g-0">
          <GridCol size={3}>col</GridCol>
          <GridCol size={3}>col</GridCol>
          <GridCol size={6}>col</GridCol>
        </Row>

        {/* ROW 3: Split into six equal columns */}
        <Row className="g-0">
          <GridCol size={2}>col</GridCol>
          <GridCol size={2}>col</GridCol>
          <GridCol size={2}>col</GridCol>
          <GridCol size={2}>col</GridCol>
          <GridCol size={2}>col</GridCol>
          <GridCol size={2}>col</GridCol>
        </Row>

      </Container>
      
      {/* --- FOOTER (Created by ABC!) --- */}
      {/* Sử dụng Alert component:
        variant="secondary" để có màu nền xám nhạt (gần với hình ảnh)
        style={{ backgroundColor: '#e5d7d7' }} để tùy chỉnh màu chính xác hơn
        text-center để căn giữa chữ 
      */}
      <Alert 
        variant="secondary" 
        className="text-center p-3"
        style={{ backgroundColor: '#e5d7d7', color: '#333' }}
      >
        **Created by ABC!**
      </Alert>

    </Container>
  );
};

export default Question3;