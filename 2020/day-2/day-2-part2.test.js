const countValid = require("./day-2-part2")

// test("", ()=> {
//     expect(countValid("1-3 a: abcde")).toEqual(1)
// })

// test("", ()=> {
//     expect(countValid("1-2 b: abcde")).toEqual(1)
// })

test ("", ()=> {
    expect(countValid(["1-9 x: xwjgxtmrzxzmkx", "4-6 r: rrrkrgr"])).toEqual(1)
})

test("", () => {
    expect(
      countValid([
        "1-9 x: xwjgxtmrzxzmkx",
        "4-6 r: rrrkrgr",
        "4-5 v: vvfvvvn",
        "5-16 x: xwjgxtmrzxzmkx",
        "5-16 m: pxmrtmbmqmcldmmm",
        "15-16 s: bsshsszslssssslqdsss",
        "10-12 g: gggggggggzgvg",
        "2-7 n: dntnrng",
      ])
    ).toEqual(4);
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
  
    expect(countValid(data)).toEqual(472);
  });