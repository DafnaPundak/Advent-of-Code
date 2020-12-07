// const fs = require("fs");

// let data = fs
//   .readFileSync(
//     "/Users/Dafi/Documents/code/Advent of Code/2020/day-2/input.txt",
//     "utf8"
//   )
//   .toString()
//   .split("\n")
//   .map((s) => s.replace(/\r$/, ""))
//   .filter((s) => s.length > 0);
// console.log(data);

const inputToArray = function (n) {
  let numValid = 0;

  for (let k = 0; k < n.length; k++) {
    let array = n[k].split("");
    let copyArray = array;
    let arrayToReturn = [];
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === " ") {
        let toPush = copyArray.slice(0, i);
        newArray = array.slice(i);
        arrayToReturn.push(toPush);
        // let numValid = 0;

        for (let j = 1; j < newArray.length; j++) {
          if (newArray[j] === " ") {
            let toPush2 = newArray.slice(0, j);
            let rest = newArray.slice(j, newArray.length);
            arrayToReturn.push(toPush2, rest);
            let x = arrayToReturn[0];
            let y = arrayToReturn[1][1];
            let z = arrayToReturn[2];
            let min = 0;
            if (x[1] != "-") {
              min = Number([x[0], x[1]].join(""));
            } else if (x[1] == "-") {
              min = Number(x[0]);
            }
            let max = 0;
            if (x[x.length - 2] != "-") {
              max = Number([x[x.length - 2], x[x.length - 1]].join(""));
            } else if (x[x.length - 2] == "-") {
              max = Number(x[x.length - 1]);
            }
            let sumY = 0;
            // let valid = Boolean(true);
            // let numValid = 0;
            for (let i = 0; i < z.length; i++) {
              if (z[i] == y) {
                sumY++;
              }
            }
            if (sumY <= max && sumY >= min) {
              numValid++;
              // return numValid;
            } else {
              // return !valid;
            }
          }
        }
        // return numValid;
      }
    }
  }
  return numValid;
};

module.exports = inputToArray;
