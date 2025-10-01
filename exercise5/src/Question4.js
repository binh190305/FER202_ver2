import React from 'react';
import { Container, Nav, Row, Col, Card, Alert } from 'react-bootstrap';
// Đảm bảo đã import Bootstrap CSS trong App.js

const Question4 = () => {
  // Đường dẫn giả định cho logo FPT. Bạn có thể thay thế bằng logo thực tế.
  const FPT_LOGO_URL = "https://www.google.com/imgres?q=fpt%20logo%20url&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fvi%2Fthumb%2F2%2F2d%2FLogo_Tr%25C6%25B0%25E1%25BB%259Dng_%25C4%2590%25E1%25BA%25A1i_h%25E1%25BB%258Dc_FPT.svg%2F1280px-Logo_Tr%25C6%25B0%25E1%25BB%259Dng_%25C4%2590%25E1%25BA%25A1i_h%25E1%25BB%258Dc_FPT.svg.png&imgrefurl=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FT%25E1%25BA%25ADp_tin%3ALogo_Tr%25C6%25B0%25E1%25BB%259Dng_%25C4%2590%25E1%25BA%25A1i_h%25E1%25BB%258Dc_FPT.svg&docid=m4TC1oZ8GQnHJM&tbnid=5NQFJZLQH7ZtlM&vet=12ahUKEwiC4ZyH6oGQAxVuUGwGHSbLGuQQM3oECBoQAA..i&w=1280&h=499&hcb=2&ved=2ahUKEwiC4ZyH6oGQAxVuUGwGHSbLGuQQM3oECBoQAA"; 
  // Vì không có logo thực, tôi sẽ sử dụng một placeholder text/style.

  return (
    <Container fluid className="p-0">
      
      {/* --- HEADER BLOCK (Khối màu cam) --- */}
      <div 
        className="text-center p-4" 
        style={{ backgroundColor: '#ff8c00', color: 'white' }}
      >
        {/* Logo/Title Area */}
        <div className="py-5">
          {/* Thay thế bằng thẻ <img> nếu bạn có logo */}
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>FPT UNIVERSITY</h1> 
          <h3 style={{ fontSize: '1.5rem', marginTop: '5px' }}>FPT Education</h3>
        </div>
        
        {/* Navigation Links */}
        <Nav className="justify-content-center border-top border-white pt-2" variant="pills">
          <Nav.Item>
            <Nav.Link href="#" className="text-white mx-2">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-white mx-2">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-white mx-2">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* --- CONTENT SECTION --- */}
      <Container className="my-5">
        <Row className="text-center">
          <Col md={12} className="mb-5">
            {/* ABOUT SECTION */}
            <h2 className="mb-2">About</h2>
            <p className="text-muted">This is the about section of the website.</p>
          </Col>
          
          <Col md={12} className="mb-5">
            {/* CONTACT SECTION */}
            <h2 className="mb-2">Contact</h2>
            <p className="text-muted">For any inquiries, please contact us at <a href="mailto:example@example.com">example@example.com</a>.</p>
          </Col>
        </Row>
      </Container>
      
      {/* --- FOOTER BLOCK --- */}
      {/* Sử dụng Alert hoặc div với styling custom. Tôi dùng div để dễ tùy chỉnh màu. */}
      <div 
        className="text-center p-3" 
        style={{ backgroundColor: '#f0e68c', color: '#696969' }} // Màu vàng nhạt (khaki)
      >
        © 2023 Website. All rights reserved.
      </div>
      
    </Container>
  );
};

export default Question4;