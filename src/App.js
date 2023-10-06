import { useReducer } from "react";
import "./styles.css";

export default function App() {
  const initialState = {
    result: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { result: state.result + action.paylaod };
      case "SUBTRACT":
        return { result: state.result - action.paylaod };
      case "MULTIPLY":
        return { result: state.result * action.paylaod };
      case "DIVIDE":
        return { result: state.result / action.paylaod };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>{state.result}</h1>
      <button onClick={() => dispatch({ type: "ADD", paylaod: 5 })}>
        Add 5
      </button>
      <button onClick={() => dispatch({ type: "SUBTRACT", paylaod: 2 })}>
        Subtract 2
      </button>
      <button onClick={() => dispatch({ type: "MULTIPLY", paylaod: 3 })}>
        Multiply by 3
      </button>
      <button onClick={() => dispatch({ type: "DIVIDE", paylaod: 4 })}>
        Divide by 4
      </button>
    </div>
  );
}
