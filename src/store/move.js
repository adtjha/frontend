import extractObject from "../components/functions/extractObject";
import _ from "lodash";

const initialState = {
  fen: "r0r0r04r0/g21g0g0g0/y0y0y0y0/b0b0b0b13 r 4",
};

_.forIn(extractObject(initialState.fen), (v, k) => {
  initialState[k] = v;
});

export function movesReducer(state = initialState, action) {
  switch (action.type) {
    case "move/red":
      console.log(state.dice);
      return {
        ...state,
        red: state.red.map((p, i) =>
          i === action.payload
            ? isNaN(p)
              ? 1
              : (p = parseInt(p) + parseInt(state.dice))
            : p
        ),
      };
    case "move/green":
      return {
        ...state,
        green: state.green.map((p, i) =>
          i === action.payload
            ? isNaN(p)
              ? 1
              : (p = parseInt(p) + parseInt(state.dice))
            : p
        ),
      };
    case "move/yellow":
      return {
        ...state,
        yellow: state.yellow.map((p, i) =>
          i === action.payload
            ? isNaN(p)
              ? 1
              : (p = parseInt(p) + parseInt(state.dice))
            : p
        ),
      };
    case "move/blue":
      return {
        ...state,
        blue: state.blue.map((p, i) =>
          i === action.payload
            ? isNaN(p)
              ? 1
              : (p = parseInt(p) + parseInt(state.dice))
            : p
        ),
      };
    default:
      return state;
  }
}
