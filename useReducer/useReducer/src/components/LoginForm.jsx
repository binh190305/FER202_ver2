import React, { useReducer } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

// 🎯 State ban đầu
const initialState = {
  username: "",
  password: "",
  error: "",
  isSubmitted: false,
};

// 🎯 Reducer
function reducer(state, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SUBMIT_SUCCESS":
      return { ...state, isSubmitted: true, error: "" };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.username === "" || state.password === "") {
      dispatch({ type: "SET_ERROR", payload: "Please fill all fields." });
      return;
    }

    if (state.username === "admin" && state.password === "1234") {
      dispatch({ type: "SUBMIT_SUCCESS" });
    } else {
      dispatch({ type: "SET_ERROR", payload: "Invalid credentials!" });
    }
  };

  return (
    <Card className="p-4 shadow-lg" style={{ width: "350px", margin: "40px auto" }}>
      <h3 className="text-center mb-3">Login</h3>

      {state.error && <Alert variant="danger">{state.error}</Alert>}
      {state.isSubmitted && <Alert variant="success">✅ Login successful!</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={state.username}
            onChange={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={state.password}
            onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Login
        </Button>
      </Form>
    </Card>
  );
}
