import { useSelector } from "react-redux";
import Cell from "./Cell";
import create2Darray from "./functions/create2Darray";
import { videoChat } from "./videoChat";
import Dice from "./Dice";
import { useGeolocation } from "react-use";
import React from "react";

const Board = (props) => {
  const geoState = useGeolocation();
  const data = {
    red: useSelector((state) => state.move.red),
    green: useSelector((state) => state.move.green),
    yellow: useSelector((state) => state.move.yellow),
    blue: useSelector((state) => state.move.blue),
    dice: useSelector((state) => state.move.dice),
  };
  const pos = [...create2Darray(data)];

  return (
      <React.Fragment>
          <div className="board block lg:w-max lg:h-max lg:max-w-full  lg:p-4 m-auto p-1 border-2 border-solid rounded-2xl shadow-md">
              <div className="relative z-20 lg:w-max lg:max-w-full grid grid-cols-sm13 lg:grid-cols-13 grid-rows-sm13 lg:grid-rows-13 md:gap-1 lg:gap-2 justify-items-stretch">
                  {pos.map((cell) => (
                      <Cell key={cell.id} data={cell} />
                      ))}
                    {videoChat}
              </div>
          </div>
          <Dice num={data.dice} />
      </React.Fragment>
  )
};

export default Board;
