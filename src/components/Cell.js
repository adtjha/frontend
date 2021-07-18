import React from "react";
import Piece from "./Piece";
import { useDispatch } from "react-redux";

const Cell = (props) => {
  let className, piece;
  const dispatch = useDispatch();

  className = props.data.style;
  if (props.data.has) {
    if (props.data.has.length > 1) {
      piece = props.data.has.map((e) => {
        return (
          <Piece key={e} data={e} size={0} multiple={props.data.has.length} />
        );
      });
    } else {
      piece = props.data.has.map((e) => {
        return <Piece key={e} data={e} size={0} multiple={1} />;
      });
    }
    className += " flex justify-center items-center flex-wrap ";
  }

  const handleClick = () => {
    console.log(props.data)
  }

  return (
    <div className={className} onClick={handleClick} >
      {piece}
    </div>
  );
};

export default Cell;
