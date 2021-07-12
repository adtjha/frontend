import Cell from './Cell'

const cells = [1,2,3,4,5,6,7,8,9,10,11,12,13]

function Row(props) {
    
    const Items = cells.map((e) => 
        <Cell rowid={props.count} count={e} cellData={props.rowData[e-1]} cellLayout={props.cellLayout[e - 1]} />
    )

    return (
        <div key={props.count.toString()} className="row grid grid-rows-1 grid-cols-13 gap-1 justify-self-center">
            {Items}
        </div>
    );
}

export default Row;
