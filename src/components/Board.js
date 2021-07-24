import { useSelector } from "react-redux";
import Cell from "./Cell";
import create2Darray from "./functions/create2Darray";
import { videoChat } from "./videoChat";
import Dice from "./Dice";
import { useGeolocation } from "react-use";

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
      <div>
          <div className="board block w-max h-max max-w-full  lg:p-4 m-auto p-1 border-2 border-solid rounded-2xl shadow-md">
              {videoChat}
              <div className="relative z-20 w-max max-w-full grid grid-cols-13 auto-rows-auto gap-1 lg:gap-2 justify-items-stretch">
                  {pos.map((cell) => (
                      <Cell key={cell.id} data={cell} />
                  ))}
              </div>
          </div>
          <Dice num={data.dice} />
      </div>
  )
};

export default Board;
