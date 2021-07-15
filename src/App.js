import './App.css';
import Board from './components/Board';

function App() {
  console.log("Updates")
  return (
    <div className="App p-8">
      <Board key={1} />
    </div>
  );
}

export default App;

