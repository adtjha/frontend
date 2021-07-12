import _ from "lodash";

export default function rotateMatrix(N, matrix) {
  let mat = _.cloneDeep(matrix);

  // Consider all squares one by one
  for (let x = 0; x < N / 2; x++) {
    // Consider elements in group
    // of 4 in current square
    for (let y = x; y < N - x - 1; y++) {
      // Store current cell in
      // temp variable
      let temp = mat[x][y];
      // Move values from right to top
      mat[x][y] = mat[y][N - 1 - x];
      // Move values from bottom to right
      mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];
      // Move values from left to bottom
      mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];
      // Assign temp to left
      mat[N - 1 - y][x] = temp;
    }
  }
  return mat;
}
