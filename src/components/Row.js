import Cell from './Cell'

const cells = [1,2,3,4,5,6,7,8,9,10,11,12,13]

function Row(props) {
    
    const Items = cells.map((e) => 
        <Cell rowId={props.count} count={e} cellData={props.rowData[e-1]} />
    )

    return (
        <div id={props.count} className="row grid grid-rows-1 grid-cols-13 gap-1 justify-self-center">
            {Items}
        </div>
    );
}

export default Row;

