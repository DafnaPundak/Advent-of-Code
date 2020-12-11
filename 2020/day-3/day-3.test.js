const treesNum = require("./day-3");

// test("count how many #=trees in the input", () => {
//   expect(treesNum(".....#.##......#..##..........#")).toEqual(7);
// });

// test("count how many #=trees in the input", () => {
//   expect(
//     treesNum([
//       ".....#.##......#..##..........#",
//       "##.#.##..#............##....#..",
//     ])
//   ).toEqual(7 + 9);
// });

test("", () => {
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
    .map((r) => [r])

  expect(treesNum(data)).toEqual(data);
});
