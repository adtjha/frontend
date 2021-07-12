import './App.css';
import Board from './components/Board';

const fen = 'r0r0r0r0/g0g0g0g0/y0y0y0y0/b0b0b0b0 r 4'

function App() {
  return (
    <div className="App p-8">
      <Board id={'1'} fen={fen}/>
    </div>
  );
}

export default App;

