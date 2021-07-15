import React from 'react'
import Constants from './Constants'
import Cell from './Cell'
import _ from 'lodash'

const default_layout = Constants.DEFAULT_BOARD_LAYOUT
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: default_layout,
    };
    this.updateBoard = this.updateBoard.bind(this);
    // console.log(this.state)
  }

  updateBoard(pos) {
    // console.log(pos)
    this.setState({position: this.props.pos}, ()=>{/*console.log(this.state)*/});
    // console.log("Done")
  }

  componentDidMount() {
    this.updateBoard(this.props.pos);
  }

  componentDidUpdate(){
    // console.log(this.state.position);
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1 className="font-sans text-4xl text-center p-6">JAI &#128591;</h1>
        <div className="board w-max h-max m-auto p-2 border-2 border-solid rounded shadow-md">
          <div className="z-20 w-max grid grid-cols-13 auto-rows-auto gap-1 justify-items-stretch">
            {this.state.position.map((cell) => (
              <Cell key={cell.id} data={cell} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  move(piece, from, to){
    const demo = _.cloneDeep(this.state.position);
    let ptm=[];
    demo[from].has = _.remove(demo[from].has, (p)=>{
      if (p !== piece){
       return p 
      } else ptm.push(piece)
    })
    demo[to].has.push(_.cloneDeep(ptm))
    this.updateBoard(demo)
  }
}

export default Board;