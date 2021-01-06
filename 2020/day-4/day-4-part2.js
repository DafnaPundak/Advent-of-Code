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
  let finalArray = [];
  for (let passport of newArray) {
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

    finalArray.push(newPassport);
  }
  return finalArray;
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
  let arrayValidHgt = [];
  for (let passport of array) {
    const height = passport[passport.indexOf("hgt") + 1];
    if (height[height.length - 1] === "m") {
      const number = Number(height.split("cm")[0]);
      if (number >= 150 && number <= 193) {
        arrayValidHgt.push(passport);
      }
    } else if (height[height.length - 1] === "n") {
      const number = Number(height.split("in")[0]);
      if (number >= 59 && number <= 76) {
        arrayValidHgt.push(passport);
      }
    }
  }

  let arrayValidHgtandHcl = [];
  for (let passport of arrayValidHgt) {
    const hairColor = passport[passport.indexOf("hcl") + 1];
    if (hairColor[0] === "#") {
      if (hairColor.length === 7) {
        const hairCheck = hairColor.substring(1);
        for (let character in hairCheck) {
          if (
            character != "a" ||
            character != "b" ||
            character != "c" ||
            character != "d" ||
            character != "e" ||
            character != "f" ||
            character != "0" ||
            character != "1" ||
            character != "2" ||
            character != "3" ||
            character != "4" ||
            character != "5" ||
            character != "6" ||
            character != "7" ||
            character != "8" ||
            character != "9"
          ) {
            continue;
          }
        }
        arrayValidHgtandHcl.push(passport);
      }
    }
  }

  let arrayValidHgtandHclandEcl = [];
  for (let passport of arrayValidHgtandHcl) {
    const eyeColor = passport[passport.indexOf("ecl") + 1];
    if (
      eyeColor === "amb" ||
      eyeColor === "blu" ||
      eyeColor === "brn" ||
      eyeColor === "gry" ||
      eyeColor === "grn" ||
      eyeColor === "hzl" ||
      eyeColor === "oth"
    ) {
      arrayValidHgtandHclandEcl.push(passport);
    }
  }

  for (let passport of arrayValidHgtandHclandEcl) {
    passport.includes("byr") &&
    passport[passport.indexOf("byr") + 1] >= 1920 &&
    passport[passport.indexOf("byr") + 1] <= 2002 &&
    passport.includes("iyr") &&
    passport[passport.indexOf("iyr") + 1] >= 2010 &&
    passport[passport.indexOf("iyr") + 1] <= 2020 &&
    passport.includes("eyr") &&
    passport[passport.indexOf("eyr") + 1] >= 2020 &&
    passport[passport.indexOf("eyr") + 1] <= 2030 &&
    passport.includes("pid") &&
    passport[passport.indexOf("pid") + 1].length === 9
      ? numValid++
      : null;
  }
  return numValid;
};

console.log(countValid(data2));
