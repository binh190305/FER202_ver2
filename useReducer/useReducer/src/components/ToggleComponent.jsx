// src/components/ToggleComponent.jsx
import React, { useReducer } from "react";
import { Button, Card } from "react-bootstrap";

// Trạng thái ban đầu
const initialState = { isOn: false };

// Hàm reducer
function toggleReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { isOn: !state.isOn };
    default:
      return state;
  }
}

function ToggleComponent() {
  const [state, dispatch] = useReducer(toggleReducer, initialState);

  return (
    <Card style={{ width: "20rem", margin: "30px auto", padding: "20px" }}>
      <h3 className="text-center mb-3">💡 Bật / Tắt Trạng Thái</h3>
      <div className="text-center">
        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: state.isOn ? "green" : "gray",
          }}
        >
          {state.isOn ? "ON 🔆" : "OFF 🌑"}
        </p>
        <Button
          variant={state.isOn ? "danger" : "success"}
          onClick={() => dispatch({ type: "toggle" })}
        >
          {state.isOn ? "Tắt" : "Bật"}
        </Button>
      </div>
    </Card>
  );
}

export default ToggleComponent;
