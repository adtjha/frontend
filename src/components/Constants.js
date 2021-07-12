import rotateMatrix from "./functions/rotateMatrix";

const path = 6,
  safe = 5,
  red = 1,
  green = 2,
  yellow = 3,
  blue = 4,
  piece = 8;

// prettier-ignore
const DEFAULT_BOARD_LAYOUT = [
    ['0',  '0', '0',  '0', '0', '6', '6', '6', '0',  '0', '0',  '0', '0'],
    ['0', 'r1', '0', 'r2', '0', '6', '2', '2', '0', 'g1', '0', 'g2', '0'],
    ['0',  '0', '0',  '0', '0', '5', '2', '6', '0',  '0', '0',  '0', '0'],
    ['0', 'r3', '0', 'r4', '0', '6', '2', '6', '0', 'g3', '0', 'g4', '0'],
    ['0',  '0', '0',  '0', '0', '6', '2', '6', '0',  '0', '0',  '0', '0'],
    ['6',  '1', '6',  '6', '6', '0', '2', '0', '6',  '6', '5',  '6', '6'],
    ['6',  '1', '1',  '1', '1', '1', '0', '4', '4',  '4', '4',  '4', '6'],
    ['6',  '6', '5',  '6', '6', '0', '3', '0', '6',  '6', '6',  '4', '6'],
    ['0',  '0', '0',  '0', '0', '6', '3', '6', '0',  '0', '0',  '0', '0'],
    ['0', 'y1', '0', 'y2', '0', '6', '3', '6', '0', 'b1', '0', 'b3', '0'],
    ['0',  '0', '0',  '0', '0', '6', '3', '5', '0',  '0', '0',  '0', '0'],
    ['0', 'y3', '0', 'y4', '0', '3', '3', '6', '0', 'b3', '0', 'b4', '0'],
    ['0',  '0', '0',  '0', '0', '6', '6', '6', '0',  '0', '0',  '0', '0'],
]

