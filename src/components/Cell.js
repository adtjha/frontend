import React from "react";
import Piece from "./Piece";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.className = "";
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
  }

  componentDidUpdate(prevProps){
    if(this.props.data.has !== prevProps.data.has){
      console.log(true)
    }
  }
  
  modify() {
    this.className = this.props.data.style;
    if (this.props.data.has) {
      if (this.props.data.has.length > 1) {
        this.piece = this.props.data.has.map((e) => {
          return (
            <Piece
              key={e}
              data={e}
              size={0}
              multiple={this.props.data.has.length} />
          );
        });
      } else {
        this.piece = this.props.data.has.map((e) => {
          return <Piece key={e} data={e} size={0} multiple={1} />;
        });
      }
      this.className += " flex justify-center items-center flex-wrap ";
    }
  }

  render() {
    this.modify();
    return (
      <div
        className={this.className}
        onClick={this.handleSubmit}
      >
        {this.piece}
      </div>
    );
  }

}

export default Cell;
