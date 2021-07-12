import _ from "lodash";

export default function extractObject(fen) {
  const [pattern, currentPlayer, dice] = fen.split(" ");
  var [red, green, yellow, blue] = pattern.split("/");
  red = red.split("r");
  green = green.split("g");
  yellow = yellow.split("y");
  blue = blue.split("b");

  [red, green, yellow, blue].forEach((e) => {
    e.shift();
  });

  _.forIn({ red: red, green: green, yellow: yellow, blue: blue }, (v, k) => {
    for (let i = 0; i < v.length; i++) {
      if (v[i] === "0") {
        var letter = k.split("")[0];
        v[i] = letter.concat(i + 1);
      } else {
        v[i] = parseInt(v[i])
      }
    }
  });

  // console.log({ red: red, green: green, yellow: yellow, blue: blue });

  return {
    red: red,
    green: green,
    yellow: yellow,
    blue: blue,
    currentPlayer: currentPlayer,
    dice: dice,
  };
}
