import extractObject from "./extractObject";
import validateFen from "./validateFen";
import placeData from "./placeData";
import _ from "lodash";

export default function create2Darray(fen) {
  // create 2D Array Layout
  // if (validateFen(fen)) {
  //   return new SyntaxError("FEN STRING IS NOT VALID");
  // }

  const data = extractObject(fen);

  // prettier-ignore
  const template2DArray = [
    ['0',  '0', '0',  '0', '0', '6', '6', '6', '0',  '0', '0',  '0', '0'],
    ['0',  '0', '0',  '0', '0', '6', '2', '5', '0',  '0', '0',  '0', '0'],
    ['0',  '0', '0',  '0', '0', '5', '2', '6', '0',  '0', '0',  '0', '0'],
    ['0',  '0', '0',  '0', '0', '6', '2', '6', '0',  '0', '0',  '0', '0'],
    ['0',  '0', '0',  '0', '0', '6', '2', '6', '0',  '0', '0',  '0', '0'],
    ['6',  '5', '6',  '6', '6', '0', '2', '0', '6',  '6', '5',  '6', '6'],
    ['6',  '1', '1',  '1', '1', '1', '0', '4', '4',  '4', '4',  '4', '6'],
    ['6',  '6', '5',  '6', '6', '0', '3', '0', '6',  '6', '6',  '5', '6'],
    ['0',  '0', '0',  '0', '0', '6', '3', '6', '0',  '0', '0',  '0', '0'],
    ['0',  '0', '0',  '0', '0', '6', '3', '6', '0',  '0', '0',  '0', '0'],
    ['0',  '0', '0',  '0', '0', '6', '3', '5', '0',  '0', '0',  '0', '0'],
    ['0',  '0', '0',  '0', '0', '5', '3', '6', '0',  '0', '0',  '0', '0'],
    ['0',  '0', '0',  '0', '0', '6', '6', '6', '0',  '0', '0',  '0', '0'],
];

  // red player piece placement
  const colors = ["red", "green", "yellow", "blue"];
  var board = _.cloneDeep(template2DArray);
  var updated2DArray = [];

  _.forIn(data, (v, k) => {
    if (colors.includes(k)) {
      updated2DArray = placeData(k, v, _.cloneDeep(board));
      board = _.cloneDeep(updated2DArray);
    }
  });

  return updated2DArray;
}
