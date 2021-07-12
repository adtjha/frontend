
export default function validateFen(fen) {
  const [pattern, currentPlayer, dice] = fen.split(' ');
  var [red, green, yellow, blue] = pattern.split('/');
  red = red.split('r');
  green = green.split('g');
  yellow = yellow.split('y');
  blue = blue.split('b');

  [red, green, yellow, blue].forEach(e => {
    e.shift();
  });

  // Validate Fen String.
  var players = [red, green, yellow, blue];
  var checks = [];

  // Validating each player's piece
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    // each players positions 
    checks.push(player.length === 4);
    // player's piece position should be in range of 0 and 49
    const res = player.map(e => {
      return (e >= 0 && e < 49);
    })
    checks.push(...res);
  }

  // dice should be in range of 0 - 6 
  checks.push(dice > 0 && dice < 7);

  // current player should be a single character
  checks.push(currentPlayer === 'r' || currentPlayer === 'g' || currentPlayer === 'y' || currentPlayer === 'b');

  let result = undefined
  
  checks.forEach(e => {
    if (!e) result=e
  })
  
  return result===undefined?true:false;
}

/*
(\w{3}){4} - find players location


*/