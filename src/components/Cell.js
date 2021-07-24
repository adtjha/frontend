import React from 'react'
import Piece from './Piece'
import Constant from './Constants'

const Cell = (props) => {
    let className, piece

    className = props.data.style
    if (props.data.has) {
        if (props.data.has.length > 1) {
            piece = props.data.has.map((e) => {
                return (
                    <Piece
                        key={e}
                        cell_data={props.data}
                        name={e}
                        size={0}
                        multiple={props.data.has.length}
                    />
                )
            })
        } else {
            piece = props.data.has.map((e) => {
                return (
                    <Piece
                        key={e}
                        cell_data={props.data}
                        name={e}
                        size={0}
                        multiple={1}
                    />
                )
            })
        }
        className += ' flex justify-center items-center flex-wrap '
    }
    if (className) {
        Constant.cellsNotToDraw.forEach((e) => {
            if (props.data.id === e) {
                className = 'cell w-8 h-8 p-1 '
            }
        })
    }

    const handleClick = () => {
        // console.log(props.data)
    }

    return (
        <div className={className} onClick={handleClick}>
            {piece}
        </div>
    )
}

export default Cell
