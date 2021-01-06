const fs = require("fs");

const emptyLineCut = function (array) {
  let copyArray = [...array];
  let newArray = [];
  let indexOfCopy = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "") {
      newArray.push(copyArray.slice(indexOfCopy, i));
      indexOfCopy = i + 1;
    }
  }
  newArray.push(copyArray.slice(indexOfCopy));

  return newArray;
};

let data = fs
  .readFileSync(
    "/Users/Dafi/Documents/code/Advent of Code/2020/day-4/input.txt",
    "utf8"
  )
  .toString()
  .split("\n")
  .map((s) => s.replace(/\r$/, ""));

let data2 = emptyLineCut(data);

const countValid = function (array) {
  numValid = 0;
  for (let passport of array) {
    let newPassport = passport
      .join()
      .split(":")
      .join()
      .split(",")
      .join()
      .split(/(\s+)/)
      .filter((e) => e.trim().length > 0)
      .join()
      .split(",");

    newPassport.includes("eyr") &&
    newPassport.includes("byr") &&
    newPassport.includes("iyr") &&
    newPassport.includes("hgt") &&
    newPassport.includes("hcl") &&
    newPassport.includes("ecl") &&
    newPassport.includes("pid")
      ? numValid++
      : null;
  }
  return numValid;
};

console.log(countValid(data2));
