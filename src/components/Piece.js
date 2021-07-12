import { useState } from 'react';
import piece from '../images/piece.png'

function Piece(props) {

    const [place, setplace] = useState('0')

    const letter = props.data
    var color;

    if (letter.includes('r')){
        color = 'red'
    } else if (letter.includes('g')){
        color = 'green'
    } else if (letter.includes('y')){
        color = 'yellow'
    } else {
        color = 'blue'
    }

    return (
        <img className={'bg-'+color+'-300'} data={props.data} src={piece} alt="P"></img>
    );
}



export default Piece