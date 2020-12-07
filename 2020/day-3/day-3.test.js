const treesNum = require("./day-3");

test("count how many #=trees in the input", () => {
  expect(treesNum(".....#.##......#..##..........#")).toEqual(7);
});

test("count how many #=trees in the input", () => {
  expect(
    treesNum([
      ".....#.##......#..##..........#",
      "##.#.##..#............##....#..",
    ])
  ).toEqual(7 + 9);
});
