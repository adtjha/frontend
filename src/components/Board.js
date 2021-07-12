import { useState } from 'react'
import Constants from './Constants'
import Row from './Row'
import create2Darray from './functions/create2Darray'

const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']

function Board(props) {
  // var [layout, setlayout] = useState(props.fen?:default_layout)
  const layout = create2Darray(props.fen);
  
  return (
    <div>
      <h1 className="font-sans text-4xl text-center p-6">JAI &#128591;</h1>
      <div id={props.id} className="board w-max h-max m-auto p-2 border-2 border-solid rounded shadow-md">
        <div className="z-20 w-max grid grid-rows-13 grid-cols-1 gap-1 justify-items-stretch">
          {row.map((e) => <Row count={letters[e - 1]} rowData={layout[e - 1]} />)}
        </div>
      </div>
    </div>
  );
}

export default Board


