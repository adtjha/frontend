import Constants from "../Constants";
import _ from "lodash";

export default function placeData(color, colorArray, board) {
  // Place Cell objects
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== "0") {
        if (!board[i][j].where) {
          console.log(board[i][j], i, j, color);
          board[i][j] = placeCellObjects(board[i][j], i, j, color);
        }
      }
    }
  }
  console.log(board);
  // // Placing pieces
  // colorArray.forEach((e, i) => {
  //   // find location to move
  //   var [x, y] = locate(e, color);
  //   // location has other pieces as well,
  //   // place the piece with all other
  //   // place the piece, if no other
  //   board[x][y] = color[0].concat(i+1);
  // });
  // return edited board.
  return board;
}

// find location piece to be on. and return
function locate(num, color) {
  const pathName = color.toUpperCase() + "_PATH";
  const path = _.cloneDeep(Constants[pathName]);
  console.log(Constants[pathName]);

  var x, y;

  for (let i = 0; i < path.length; i++) {
    for (let j = 0; j < path[i].length; j++) {
      const cell = path[i][j];
      if (cell === num) {
        x = i;
        y = j;
      }
    }
  }

  return [x, y];
}

function placeCellObjects(cellid, i, j, color) {
  let cellObject;
  // find cell_obj according to cell id,
  // clone cell_obj
  if (cellid.length > 1) {
    if (cellid[1] === "1") {
      // begin cell
      cellObject = _.cloneDeep(Constants["begin_cell_obj"]);
      cellObject.style.concat(" bg-" + color + "-400");
    } else if (cellid[1] === "2") {
      // final cell
      cellObject = _.cloneDeep(Constants["final_cell_obj"]);
      cellObject.style.concat(" bg-" + color + "-400");
    } else if (cellid[1] === "3") {
      // end cell
      cellObject = _.cloneDeep(Constants["end_cell_obj"]);
      cellObject.style.concat(" bg-" + color + "-400");
    }
  } else {
    if (cellid === "6") {
      // normal cell
      cellObject = _.cloneDeep(Constants["cell_obj"]);
    } else if (cellid === "5") {
      // safe cell
      cellObject = _.cloneDeep(Constants["safe_cell_obj"]);
    }
  }
  // fill req. data in cell_obj
  cellObject.pos.x = i;
  cellObject.pos.y = j;

  // return cell_obj.
  return cellObject;
}
