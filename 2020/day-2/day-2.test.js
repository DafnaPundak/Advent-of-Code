const countValid = require("./day-2");

test("", () => {
  expect(countValid(["2-9 c: ccccccccc"])).toEqual(1);
});

test("", () => {
  expect(countValid(["1-3 b: cdefg"])).toEqual(0);
});

test("", () => {
  expect(countValid(["1-3 a: abcde"])).toEqual(1);
});

test("", () => {
  expect(countValid(["1-9 x: xwjgxtmrzxzmkx", "4-6 r: rrrkrgr"])).toEqual(2);
});

test("", () => {
  expect(countValid(["15-16 s: bsshsszslssssslqdssss"])).toEqual(0);
});

test("", () => {
  expect(
    countValid([
      "1-9 x: xwjgxtmrzxzmkx",
      "4-6 r: rrrkrgr",
      "4-5 v: vvfvvvn",
      "5-16 1-9 x: xwjgxtmrzxzmkx",
      "4-6 r: rrrkrgr",
      "4-5 v: vvfvvvn",
      "5-16 m: pxmrtmbmqmcldmmm",
      "15-16 s: bsshsszslssssslqdsss",
      "10-12 g: gggggggggzgvg",
      "2-7 n: dntnrng",
      "11-14 j: xrjflbmjszzjbjjh",
      "2-6 r: frxrrrfjnmr",
      "6-7 h: hplhgcsphh",
      "4-5 w: wwwwz",
      "1-6 g: ggdggnggg",
      "3-4 c: cccc",
      "5-8 k: kjgmkkfwxkwqkkgfnv",
      "14-15 h: xpwhdjhhjhrdjkhfh",
      "6-7 g: vgggggdhgsp",
      "1-3 r: rtdcrthphrkzxh",
      "15-16 j: jjjjjjstjjjjhjjjjj",
      "8-10 k: kkkkpkkqkv",
      "1-4 s: sssssj",
      "2-3 d: hdbmbpswddwkkr",
      "6-7 s: ssscssnss",
      "8-9 z: zzzzzzzftz",
      "7-8 t: glwvkgtn",
      "3-10 n: nnnnnnnnnnn",
    ])
  ).toEqual(18);
});

test("", () => {
  const fs = require("fs");

  let data = fs
    .readFileSync(
      "/Users/Dafi/Documents/code/Advent of Code/2020/day-2/input.txt",
      "utf8"
    )
    .toString()
    .split("\n")
    .map((s) => s.replace(/\r$/, ""))
    .filter((s) => s.length > 0);

  expect(countValid(data)).toEqual(640);
});
