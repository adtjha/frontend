import React from "react";
import Piece from "./Piece";

class Cell extends React.Component {
    constructor(props){
        super(props)
        this.className = "cell w-8 h-8 p-1 text-center "
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(e.currentTarget);
    }
    
    render(){
        switch(this.props.cellLayout){
            case '0':
                this.className += "border-2 border-dotted";
                break;
            case '1':
                this.className += "outline-black bg-red-400";
                break;
            case '2':
                this.className += "outline-black bg-green-400";
                break;
            case '3':
                this.className += "outline-black bg-yellow-400";
                break;
            case '4':
                this.className += "outline-black bg-blue-400";
                break;
            case '5':
                this.className += "outline-black bg-violet-400";
                break;
            case '6':
                this.className += "outline-black bg-gray-100";
                break;
            default:
                this.className += "border-2 border-dotted";
        }

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