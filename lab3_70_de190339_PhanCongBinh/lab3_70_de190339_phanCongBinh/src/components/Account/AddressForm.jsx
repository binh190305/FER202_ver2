// src/components/account/AddressForm.jsx
import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const AddressForm = ({ validated, onPrevious, onFinish }) => {
  return (
    <Form noValidate validated={validated}>
      <Form.Group className="mb-3" controlId="street">
        <Form.Label>Street</Form.Label>
        <Form.Control required type="text" placeholder="Enter street" />
        <Form.Control.Feedback type="invalid">
          Please enter street.
        </Form.Control.Feedback>
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control required type="text" placeholder="Enter city" />
            <Form.Control.Feedback type="invalid">
              Please enter city.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Select required>
              <option value="">Select...</option>
              <option>USA</option>
              <option>Vietnam</option>
              <option>Japan</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select country.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="zip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control required type="text" placeholder="Enter zip code" />
        <Form.Control.Feedback type="invalid">
          Please enter zip code.
        </Form.Control.Feedback>
      </Form.Group>

      <div className="d-flex justify-content-between mt-3">
        <Button variant="secondary" onClick={onPrevious}>Previous</Button>
        <Button variant="success" onClick={onFinish}>Finish</Button>
      </div>
    </Form>
  );
};

export default AddressForm;
