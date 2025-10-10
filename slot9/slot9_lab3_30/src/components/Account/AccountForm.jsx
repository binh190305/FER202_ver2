// src/components/account/AccountForm.jsx
import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { BsPersonFill, BsLockFill } from "react-icons/bs";

const AccountForm = ({ validated }) => {
  return (
    <Form noValidate validated={validated}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text><BsPersonFill /></InputGroup.Text>
          <Form.Control required type="text" placeholder="Enter username" />
          <Form.Control.Feedback type="invalid">
            Username is required.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text><BsLockFill /></InputGroup.Text>
          <Form.Control required type="password" placeholder="Enter password" />
          <Form.Control.Feedback type="invalid">
            Password is required.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control required type="password" placeholder="Confirm password" />
        <Form.Control.Feedback type="invalid">
          Please confirm your password.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="secretQuestion">
        <Form.Label>Secret Question</Form.Label>
        <Form.Control required type="text" placeholder="Enter your secret question" />
        <Form.Control.Feedback type="invalid">
          Secret question is required.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="answer">
        <Form.Label>Answer</Form.Label>
        <Form.Control required type="text" placeholder="Answer" />
        <Form.Control.Feedback type="invalid">
          Please provide an answer.
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default AccountForm;
