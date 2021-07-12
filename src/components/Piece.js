import React from 'react';
import red from '../images/red.svg'
import green from "../images/green.svg";
import yellow from "../images/yellow.svg";
import blue from "../images/blue.svg";

function Piece(props) {

    const letter = props.data
    var piece;

    if (letter.includes('r')){
        piece = red;
    } else if (letter.includes('g')){
        piece = green
    } else if (letter.includes('y')){
        piece = yellow
    } else {
        piece = blue
    }

    return (
      <React.Fragment>
        <img className="stroke-0" data={props.data} src={piece} alt="P"></img>
      </React.Fragment>
    );
}



export default Piece