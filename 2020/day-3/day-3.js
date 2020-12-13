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
  .map((r) => r.concat(...Array.from({ length: 31 }, () => r)));

const treesNum = function (data) {
  let stepsRight = 1;
  let rowCheck = 0;
  let trees = 0;
  for (let row = 1; row < data.length; row++) {
    stepsRight = stepsRight + 3;

    if (data[row][stepsRight - 1] == "#") {
      trees++;
    }

    rowCheck++;
  }

  console.log(trees);
  // return trees;
};

treesNum(data);
