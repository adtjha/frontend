import React from "react";
import red from "../images/red.svg";
import green from "../images/green.svg";
import yellow from "../images/yellow.svg";
import blue from "../images/blue.svg";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import Constants from "./Constants";

function Piece(props) {
  const letter = props.data;
  var className;
  var piece;
  var temp = '';

  // const selectedPiece = useSelector((state) => state.selectedPiece);
  const dispatch = useDispatch();

  const handleClick = () => {
    temp = " transition-transform duration-300 transform -translate-x-9";
    dispatch({
      type: "move/"+Constants.colorNames[props.data.split('')[0]],
      payload: props.data.split("")[1] - 1,
    });
  };

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

  // if (selectedPiece === props.data) {
  //   className += " transition-transform duration-300 transform -translate-x-9";
  // }

  return (
    <React.Fragment>
      <img
        className={className+temp}
        data={props.data}
        src={piece}
        alt={props.data}
        onClick={handleClick}
      ></img>
    </React.Fragment>
  );
}

export default Piece;
