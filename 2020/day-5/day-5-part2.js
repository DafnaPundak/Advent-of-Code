const fs = require("fs");
const day_5 = require("./day-5");

let data = fs
  .readFileSync(
    "/Users/Dafi/Documents/code/Advent of Code/2020/day-5/input.txt",
    "utf8"
  )
  .split("\n")
  .map((s) => s.replace(/\r$/, ""));

const sortFunction = function (array) {
  const sortedArray = day_5.seatIdFunction(array).sort(function (a, b) {
    return a - b;
  });

  let missingArray = [];
  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] - sortedArray[i - 1] != 1) {
      missingArray.push(sortedArray[i] - 1);
    }
  }
  return missingArray;
};

console.log(sortFunction(data));
