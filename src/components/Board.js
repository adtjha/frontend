import React from 'react'
import Constants from './Constants'
import Row from './Row'
import create2Darray from './functions/create2Darray'

const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
const layout = Constants.DEFAULT_CELL_LAYOUT
const default_layout = Constants.DEFAULT_BOARD_LAYOUT
class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: default_layout
    }
    this.updateBoard = this.updateBoard.bind(this)
  }
  
  updateBoard(fen) {
    this.setState({ position: create2Darray(fen) });
  }

  componentDidMount(){
    this.updateBoard(this.props.fen);
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(prevProps, prevState, this.state.position);
  }

  render() {
    return (
      <div>
        <h1 className="font-sans text-4xl text-center p-6">JAI &#128591;</h1>
        <div
          key={this.props.id}
          className="board w-max h-max m-auto p-2 border-2 border-solid rounded shadow-md"
        >
          <div className="z-20 w-max grid grid-rows-13 grid-cols-1 gap-1 justify-items-stretch">
            {row.map((e) => (
              <Row
                count={letters[e - 1]}
                rowData={this.state.position[e - 1]}
                cellLayout={layout[e - 1]}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;