import React from "react";
import red from "../images/red.svg";
import green from "../images/green.svg";
import yellow from "../images/yellow.svg";
import blue from "../images/blue.svg";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import Constants from "./Constants";

function Piece(props) {
  const letter = props.name;
  const color = Constants.colorNames[letter.split("")[0]];
  const num = props.name.split("")[1];
  const patharr = Constants[color.toUpperCase() + "_PATH"];
  var className, piece, newPos;

  const position = useSelector((state) => state.move[color][num - 1]);
  const dice = useSelector((state) => state.move.dice);

  const dispatch = useDispatch();

  if (letter.includes("r")) {
    piece = red;
  } else if (letter.includes("g")) {
    piece = green;
  } else if (letter.includes("y")) {
    piece = yellow;
  } else {
    piece = blue;
  }

  if (_.inRange(props.multiple, 1, 2)) {
    className = "w-4 h-4";
  } else if (_.inRange(props.multiple, 2, 4)) {
    className = "w-3 h-3";
  } else if (_.inRange(props.multiple, 4, 6)) {
    className = "w-2 h-2";
  }

  const handleClick = (e) => {
    newPos = position === letter ? 1 : parseInt(position) + parseInt(dice);
    const start = Constants.xy(patharr, position),
      end = Constants.xy(patharr, newPos);
      e.currentTarget.className += Constants.generateTranslate(start, end);
    setTimeout(() => {
      dispatch({
        type: "move/" + color,
        payload: num - 1,
      });
    }, 100);
  };

  return (
    <React.Fragment>
      <img
        className={className}
        data={props.name}
        src={piece || color}
        alt={props.name}
        onClick={handleClick}
      ></img>
    </React.Fragment>
  );
}

export default Piece;
