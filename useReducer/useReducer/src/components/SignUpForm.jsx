import React, { useReducer } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

// 🎯 State ban đầu
const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: "",
  success: false,
};

// 🎯 Reducer
function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_SUCCESS":
      return { ...state, success: true, error: "" };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function SignUpForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.username || !state.email || !state.password || !state.confirmPassword) {
      dispatch({ type: "SET_ERROR", payload: "Please fill all fields." });
      return;
    }

    if (state.password !== state.confirmPassword) {
      dispatch({ type: "SET_ERROR", payload: "Passwords do not match!" });
      return;
    }

    dispatch({ type: "SET_SUCCESS" });
  };

  return (
    <Card className="p-4 shadow-lg" style={{ width: "400px", margin: "40px auto" }}>
      <h3 className="text-center mb-3">Sign Up</h3>

      {state.error && <Alert variant="danger">{state.error}</Alert>}
      {state.success && <Alert variant="success">✅ Sign Up Successful!</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={state.username}
            onChange={(e) =>
              dispatch({ type: "SET_FIELD", field: "username", value: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "SET_FIELD", field: "password", value: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={state.confirmPassword}
            onChange={(e) =>
              dispatch({ type: "SET_FIELD", field: "confirmPassword", value: e.target.value })
            }
          />
        </Form.Group>

        <Button type="submit" variant="success" className="w-100">
          Sign Up
        </Button>
      </Form>
    </Card>
  );
}
