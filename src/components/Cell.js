import React from "react";
import Piece from "./Piece";

class Cell extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        this.className = "border-2 border-dotted";
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(e.currentTarget);
    }
    
    render(){
        return (
            <div key={(this.props.rowid + this.props.cellid).toString()}
                rowid={this.props.rowid}
                cellid={this.props.count}
                className={this.className}
                onClick={this.handleSubmit}
            >
            {this.className ? (this.props.cellData.length === 2 ? (<Piece data={this.props.cellData} />) : ("")) : ("")}
          </div>
        );
    }
}


export default Cell;