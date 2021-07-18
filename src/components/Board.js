import React from 'react'
import { useSelector } from 'react-redux'
import Cell from './Cell'
import create2Darray from './functions/create2Darray';

const Board = (props) => {
  const data = {
    red: useSelector((state) => state.move.red),
    green: useSelector((state) => state.move.green),
    yellow: useSelector((state) => state.move.yellow),
    blue: useSelector((state) => state.move.blue),
  };
  console.log(data)
  const pos = [...create2Darray(data)];

  return (
    <div>
      <div className="board w-max h-max m-auto p-2 border-2 border-solid rounded shadow-md">
        <div className="z-20 w-max grid grid-cols-13 auto-rows-auto gap-1 justify-items-stretch">
          {pos.map((cell) => (
            <Cell key={cell.id} data={cell} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Board;