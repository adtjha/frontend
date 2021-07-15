import React, { useEffect } from 'react'
import Cell from './Cell'
import { useSelector } from 'react-redux'

const Board = (props) => {
  // const [pos, setPos] = useState(props.pos)
  
  const pos = useSelector((state) => state.cells);
  const player = useSelector((state) => {console.log(state.currentPlayer);return state.currentPlayer})
  
  useEffect(() => {
    console.log(player);
  });

  return (
    <div>
      <h1 className="font-sans text-4xl text-center p-6">JAI &#128591;</h1>
      <h4 className="font-serif text-2xl text-center py-0 px-6">{player}</h4>
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