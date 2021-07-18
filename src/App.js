import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App p-8">
      <h1 className="font-sans text-4xl text-center p-6">JAI &#128591;</h1>
      <Board key={1}/>
    </div>
  );
}

export default App;

