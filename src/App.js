import './App.css';
import Board from './components/Board';
import create2Darray from './components/functions/create2Darray';

const fen = 'r1r0r0r23/g0g2g1g4/y0y0y0y47/b0b6b24b0 r 4'

function App() {
  const newArray = create2Darray(fen);

  return (
    <div className="App p-8">
      <Board key={1} fen={fen} pos={newArray} />
    </div>
  );
}

export default App;

