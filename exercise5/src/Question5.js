import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, Card, Row, Col, Breadcrumb } from 'react-bootstrap';
// Đảm bảo đã import Bootstrap CSS trong App.js

// Dữ liệu giả định cho 4 sinh viên
const studentsData = [
  { id: 'DE160782', name: 'Nguyễn Hữu Quốc Khang', campus: 'Đà Nẵng' },
  { id: 'DE160577', name: 'Chau Vinh Thuan', campus: 'Quảng Nam' },
  { id: 'DE160547', name: 'Đỗ Nguyễn Phôn', campus: 'Quảng Nam' },
  { id: 'DE170049', name: 'Lê Hoàng Minh', campus: 'Đà Nẵng' },
];

// Helper component cho mỗi thẻ sinh viên
const StudentCard = ({ student }) => {
  // Hàm tạo ảnh ngẫu nhiên từ dịch vụ placeholder
  const getRandomImage = (id) => `https://picsum.photos/seed/${id}/200/250`;

  return (
    // Col-6 trên màn hình vừa (md) để hiển thị 2 cột, và full-width trên màn hình nhỏ
    <Col md={6} lg={3} className="mb-4">
      <div className="text-center p-3 border rounded h-100">
        
        {/* Ảnh Sinh Viên */}
        <img 
          src={getRandomImage(student.id)} 
          alt={student.name} 
          className="img-fluid rounded"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        
        <p className="mt-2 mb-1 small text-muted">{student.id}</p>
        <h6 className="fw-bold">{student.name}</h6>
        <p className="small">{student.campus}</p>
        
        {/* Checkbox "Absent" / "Present" */}
        <div className="d-flex justify-content-center gap-3 mb-2">
          <Form.Check 
            type="radio"
            label="Absent"
            name={`status-${student.id}`}
            id={`absent-${student.id}`}
            inline
          />
          <Form.Check 
            type="radio"
            label="Present"
            name={`status-${student.id}`}
            id={`present-${student.id}`}
            inline
          />
        </div>
        
        <Button variant="warning" size="sm">Update</Button>
      </div>
    </Col>
  );
};


const Question5 = () => {
  return (
    <Container fluid className="p-0">

      {/* --- 1. NAVBAR (Header trên cùng) --- */}
      <Navbar style={{ backgroundColor: '#f0e68c' }} className="py-2">
        <Container fluid>
          <Navbar.Brand href="#" className="fw-bold text-dark">
            <img 
              src="https://via.placeholder.com/30/ff8c00/ffffff?text=Logo" // Logo Placeholder
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
              alt="Logo"
            />
            MyPage
          </Navbar.Brand>
          <Nav className="me-auto small">
            <Nav.Link href="#" className="text-dark">Trang chủ</Nav.Link>
            <Nav.Link href="#" className="text-dark">Người học</Nav.Link>
            <Nav.Link href="#" className="text-dark">Cán bộ</Nav.Link>
            <Nav.Link href="#" className="text-dark">Sinh viên</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              size="sm"
            />
          </Form>
        </Container>
      </Navbar>
      
      {/* --- 2. HEADER IMAGE --- */}
      <div className="text-center">
        <img 
          src="https://picsum.photos/seed/header/1200/300" 
          alt="Student Group" 
          className="img-fluid"
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* --- 3. BREADCRUMB --- */}
      <Container className="mt-3">
        <Breadcrumb className="small">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Students</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      
      {/* --- 4. STUDENTS DETAIL SECTION --- */}
      <Container className="mb-5">
        <h2 className="text-center my-4 fw-bold">Students Detail</h2>
        
        <Row>
          {/* Mapping qua dữ liệu sinh viên để hiển thị 4 thẻ */}
          {studentsData.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </Row>
      </Container>
      
      {/* --- 5. FOOTER --- */}
      <div 
        className="text-white py-4" 
        style={{ backgroundColor: '#ff8c00' }} // Màu cam
      >
        <Container>
          <Row>
            {/* Cột 1: Địa chỉ */}
            <Col md={6}>
              <h6 className="fw-bold">Our Address</h6>
              <small>
                <i className="bi bi-geo-alt-fill me-2"></i> Ký túc xá Đại học FPT Đà Nẵng
                <br />
                <i className="bi bi-telephone-fill me-2"></i> (0236) 730 0999
                <br />
                <i className="bi bi-envelope-fill me-2"></i> example@fpt.edu.vn
              </small>
            </Col>

            {/* Cột 2: Social Media và Copyright */}
            <Col md={6} className="text-md-end mt-3 mt-md-0">
              <h5 className="fw-bold mb-3">
                <span className="me-3">G+</span>
                <i className="bi bi-facebook me-3"></i>
                <i className="bi bi-linkedin me-3"></i>
                <i className="bi bi-twitter me-3"></i>
                <i className="bi bi-youtube"></i>
              </h5>
              <p className="small mt-5">© Copyright 2023</p>
            </Col>
          </Row>
        </Container>
      </div>
      
    </Container>
  );
};

export default Question5;