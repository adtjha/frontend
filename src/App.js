import './App.css';
import Board from './components/Board';

const fen = 'r2r0r0r0/g0g2g0g0/y0y0y0y47/b0b6b24b0 r 4'

function App() {
  return (
    <div className="App p-8">
      <Board id={'1'} fen={fen}/>
    </div>
  );
}

export default App;