// prettier-ignore
const LOCATION_BOARD_LAYOUT =  [
  ['aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am'],
  ['ba', 'bb', 'bc', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bk', 'bl', 'bm'],
  ['ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'cg', 'ch', 'ci', 'cj', 'ck', 'cl', 'cm'],
  ['da', 'db', 'dc', 'dd', 'de', 'df', 'dg', 'dh', 'di', 'dj', 'dk', 'dl', 'dm'],
  ['ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'eg', 'eh', 'ei', 'ej', 'ek', 'el', 'em'],
  ['fa', 'fb', 'fc', 'fd', 'fe', 'ff', 'fg', 'fh', 'fi', 'fj', 'fk', 'fl', 'fm'],
  ['ga', 'gb', 'gc', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gj', 'gk', 'gl', 'gm'],
  ['ha', 'hb', 'hc', 'hd', 'he', 'hf', 'hg', 'hh', 'hi', 'hj', 'hk', 'hl', 'hm'],
  ['ia', 'ib', 'ic', 'id', 'ie', 'if', 'ig', 'ih', 'ii', 'ij', 'ik', 'il', 'im'],
  ['ja', 'jb', 'jc', 'jd', 'je', 'jf', 'jg', 'jh', 'ji', 'jj', 'jk', 'jl', 'jm'],
  ['ka', 'kb', 'kc', 'kd', 'ke', 'kf', 'kg', 'kh', 'ki', 'kj', 'kk', 'kl', 'km'],
  ['la', 'lb', 'lc', 'ld', 'le', 'lf', 'lg', 'lh', 'li', 'lj', 'lk', 'll', 'lm'],
  ['ma', 'mb', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mi', 'mj', 'mk', 'ml', 'mm']
]

// prettier-ignore
const RED_PATH = [
  [null, null, null, null, null,    9,   10,   11, null, null, null, null, null],
  [null, 'r1', null, 'r2', null,    8, null,   12, null, null, null, null, null],
  [null, null, null, null, null,    7, null,   13, null, null, null, null, null],
  [null, 'r3', null, 'r4', null,    6, null,   14, null, null, null, null, null],
  [null, null, null, null, null,    5, null,   15, null, null, null, null, null],
  [null,    1,    2,    3,    4, null, null, null,   16,   17,   18,   19,   20],
  [  43,   44,   45,   46,   48,   49, null, null, null, null, null, null,   21],
  [  42,   41,   40,   39,   38, null, null, null,   26,   25,   24,   23,   22],
  [null, null, null, null, null,   37, null,   27, null, null, null, null, null],
  [null, null, null, null, null,   36, null,   28, null, null, null, null, null],
  [null, null, null, null, null,   35, null,   29, null, null, null, null, null],
  [null, null, null, null, null,   34, null,   30, null, null, null, null, null],
  [null, null, null, null, null,   33,   32,   31, null, null, null, null, null],
];

// prettier-ignore
const GREEN_PATH = [
  [null, null, null, null, null,   42,   43, null, null, null, null, null, null],
  [null, null, null, null, null,   41,   44,    1, null, 'g1', null, 'g2', null],
  [null, null, null, null, null,   40,   45,    2, null, null, null, null, null],
  [null, null, null, null, null,   39,   46,    3, null, 'g3', null, 'g4', null],
  [null, null, null, null, null,   38,   47,    4, null, null, null, null, null],
  [  33,   34,   35,   36,   37, null,   48, null,    5,    6,    7,    8,    9],
  [  32, null, null, null, null, null, null, null, null, null, null, null,   10],
  [  31,   30,   29,   28,   27, null, null, null,   15,   14,   13,   12,   11],
  [null, null, null, null, null,   26, null,   16, null, null, null, null, null],
  [null, null, null, null, null,   25, null,   17, null, null, null, null, null],
  [null, null, null, null, null,   24, null,   18, null, null, null, null, null],
  [null, null, null, null, null,   23, null,   19, null, null, null, null, null],
  [null, null, null, null, null,   22,   21,   20, null, null, null, null, null], 
];

// prettier-ignore
const YELLOW_PATH = [
  [null, null, null, null, null,   20,   21,   22, null, null, null, null, null],
  [null, null, null, null, null,   19, null,   23, null, null, null, null, null],
  [null, null, null, null, null,   18, null,   24, null, null, null, null, null],
  [null, null, null, null, null,   17, null,   25, null, null, null, null, null],
  [null, null, null, null, null,   16, null,   26, null, null, null, null, null],
  [  11,   12,   13,   14,   15, null, null, null,   27,   28,   29,   30,   31],
  [  10, null, null, null, null, null, null, null, null, null, null, null,   32],
  [   9,    8,    7,    6,    5, null,   48, null,   37,   36,   35,   34,   33],
  [null, null, null, null, null,    4,   47,   38, null, null, null, null, null],
  [null, 'y1', null, 'y2', null,    3,   46,   39, null, null, null, null, null],
  [null, null, null, null, null,    2,   45,   40, null, null, null, null, null],
  [null, 'y3', null, 'y4', null,    1,   44,   41, null, null, null, null, null],
  [null, null, null, null, null, null,   43,   42, null, null, null, null, null], 
];

// prettier-ignore
const BLUE_PATH = [
  [null, null, null, null, null,   31,   32,   33, null, null, null, null, null],
  [null, null, null, null, null,   30, null,   34, null, null, null, null, null],
  [null, null, null, null, null,   29, null,   35, null, null, null, null, null],
  [null, null, null, null, null,   28, null,   36, null, null, null, null, null],
  [null, null, null, null, null,   27, null,   37, null, null, null, null, null],
  [  22,   23,   24,   25,   26, null, null, null,   38,   39,   40,   41,   42],
  [  21, null, null, null, null, null, null,   48,   47,   46,   45,   44,   43],
  [  20,   19,   18,   17,   16, null, null, null,    4,    3,    2,    1, null],
  [null, null, null, null, null,   15, null,    5, null, null, null, null, null],
  [null, null, null, null, null,   14, null,    6, null, 'b1', null, 'b2', null],
  [null, null, null, null, null,   13, null,    7, null, null, null, null, null],
  [null, null, null, null, null,   12, null,    8, null, 'b3', null, 'b4', null],
  [null, null, null, null, null,   11,   10,    9, null, null, null, null, null], 
];

const Constants = {
  DEFAULT_BOARD_LAYOUT,
  LOCATION_BOARD_LAYOUT,
  RED_PATH,
  GREEN_PATH,
  YELLOW_PATH,
  BLUE_PATH,
  path,
  safe,
  red,
  green,
  yellow,
  blue,
  piece,
};

export default Constants;
