// src/components/account/AboutForm.jsx
import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const AboutForm = ({ validated }) => {
  return (
    <Form noValidate validated={validated}>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter first name" />
            <Form.Control.Feedback type="invalid">
              Please enter your first name.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter last name" />
            <Form.Control.Feedback type="invalid">
              Please enter your last name.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control required type="tel" placeholder="Enter phone number" />
        <Form.Control.Feedback type="invalid">
          Please enter your phone.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control required type="number" placeholder="Enter age" />
        <Form.Control.Feedback type="invalid">
          Please enter your age.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="avatar">
        <Form.Label>Avatar</Form.Label>
        <Form.Control required type="file" />
        <Form.Control.Feedback type="invalid">
          Please upload your avatar.
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default AboutForm;
