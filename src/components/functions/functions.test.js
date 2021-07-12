import validateFen from "./validateFen";
import rotateMatrix from "./rotateMatrix";

test("validateFen", () => {
  expect(
    validateFen("r00r00r00r06/g00g24g00g06/y00y00y00y35/b00b00b00b00 r 4")
  ).toBe(true);
  expect(validateFen("rrrr/g0g24g0g6/y0y0y0y35/b0b0b0b0 4")).toBe(false);
});

test("rotateMatrix", () => {
  // prettier-ignore
  let red_path = [
    [null, null, null, null, null,    9,   10,   11, null, null, null, null, null],
    [null, 'p1', null, 'p2', null,    8, null,   12, null, null, null, null, null],
    [null, null, null, null, null,    7, null,   13, null, null, null, null, null],
    [null, 'p3', null, 'p4', null,    6, null,   14, null, null, null, null, null],
    [null, null, null, null, null,    5, null,   15, null, null, null, null, null],
    [null,    1,    2,    3,    4, null, null, null,   16,   17,   18,   19,   20],
    [  43,   44,   45,   46,   47,   48, null, null, null, null, null, null,   21],
    [  42,   41,   40,   39,   38, null, null, null,   26,   25,   24,   23,   22],
    [null, null, null, null, null,   37, null,   27, null, null, null, null, null],
    [null, null, null, null, null,   36, null,   28, null, null, null, null, null],
    [null, null, null, null, null,   35, null,   29, null, null, null, null, null],
    [null, null, null, null, null,   34, null,   30, null, null, null, null, null],
    [null, null, null, null, null,   33,   32,   31, null, null, null, null, null], 
  ]

  // prettier-ignore
  let yellow_path = [
    [null, null, null, null, null,   20,   21,   22, null, null, null, null, null],
    [null, null, null, null, null,   19, null,   23, null, null, null, null, null],
    [null, null, null, null, null,   18, null,   24, null, null, null, null, null],
    [null, null, null, null, null,   17, null,   25, null, null, null, null, null],
    [null, null, null, null, null,   16, null,   26, null, null, null, null, null],
    [  11,   12,   13,   14,   15, null, null, null,   27,   28,   29,   30,   31],
    [  10, null, null, null, null, null, null, null, null, null, null, null,   32],
    [   9,    8,    7,    6,    5, null,   48, null,   37,   36,   35,   34,   33],
    [null, null, null, null, null,    4,   47,   38, null, null, null, null, null],
    [null, 'p1', null, 'p2', null,    3,   46,   39, null, null, null, null, null],
    [null, null, null, null, null,    2,   45,   40, null, null, null, null, null],
    [null, 'p3', null, 'p4', null,    1,   44,   41, null, null, null, null, null],
    [null, null, null, null, null, null,   43,   42, null, null, null, null, null], 
  ]

  expect(rotateMatrix(13, red_path)).toEqual(yellow_path);
  expect(red_path).toEqual(red_path);
});
