import Piece from "./Piece";

function Cell(props) {
    
    let className = "cell w-8 h-8 p-1 text-center "
    
    switch(props.cellData){
        case '0':
            className += "border-2 border-dotted";
            break;
        case '1':
            className += "outline-black bg-red-400";
            break;
        case '2':
            className += "outline-black bg-green-400";
            break;
        case '3':
            className += "outline-black bg-yellow-400";
            break;
        case '4':
            className += "outline-black bg-blue-400";
            break;
        case '5':
            className += "outline-black bg-violet-400";
            break;
        case '6':
            className += "outline-black bg-gray-100";
            break;
        default:
            className += "border-2 border-dotted";
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.currentTarget);
    }

    return (
        <div rowid={props.rowId} cellid={props.count} className={className} onClick={handleSubmit}>
            {className?((props.cellData.length === 2)?<Piece data={props.cellData} />:''):''}
        </div>
    );
}

export default Cell;

