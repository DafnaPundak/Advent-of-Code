const fs = require("fs");

let data = fs
  .readFileSync(
    "/Users/Dafi/Documents/code/Advent of Code/2020/day-3/input.txt",
    "utf8"
  )
  .toString()
  .split("\n")
  .map((s) => s.replace(/\r$/, ""))
  .filter((s) => s.length > 0)
  .map((r) => r.concat(...Array.from({ length: 100 }, () => r)));

const treesNum = function (data, right, down) {
  let stepsRight = 1;
  let rowCheck = 0;
  let trees = 0;
  for (let row = down; row < data.length; row += down) {
    stepsRight = stepsRight + right;

    if (data[row][stepsRight - 1] == "#") {
      trees++;
    }

    rowCheck++;
  }

  //   console.log(stepsRight)
  //   console.log(rowCheck)
  //   console.log(trees);
  return trees;
};

console.log(
  treesNum(data, 1, 1) *
    treesNum(data, 3, 1) *
    treesNum(data, 5, 1) *
    treesNum(data, 7, 1) *
    treesNum(data, 1, 2)
);
