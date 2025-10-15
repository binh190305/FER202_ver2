import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Alert, Modal } from 'react-bootstrap';
// Make sure to install react-bootstrap: npm install react-bootstrap bootstrap

function ProfileForm() {
  // 1. Khai báo và sử dụng state cho từng biến: name, email, age
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  // State để lưu trữ lỗi
  const [errors, setErrors] = useState({});

  // State cho việc hiển thị Toast/Alert
  const [showToast, setShowToast] = useState(false);

  // State cho Modal hiển thị dữ liệu đã submit
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // State cho việc kiểm tra form hợp lệ
  const [isFormValid, setIsFormValid] = useState(false);

  // Hàm kiểm tra tính hợp lệ của form (Validation Logic)
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Validation cho Name: Không được rỗng
    if (!name.trim()) {
      newErrors.name = 'Tên không được để trống.';
      isValid = false;
    }

    // Validation cho Email: Hợp lệ có @
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = 'Email không hợp lệ và cần có @.';
      isValid = false;
    }

    // Validation cho Age: Từ 18-55 tuổi.
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 55) {
      newErrors.age = 'Tuổi phải từ 18 đến 55.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // 2. useEffect để kiểm tra form hợp lệ mỗi khi state thay đổi
  useEffect(() => {
    setIsFormValid(validateForm());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, age]);

  // Xử lý khi Submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Không reload trang

    if (isFormValid) {
      // 3. Xử lý khi người dùng nhấn Submit button: show Toast
      setShowToast(true);
      setSubmittedData({ name, email, age });
      setShowModal(true); // Hiển thị Modal

      // Tắt Toast sau 3 giây
      setTimeout(() => setShowToast(false), 3000);
    } else {
      // Nếu không hợp lệ, setErrors sẽ hiển thị các thông báo lỗi
      validateForm();
    }
  };

  // Component Modal hiển thị dữ liệu
  const SubmissionModal = () => (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Thông tin đã gửi thành công! ✅</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Header as="h5">Dữ liệu đã gửi</Card.Header>
          <Card.Body>
            <Card.Text>
              <strong>Tên:</strong> {submittedData?.name}
            </Card.Text>
            <Card.Text>
              <strong>Email:</strong> {submittedData?.email}
            </Card.Text>
            <Card.Text>
              <strong>Tuổi:</strong> {submittedData?.age}
            </Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Profile Registration Form 👤</h2>
      {/* Toast/Alert thông báo submit thành công */}
      {showToast && (
        <Alert variant="success" onClose={() => setShowToast(false)} dismissible>
          Submitted successfully! 🎉
        </Alert>
      )}

      {/* 4. Form cho các trường ở trên và hiển thị lỗi */}
      <Form onSubmit={handleSubmit}>
        {/* Input Name */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={!!errors.name} // Hiển thị màu đỏ nếu có lỗi
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Input Email */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Input Age */}
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Nút Submit: chỉ enable khi form hợp lệ */}
        <Button variant="primary" type="submit" disabled={!isFormValid}>
          Submit
        </Button>
        {!isFormValid && (
          <p className="text-danger mt-2">
            *Vui lòng điền đầy đủ và chính xác thông tin để Submit.
          </p>
        )}
      </Form>

      {/* 5. Modal hiển thị dữ liệu đã submit */}
      {submittedData && <SubmissionModal />}
    </div>
  );
}

// Export component để sử dụng
export default ProfileForm;

// Để chạy được component này, bạn cần import nó vào App.js (hoặc file root khác) và đảm bảo đã cài đặt 'react-bootstrap' và import CSS của Bootstrap trong file root của ứng dụng (thường là index.js hoặc App.js)
// Ví dụ: import 'bootstrap/dist/css/bootstrap.min.css';