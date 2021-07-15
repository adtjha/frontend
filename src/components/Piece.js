import React from "react";
import red from "../images/red.svg";
import green from "../images/green.svg";
import yellow from "../images/yellow.svg";
import blue from "../images/blue.svg";
import _ from "lodash";

function Piece(props) {
  const letter = props.data;
  var className;
  var piece;

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

  return (
    <React.Fragment>
      <img className={className} data={props.data} src={piece} alt="P"></img>
    </React.Fragment>
  );
}

export default Piece;
