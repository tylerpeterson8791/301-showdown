import { createStore } from "redux";

// Initial state
const initialState = {
  p1score: 0,
  p1name: "",
  p2score: 0,
  p2name: ""
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_P1NAME":
      return { ...state, p1name: action.payload };
    case "SET_P1SCORE":
      return { ...state, p1score: action.payload };
      case "SET_P2NAME":
      return { ...state, p1name: action.payload };
    case "SET_P2SCORE":
      return { ...state, p1score: action.payload };

    default:
      return state;
  }
};

// Create store
const store = createStore(rootReducer);

export default store;
