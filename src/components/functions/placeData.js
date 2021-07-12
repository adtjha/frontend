import Constants from "../Constants";
import _ from "lodash";

export default function placeData(color, colorArray, board) {
  // 'r'
  // const n = color[0];

  //  traverse rows
  for (let i = 0; i < board.length; i++) {
    // traverse cells column-wise
    for (let j = 0; j < board[i].length; j++) {
      // find specific piece
      colorArray.forEach((e, i) => {
        // found piece
        // move piece if not on 0, else leave as it is
        // find location to move
        var [x, y] = locate(e, color);

        // console.log(e, e.split('')[1], colorArray,
        //   !(board[x][y] in ["0", "1", "2", "3", "4", "5", "6"]), board[x][y]
        // );
        // location has other pieces as well,
        // if (!(board[x][y] in ["0", "1", "2", "3", "4", "5", "6"])) {
        // place the piece with all other
        // board[x][y] = board[i][j];
        // board[i][j] = "0";
        // } else {
        // place the piece, if no other
        board[x][y] = color[0].concat(i+1);
        // }
      });
    }
  }
  // return edited board.
  return board;
}

// find location piece to be on. and return
function locate(num, color) {
  const pathName = color.toUpperCase() + "_PATH";
  const path = _.cloneDeep(Constants[pathName]);

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
