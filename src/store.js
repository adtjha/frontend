import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import create2Darray from "./components/functions/create2Darray";

const fen = "r0r0r0r0/g0g0g0g0/y0y0y0y0/b0b0b5b4 r 4";
const default_pos = create2Darray(fen);

const initialState = {
  cells: [...default_pos],
  currentPlayer: "r",
  dice: 4,
};

function reducer(state = initialState, action) {
  return state;
}

export const store = createStore(reducer,  composeWithDevTools());
