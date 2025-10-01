import React from 'react';
import { Container } from 'react-bootstrap';
// Giả sử bạn đã import 'bootstrap/dist/css/bootstrap.min.css' trong App.js hoặc index.js

const Question2 = () => {
  return (
    <Container className="my-5 text-center">
      
      {/* Khối Header (Giống Jumbotron/Alert) */}
      {/* p-4: padding, mb-5: margin bottom, bg-light: nền xám nhạt, border rounded: bo góc */}
      <div className="bg-light p-4 mb-5 border rounded">
        <h3>My First Bootstrap Page</h3>
      </div>
      
      {/* Khối Hình Ảnh */}
      {/* d-flex: sử dụng flexbox, justify-content-center: căn giữa các item, gap-5: tạo khoảng cách lớn giữa các hình */}
      <div className="d-flex justify-content-center gap-5">
        
        {/* Hình 1: HTML5 */}
        {/* Sử dụng placeholder images hoặc đường dẫn thật của logo nếu có */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" 
          alt="HTML5 Logo" 
          style={{ width: '100px', height: 'auto' }} 
          className="img-fluid"
        />

        {/* Hình 2: CSS3 */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" 
          alt="CSS3 Logo" 
          style={{ width: '100px', height: 'auto' }} 
          className="img-fluid"
        />
        
        {/* Hình 3: Bootstrap (biểu tượng chữ B) */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" 
          alt="Bootstrap Logo" 
          style={{ width: '100px', height: 'auto' }} 
          className="img-fluid"
        />
        
      </div>
    </Container>
  );
};

export default Question2;