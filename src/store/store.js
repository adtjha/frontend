import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { movesReducer } from "./move";


export const store = createStore(combineReducers({
  move: movesReducer
}), composeWithDevTools());
