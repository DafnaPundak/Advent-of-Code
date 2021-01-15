const fs = require("fs");

let data = fs
  .readFileSync(
    "/Users/Dafi/Documents/code/Advent of Code/2020/day-5/input.txt",
    "utf8"
  )
  .split("\n")
  .map((s) => s.replace(/\r$/, ""));

const seatIdFunction = function (seatsArray) {
  const front = function (row) {
    const newRowArray = row.splice(row.length / 2, row.length - 1);
    return newRowArray;
  };

  const back = function (row) {
    const newRowArray = row.splice(0, row.length / 2);
    return newRowArray;
  };

  const left = function (column) {
    const newColumnArray = column.splice(column.length / 2, column.length - 1);
    return newColumnArray;
  };

  const right = function (column) {
    const newColumnArray = column.splice(0, column.length / 2);
    return newColumnArray;
  };

  let seatIdArray = [];
  for (let seat of seatsArray) {
    let row = Array.from(Array(128).keys());
    let column = Array.from(Array(8).keys());
    let seatId = 0;
    for (let i = 0; i < 7; i++) {
      if (seat[i] === "F") {
        front(row);
      } else if (seat[i] === "B") {
        back(row);
      }
    }

    for (let i = 7; i < 10; i++) {
      if (seat[i] === "L") {
        left(column);
      } else if (seat[i] === "R") {
        right(column);
      }
    }
    seatId = Number(row) * 8 + Number(column);
    seatIdArray.push(seatId);
  }
  return seatIdArray;
};

const maxIdFunction = function (data) {
  const seatIdArray = seatIdFunction(data);
  const maxId = Math.max(...seatIdArray);
  return maxId;
};

// console.log(maxIdFunction(data));

exports.seatIdFunction = seatIdFunction;
